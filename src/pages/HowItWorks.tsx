import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Database, Shield, Rocket, Lock, Users, TrendingUp, BarChart3, CheckCircle2, FileText, Target, DollarSign, Zap, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen relative">
        <div className="relative bg-gradient-to-b from-[#010101] via-[#04132d] to-[#0b1f4b] text-white pb-12">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[320px] bg-gradient-to-b from-white/70 via-transparent to-transparent" />
            <div className="absolute right-[-90%] md:right-[-5%] bg-[#1b4ed8]/60 blur-[220px] w-[1800px] h-[1400px] rounded-[2000px]" />
            <div className="absolute left-[-100%] md:left-[-20%] top-[-5%] bg-[#0b1f4b]/70 blur-[220px] w-[1700px] h-[1500px] rounded-[2000px]" />
            <div className="absolute ml-[-40%] md:ml-[-10%] top-[40%] bg-white/30 blur-[160px] w-[1600px] h-[1000px] rounded-[2000px]" />
        </div>
        {/* Progress Navigation */}
        <section className="sticky top-16 z-40 bg-[#040712]/80 backdrop-blur">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <nav className="flex items-center gap-2 py-3 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'app-experience', label: 'Customer View' },
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'flow', label: 'Decision Flow' },
                { id: 'integration', label: 'Integration' },
                { id: 'pilot', label: 'Pilot & Governance' }
              ].map((item, idx, arr) => (
                <div key={item.id} className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white/70 hover:text-white transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                  {idx < arr.length - 1 && (
                    <span className="text-white/30">•</span>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="pt-24 pb-20">
          <div className="mx-auto w-full px-5 md:px-[5vw] relative z-10">
            <motion.div {...fadeInUp} className="w-full space-y-10">
              <div className="max-w-5xl">
                <Badge className="bg-white/10 text-white border-white/20 mb-4">How It Works</Badge>
                <h1 className="text-[40px] md:text-[56px] font-bold mb-6 text-white leading-tight">
                Real-time business credit intelligence inside your digital banking experience.
              </h1>
                <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-4xl">
                Lumiq AI powers real-time business-credit intelligence inside your existing digital banking experience. 
                Show small-business customers (SMBs) their Experian Intelliscore, FSR, and personalized card eligibility in-app — while your teams get portfolio-level visibility, risk controls, and audit-ready decisioning. No new login. No disruption to your existing underwriting stack.
              </p>
              </div>

              {/* Quick Facts Metric Strip */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { metric: "+8–15%", label: "Lift in qualified SMB applications" },
                  { metric: "–20%", label: "Reduction in manual review load" },
                  { metric: ">$150", label: "Incremental interchange per booked card" },
                  { metric: "90 days", label: "Pilot with no change to existing underwriting" }
                ].map((fact) => (
                  <Card key={fact.label} className="bg-[#EEE] border-[#EEE] rounded-[20px]">
                    <CardContent className="p-5">
                      <div className="text-2xl font-bold text-[#070707] mb-1">{fact.metric}</div>
                      <p className="text-sm text-[#070707]/70">{fact.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Comparison Banner */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-[#EEE] border-[#EEE] rounded-[24px]">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.25em]">Consumer baseline</h3>
                    <p className="text-xl font-semibold text-[#070707]">How consumers see credit</p>
                    <p className="text-sm text-[#070707]/70">Chase Credit Journey (VantageScore 3.0, score history, alerts)</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#EEE] border-[#EEE] rounded-[24px]">
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-[0.25em]">Business future</h3>
                    <p className="text-xl font-semibold text-[#070707]">How businesses should see credit</p>
                    <p className="text-sm text-[#070707]/70">Intelliscore + FSR + real product eligibility + bank-aligned policy engine</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* ROI Metrics Strip */}
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { icon: Target, metric: "+8–15%", label: "Lift in qualified SMB applications", sublabel: "(A/B pilot range)" },
                  { icon: Zap, metric: "–20%", label: "Manual review load", sublabel: "(ops efficiency)" },
                  { icon: DollarSign, metric: ">$150", label: "Incremental interchange per booked card", sublabel: "(Stage 1 cards)" }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-[#EEE] border-[#EEE] rounded-[20px]">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="text-xl font-bold text-[#070707]">{item.metric}</div>
                      </div>
                      <p className="text-sm font-medium text-[#070707]">{item.label}</p>
                      <p className="text-xs text-[#070707]/70">{item.sublabel}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 bg-[#EEE] border-[#EEE] rounded-[24px] p-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#070707]">What This Enables</h3>
                <ul className="space-y-3">
                  {[
                    "Personal FICO/VantageScore for the owner",
                    "Business scores: FSR and Experian Intelliscore",
                    "Policy-aligned decision logic",
                    "Eligible Chase business cards with soft approvals"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-[#070707]/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
                <div className="flex items-center justify-center">
                  <Card className="bg-white border border-white rounded-[28px] w-full shadow-md">
                    <CardContent className="p-8 space-y-6">
                      {[
                        { label: "Chase App", subtitle: "Customer experience", icon: TrendingUp },
                        { label: "LUMIQ API", subtitle: "Intelligence layer", icon: BarChart3 },
                        { label: "Portfolio Dashboard", subtitle: "Chase analytics", icon: Database }
                      ].map((node) => (
                        <div key={node.label} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <node.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#070707]">{node.label}</p>
                            <p className="text-sm text-[#070707]/70">{node.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
            </div>
          </motion.div>
          </div>
        </section>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-white/70 to-white" />
        </div>

        {/* App Experience Section */}
        <section id="app-experience" className="py-20 bg-gradient-to-b from-white via-[#EEF2FF] to-white dark:from-[#050505] dark:via-[#050a1b] dark:to-[#050505]">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <motion.div {...fadeInUp} className="w-full space-y-12">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Customer Experience</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#070707] dark:text-white">
                  Built to feel native inside Chase Business
              </h2>
                <p className="text-[#070707]/70 dark:text-white/70">
                  Small-business customers see their business and personal credit intelligence inside the Chase Business app—no new login or portal.
                </p>
                <p className="text-sm text-[#070707]/60 dark:text-white/60 italic">
                  Modeled after Chase Credit Journey, engineered for SMB credit signals.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                {[
                  {
                    title: "Today — consumer journey",
                    gradient: "from-[#0B1F4B] to-[#050910]",
                    label: "Mobile mockup placeholder (consumer)",
                    image: "/mockups/chaseconsumer.png"
                  },
                  {
                    title: "Business journey",
                    gradient: "from-[#1146F2] via-[#7D4DFF] to-[#0B1F4B]",
                    label: "Mobile mockup placeholder (business)",
                    image: "/mockups/businessmockup1.png"
                  }
                ].map((device) => (
                  <div key={device.title} className="space-y-4">
                    <p className="text-sm text-primary font-semibold tracking-[0.2em] uppercase">{device.title}</p>
                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 blur-[120px] bg-primary/20 rounded-[40px]" />
                      <div className="relative max-w-sm w-full flex items-center justify-center">
                        <img
                          src={device.image}
                          alt={device.label}
                          className="w-full h-auto drop-shadow-[0_40px_90px_rgba(0,0,0,0.35)]"
                        />
                      </div>
                </div>
                </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section id="dashboard" className="py-20 bg-white dark:bg-[#070707]">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <motion.div {...fadeInUp} className="w-full space-y-12">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Portfolio Intelligence</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#070707] dark:text-white">
                  Dashboards for risk, product, and analytics teams
              </h2>
                <p className="text-[#070707]/70 dark:text-white/70">
                  Real-time visibility, audit-ready logs, and export-ready segments built on the same journey rails.
                </p>
              </div>

              <div className="space-y-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  <motion.div 
                    {...fadeInUp}
                    className="relative"
                  >
                    <div className="relative rounded-[32px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] p-8 shadow-sm">
                      <div className="absolute top-4 left-4 right-4 flex gap-2 z-10">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <img
                        src="/mockups/dashboard.png"
                        alt="Portfolio dashboard mockup"
                        className="rounded-[24px] w-full h-auto"
                      />
                    </div>
                  </motion.div>
                  <motion.div 
                    {...fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative rounded-[32px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] p-8 shadow-sm">
                      <div className="absolute top-4 left-4 right-4 flex gap-2 z-10">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <img
                        src="/mockups/analytics.png"
                        alt="Analytics view mockup"
                        className="w-full h-auto rounded-[24px]"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="bg-[#EEE] dark:bg-[#0F0F0F] border border-[#EEE] dark:border-[#1C1C1C] rounded-[28px] p-8 space-y-6 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
                  <ul className="space-y-3">
                    {[
                      "Filter in-policy SMBs by score bands, NAICS, relationship depth, revenue",
                      "Identify credit-ready segments instantly for banker outreach",
                      "Audit-ready logs, score versioning, and adverse-action tracking"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-[#070707]/70 dark:text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-[#070707]/60 dark:text-white/60 italic">
                    Bank benefit: instantly see which SMBs are in-policy and ready for a Chase business card, without changing your existing underwriting system.
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Pre-qualified SMBs", value: "55K+" },
                      { label: "Potential annual interchange", value: "$79.4M" },
                      { label: "CAC deflection/year", value: "$9.2M" }
                    ].map((metric) => (
                      <Card key={metric.label} className="bg-white dark:bg-[#1C1C1C] border-white dark:border-[#1C1C1C] rounded-[20px]">
                        <CardContent className="p-4 text-center">
                          <div className="text-xl font-bold text-primary mb-1">{metric.value}</div>
                          <p className="text-xs text-[#070707]/70 dark:text-white/70 leading-tight">{metric.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Simple 3-Step Journey Section */}
        <section className="py-20 bg-white dark:bg-[#070707]">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <motion.div {...fadeInUp} className="w-full space-y-12">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Customer Journey</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#070707] dark:text-white">
                  Simple 3-step journey
                </h2>
                <p className="text-[#070707]/70 dark:text-white/70">
                  A seamless experience from login to credit offers—all within the Chase Business app.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
                {[
                  { step: "1", title: "Sign in to Chase Business", desc: "No new credentials or portal required", image: "/seehowitworks/ChaseLogin.png" },
                  { step: "2", title: "Open Lumiq AI Business Credit Journey", desc: "See business + personal scores (Intelliscore, FSR, VantageScore)", image: "/seehowitworks/see scores.png" },
                  { step: "3", title: "View eligible business card offers", desc: "Based on AI-assisted, policy-aligned decisioning", image: "/seehowitworks/creditoffers.png" }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    {/* Arrow between cards (hidden on mobile) */}
                    {index < 2 && (
                      <div className="hidden md:flex absolute top-1/2 -right-3 lg:-right-4 z-10 items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1C1C1C] shadow-sm">
                        <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
                      </div>
                    )}
                    
                    <Card className="bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1C1C1C] rounded-[24px] h-full flex flex-col overflow-hidden hover:border-primary/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col flex-grow">
                        {/* Step Number Badge */}
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary">{item.step}</span>
                          </div>
                        </div>

                        {/* Phone Mockup */}
                        <div className="relative flex items-center justify-center mb-6 -mx-2">
                          <div className="w-full max-w-[200px] md:max-w-[240px]">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow space-y-3">
                          <h4 className="text-lg md:text-xl font-bold text-[#070707] dark:text-white leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#070707]/70 dark:text-white/70 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 90-Day Pilot Framework Section */}
        <section id="pilot" className="py-20 bg-white">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <motion.div {...fadeInUp} className="w-full space-y-10">
              <div className="text-center space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Pilot</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#070707]">90-Day Pilot Framework</h2>
                <p className="text-[#070707]/70 max-w-3xl mx-auto">
                  Controlled rollout. Measured outcomes. No code changes to your existing decision platform required.
                </p>
              </div>
              <div className="rounded-[32px] bg-[#EEE] border-[#EEE] p-10 space-y-8">
                <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
                  <div>
                    <h3 className="text-lg font-semibold text-[#070707] mb-4">Timeline at a glance</h3>
                    <div className="space-y-4">
                      {[
                        { week: "Weeks 1–2", title: "Data hookups + score sync", desc: "Connect APIs, validate Experian + internal data." },
                        { week: "Weeks 3–4", title: "Policy alignment", desc: "Mirror underwriting rules, overrides, guardrails." },
                        { week: "Weeks 5–8", title: "Live A/B routing", desc: "Test Lumiq vs. control within your channels." },
                        { week: "Weeks 9–12", title: "Review + scale plan", desc: "Measure lift, risk deltas, agree on Stage 2." }
                      ].map((phase, idx) => (
                        <div key={phase.week} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            {idx < 3 && <div className="w-px flex-1 bg-primary/30" />}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-primary">{phase.week}</p>
                            <p className="text-sm font-medium text-[#070707]">{phase.title}</p>
                            <p className="text-xs text-[#070707]/70">{phase.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { metric: "8–15%", label: "Qualified SMB lift" },
                        { metric: "–20%", label: "Manual review load" },
                        { metric: ">$150", label: "Incremental interchange" }
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-[20px] bg-white border-white p-4 text-center shadow-sm">
                          <div className="text-xl font-bold text-primary">{stat.metric}</div>
                          <p className="text-xs text-[#070707]/70">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-[20px] bg-white border-white p-6 space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Bank Ownership Guarantee</p>
                        <p className="text-xs text-[#070707]/70">Bank owns approvals, risk appetite, and policy control at all times.</p>
                      </div>
                      <div className="h-px bg-[#070707]/10" />
                      <div>
                        <p className="text-sm font-semibold text-primary mb-1">Phase 2 Lending Ready</p>
                        <p className="text-xs text-[#070707]/70">Same rails extend to Business LOC, Term Loans, and Commercial Real Estate.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who This Helps Section */}
        <section id="personas" className="py-20 bg-white">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <motion.div {...fadeInUp} className="w-full space-y-8">
              <div className="text-center space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Who It Helps</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#070707]">
                  Built for product, risk, and digital leaders
              </h2>
              </div>
              <div className="rounded-[32px] bg-[#EEE] border-[#EEE] p-8 md:p-10 w-full">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "SMB Card Portfolio Owners",
                    description: "Increase utilization and right-fit approvals.",
                    icon: TrendingUp
                  },
                  {
                    title: "Risk / Underwriting Heads",
                    description: "Maintain guardrails, improve consistency and explainability.",
                    icon: Shield
                  },
                  {
                    title: "Digital Platform & Analytics Leads",
                    description: "Embed intelligence into existing channels, measure lift.",
                    icon: BarChart3
                  },
                  {
                    title: "Lending Product Leads (Stage 2)",
                    description: "Reuse the same rails for LOC, term, and CRE.",
                    icon: Users
                  }
                  ].map((persona) => (
                    <div key={persona.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <persona.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                        <h3 className="font-semibold text-[#070707]">{persona.title}</h3>
                        <p className="text-sm text-[#070707]/70">{persona.description}</p>
                      </div>
                    </div>
                ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Flow Section */}
        <section id="flow" className="py-20 bg-white">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <motion.div {...fadeInUp} className="w-full space-y-12">
              <div className="text-center space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Decision Flow</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#070707]">How Lumiq AI makes decisions</h2>
                <p className="text-[#070707]/70 max-w-3xl mx-auto">
                  AI-assisted, policy-aligned decisioning — explainable at every step.
                </p>
              </div>

              <div className="rounded-[32px] bg-[#EEE] border-[#EEE] p-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {[
                    {
                    title: "Ingest",
                    icon: Database,
                      summary: "Experian Intelliscore, FSR, and Chase data flow in via secure APIs and existing SSO."
                  },
                  {
                    title: "Apply Policy",
                    icon: Shield,
                      summary: "We mirror your scorecards, overrides, and guardrails: 5/24, 2/30, exposure limits, freezes."
                  },
                  {
                    title: "Explainability",
                    icon: FileText,
                      summary: "Reasons and adverse-action logic are generated automatically; every decision is labeled."
                  },
                  {
                    title: "Route",
                    icon: TrendingUp,
                      summary: "AI recommends the right path: card offer eligibility, alternate routing, banker follow-up."
                  },
                  {
                    title: "Measure",
                    icon: BarChart3,
                      summary: "Lift, approval-rate delta, and loss-rate delta tracked live in dashboard to prove ROI."
                  }
                ].map((step, idx) => (
                    <div key={step.title} className="flex-1 flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-semibold text-primary shadow">
                          {idx + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-[#070707]">{step.title}</h3>
                      </div>
                      <p className="text-sm text-[#070707]/70">{step.summary}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            </motion.div>
          </div>
        </section>

        {/* Integration Section */}
        <section id="integration" className="py-20 bg-white">
          <div className="mx-auto w-full px-5 md:px-[5vw]">
            <motion.div {...fadeInUp} className="w-full space-y-8">
              <div className="text-center space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20">Integration</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-[#070707]">Integration & Deployment</h2>
                <p className="text-[#070707]/70 max-w-3xl mx-auto">
                  No disruption to your existing underwriting workflow.
                </p>
              </div>
              <div className="rounded-[32px] bg-[#EEE] border-[#EEE] p-10 space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "API & SDK",
                      icon: Database,
                      bullets: [
                        "REST API + SDKs with live sandbox",
                        "Compatible with Chase identity + mobile platforms"
                      ]
                    },
                    {
                      title: "Deployment",
                      icon: Rocket,
                      bullets: [
                        "Deploy in Chase VPC/cloud or vendor-hosted private environment",
                        "SLAs: 99.9% uptime, RTO < 4h, full audit logging"
                      ]
                    },
                    {
                      title: "Security",
                      icon: Lock,
                      bullets: [
                        "SOC 2–aligned, ISO 27001–compatible posture",
                        "Annual third-party penetration testing, encryption in transit & at rest"
                      ]
                    }
                  ].map((item) => (
                    <div key={item.title} className="rounded-[24px] bg-white border-white p-6 shadow-sm">
                      <item.icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-bold text-[#070707] mb-3">{item.title}</h3>
                      <ul className="space-y-2 text-sm text-[#070707]/70">
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>• {bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="rounded-[28px] bg-white border-white p-8 space-y-4">
                  <h3 className="text-lg font-bold text-[#070707]">Vendor due diligence snapshot</h3>
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {[
                      "SOC 2–aligned controls; ISO 27001–compatible posture",
                      "Encryption in transit and at rest",
                      "Annual third-party penetration testing",
                      "Configurable data residency and retention policies",
                      "SLAs: 99.9% uptime; RTO < 4 hours",
                      "Full audit logging and compliance reporting"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-[#070707]/70">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#070707]/70">
                      Risk ownership remains fully with the bank; Lumiq AI Business Credit Journey never overrides Chase's approval authority.
                    </p>
                  </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="cta"
          className="py-16 md:py-32 relative scroll-mt-20 overflow-hidden bg-[#050b25]"
        >
          <div className="absolute inset-0 pointer-events-none">
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
      </div>
    </PageLayout>
  );
}
