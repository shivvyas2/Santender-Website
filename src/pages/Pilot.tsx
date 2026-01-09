import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import HeroBackground from "@/components/HeroBackground";
import { 
  TrendingUp, 
  DollarSign, 
  Shield, 
  Plug, 
  BarChart3, 
  Layers, 
  CheckCircle2,
  Download,
  FileCheck,
  Lock,
  ArrowRight,
  Info
} from "lucide-react";
import { z } from "zod";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

// Form validation schema
const pilotFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  title: z.string().trim().min(1, "Title is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  smbCount: z.string().optional(),
  consent: z.boolean().refine(val => val === true, "You must agree to continue")
});

type PilotFormData = z.infer<typeof pilotFormSchema>;

function Pilot() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PilotFormData>({
    name: "",
    title: "",
    company: "",
    email: "",
    phone: "",
    smbCount: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      pilotFormSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted",
        description: "We'll contact you within 24 hours to schedule your pilot review.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof PilotFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const containerClass = "mx-auto w-full px-5 md:px-[5vw]";
  const neutralCard = "bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]";

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroBackground>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-start gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1146F2] text-white text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Designed for Institutional Finance & Model-Risk Governance
              </div>

              <h1 className="text-[40px] md:text-[52px] lg:text-[72px] font-semibold mb-6 leading-[52px] md:leading-[64px] lg:leading-[85px] tracking-[-1.2px] md:tracking-[-2.16px] text-white">
                Launch a 90-Day Pilot of LUMIQ AI Business Credit Journey™
              </h1>

              <p className="text-lg text-white/90 mb-4 max-w-3xl leading-relaxed font-normal">
                Embed our API inside your Chase Business app, run live conversion lift tests, and generate measurable impact—within your risk framework.
              </p>

              <p className="text-base text-white/70 mb-8 max-w-2xl">
                Non-disruptive integration. Measurable results. Built on proven principles.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Button 
                  size="lg" 
                  variant="solver"
                  className="text-base md:text-lg gap-6"
                  onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Pilot Review
                  <div className="w-10 h-10 p-2.5 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-[#070707]" />
                  </div>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Pilot Brief
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span>+15–25% app-to-booked lift</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                  <Shield className="w-4 h-4 text-white" />
                  <span>100% audit trail coverage</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                  <Lock className="w-4 h-4 text-white" />
                  <span>ECOA/FCRA/GLBA compliant</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      {/* Benefits Snapshots */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">Proven Pilot Results</h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Measurable impact from day one, with full alignment to your risk and governance requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className={`${neutralCard} text-center h-full hover:border-primary/30 transition-all`}>
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-3">+15–25%</div>
                  <p className="text-lg font-semibold mb-2 text-[#070707] dark:text-white">App-to-Booked Lift</p>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70">Owned channel conversion increase</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className={`${neutralCard} text-center h-full hover:border-primary/30 transition-all`}>
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <DollarSign className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-3">-20%</div>
                  <p className="text-lg font-semibold mb-2 text-[#070707] dark:text-white">CAC Reduction</p>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70">vs. paid media acquisition</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className={`${neutralCard} text-center h-full hover:border-primary/30 transition-all`}>
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-3">100%</div>
                  <p className="text-lg font-semibold mb-2 text-[#070707] dark:text-white">Audit Trail</p>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70">Explainable models = Risk alignment</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 90-Day Timeline */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">Your 90-Day Pilot Journey</h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              A structured, measurable approach to validating Business Credit Journey inside your stack.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all`}>
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Plug className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#070707] dark:text-white">Week 0–2</h3>
                  <p className="text-base font-semibold mb-3 text-[#070707] dark:text-white">Onboarding & Sandbox Integration</p>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                    Connect credit signals (FICO, Intelliscore, FSR) in a secure sandbox environment. 
                    Validate data flows and configure risk parameters to match your underwriting standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all`}>
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#070707] dark:text-white">Week 3–8</h3>
                  <p className="text-base font-semibold mb-3 text-[#070707] dark:text-white">Live A/B Test</p>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                    Deploy to 50% of target cohort vs. control group. Track conversion lift, approval rate delta, 
                    loss rate, and time-to-decision across your SMB portfolio.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all`}>
                <CardContent className="pt-8 pb-8 px-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#070707] dark:text-white">Week 9–12</h3>
                  <p className="text-base font-semibold mb-3 text-[#070707] dark:text-white">Scale & Roll-out Decision</p>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                    Review results with your team. If KPIs are met, scale to broader SMB segments. 
                    Full documentation and model governance artifacts provided.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">How It Works</h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Four simple steps to embed Business Credit Journey into your digital banking experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TooltipProvider>
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all cursor-help`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">1</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-[#070707] dark:text-white">Connect Signals</h3>
                            <p className="text-sm text-[#070707]/70 dark:text-white/70">
                              Securely connect business + owner credit signals (FICO, Intelliscore, FSR)
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-[#070707]/50 dark:text-white/50 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">API integration with Experian and internal credit bureaus. All data encrypted in transit and at rest.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all cursor-help`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">2</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-[#070707] dark:text-white">Run Model</h3>
                            <p className="text-sm text-[#070707]/70 dark:text-white/70">
                              Run our model in your stack—aligned to your risk appetite
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-[#070707]/50 dark:text-white/50 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Pre-qualification engine uses your existing underwriting rules and score thresholds. No black-box AI.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all cursor-help`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">3</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-[#070707] dark:text-white">Route Offers</h3>
                            <p className="text-sm text-[#070707]/70 dark:text-white/70">
                              Route eligible SMBs to right products (Ink Business cards first)
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-[#070707]/50 dark:text-white/50 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">In-app nudges and pre-filled applications. One-tap conversion for pre-qualified customers.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className={`${neutralCard} h-full hover:border-primary/30 transition-all cursor-help`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-lg">4</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-2 text-[#070707] dark:text-white">Measure & Scale</h3>
                            <p className="text-sm text-[#070707]/70 dark:text-white/70">
                              Measure lift, track metrics, and scale based on results
                            </p>
                          </div>
                          <Info className="h-4 w-4 text-[#070707]/50 dark:text-white/50 flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Real-time dashboard with conversion funnels, approval rates, and portfolio health metrics.</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            </TooltipProvider>
          </div>
        </div>
      </section>

      {/* Governance Callout */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div {...fadeInUp}>
            <Card className={`${neutralCard} rounded-[32px]`}>
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 mb-4">
                    <Lock className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#070707] dark:text-white">Built with Model-Risk Governance in Mind</h2>
                  <p className="text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
                    Built with model-risk governance, audit-ready logs, and SBC compliance in mind.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1 text-[#070707] dark:text-white">ECOA/FCRA/GLBA Compliant</p>
                      <p className="text-sm text-[#070707]/70 dark:text-white/70">Full regulatory compliance built into every decision path</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1 text-[#070707] dark:text-white">100% Data Lineage & Decision Logging</p>
                      <p className="text-sm text-[#070707]/70 dark:text-white/70">Complete audit trail for model risk and compliance teams</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1 text-[#070707] dark:text-white">Parallel A/B Pilot—Non-Disruptive</p>
                      <p className="text-sm text-[#070707]/70 dark:text-white/70">Test safely alongside existing systems with zero downtime</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Repeat */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#070707] sticky top-20 z-10 backdrop-blur-sm border-b border-[#E4E7EC] dark:border-[#1D1D1D]">
        <div className={containerClass}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-primary font-medium mb-3">Limited slots available for Q1 integration</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                variant="solver"
                onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Pilot Review
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#070707] dark:border-white text-[#070707] dark:text-white hover:bg-primary/10 hover:border-primary/50">
                <Download className="mr-2 w-5 h-5" />
                Download Pilot Brief (PDF)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-Up Form */}
      <section id="pilot-form" className="py-12 md:py-24 bg-white dark:bg-[#070707] scroll-mt-32">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">Apply for the 90-Day Pilot Program</h2>
              <p className="text-lg text-[#070707]/70 dark:text-white/70">
                Join leading financial institutions in transforming SMB credit experiences
              </p>
            </div>

            {!isSubmitted ? (
              <Card className={`${neutralCard}`}>
                <CardContent className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#070707] dark:text-white">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Smith"
                          className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title" className="text-[#070707] dark:text-white">Title *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          placeholder="VP of Digital Banking"
                          className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-[#070707] dark:text-white">Company *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Financial Institution"
                        className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#070707] dark:text-white">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@bank.com"
                          className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#070707] dark:text-white">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 (555) 000-0000"
                          className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="smbCount" className="text-[#070707] dark:text-white">How many SMBs do you serve?</Label>
                      <Select 
                        value={formData.smbCount} 
                        onValueChange={(value) => handleInputChange('smbCount', value)}
                      >
                        <SelectTrigger className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-100k">Less than 100K</SelectItem>
                          <SelectItem value="100k-500k">100K - 500K</SelectItem>
                          <SelectItem value="500k-1m">500K - 1M</SelectItem>
                          <SelectItem value="1m-5m">1M - 5M</SelectItem>
                          <SelectItem value="more-than-5m">More than 5M</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-3 pt-4">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked)}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer text-[#070707] dark:text-white">
                        I understand this is a pilot program for evaluation purposes and agree to provide feedback on the integration experience.
                      </Label>
                    </div>

                    <div className="bg-white dark:bg-[#0F0F0F] p-4 rounded-lg border border-[#E4E7EC] dark:border-[#1C1C1C]">
                      <div className="flex items-start gap-2">
                        <FileCheck className="h-5 w-5 text-[#070707]/50 dark:text-white/50 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-[#070707]/70 dark:text-white/70">
                          <strong className="text-[#070707] dark:text-white">Privacy & Security:</strong> Data will be handled per SOC 2 / ISO 27001 controls. 
                          We never share your information with third parties.
                        </p>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      variant="solver"
                      className="w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Pilot Application"}
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className={`${neutralCard} rounded-[32px]`}>
                <CardContent className="p-12 text-center">
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-primary/10 mb-6">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#070707] dark:text-white">Application Received!</h3>
                  <p className="text-[#070707]/70 dark:text-white/70 mb-8 max-w-md mx-auto">
                    Thank you for your interest. Our team will review your application and contact you within 24 hours to schedule your pilot review session.
                  </p>
                  <div className="space-y-4">
                    <p className="text-sm font-medium text-[#070707] dark:text-white">Next Steps:</p>
                    <div className="grid gap-3 text-left max-w-md mx-auto">
                      <div className="flex items-start gap-3 text-sm">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">1</span>
                        </div>
                        <p className="text-[#070707]/70 dark:text-white/70">Pilot kickoff call within 3 business days</p>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">2</span>
                        </div>
                        <p className="text-[#070707]/70 dark:text-white/70">Technical integration review & sandbox setup</p>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-primary">3</span>
                        </div>
                        <p className="text-[#070707]/70 dark:text-white/70">90-day pilot launch with dedicated support</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#070707] border-t border-[#E4E7EC] dark:border-[#1D1D1D]">
        <div className={containerClass}>
          <motion.div {...fadeInUp} className="text-center">
            <p className="text-sm text-[#070707]/70 dark:text-white/70 mb-8">Trusted by forward-thinking financial institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-[#070707] dark:text-white" />
                <span className="font-semibold text-[#070707] dark:text-white">SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-8 w-8 text-[#070707] dark:text-white" />
                <span className="font-semibold text-[#070707] dark:text-white">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-8 w-8 text-[#070707] dark:text-white" />
                <span className="font-semibold text-[#070707] dark:text-white">ECOA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-8 w-8 text-[#070707] dark:text-white" />
                <span className="font-semibold text-[#070707] dark:text-white">Model Risk Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Pilot;
