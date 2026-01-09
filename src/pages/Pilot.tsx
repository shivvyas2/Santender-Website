import React, { useState } from "react";
import carLoanIcon from "@/assets/car-loan-icon.svg";
import smbBuildingIcon from "@/assets/smb-building-icon.svg";
import phase1Icon from "@/assets/phase-1-icon.svg";
import phase2Icon from "@/assets/phase-2-icon.svg";
import phase3Icon from "@/assets/phase-3-icon.svg";
import pilotBgImg from "@/assets/pilot-bg.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  TrendingUp, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Zap,
  Users,
  Building2,
  Target,
  Eye,
  CreditCard,
  RefreshCw,
  Globe,
  Lock,
  Database,
  FileCheck,
  BarChart3,
  Clock,
  Server,
  Key,
  Layers,
  TrendingDown,
  DollarSign,
  Compass,
  Activity,
  ExternalLink,
  BookOpen,
  Sparkles,
  Brain,
  Settings,
  ArrowUpRight,
  Quote
} from "lucide-react";
import { z } from "zod";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const pilotFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  title: z.string().trim().min(1, "Title is required"),
  company: z.string().trim().min(1, "Company is required"),
  email: z.string().trim().email("Invalid email address"),
  consent: z.boolean().refine(val => val === true, "Required")
});

type PilotFormData = z.infer<typeof pilotFormSchema>;

