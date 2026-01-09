import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroBackground from "@/components/HeroBackground";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight,
  Brain,
  Smartphone,
  PieChart,
  Lock
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function CaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerClass = "mx-auto w-full px-5 md:px-[5vw]";
  const neutralCard = "bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]";
  const blueprintTimeline = [
    { year: "2016", text: "Chase launches Credit Journey as a free, Experian-powered credit-monitoring tool for anyone." },
    { year: "2019", text: "Credit Journey helping more than 15M people monitor their credit." },
    { year: "2020+", text: "~22M Credit Journey users cited as a flagship digital experience at Investor Day." }
  ];
  const smbStats = [
    { label: "Chase SMB relationships", value: "6–7M", detail: "across CCB" },
    { label: "New banking relationships won by fintechs", value: "~40%", detail: "Curinos 2023" },
    { label: "Global unmet SME credit needs", value: "$5T", detail: "IFC / World Bank" }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen">
        <section id="hero">
          <HeroBackground>
            <div className={containerClass}>
              <div className="flex flex-col items-start gap-12">
                <motion.div {...fadeInUp} className="w-full">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-[0.3em] text-white/80 mb-6">
                    Case Study · Q4 2024
                  </div>
                  <h1 className="text-[42px] md:text-[56px] lg:text-[64px] font-bold leading-tight text-white mb-6">
                    The Missing $100M+ Line Item for 7M Chase SMB Clients
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 mb-4">
                    Credit Journey proved that score + education + offers scales for 22M consumers.<sup className="text-white">1,2</sup>
                  </p>
                  <p className="text-lg md:text-xl text-white/80 mb-4">
                    LUMIQ AI applies the same mechanics to small-business credit decisions while fintechs capture 40% of new banking relationships.<sup className="text-white">3</sup>
                  </p>
                  <p className="text-xl font-semibold text-white mb-8">
                    Built for Chase’s controls; modeled to unlock ~$100M+ annual uplift from Ink cards alone before extending to lending.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-10">
                    <Button 
                      size="lg" 
                      onClick={() => scrollToSection('impact')}
                      className="group"
                    >
                      View the Business Case
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={() => scrollToSection('pilot')}
                      className="border-white text-white hover:bg-white/10"
                    >
                      Discuss a 90-Day Pilot
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-white/80">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span>+15–25% app-to-booked lift</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                      <Shield className="w-4 h-4 text-white" />
                      <span>Built for ECOA / FCRA controls</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                      <Users className="w-4 h-4 text-white" />
                      <span>Targeting 7M SMB relationships</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-4 w-full"
                  >
                    {[
                      { value: "22M+", label: "Credit Journey users", icon: Users },
                      { value: "~7M", label: "Chase SMB clients", icon: Target },
                      { value: "$100M+", label: "Stage 1 modeled uplift", icon: TrendingUp }
                    ].map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/15 bg-white/5 text-white backdrop-blur-md"
                      >
                        <div className="h-10 w-10 rounded-2xl bg-white/10 flex items-center justify-center">
                          <metric.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xl font-semibold leading-tight">{metric.value}</div>
                          <p className="text-xs text-white/70">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </HeroBackground>
        </section>

        {/* Consumer Blueprint Timeline */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="font-display text-4xl font-bold mb-4">The Consumer Blueprint</h2>
              <p className="text-xl text-muted-foreground">What Credit Journey already proved at 80M+ consumer scale</p>
            </motion.div>

            {/* Pull Quote */}
            <motion.div {...fadeInUp} className="mb-12">
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/5 border-primary/30">
                <CardContent className="p-8">
                  <blockquote className="text-2xl font-semibold italic text-foreground mb-4">
                    "If Credit Journey worked this well for 80M+ consumers, what happens when you give 7M small-business owners the same clarity—plus one-tap access to Ink cards and, later, LOC/term/CRE lending?"
                  </blockquote>
                  <cite className="text-sm text-muted-foreground">— LUMIQ AI Research Thesis, 2024</cite>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12">
              <Card className={`${neutralCard} rounded-[32px]`}>
                <CardContent className="p-8">
                  <div className="flex flex-col gap-8">
                    {blueprintTimeline.map((item, index) => (
                      <div key={item.year} className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                            {item.year}
                          </div>
                          <div className="hidden md:block h-px w-12 bg-primary/30" />
                        </div>
                        <p className="text-base md:text-lg text-[#070707] dark:text-white/80">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="rounded-[32px] bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/30">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-bold mb-6">Operational Lessons for Chase: What Credit Journey Proved</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Mass adoption when free and frictionless:</span>
                        <span className="text-muted-foreground"> 69% of digital banking users now use credit-monitoring tools like Credit Journey, up 8 percentage points YoY.<sup className="text-primary">4</sup></span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Measurable financial health impact:</span>
                        <span className="text-muted-foreground"> Users completing Score Planner improved credit scores 30+ points on average.<sup className="text-primary">2</sup></span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Native channel for pre-approved products:</span>
                        <span className="text-muted-foreground"> Creates in-app moments to present offers when customers are engaged with their credit data.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold">Operational efficiency gains:</span>
                        <span className="text-muted-foreground"> Internal materials position Credit Journey as part of experiences that drove record NPS, lower variable cost per household, and reduced teller transactions.<sup className="text-primary">5</sup></span>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground">
                      LUMIQ AI thesis: Take the same proven mechanics and point them at the 7M small-business portfolio where Chase has no dedicated "business credit journey."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SMB Gap & Fintech Pressure */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="font-display text-4xl font-bold mb-4">The SMB Gap & Fintech Pressure</h2>
              <p className="text-xl text-muted-foreground">SMBs are quietly training their credit behavior elsewhere</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="mb-12 grid gap-4 md:grid-cols-3"
            >
              {smbStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#E4E7EC] dark:border-white/10 bg-white dark:bg-[#0F0F0F] p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#070707]/50 dark:text-white/50 mb-2">{stat.label}</p>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-sm text-[#070707]/70 dark:text-white/70">{stat.detail}</p>
                </div>
              ))}
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              <motion.div {...fadeInUp} className="w-full h-full">
                <Card className={`${neutralCard} hover:border-primary/30`}>
                  <CardContent className="p-8 space-y-10 h-full flex flex-col">
                    <div className="space-y-4">
                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-[#070707] dark:text-white">Chase SMB footprint & gap</h3>
                          <p className="text-sm text-[#070707]/70 dark:text-white/70">
                            Massive penetration, but no dedicated “business credit journey” akin to the consumer experience.
                          </p>
                        </div>
                        <div className="rounded-2xl border border-[#E4E7EC] dark:border-white/10 bg-white dark:bg-[#0F0F0F] px-6 py-4 text-center shadow-sm">
                          <div className="text-xs uppercase tracking-[0.3em] text-[#070707]/50 dark:text-white/50 mb-1">Scale</div>
                          <div className="text-4xl font-bold text-primary">6–7M</div>
                          <p className="text-xs text-[#070707]/70 dark:text-white/70 mt-1">SMB clients across CCB</p>
                        </div>
                      </div>
                      <p className="text-sm text-[#070707]/80 dark:text-white/70">
                        Product pages exist for Ink, LOC, term loans, and CRE, but SMBs never see a Credit Journey-style UI that unifies scores, education, and offers.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <h3 className="font-display text-xl font-bold mb-4">Where SMBs are training credit behavior</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {[
                          {
                            heading: "Fintech share rising",
                            body: "Fintechs supply a growing share of small-dollar credit for SMBs (Federal Reserve Small Business Credit Survey).",
                            cite: 6
                          },
                          {
                            heading: "Huge unmet demand",
                            body: "$5T global SME credit gap leaves room for aggressive fintech buildout.",
                            cite: 7
                          },
                          {
                            heading: "Switching behavior",
                            body: "Fintechs now win ~40% of new banking relationships vs. 29% three years ago (Curinos).",
                            cite: 3
                          },
                          {
                            heading: "Policy tailwinds",
                            body: "SBA SBLC licenses now available to fintechs, intensifying lending competition.",
                            cite: 8
                          },
                          {
                            heading: "Modern card experiences",
                            body: "Ramp, Brex, and others scaled with digital-first UX aimed squarely at modern SMBs.",
                            cite: null
                          }
                        ].map((item) => (
                          <div key={item.heading} className="rounded-2xl border border-[#E4E7EC] dark:border-white/10 bg-white dark:bg-[#0F0F0F] p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <p className="text-sm font-semibold text-[#070707] dark:text-white">{item.heading}</p>
                              {item.cite && <sup className="text-primary font-semibold text-xs">{item.cite}</sup>}
                            </div>
                            <p className="text-sm text-[#070707]/70 dark:text-white/70">{item.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border">
                      <div className="rounded-3xl bg-primary/5 dark:bg-white/5 p-6 flex flex-col h-full">
                        <h3 className="font-display text-xl font-bold mb-4 text-primary">Experience gap</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          <span className="font-medium text-foreground">McKinsey 2024/2025:</span> “Good online and mobile banking is the #1 reason SMEs choose a primary bank.”<sup className="text-primary">9</sup>
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/10 p-4">
                            <div className="text-xs font-semibold text-primary mb-1 uppercase tracking-[0.2em]">Chase Consumer</div>
                            <p className="text-sm text-muted-foreground">Credit Journey, Score Planner, education, embedded offers.</p>
                          </div>
                          <div className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/80 dark:bg-white/10 p-4">
                            <div className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-[0.2em]">Chase SMB</div>
                            <p className="text-sm text-muted-foreground">Product-centric pages (Ink, LOC, term, CRE) without a unified journey.</p>
                          </div>
                        </div>
                        <p className="text-sm font-semibold text-foreground mt-4">
                          Result: SMBs who bank with Chase are getting coaching—and offers—from fintechs instead.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="bg-gradient-to-br from-background to-muted/30 border-primary/20 p-8 h-full">
                  <h3 className="font-display text-xl font-bold mb-8 text-center">Competitive Landscape</h3>
                  <div className="relative aspect-[4/3]">
                    {/* Quadrant Grid */}
                    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-px bg-border">
                      <div className="bg-background/50 p-4" />
                      <div className="bg-primary/5 p-4" />
                      <div className="bg-background/50 p-4" />
                      <div className="bg-primary/10 p-4" />
                    </div>
                    
                    {/* Axis Labels */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8 text-sm text-muted-foreground">
                      Digital Experience →
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-16 text-sm text-muted-foreground -rotate-90">
                      Risk & Governance →
                    </div>

                    {/* Data Points */}
                    <div className="absolute left-1/3 bottom-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-muted border-2 border-border px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                        Chase Today
                      </div>
                    </div>

                    <div className="absolute right-1/4 bottom-1/4 transform translate-x-1/2 -translate-y-1/2">
                      <div className="bg-muted border-2 border-border px-3 py-1 rounded text-sm font-medium whitespace-nowrap">
                        Fintech Cards
                      </div>
                    </div>

                    <div className="absolute right-1/4 top-1/4 transform translate-x-1/2 translate-y-1/2">
                      <div className="bg-primary/20 border-2 border-primary px-3 py-1 rounded text-sm font-bold whitespace-nowrap">
                        LUMIQ AI
                      </div>
                      <div className="text-xs text-center text-muted-foreground mt-1">High/High</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What LUMIQ AI Does */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="font-display text-4xl font-bold mb-4">What LUMIQ AI – Business Credit Journey Does</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all hover:shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Smartphone className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">In-app SMB Credit Visibility</h3>
                    <p className="text-muted-foreground mb-3">
                      Owner FICO and business-credit signals (e.g., Experian Intelliscore, FSR) shown directly in the Chase Business app UI.
                    </p>
                    <p className="text-muted-foreground font-medium">
                      No extra logins. No external portals.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all hover:shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Brain className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">Policy-Aligned Soft Pre-Qualification</h3>
                    <p className="text-muted-foreground mb-3">
                      Applies Chase's risk appetite, underwriting inputs, and guardrails (5/24, 2/30, 1/30, bureau status, exposure).
                    </p>
                    <p className="text-muted-foreground">
                      Generates likelihood-of-approval and explainable reasons for Ink Business cards (Stage 1) and, later, LOC/term/CRE (Stage 2).
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all hover:shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <PieChart className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-4">One-Tap Applications & Internal Control Tower</h3>
                    <p className="text-muted-foreground mb-3">
                      One-tap pre-qualified applications from the Chase Business app (card first, then lending).
                    </p>
                    <p className="text-muted-foreground">
                      Internal dashboard shows eligible SMBs, funnel conversion, approval-rate delta, loss-rate delta, and A/B lift.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modeled Impact */}
        <section id="impact" className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">Modeled Impact – Stage 1 & Stage 2</h2>
              <p className="text-xl text-muted-foreground mb-6">Modeled, not forecast; calibrated to Chase scale and public benchmarks</p>
              <Card className={`${neutralCard} bg-white dark:bg-[#0F0F0F]`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Methodology & Assumptions</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="font-semibold text-foreground mb-2">Stage 1 Pilot Cohort</div>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Target: 250K–400K digitally active SMBs</li>
                        <li>• Reach rate: 60–70% of target cohort</li>
                        <li>• Engagement rate: 35–45% (interact with journey / see offers)</li>
                        <li>• Conversion lift: +15–25% app-to-booked vs. current baseline</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-2">Financial Assumptions</div>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Avg annual spend per new Ink card: $60–80K</li>
                        <li>• Blended interchange rate: ~1.8%</li>
                        <li>• CAC comparison: owned channel vs. paid media</li>
                        <li>• Conservative revolver + fee income modeling</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                    These order-of-magnitude estimates are consistent with what Chase demonstrated with Credit Journey at consumer scale (22M users and material digital ROI).<sup className="text-primary">1,2,5</sup>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div {...fadeInUp}>
                <Card className="h-full rounded-[32px] bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold">Stage 1</h3>
                        <p className="text-muted-foreground">Ink Business Cards</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Pilot cohort</div>
                        <div className="text-lg font-semibold">Digitally-active SMBs</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-background/50 rounded-lg p-4">
                          <div className="text-3xl font-bold text-primary mb-1">+15–25%</div>
                          <div className="text-sm text-muted-foreground">App-to-booked lift in owned channel</div>
                        </div>
                        <div className="bg-background/50 rounded-lg p-4">
                          <div className="text-3xl font-bold text-primary mb-1">~55K</div>
                          <div className="text-sm text-muted-foreground">Incremental booked Ink cards</div>
                        </div>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-border">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Gross interchange / year</span>
                          <span className="text-xl font-bold">~$79.4M</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">CAC savings / year</span>
                          <span className="text-xl font-bold">~$9.2M</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Additional fee & interest income</span>
                          <span className="text-xl font-bold">~$14M+</span>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t-2 border-primary/30 bg-primary/5 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-lg">Stage 1 Total Uplift</span>
                          <span className="text-3xl font-bold text-primary">~$100M+</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Per year from cards alone, at Chase scale, with lower unit CAC and policy-aligned risk controls
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full rounded-[32px] bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/30">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold">Stage 2</h3>
                        <p className="text-muted-foreground">Lending Ecosystem</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Business Line of Credit</span>
                          <span className="text-lg font-bold text-secondary">$50–80M</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Incremental annual revenue potential</div>
                      </div>

                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Term Loans</span>
                          <span className="text-lg font-bold text-secondary">$80–120M</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Incremental annual revenue potential</div>
                      </div>

                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Commercial Real Estate</span>
                          <span className="text-lg font-bold text-secondary">$80–120M</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Incremental annual revenue potential</div>
                      </div>

                      <div className="bg-primary/10 rounded-lg p-4 border border-primary/20 mt-6">
                        <div className="flex justify-between items-center">
                          <span className="font-bold">Total Stage 2 Range</span>
                          <span className="text-2xl font-bold text-primary">$210–320M</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground italic pt-4">
                        Stage 2 ranges are directional, based on unmet SME credit demand, Chase SMB scale, and modest uplift assumptions.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Governance & Fit */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="font-display text-4xl font-bold mb-4 text-[#070707] dark:text-white">Governance & Fit</h2>
              <p className="text-xl text-[#070707]/70 dark:text-white/70">Bank-friendly by design</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Revenue Lift</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      More qualified SMBs converted to the right product—within existing risk appetite.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Risk & Compliance</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 mb-2">
                      Uses named underwriting inputs (FICO, Experian Intelliscore, FSR, internal attributes).
                    </p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      Supports ECOA/FCRA/GLBA obligations, model-risk governance, and adverse-action reasons.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Operational Efficiency</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 mb-2">
                      Reduces manual reviews for straightforward cases.
                    </p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      Shortens time-to-decision, which SMEs consistently rank as critical.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                <Card className={`${neutralCard} h-full hover:border-primary/40 transition-all`}>
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 text-[#070707] dark:text-white">Integration</h3>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70 mb-2">
                      API-first with sandbox, batch or real-time modes.
                    </p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">
                      Non-disruptive A/B pilots; clear SLAs, RTO/RPO, and security posture.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 90-Day Pilot */}
        <section id="pilot" className="py-16 md:py-24 bg-white dark:bg-[#070707]">
          <div className={containerClass}>
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="font-display text-4xl font-bold mb-4">How We'd Prove It in 90 Days</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full rounded-[28px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] shadow-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-semibold text-primary mb-4">WEEKS 0–2</div>
                    <h3 className="font-display text-xl font-bold mb-4">Connect & Simulate</h3>
                    <p className="text-muted-foreground">
                      Connect scores & sandbox; re-create a small, simulated 'Credit Journey for Business' cohort.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full rounded-[28px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] shadow-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-semibold text-primary mb-4">WEEKS 3–8</div>
                    <h3 className="font-display text-xl font-bold mb-4">A/B Test & Measure</h3>
                    <p className="text-muted-foreground">
                      A/B test vs. current flows—measure lift, approval-rate delta, loss-rate delta, and time-to-decision.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="h-full rounded-[28px] bg-white dark:bg-[#0F0F0F] border border-[#E4E7EC] dark:border-[#1C1C1C] shadow-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-sm font-semibold text-primary mb-4">WEEKS 9–12</div>
                    <h3 className="font-display text-xl font-bold mb-4">Scale Decision</h3>
                    <p className="text-muted-foreground">
                      Scale to a broader SMB segment if KPIs are met.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Citations Legend */}
        <section className="py-16 md:py-24 bg-white dark:bg-[#070707] border-t border-border">
          <div className={containerClass}>
            <motion.div {...fadeInUp}>
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-6">Citations & References</h2>
                <p className="text-muted-foreground mb-8">
                  This case study draws on public information and industry research from the following sources:
                </p>
                
                <div className="grid gap-4">
                <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">1</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">JPMorgan Chase Investor Day 2020</p>
                          <p className="text-sm text-muted-foreground">Digital engagement metrics and Credit Journey user base (~22M users)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">2</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Chase Credit Journey and Experian Public Communications (2019)</p>
                          <p className="text-sm text-muted-foreground">Score Planner impact data (30+ point average improvements)</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">3</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Curinos Banking Consumer Study (2023)</p>
                          <p className="text-sm text-muted-foreground">Fintech switching patterns and new relationship capture rates</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">4</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Digital Banking Consumer Survey (2021)</p>
                          <p className="text-sm text-muted-foreground">Credit monitoring tool adoption rates and year-over-year growth</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">5</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">JPMorgan Chase Investor Day 2019</p>
                          <p className="text-sm text-muted-foreground">Internal positioning of Credit Journey within digital banking suite and operational efficiency gains</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">6</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">Federal Reserve Small Business Credit Survey (2023)</p>
                          <p className="text-sm text-muted-foreground">Online lender adoption trends among small businesses</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">7</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">World Bank / IFC SME Finance Gap Reports</p>
                          <p className="text-sm text-muted-foreground">Global unmet credit demand estimates for small and medium enterprises</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">8</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">U.S. Small Business Administration (SBA)</p>
                          <p className="text-sm text-muted-foreground">Small Business Lending Company (SBLC) program expansion and fintech participation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className={`${neutralCard} border border-primary/20`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <sup className="text-primary font-bold text-base">9</sup>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">McKinsey & Company</p>
                          <p className="text-sm text-muted-foreground">"The Future of MSME Banking" (2024/2025) – Digital experience as primary bank selection factor</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-accent/50 border-primary/20 mb-8">
                <CardContent className="p-6 text-[#070707] dark:text-white/80">
                  <p className="font-semibold mb-3">Methodology Note</p>
                  <p className="text-sm text-[#070707]/80 dark:text-white/80">
                    All modeled impact figures are directional estimates calibrated to Chase's publicly disclosed SMB scale (~6–7M clients), Credit Journey consumer success metrics (22M users, measurable engagement and financial health outcomes), and conservative industry benchmarks for card interchange rates, average spend, and conversion lift assumptions. These are not guarantees or forecasts but order-of-magnitude scenarios based on analogous consumer product success within Chase's existing infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border-border/50">
                <CardContent className="p-6 space-y-4 text-sm text-[#070707]/80 dark:text-white/70">
                  <p className="font-medium text-[#070707] dark:text-white">Legal Notice</p>
                  <p>
                    LUMIQ AI and FuteurcredX are independent solutions; no affiliation or endorsement by JPMorgan Chase is implied. 
                    All trademarks belong to their respective owners. This analysis is for informational purposes only and does not 
                    constitute financial, legal, or business advice.
                  </p>
                </CardContent>
              </Card>

              <div className="mt-12 text-center">
                <Button size="lg" className="group" onClick={() => scrollToSection('hero')}>
                  Start a 90-Day Pilot Review
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

