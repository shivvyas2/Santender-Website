import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Shield, Zap, TrendingUp, Database, Lock, GitBranch, CloudCog, FileCheck, Users, ArrowRight, BarChart3, Info, Download, Briefcase, UserCheck, Target, LineChart as LineChartIcon } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import HeroBackground from "@/components/HeroBackground";

// Animated counter hook
function useCountUp(target: number, isInView: boolean, suffix = "") {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isInView]);
  return count + suffix;
}

function MetricCard({ value, label, suffix = "", delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatedValue = useCountUp(value, isInView, suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-6 rounded-xl bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-[#070707]/20 dark:hover:border-white/20 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-primary mb-2">{animatedValue}</div>
      <div className="text-sm text-[#070707]/70 dark:text-white/70 text-center">{label}</div>
    </motion.div>
  );
}

function Index() {
  return (
    <PageLayout>
      {/* Hero Section with SolverCorp-React Background */}
      <HeroBackground>
        <div className="flex flex-col lg:flex-row justify-between items-start self-stretch gap-[8px]">
          <div className="w-full order-2 lg:w-[70%] lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1146F2] text-white text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              Built on Chase Credit Journey® Principles
            </motion.div>

            <h1 className="text-[40px] md:text-[52px] lg:text-[72px] font-semibold mb-6 leading-[52px] md:leading-[64px] lg:leading-[85px] tracking-[-1.2px] md:tracking-[-2.16px] text-white">
              The Credit Journey For Business
            
            </h1>

            <p className="text-lg text-white/90 mb-4 max-w-3xl leading-relaxed font-normal">
              Pre-qualify & convert your small-business customers to the right credit product — inside your existing risk controls.
            </p>

            <p className="text-base text-white/70 mb-8 max-w-2xl">
              For enterprise banks who want to embed business credit scoring, soft approvals, and real-time offer routing directly into their digital channels.
            </p>

            {/* Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-10 text-sm"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                <TrendingUp className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">+25% conversion lift</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                <BarChart3 className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">$79.4M incremental interchange</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                <Shield className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">100% audit-trail coverage</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="/#cta">
                <Button variant="solver" size="lg" className="text-base md:text-lg gap-6">
                  Book a 20-Minute Pilot Review
                  <div className="w-10 h-10 p-2.5 rounded-full bg-white flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-[#070707]" />
                  </div>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      {/* Consumer Blueprint Comparison */}
      <section id="journey" className="py-12 md:py-24 relative bg-white dark:bg-[#070707] transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1146F2] text-[#070707] dark:text-white text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Built on the proven success of Chase Credit Journey®
            </div>
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">
              Now for business credit
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70">
              Used by <span className="text-primary font-semibold">22M+ consumers</span>. Built for <span className="text-primary font-semibold">~7M SMBs</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 w-full items-center">
            {/* Consumer Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <img 
                  src="/mockups/consumermockup.png" 
                  alt="Consumer Credit Journey Mobile App" 
                  className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#070707] dark:text-white">Consumer Credit Journey</h3>
              <p className="text-base text-[#070707]/70 dark:text-white/70 max-w-sm">Free credit-score monitoring, insights, and personalized plans</p>
            </motion.div>

            {/* Business Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 relative">
                <img 
                  src="/mockups/mockup2.png" 
                  alt="Business Credit Journey Mobile App" 
                  className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(51,204,255,0.3)]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl -z-10" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#070707] dark:text-white">Business Credit Journey</h3>
              <p className="text-base text-[#070707]/70 dark:text-white/70 max-w-sm">Owner FICO + Business Intelliscore + FSR with soft approvals</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16 space-y-8"
          >
            <Link to="/uss">
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-primary/10 hover:border-primary/50 border-[#070707] dark:border-white text-[#070707] dark:text-white"
              >
                See Unique Salient Similarities (USS)
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <p className="text-3xl md:text-4xl font-bold text-[#070707] dark:text-white tracking-tight">
              Same science. <span className="text-primary">Bigger opportunity.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proven Blueprint Section */}
      <section id="blueprint" className="py-12 md:py-24 relative bg-white dark:bg-[#070707] transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">
              Proven Blueprint → Business Impact
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1146F2] text-[#070707] dark:text-white text-sm font-medium mt-4">
              <CheckCircle2 className="w-4 h-4" />
              Built on the same principles as Chase Credit Journey®
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* Chase Credit Journey Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-primary/30 transition-all duration-300 rounded-[20px]">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-[#070707] dark:text-white">
                    <Users className="w-6 h-6 text-secondary" />
                    Chase Credit Journey (Consumer)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-primary">22M+</span>
                    <span className="text-[#070707]/70 dark:text-white/70">users</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">+30</span>
                    <span className="text-[#070707]/70 dark:text-white/70">point avg score improvement</span>
                  </div>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70 pt-4 border-t border-[#070707]/10 dark:border-white/10">
                    Free credit-score monitoring, insights, and personalized improvement plans.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* LUMIQ AI Business Credit Journey Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-[#EEE] dark:bg-[#1D1D1D] border border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-[0_0_40px_rgba(51,204,255,0.1)] rounded-[20px]">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3 text-[#070707] dark:text-white">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    LUMIQ AI Business Credit Journey
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 pb-4 border-b border-[#070707]/10 dark:border-white/10">
                    <div className="flex items-center gap-2 text-[#070707] dark:text-white">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Owner FICO + Business Intelliscore + FSR
                    </div>
                    <div className="flex items-center gap-2 text-[#070707] dark:text-white">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Soft-approval & product routing
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[#070707]/70 dark:text-white/70">Stage 1 cards:</span>
                      <span className="text-2xl font-bold text-primary">~$100M+ uplift</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[#070707]/70 dark:text-white/70">Stage 2 lending:</span>
                      <span className="text-2xl font-bold text-primary">$210-$320M uplift potential</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-2xl font-semibold text-primary">Same science. Bigger upside.</p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 md:py-24 relative scroll-mt-20 bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">How It Works</h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Three steps to transform your small-business credit decisioning
            </p>
          </motion.div>

          <div className="w-full">
            <div className="relative">
              {/* Vertical Timeline Line - Desktop Only */}
              <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent transform -translate-x-1/2"></div>
              
              {[
                {
                  icon: Database,
                  title: "Ingest",
                  description: (
                    <TooltipProvider>
                      <span>Securely pull owner personal FICO + business credit signals (</span>
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted underline-offset-4 cursor-help text-primary font-medium">
                          Intelliscore
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Business credit score from Experian™</p>
                        </TooltipContent>
                      </Tooltip>
                      <span>, </span>
                      <Tooltip>
                        <TooltipTrigger className="underline decoration-dotted underline-offset-4 cursor-help text-primary font-medium">
                          FSR
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">Financial Stability Risk composite indicator</p>
                        </TooltipContent>
                      </Tooltip>
                      <span>) + your internal attributes.</span>
                    </TooltipProvider>
                  ),
                  delay: 0
                },
                {
                  icon: FileCheck,
                  title: "Policy & Explainability",
                  description: "Apply your underwriting policy; track adverse-action reasons; maintain model-risk controls.",
                  delay: 0.1
                },
                {
                  icon: TrendingUp,
                  title: "Route & Measure",
                  description: "Route to product offers; measure conversion lift, approval-rate delta, loss-rate delta, time-to-decision.",
                  delay: 0.2
                }
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: step.delay }}
                  className="relative mb-16 last:mb-0"
                >
                  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                    {/* Step Number & Icon - Left Side on Desktop */}
                    <div className="relative flex-shrink-0">
                      <div className="relative w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                        <step.icon className="w-12 h-12 lg:w-14 lg:h-14 text-primary" />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg lg:text-xl font-bold shadow-lg">
                        {index + 1}
                      </div>
                      {/* Connecting Arrow - Desktop Only */}
                      {index < 2 && (
                        <div className="hidden lg:block absolute left-1/2 top-full mt-4 transform -translate-x-1/2">
                          <ArrowRight className="w-6 h-6 text-primary/50 rotate-90" />
                        </div>
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1">
                      <Card className="bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] dark:border-[#1D1D1D] hover:border-primary/30 transition-all duration-300 rounded-[20px] shadow-sm hover:shadow-md">
                        <CardContent className="pt-8 pb-8 px-8">
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#070707] dark:text-white">{step.title}</h3>
                          {typeof step.description === 'string' ? (
                            <p className="text-base md:text-lg text-[#070707]/70 dark:text-white/70 leading-relaxed">{step.description}</p>
                          ) : (
                            <div className="text-base md:text-lg text-[#070707]/70 dark:text-white/70 leading-relaxed">{step.description}</div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For & Value Combined */}
      <section id="value" className="py-12 md:py-24 relative bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">For Product & Risk Leaders</h2>
            <p className="text-lg text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">Built for decision-makers who drive portfolio growth and manage risk</p>
          </motion.div>

          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:items-center">
            {/* Value Outcomes - Wide Layout */}
            <div className="rounded-[32px] bg-[#EEE] dark:bg-[#0F0F0F] border border-[#EEE] dark:border-[#1C1C1C] p-8 md:p-12 shadow-sm self-stretch">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#070707]/60 dark:text-white/60">Value & Outcomes</p>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 text-[#070707] dark:text-white">Stretch impact across revenue, risk, and ops</h3>
                </div>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-white/5 border border-[#070707]/10 dark:border-white/10 text-sm text-[#070707] dark:text-white">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Built on measured lift at Chase scale
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: TrendingUp,
                    title: "Revenue",
                    description: "More right-fit customers; higher spend and utilization."
                  },
                  {
                    icon: Shield,
                    title: "Risk",
                    description: "Consistent underwriting inputs; explainable decisions; portfolio governance."
                  },
                  {
                    icon: Zap,
                    title: "Ops",
                    description: "Fewer manual reviews; faster decisions; lower cost per booked account."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="h-full rounded-2xl bg-white dark:bg-[#1C1C1C] border border-white dark:border-[#1C1C1C] p-6 flex flex-col gap-3 shadow-sm">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-[#070707] dark:text-white">{item.title}</h4>
                      <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Who It's For - Vertical Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] bg-[#0B1F4B] text-white p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.25)] border border-white/10 self-center"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">Who It's For</p>
              <h3 className="text-2xl font-bold mb-6">Product, risk, and growth leaders</h3>
              <div className="space-y-5">
                {[
                  { icon: Briefcase, title: "SMB Card Portfolio Owners", description: "Drive card adoption and spend" },
                  { icon: LineChartIcon, title: "Digital Banking / Platform Heads", description: "Embed credit intelligence into channels" },
                  { icon: UserCheck, title: "Credit Policy / Underwriting Ops", description: "Maintain model-risk controls" },
                  { icon: Target, title: "Lending Product Leads", description: "Expand to LOC, term loans (Stage 2)" }
                ].map((role) => (
                  <div key={role.title} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                    <role.icon className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-base font-semibold">{role.title}</h4>
                      <p className="text-sm text-white/70">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security, Compliance & Integration Combined */}
      <section id="security" className="py-12 md:py-24 relative bg-white dark:bg-[#070707] transition-colors duration-500">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">Security, Compliance & Integration</h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Bank-grade security, regulatory compliance, and flexible deployment options
            </p>
          </motion.div>

          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] xl:items-center">
            {/* Security & Compliance - Wide Grid */}
            <div className="rounded-[32px] bg-[#EEE] dark:bg-[#0F0F0F] border border-[#EEE] dark:border-[#1C1C1C] p-8 md:p-12 self-stretch">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#070707]/60 dark:text-white/60">Security & Compliance</p>
                  <h3 className="text-2xl font-bold mt-2 text-[#070707] dark:text-white">Controls mapped to regulatory frameworks</h3>
                </div>
                <div className="text-sm text-[#070707]/70 dark:text-white/70">ECOA • FCRA • GLBA • SOC 2</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: Lock,
                    title: "Security Controls",
                    items: ["SOC 2–aligned controls", "Encryption in transit & at rest", "RBAC & SSO"]
                  },
                  {
                    icon: FileCheck,
                    title: "Data Governance",
                    items: ["Data-lineage tracking", "Decision snapshots", "Retention policy"]
                  },
                  {
                    icon: Shield,
                    title: "Regulatory Design",
                    items: ["ECOA / FCRA / GLBA / UDAP / CRA", "Model-risk governance ready", "Adverse-action tracking"]
                  },
                  {
                    icon: CheckCircle2,
                    title: "Audit Trail",
                    items: ["100% coverage", "Inputs, transformations, outputs", "Real-time monitoring"]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="rounded-2xl bg-white dark:bg-[#1C1C1C] border border-white dark:border-[#1C1C1C] p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-bold text-[#070707] dark:text-white">{item.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {item.items.map((listItem) => (
                        <li key={listItem} className="flex items-start gap-2 text-sm text-[#070707]/70 dark:text-white/70">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Integration Summary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] bg-[#0B1F4B] text-white p-8 md:p-10 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.3)] self-center"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4">Integration</p>
              <h3 className="text-2xl font-bold mb-6">Deploy inside your stack or ours</h3>
              <div className="space-y-5 divide-y divide-white/10">
                {[
                  {
                    icon: GitBranch,
                    title: "APIs & SDKs",
                    description: "Sandbox, batch, and realtime options with opinionated reference UI."
                  },
                  {
                    icon: Zap,
                    title: "Non-Disruptive Pilot",
                    description: "Runs alongside existing workflows with no policy changes required."
                  },
                  {
                    icon: CloudCog,
                    title: "Deployment Choices",
                    description: "Bank cloud/VPC or vendor-hosted with private connectivity & logging."
                  },
                  {
                    icon: Shield,
                    title: "Operational SLAs",
                    description: "Uptime, RTO/RPO, incident response, and model-risk documentation."
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 pt-5 first:pt-0">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold">{item.title}</h4>
                      <p className="text-sm text-white/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="cta"
        className="py-16 md:py-32 relative scroll-mt-20 overflow-hidden bg-[#050b25]"
      >
        <div className="absolute inset-0 pointer-events-none">
          {/* Inspired by SolverCorp: soft white into deep royal blue */}
          <div className="absolute inset-x-0 -top-40 h-[620px] bg-gradient-to-b from-white via-[#4c6ef5] to-[#0a1b45]" />
          <div className="absolute inset-0 top-0">
            <div className="absolute right-[-20%] md:right-[10%] w-[1100px] h-[900px] bg-[#7b61ff]/45 blur-[220px]" />
            <div className="absolute left-[-30%] md:left-0 w-[1000px] h-[820px] bg-[#1b4ed8]/55 blur-[210px]" />
            <div className="absolute inset-x-0 top-[120px] h-[500px] bg-gradient-to-b from-transparent via-[#0a1030]/40 to-transparent blur-[120px]" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-[460px] bg-gradient-to-b from-transparent via-[#04070f] to-[#020306]" />
        </div>
        <div className="mx-auto w-full px-5 md:px-[5vw] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full text-center"
          >
            <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold mb-6 text-white leading-[41.6px] md:leading-[56px] lg:leading-[72px]">
              Start a 6-Week Pilot with Pre-Agreed Success Criteria
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Non-disruptive integration. Measurable results. Built on proven principles.
            </p>
            <a href="/#cta">
              <Button variant="solverSecondary" size="lg" className="text-base md:text-lg gap-6">
                Book a 20-minute pilot review — see conversion lift & model audit in action
                <div className="w-10 h-10 p-2.5 rounded-full bg-[#070707] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Index;