export default function Pilot() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PilotFormData>({
    name: "",
    title: "",
    company: "",
    email: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectionView, setProjectionView] = useState<'conservative' | 'modeled' | 'aggressive'>('modeled');
  const [showChart, setShowChart] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      pilotFormSchema.parse(formData);
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Application Submitted",
        description: "We'll contact you within 24 hours.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error",
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

  // Auto Loans: 3M+ Santander Consumer USA vehicle finance customers
  const autoLoansKPI = {
    conservative: {
      abandonment: "32%",
      appStart: "24%",
      conversion: "28%",
      revenue: "$14.2M",
      roi: "3.4×"
    },
    modeled: {
      abandonment: "41%",
      appStart: "31%",
      conversion: "36%",
      revenue: "$21.8M",
      roi: "4.7×"
    },
    aggressive: {
      abandonment: "52%",
      appStart: "42%",
      conversion: "47%",
      revenue: "$32.4M",
      roi: "6.2×"
    }
  };

  // SMB: ~400k SMB customers from 1.8M retail/commercial base
  const smbKPI = {
    conservative: {
      abandonment: "28%",
      appStart: "21%",
      conversion: "24%",
      revenue: "$8.6M",
      roi: "3.1×"
    },
    modeled: {
      abandonment: "38%",
      appStart: "28%",
      conversion: "33%",
      revenue: "$14.2M",
      roi: "4.4×"
    },
    aggressive: {
      abandonment: "48%",
      appStart: "38%",
      conversion: "44%",
      revenue: "$22.8M",
      roi: "5.8×"
    }
  };

  const currentAutoKPI = autoLoansKPI[projectionView];
  const currentSMBKPI = smbKPI[projectionView];

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pilotBgImg})` }}
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/75" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-[#EC0000]/10 text-[#EC0000] border-[#EC0000]/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
              SANTANDER PILOT PROGRAM
            </Badge>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[#2D2D2D] leading-tight font-serif px-2">
              Install the Credit Intelligence Layer in{" "}
              <span className="text-[#EC0000]">90 Days</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg text-[#666666] mb-3 sm:mb-4 max-w-3xl mx-auto font-sans px-2">
              Close Santander's structural gap. Capture revenue currently leaking to Chase, Capital One, AmEx, and Apple.
            </p>
            
            <p className="text-xs sm:text-sm text-[#666666] mb-6 sm:mb-8 max-w-2xl mx-auto font-sans px-2">
              Deploy a fully governed, risk-aligned credit intelligence layer directly inside the Santander App. 
              This pilot is designed to produce <span className="text-[#EC0000] font-medium">measurable revenue uplift within the first 60–90 days</span> of deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold rounded-full text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 touch-manipulation w-full sm:w-auto"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Why This Pilot Matters Now */}
      <section className="py-12 sm:py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-2">01 — WHY THIS PILOT MATTERS NOW</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4 font-serif">
              Santander is the only top-4 U.S. bank without consumer or business credit intelligence inside its mobile app.
            </h2>
            <p className="text-[#666666] max-w-3xl font-sans">
              Competitors now capture Santander's customers at the moment of credit intent—before Santander even sees the demand signal. 
              This pilot delivers instant structural correction with minimal lift from Santander teams.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-white border-2 border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-[#EC0000] mb-6 font-sans">The Pilot Instantly Enables Santander Customers To:</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Eye, text: "View real credit scores inside the app" },
                    { icon: Target, text: "Receive Santander-based prequalification" },
                    { icon: BarChart3, text: "Get product eligibility confidence bands" },
                    { icon: TrendingUp, text: "See predictive approval pathways" },
                    { icon: CreditCard, text: "Apply with 1-tap inside the app" },
                    { icon: RefreshCw, text: "Receive decline-recovery logic tied to Santander's rules" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#F7F7F7] border border-gray-200">
                      <item.icon className="h-5 w-5 text-[#EC0000] flex-shrink-0" />
                      <span className="text-sm text-[#2D2D2D] font-sans">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-[#EC0000]/5 border border-[#EC0000]/20">
                  <p className="text-sm text-[#EC0000] font-medium font-sans">
                    This pilot prevents further revenue leakage and positions Santander to reclaim lost ground — fast.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Pilot Scope */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-2">02 — PILOT SCOPE</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-2 font-serif">
              Dual-Platform Credit Intelligence
            </h2>
            <p className="text-[#666666] font-sans">Consumer + Business journeys deployed simultaneously.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consumer Scope */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-white border-2 border-[#EC0000]/20 overflow-hidden shadow-sm">
                <div className="p-4 bg-[#EC0000]/5 border-b border-[#EC0000]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EC0000] flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] font-sans">Consumer Pilot Scope</h3>
                      <p className="text-xs text-[#EC0000]">~75k–150k Santander Consumer customers</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-40 bg-[#F7F7F7] flex items-center justify-center border-b border-gray-200">
                  <p className="text-[#999999] text-sm font-sans">[Consumer Journey Mockup]</p>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-[#666666] mb-4 font-sans">Capabilities included:</p>
                  <ul className="space-y-2">
                    {[
                      "Real-time credit score surfacing",
                      "Santander-aligned prequalification for consumer cards",
                      "Eligibility Confidence Bands",
                      "Predictive card pathways",
                      "Instant Apply",
                      "Reason Codes + Recovery Guidance"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#666666] font-sans">
                        <CheckCircle2 className="h-4 w-4 text-[#EC0000] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Scope */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-white border-2 border-blue-200 overflow-hidden shadow-sm">
                <div className="p-4 bg-blue-50 border-b border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] font-sans">Business Pilot Scope</h3>
                      <p className="text-xs text-blue-600">~25k–50k SMB customers</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-40 bg-blue-50/50 flex items-center justify-center border-b border-blue-100">
                  <p className="text-[#999999] text-sm font-sans">[Business Journey Mockup]</p>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-[#666666] mb-4 font-sans">Capabilities included:</p>
                  <ul className="space-y-2">
                    {[
                      "Business Credit Score + Owner FICO blended view",
                      "Forecasted eligibility for Santander Business products",
                      "SMB Revenue + Spend Pattern Modeling",
                      "Combined PG / Business attribute scoring",
                      "Apply Now (Business Flow)"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#666666] font-sans">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8">
            <Card className="bg-[#EC0000] border-0">
              <CardContent className="p-6 text-center">
                <p className="text-white text-lg font-sans">
                  <span className="font-bold">Santander becomes the only major bank</span>{" "}
                  <span className="text-white/90">with a dual-platform credit intelligence layer for both Consumer + SMB.</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - 90-Day Implementation Timeline */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-2">03 — 90-DAY IMPLEMENTATION TIMELINE</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-2 font-serif">
              From Kickoff to Live Pilot
            </h2>
            <p className="text-[#666666] font-sans">Each row of the implementation is tappable to expand milestone details.</p>
          </motion.div>

          {/* Timeline Cards with Accordion */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Phase 1 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full border-0 bg-white shadow-sm overflow-hidden">
                <div className="h-2 bg-[#EC0000]" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#EC0000]/10 flex items-center justify-center">
                      <img src={phase1Icon} alt="Phase 1" className="h-7 w-7" style={{ filter: 'invert(16%) sepia(89%) saturate(6054%) hue-rotate(358deg) brightness(97%) contrast(113%)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] font-sans">Phase 1</h3>
                      <p className="text-xs text-[#EC0000] font-medium">Weeks 1–3</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#2D2D2D] mb-4 font-sans">Alignment & Integration</h4>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="load-rules" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-[#EC0000] py-2">
                        Load Santander rules
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Import and configure Santander's product eligibility criteria, risk thresholds, and decisioning parameters into the LumiqAI engine.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="api-sso" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-[#EC0000] py-2">
                        API & SSO integration
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Establish secure API connections and single sign-on integration with Santander's existing identity management systems (SCIM/SAML ready).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="architecture" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-[#EC0000] py-2">
                        Architecture approval
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Complete technical architecture review with Santander IT security and infrastructure teams.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="governance" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-[#EC0000] py-2">
                        Risk governance
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Obtain risk governance sign-off including compliance review, model risk management approval, and regulatory alignment.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phase 2 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full border-0 bg-white shadow-sm overflow-hidden">
                <div className="h-2 bg-orange-500" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <img src={phase2Icon} alt="Phase 2" className="h-7 w-7" style={{ filter: 'invert(57%) sepia(74%) saturate(1842%) hue-rotate(360deg) brightness(101%) contrast(105%)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] font-sans">Phase 2</h3>
                      <p className="text-xs text-orange-600 font-medium">Weeks 4–7</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#2D2D2D] mb-4 font-sans">Experience Layer & AI Eligibility</h4>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="eligibility" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-orange-500 py-2">
                        Deploy eligibility logic
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Enable the AI eligibility engine using Santander's published product criteria for cards, loans, and lines of credit.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="score-surfacing" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-orange-500 py-2">
                        Add score surfacing modules
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Deploy real-time credit score display, trend indicators, and confidence bands within the Santander app experience.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="journeys" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-orange-500 py-2">
                        Inject business + consumer journeys
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Build and deploy both consumer and SMB credit journeys with product recommendations and apply flows.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="decline-recovery" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-orange-500 py-2">
                        Setup decline-recovery flows
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Configure reason codes, improvement pathways, and recovery messaging tied to Santander's specific product requirements.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phase 3 */}
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full border-0 bg-white shadow-sm overflow-hidden">
                <div className="h-2 bg-green-500" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <img src={phase3Icon} alt="Phase 3" className="h-7 w-7" style={{ filter: 'invert(48%) sepia(79%) saturate(2476%) hue-rotate(118deg) brightness(95%) contrast(86%)' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2D2D2D] font-sans">Phase 3</h3>
                      <p className="text-xs text-green-600 font-medium">Weeks 8–12</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#2D2D2D] mb-4 font-sans">Controlled Live Pilot</h4>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="go-live" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-green-500 py-2">
                        Go live (limited cohorts)
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Launch to controlled consumer and SMB customer cohorts with full monitoring and support.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="track-kpis" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-green-500 py-2">
                        Track KPIs: CTR, prequal rate, app starts
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Monitor click-through rates, prequalification conversion, application starts, and funded outcomes in real-time.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="iterate" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-green-500 py-2">
                        Iterate from signal feedback
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Continuously optimize eligibility thresholds, messaging, and user flows based on performance signals.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="audit" className="border-gray-200">
                      <AccordionTrigger className="text-sm text-[#2D2D2D] hover:text-green-500 py-2">
                        Final readiness audit
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-[#666666]">
                        Complete full rollout readiness assessment including performance validation and scale-up recommendations.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Live Tracker Mock */}
          <motion.div {...fadeInUp}>
            <Card className="bg-white border-2 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-[#EC0000]" />
                    <h3 className="font-bold text-[#2D2D2D] font-sans">Live Tracker</h3>
                  </div>
                  <Badge className="bg-[#EC0000]/10 text-[#EC0000] border-[#EC0000]/20">
                    Pilot Progress
                  </Badge>
                </div>
                <div className="relative">
                  <div className="h-4 rounded-full bg-gray-200 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-[#EC0000] to-orange-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-[#666666] font-sans">
                    <span>Kickoff</span>
                    <span>Week 3</span>
                    <span>Week 7</span>
                    <span>Week 12</span>
                  </div>
                </div>
                <p className="text-center text-sm text-[#666666] mt-4 font-sans">
                  Santander rollout progress will be displayed here once the pilot starts.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Revenue Impact by Segment */}
      <section className="py-20 bg-gradient-to-b from-white via-[#FAFAFA] to-white overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <motion.div {...fadeInUp} className="mb-12 text-center max-w-4xl mx-auto">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-3">04 — REVENUE IMPACT BY SEGMENT</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-6 font-serif leading-tight">
              Revenue Impact by Segment
            </h2>
            <p className="text-[#666666] font-sans text-base md:text-lg max-w-3xl mx-auto">
              Precision-modeled revenue lift across auto & SMB lending segments — backed by Santander data. 
              All projections are live-modeled and ROI-vetted.
            </p>
            
            {/* Segment Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {(['conservative', 'modeled', 'aggressive'] as const).map((view) => {
                const icons = {
                  conservative: Shield,
                  modeled: Target,
                  aggressive: Zap
                };
                const Icon = icons[view];
                return (
                  <motion.button
                    key={view}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setProjectionView(view)}
                    className={`
                      flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300
                      ${projectionView === view 
                        ? "bg-[#2D2D2D] text-white shadow-lg shadow-black/20" 
                        : "bg-white text-[#666666] border border-gray-200 hover:border-[#EC0000]/30 hover:text-[#EC0000]"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    {view.charAt(0).toUpperCase() + view.slice(1)}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Auto Loans KPI Grid */}
          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-[#EC0000]/20 flex items-center justify-center shadow-sm">
                <img src={carLoanIcon} alt="Auto Loans" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D2D2D] font-sans">Auto Loans</h3>
                <p className="text-sm text-[#EC0000]">Santander Consumer USA • 3M+ vehicle finance customers</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: TrendingDown, value: currentAutoKPI.abandonment, label: "Abandonment Drop", sublabel: "Fewer abandoned applications", color: "text-[#EC0000]", hoverGlow: "group-hover:shadow-red-500/30" },
                { icon: ArrowUpRight, value: currentAutoKPI.appStart, label: "App-Start Increase", sublabel: "More apps started", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" },
                { icon: Target, value: currentAutoKPI.conversion, label: "Conversion Lift", sublabel: "Funded loan increase", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" },
                { icon: DollarSign, value: currentAutoKPI.revenue, label: "Net New Revenue", sublabel: "Year 1 incremental", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" },
                { icon: BarChart3, value: currentAutoKPI.roi, label: "ROI", sublabel: "Return on investment", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" }
              ].map((kpi, idx) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className={`
                    group relative bg-white border-2 border-[#EC0000]/10 overflow-hidden cursor-pointer
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${kpi.hoverGlow}
                  `}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EC0000] to-orange-500" />
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EC0000]/10 flex items-center justify-center">
                          <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
                        </div>
                      </div>
                      <motion.p 
                        key={`auto-${kpi.label}-${projectionView}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`text-3xl font-bold ${kpi.color} mb-2`}
                      >
                        {kpi.value}
                      </motion.p>
                      <p className="text-sm font-semibold text-[#2D2D2D] font-sans">{kpi.label}</p>
                      <p className="text-xs text-[#999999] font-sans mt-1">{kpi.sublabel}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* SMB Lending KPI Grid */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-blue-200 flex items-center justify-center shadow-sm">
                <img src={smbBuildingIcon} alt="SMB Lending" className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2D2D2D] font-sans">SMB Lending</h3>
                <p className="text-sm text-blue-600">Santander Bank N.A. • ~400k SMB customers</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: TrendingDown, value: currentSMBKPI.abandonment, label: "Abandonment Drop", sublabel: "Fewer abandoned applications", color: "text-[#EC0000]", hoverGlow: "group-hover:shadow-red-500/30" },
                { icon: ArrowUpRight, value: currentSMBKPI.appStart, label: "App-Start Increase", sublabel: "More apps started", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" },
                { icon: Target, value: currentSMBKPI.conversion, label: "Conversion Lift", sublabel: "Funded loan increase", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" },
                { icon: DollarSign, value: currentSMBKPI.revenue, label: "Net New Revenue", sublabel: "Year 1 incremental", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" },
                { icon: BarChart3, value: currentSMBKPI.roi, label: "ROI", sublabel: "Return on investment", color: "text-emerald-500", hoverGlow: "group-hover:shadow-emerald-500/30" }
              ].map((kpi, idx) => (
                <motion.div
                  key={kpi.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className={`
                    group relative bg-white border-2 border-blue-500/10 overflow-hidden cursor-pointer
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${kpi.hoverGlow}
                  `}>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
                        </div>
                      </div>
                      <motion.p 
                        key={`smb-${kpi.label}-${projectionView}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`text-3xl font-bold ${kpi.color} mb-2`}
                      >
                        {kpi.value}
                      </motion.p>
                      <p className="text-sm font-semibold text-[#2D2D2D] font-sans">{kpi.label}</p>
                      <p className="text-xs text-[#999999] font-sans mt-1">{kpi.sublabel}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Combined Outcome Hero Strip */}
          <motion.div 
            {...fadeInUp} 
            transition={{ delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden bg-white border-2 border-gray-200 shadow-sm"
          >
            <div className="relative p-8 md:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Main Revenue */}
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-[#EC0000]" />
                    <span className="text-[#EC0000] text-sm font-medium uppercase tracking-wider">Total Year 1 Impact</span>
                  </div>
                  <motion.p 
                    key={`total-${projectionView}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] font-sans"
                  >
                    {projectionView === 'conservative' ? '$22.8M' : projectionView === 'modeled' ? '$36.0M' : '$55.2M'}
                    <span className="text-[#666666] text-2xl md:text-3xl ml-2">Net New Revenue</span>
                  </motion.p>
                  <p className="text-[#666666] text-sm mt-3 max-w-lg">
                    Modeled across 3.4M+ customer touchpoints and 2 unique lending pipelines. 
                    ROI = Blended average across Santander consumer + SMB.
                  </p>
                </div>

                {/* Stats Cards */}
                <div className="flex flex-wrap justify-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#F7F7F7] rounded-2xl p-6 border border-gray-200 min-w-[140px]"
                  >
                    <motion.p 
                      key={`roi-${projectionView}`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-3xl md:text-4xl font-bold text-[#EC0000]"
                    >
                      {projectionView === 'conservative' ? '3.2×' : projectionView === 'modeled' ? '4.5×' : '6.0×'}
                    </motion.p>
                    <p className="text-[#666666] text-sm font-sans">Blended ROI</p>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#F7F7F7] rounded-2xl p-6 border border-gray-200 min-w-[140px]"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">3.4M+</p>
                    <p className="text-[#666666] text-sm font-sans">Customers Reached</p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative bg-[#F7F7F7] rounded-2xl p-6 border border-gray-200 min-w-[140px]"
                  >
                    <Badge className="absolute -top-2 -right-2 bg-[#EC0000] text-white text-xs px-2 py-0.5 shadow-sm">
                      Benchmarked
                    </Badge>
                    <p className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">2</p>
                    <p className="text-[#666666] text-sm font-sans">Lending Pipelines</p>
                  </motion.div>
                </div>
              </div>

              {/* Toggle Chart View */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowChart(!showChart)}
                  className="flex items-center gap-2 mx-auto text-[#666666] hover:text-[#EC0000] transition-colors"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm font-medium">{showChart ? 'Hide' : 'Show'} Revenue Breakdown Chart</span>
                  <motion.div
                    animate={{ rotate: showChart ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </button>

                {/* Revenue Chart */}
                <motion.div
                  initial={false}
                  animate={{ height: showChart ? 'auto' : 0, opacity: showChart ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 flex flex-col md:flex-row items-end justify-center gap-6">
                    {/* Auto Loans Bar */}
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="w-24 bg-[#EC0000] rounded-t-xl relative overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: showChart ? (projectionView === 'conservative' ? 100 : projectionView === 'modeled' ? 140 : 180) : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <p className="absolute top-3 left-0 right-0 text-center text-white font-bold text-sm">
                          {currentAutoKPI.revenue}
                        </p>
                      </motion.div>
                      <div className="mt-2 text-center">
                        <p className="text-[#2D2D2D] text-sm font-medium">Auto Loans</p>
                        <p className="text-[#999999] text-xs">Consumer</p>
                      </div>
                    </div>

                    {/* SMB Bar */}
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="w-24 bg-blue-500 rounded-t-xl relative overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: showChart ? (projectionView === 'conservative' ? 70 : projectionView === 'modeled' ? 100 : 140) : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      >
                        <p className="absolute top-3 left-0 right-0 text-center text-white font-bold text-sm">
                          {currentSMBKPI.revenue}
                        </p>
                      </motion.div>
                      <div className="mt-2 text-center">
                        <p className="text-[#2D2D2D] text-sm font-medium">SMB Lending</p>
                        <p className="text-[#999999] text-xs">Business</p>
                      </div>
                    </div>

                    {/* Combined Bar */}
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className="w-32 bg-[#2D2D2D] rounded-t-xl relative overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: showChart ? (projectionView === 'conservative' ? 130 : projectionView === 'modeled' ? 180 : 220) : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                      >
                        <p className="absolute top-3 left-0 right-0 text-center text-white font-bold">
                          {projectionView === 'conservative' ? '$22.8M' : projectionView === 'modeled' ? '$36.0M' : '$55.2M'}
                        </p>
                      </motion.div>
                      <div className="mt-2 text-center">
                        <p className="text-[#2D2D2D] text-sm font-medium">Combined Total</p>
                        <p className="text-[#999999] text-xs">Year 1</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.p {...fadeInUp} className="text-center text-xs text-[#999999] mt-6 max-w-2xl mx-auto">
            * Validated through internal data modeling using Santander's last 24-month funnel analytics. 
            Aggressive projections modeled after AmEx Credit Tracker launch benchmarks.
          </motion.p>
        </div>
      </section>

      {/* Section 5 - Security & Bank IT Alignment */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-2">05 — SECURITY & BANK IT ALIGNMENT</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4 font-serif">
              Enterprise-Grade Security
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div {...fadeInUp}>
              <Card className="bg-white border-2 border-gray-200 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#2D2D2D] mb-6 font-sans flex items-center gap-2">
                    <Shield className="h-5 w-5 text-[#EC0000]" />
                    Compliance & Security Summary
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: CheckCircle2, text: "SOC 2 Type II aligned" },
                      { icon: CheckCircle2, text: "FCRA + GLBA compliance" },
                      { icon: CheckCircle2, text: "Santander identity system integration (SCIM/SAML ready)" },
                      { icon: CheckCircle2, text: "Field-level tokenization" },
                      { icon: CheckCircle2, text: "Audit trails for every decision signal" },
                      { icon: CheckCircle2, text: "Live credit data refresh (D&B, Experian Biz, Equifax, etc.)" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#F7F7F7] border border-gray-200">
                        <item.icon className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-[#2D2D2D] font-sans">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="mt-6 w-full border-gray-300 text-[#2D2D2D] hover:border-[#EC0000] hover:text-[#EC0000]"
                  >
                    <FileCheck className="h-4 w-4 mr-2" />
                    View Tech Stack Summary PDF
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="bg-white border-2 border-gray-200 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#2D2D2D] mb-6 font-sans flex items-center gap-2">
                    <Server className="h-5 w-5 text-[#EC0000]" />
                    Technical Capabilities
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Key, title: "API Integration", desc: "RESTful eligibility endpoints ready for Santander systems" },
                      { icon: RefreshCw, title: "Live Data Refresh", desc: "Real-time credit data synchronization across bureaus" },
                      { icon: Layers, title: "Smart Resolution", desc: "Automated bureau conflict handling with transparent logic" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-[#F7F7F7] to-white border border-gray-200">
                        <div className="w-10 h-10 rounded-lg bg-[#EC0000]/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-[#EC0000]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#2D2D2D] font-sans">{item.title}</p>
                          <p className="text-xs text-[#666666] font-sans mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6 - Invisible Advantage Explainer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-2">06 — INVISIBLE ADVANTAGE</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4 font-serif">
              Why This Works Without Changing Santander's Core Systems
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <motion.div {...fadeInUp}>
              <Card className="bg-white border-2 border-gray-200 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#2D2D2D] mb-6 font-sans flex items-center gap-2">
                    <Brain className="h-5 w-5 text-[#EC0000]" />
                    How It Works
                  </h3>
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    <AccordionItem value="overlay" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Layers className="h-4 w-4 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans text-left">LumiqAI is an overlay, not a replacement</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Your existing core banking systems stay exactly as they are. LumiqAI sits on top as an intelligence layer—no migrations, no rewrites, no risk to current operations.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="api-injection" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Server className="h-4 w-4 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans text-left">Data flows through APIs into existing views</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Credit scores, eligibility signals, and product recommendations inject directly into your current app screens. No new interfaces to build—just enriched data where customers already look.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="no-login" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Lock className="h-4 w-4 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans text-left">Customers don't need a new login</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        LumiqAI uses Santander's existing SSO and authentication. Customers see new intelligence features the moment they log in—zero friction, zero password fatigue.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="banker-visibility" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Eye className="h-4 w-4 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans text-left">Bankers can see what customers see</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Optional visibility lets relationship managers and branch staff view the same credit signals customers see—enabling smarter conversations and proactive outreach.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="admin-controls" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Settings className="h-4 w-4 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans text-left">Santander controls what shows and where</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Full admin dashboard lets your team toggle modules on/off, control which customer segments see what, and customize messaging—all without engineering tickets.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="bg-white border-2 border-gray-200 shadow-sm h-full">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[#2D2D2D] mb-6 font-sans">Module Quick Access</h3>
                  <Accordion type="single" collapsible className="w-full space-y-2">
                    <AccordionItem value="credit-education" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans">Credit Education</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Empowers customers with personalized credit insights and tips, building trust and reducing anxiety around credit decisions.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="score-surfacing" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <BarChart3 className="h-5 w-5 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans">Score Surfacing</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Displays real-time credit scores directly in-app, keeping customers engaged and informed without leaving Santander.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="prequal-flow" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <Target className="h-5 w-5 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans">Prequal Flow</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Shows customers their approval odds before applying, boosting confidence and increasing application completion rates.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="recovery-messaging" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <RefreshCw className="h-5 w-5 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans">Recovery Messaging</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Provides actionable next steps after a decline, turning rejections into future approvals and retaining customer loyalty.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="offer-carousel" className="border border-gray-200 rounded-xl overflow-hidden bg-[#F7F7F7] px-4">
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                            <CreditCard className="h-5 w-5 text-[#EC0000]" />
                          </div>
                          <span className="text-sm font-medium text-[#2D2D2D] font-sans">Offer Carousel</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-sm text-[#666666] font-sans pb-4">
                        Surfaces personalized Santander product offers based on eligibility, driving cross-sell and increasing wallet share.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 - What Santander Gets */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-2">07 — WHAT SANTANDER GETS</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4 font-serif">
              Strategic Advantages
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Control Credit Journeys", desc: "Credit journeys Santander controls instead of losing to third parties" },
              { icon: TrendingUp, title: "Convert & Retain", desc: "App journeys that start, convert, and retain" },
              { icon: Eye, title: "Early Visibility", desc: "Visibility into customer signal before application even starts" },
              { icon: BarChart3, title: "Risk-Adjusted Growth", desc: "Risk-adjusted growth in cards, auto, and SMB lending" },
              { icon: Globe, title: "Global Ready", desc: "System built to expand internationally (GDPR & global credit frameworks ready)" }
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: 0.1 * idx }}>
                <Card className="bg-white border-2 border-gray-200 shadow-sm h-full hover:border-[#EC0000]/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#EC0000]/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-[#EC0000]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#2D2D2D] mb-2 font-sans">{item.title}</h3>
                        <p className="text-sm text-[#666666] font-sans">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 - The Future View */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#EC0000] tracking-wider mb-2">08 — THE FUTURE VIEW</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4 font-serif">
              You fix the funnel. You reclaim the future.
            </h2>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-[#F7F7F7] border-2 border-gray-200 shadow-sm mb-8">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Quote className="h-8 w-8 text-[#EC0000] flex-shrink-0" />
                  <div>
                    <p className="text-lg md:text-xl text-[#2D2D2D] font-serif italic leading-relaxed">
                      "This pilot is not just a patch. It's the first layer of an intelligence engine built to power Santander's next decade."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Sparkles, title: "Phase 2: Real-time offers", desc: "Dynamic product offers based on real-time customer signals and behavior" },
              { icon: BarChart3, title: "Embedded Analytics", desc: "Analytics dashboards embedded directly into banker workflows" },
              { icon: Brain, title: "Predictive Modeling", desc: "Next product modeling using AI to anticipate customer needs" }
            ].map((item, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: 0.1 * idx }}>
                <Card className="bg-white border-2 border-gray-200 shadow-sm h-full hover:border-[#EC0000]/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#EC0000]/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-[#EC0000]" />
                      </div>
                      <h3 className="font-bold text-[#2D2D2D] font-sans">{item.title}</h3>
                    </div>
                    <p className="text-sm text-[#666666] font-sans">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 - CTA + Footer */}
      <section id="pilot-form" className="py-16 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-4 font-serif">
                Ready to Transform Santander's Credit Journey?
              </h2>
            </div>

            {/* Hero CTA */}
            <div className="flex justify-center mb-10">
              <Card className="bg-[#EC0000] border-0 shadow-lg hover:shadow-xl transition-shadow cursor-pointer group max-w-md w-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-sans">Start the Pilot</h3>
                  <p className="text-white/80 text-sm mb-4 font-sans">3 Spots Left for Q1</p>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#EC0000] hover:bg-white/90 font-semibold rounded-full w-full"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Request Pilot Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <Card className="bg-white border-2 border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-2 font-sans">Full Name</label>
                        <Input 
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-[#F7F7F7] border-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#2D2D2D] mb-2 font-sans">Title</label>
                        <Input 
                          placeholder="VP of Digital Products"
                          value={formData.title}
                          onChange={(e) => handleInputChange('title', e.target.value)}
                          className="bg-[#F7F7F7] border-gray-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-2 font-sans">Company</label>
                      <Input 
                        placeholder="Santander Consumer USA"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-[#F7F7F7] border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#2D2D2D] mb-2 font-sans">Work Email</label>
                      <Input 
                        type="email"
                        placeholder="john.smith@santander.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-[#F7F7F7] border-gray-300"
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked)}
                      />
                      <label htmlFor="consent" className="text-sm text-[#666666] font-sans">
                        I agree to receive communications about LumiqAI pilot programs and understand that my information will be handled according to the privacy policy.
                      </label>
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Pilot Request"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Legal Smallprint */}
            <motion.div {...fadeInUp} className="mt-8 text-center">
              <div className="space-y-2 text-xs text-[#666666] font-sans">
                <p className="font-medium">Fully governed. Risk-aligned. SOC2-Audited.</p>
                <p>LumiqAI™ is a credit intelligence system, not a decisioning engine.</p>
                <p>All lending decisions remain with Santander.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
