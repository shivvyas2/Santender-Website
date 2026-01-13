import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, Shield, Zap, TrendingUp, Database, Lock, GitBranch, CloudCog, FileCheck, Users, ArrowRight, BarChart3, AlertTriangle, X, Check, CreditCard, Building2, PiggyBank, Briefcase, UserCheck, ChevronRight, Eye, EyeOff } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import chaseCreditJourneyImg from "@/assets/chase-credit-journey.jpg";
import capitalOneCreditwiseImg from "@/assets/capital-one-creditwise.jpg";
import wellsFargoFicoImg from "@/assets/wells-fargo-credit-closeup.png";
import citiFicoScoreImg from "@/assets/citi-fico-score.png";
import contactBgImg from "@/assets/contact-bg.jpg";

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

function MetricCard({ value, label, suffix = "", prefix = "", delay = 0 }: { value: number; label: string; suffix?: string; prefix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatedValue = useCountUp(value, isInView, suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#EC0000]/60 transition-all duration-500 group shadow-sm"
    >
      <div className="text-4xl md:text-5xl font-black text-[#EC0000] mb-3 group-hover:scale-105 transition-transform">{prefix}{animatedValue}</div>
      <div className="text-sm text-[#666666] text-center uppercase tracking-[0.15em] font-medium">{label}</div>
    </motion.div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const competitorData = [
  {
    name: "Chase Credit Journey",
    color: "#003087",
    image: chaseCreditJourneyImg,
    introduced: "Launched 2016",
    keyMetric: "30-40% higher card applications",
    retention: "42% increase in MAU"
  },
  {
    name: "Capital One CreditWise",
    color: "#004977",
    image: capitalOneCreditwiseImg,
    introduced: "Launched 2014",
    keyMetric: "35% higher card application rates",
    retention: "50M+ enrolled users"
  },
  {
    name: "Wells Fargo Credit Close-Up",
    color: "#D71E28",
    image: wellsFargoFicoImg,
    introduced: "Launched 2017",
    keyMetric: "28% increase in card applications",
    retention: "15M+ customers enrolled"
  },
  {
    name: "Citi In-App FICO",
    color: "#003B70",
    image: citiFicoScoreImg,
    introduced: "Launched 2015",
    keyMetric: "32% higher product engagement",
    retention: "25M+ cardholders access monthly"
  }
];

function Index() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* Competitor Modals */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-sm w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between" style={{ borderTopColor: competitorData[activeModal].color, borderTopWidth: 4 }}>
                <h3 className="text-lg font-bold text-[#2D2D2D] font-serif">{competitorData[activeModal].name}</h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="w-32 h-48 mx-auto mb-4 rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <img
                    src={competitorData[activeModal].image}
                    alt={`${competitorData[activeModal].name} Screenshot`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F7F7F7]">
                    <span className="text-lg">📅</span>
                    <span className="text-[#666666]">{competitorData[activeModal].introduced}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#EC0000]/5 border border-[#EC0000]/20">
                    <span className="text-lg">💳</span>
                    <span className="text-[#EC0000] font-semibold">{competitorData[activeModal].keyMetric}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#EC0000]/5 border border-[#EC0000]/20">
                    <span className="text-lg">🔄</span>
                    <span className="text-[#EC0000] font-semibold">{competitorData[activeModal].retention}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Leakage Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EC0000]/10 border border-[#EC0000]/20 mb-8">
              <TrendingUp className="w-4 h-4 text-[#EC0000]" />
              <span className="text-sm font-bold text-[#EC0000] uppercase tracking-wider">Leakage Economics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2D2D2D] mb-6 leading-tight font-serif">
              Borrowers shop credit first. Santander captures loans{" "}
              <span className="text-[#EC0000]">last</span>—after competitors already win.
            </h2>
          </motion.div>

          {/* Industry Stats */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EC0000] mb-2">45%</div>
              <p className="text-sm sm:text-base text-[#666666]">of auto borrowers research financing before purchase</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-4 sm:p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#EC0000] mb-2">60%</div>
              <p className="text-sm sm:text-base text-[#666666]">of digital shoppers complete a pre-approval step before applying</p>
            </motion.div>
          </div>

          {/* Leakage Math */}
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto mb-10 sm:mb-16">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 lg:p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center font-serif">Leakage Math</h3>
              <div className="space-y-4">
                {[
                  { label: "Serviced Customers", value: "3M" },
                  { label: "Enter Annual Shopping Window (10–20%)", value: "300K–600K" },
                  { label: "Research Financing (45%)", value: "135K–270K" },
                  { label: "Complete Pre-Approval Pull (60%)", value: "81K–162K", highlight: true }
                ].map((item, idx) => (
                  <div key={idx} className={`flex justify-between items-center p-4 rounded-xl ${item.highlight ? 'bg-[#EC0000]/10 border border-[#EC0000]/30' : 'bg-[#F7F7F7]'}`}>
                    <span className={`${item.highlight ? 'text-[#2D2D2D] font-semibold' : 'text-[#666666]'}`}>{item.label}</span>
                    <span className={`text-xl font-bold ${item.highlight ? 'text-[#EC0000]' : 'text-[#2D2D2D]'}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Insight */}
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl border-l-4 border-[#EC0000] p-8 shadow-sm">
              <p className="text-xl text-[#2D2D2D] leading-relaxed">
                AutoFi drove a <span className="text-[#EC0000] font-bold">34% increase</span> in leads and credit applications at dealerships. 
                But Santander has no equivalent native score surface for cards or SMB lending.
              </p>
            </div>
          </motion.div>

          {/* Competitors */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6 font-serif">Competitors capturing this intent digitally:</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {competitorData.map((comp, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveModal(idx)}
                  className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#666666] text-sm shadow-sm hover:border-[#EC0000] hover:text-[#EC0000] transition-all cursor-pointer"
                >
                  {comp.name}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="text-center">
            <p className="text-xl text-[#2D2D2D] font-medium">
              Santander pays more CAC to acquire borrowers <span className="text-[#EC0000]">it could be converting natively.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution - WITH vs WITHOUT */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2D2D2D] mb-4 font-serif px-2">
              Two realities. One leaks. <span className="text-[#EC0000]">One converts.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* WITHOUT LumiqAI */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-w-0"
            >
              <div className="absolute -top-3 sm:-top-4 left-2 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 border border-gray-300 text-[#666666] text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 z-10 whitespace-nowrap">
                <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />
                Without LumiqAI
              </div>
              <Card className="h-full bg-[#F7F7F7] border border-gray-200 overflow-hidden shadow-sm">
                <CardContent className="p-4 sm:p-6 md:p-8 pt-8 sm:pt-10 md:pt-12">
                  <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 overflow-hidden">
                    <div className="flex flex-col items-center min-w-0 flex-1">
                      <img 
                        src="/2.png"
                        alt="Consumer app without LumiqAI"
                        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto drop-shadow-xl max-w-full"
                      />
                      <p className="text-sm text-[#666666] mt-3 text-center font-medium">Consumer</p>
                    </div>
                    <div className="flex flex-col items-center min-w-0 flex-1">
                      <img 
                        src="/Santander Screenshots/Main Screen/Two Realities/Without LumiqAI/business.png"
                        alt="Business app without LumiqAI"
                        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto drop-shadow-xl max-w-full"
                      />
                      <p className="text-sm text-[#666666] mt-3 text-center font-medium">Business</p>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "No unified credit readiness view",
                      "No persistent consumer score monitoring",
                      "No business credit file surface",
                      "No deposit-based offer carousel",
                      "No in-app product recommendations"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white border border-gray-200">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#666666] break-words">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* WITH LumiqAI */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-w-0"
            >
              <div className="absolute -top-3 sm:-top-4 left-2 sm:left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#EC0000]/10 border border-[#EC0000]/40 text-[#EC0000] text-xs sm:text-sm font-bold flex items-center gap-1.5 sm:gap-2 z-10 whitespace-nowrap">
                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                With LumiqAI
              </div>
              <Card className="h-full bg-white border border-[#EC0000]/30 overflow-hidden shadow-sm">
                <CardContent className="p-4 sm:p-6 md:p-8 pt-8 sm:pt-10 md:pt-12">
                  <div className="flex justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8 overflow-hidden">
                    <div className="flex flex-col items-center min-w-0 flex-1">
                      <img 
                        src="/Santander Screenshots/Main Screen/Two Realities/With Lumiq AI/Consumer.png"
                        alt="Consumer app with LumiqAI"
                        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto drop-shadow-xl max-w-full"
                      />
                      <p className="text-sm text-[#EC0000] mt-3 font-medium text-center">Consumer</p>
                    </div>
                    <div className="flex flex-col items-center min-w-0 flex-1">
                      <img 
                        src="/Santander Screenshots/Main Screen/Two Realities/With Lumiq AI/Business.png"
                        alt="Business app with LumiqAI"
                        className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto drop-shadow-xl max-w-full"
                      />
                      <p className="text-sm text-[#EC0000] mt-3 font-medium text-center">Business</p>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { title: "Consumer Credit Panel", desc: "VantageScore 3.0 visible in-app, monitored monthly, with utilization trend lines, alerts, and 'next best actions' surfaced before product pathing." },
                      { title: "Business Credit Panel", desc: "D&B + Experian Biz + SAM.gov UEI registry completeness, tradeline health, and file completeness indicators." },
                      { title: "Eligibility Carousel", desc: "Uses deposit behavior + bureau scores + registry signals to surface pre-approved offers for Business LOC, Term loans, SBA 7(a)/504, Equipment financing." },
                      { title: "Instant Prequal Orchestration", desc: "Soft pull with consent, eligibility predicted before routing into lender engines like AutoFi." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-3 sm:p-4 rounded-xl bg-[#EC0000]/5 border border-[#EC0000]/20">
                        <div className="flex items-start gap-2 mb-2">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#EC0000] flex-shrink-0 mt-0.5" />
                          <span className="font-bold text-sm sm:text-base text-[#2D2D2D] break-words">{item.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#666666] pl-6 sm:pl-7 break-words leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center mt-10 sm:mt-16 mb-4 px-4">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#2D2D2D] font-bold font-serif leading-tight break-words">
              AutoFi executes. <span className="text-[#EC0000]">LumiqAI ensures Santander wins before execution.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2D2D2D] mb-4 font-serif">
              Built for <span className="text-[#EC0000]">regulated banking</span> environments.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto mb-10 sm:mb-16">
            {[
              { icon: Lock, title: "Encryption in transit & at rest" },
              { icon: Shield, title: "RBAC + audit logs" },
              { icon: FileCheck, title: "FCRA permissible purpose capture" },
              { icon: Users, title: "Dealer, consumer, and SMB data partitioning" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-white border border-gray-200 hover:border-[#EC0000]/30 transition-all duration-300 shadow-sm">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EC0000]" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#666666] font-medium">{item.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-l-4 border-[#EC0000] p-8 shadow-sm">
              <p className="text-lg text-[#2D2D2D] leading-relaxed">
                No raw credentials stored. No cross-signal bleed. Every decision auditable. 
                <span className="text-[#EC0000] font-semibold"> Permissible purpose + consent captured before soft pull.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#2D2D2D] mb-4 font-serif">
              What Santander gains in <span className="text-[#EC0000]">90 days.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-10 sm:mb-16">
            {[
              { icon: CreditCard, title: "Auto Lending", value: "+34%", desc: "lead volume via AutoFi" },
              { icon: BarChart3, title: "Consumer Cards", value: "30–40%", desc: "lift when credit is surfaced natively (vs 0 internal score panel today)" },
              { icon: Building2, title: "SMB Lending", value: "25–35%", desc: "funded conversion lift when eligibility is surfaced in-app (72% don't know their business score)" },
              { icon: UserCheck, title: "Churn Reduction", value: "≥65%", desc: "SMB drop-off prevention with proactive credit nudges" },
              { icon: TrendingUp, title: "3-Year Value", value: "300M+", desc: "incremental conversion gravity, 3.8× ROI, 42% engagement lift" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-white border border-gray-200 hover:border-[#EC0000]/50 transition-all duration-300 group shadow-sm">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#EC0000]/20 transition-colors">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#EC0000]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                    <div className="text-2xl sm:text-3xl font-black text-[#EC0000] mb-2">{item.value}</div>
                    <p className="text-[#666666] text-xs sm:text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* KPIs */}
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-6 text-center font-serif">KPIs We Track</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Prequal starts", "Offer CTR", "Application completion", "Funded loans", "Retention lift vs control"].map((kpi, idx) => (
                <span key={idx} className="px-4 py-2 rounded-full bg-[#EC0000]/10 border border-[#EC0000]/20 text-[#EC0000] text-sm font-medium">
                  {kpi}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#F7F7F7]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2D2D2D] mb-4 sm:mb-6 font-serif">
              Recapture borrowers. Reduce leakage.{" "}
              <span className="text-[#EC0000]">Convert bank-wide.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#666666] mb-6 sm:mb-10 max-w-2xl mx-auto">
              Dedicated Implementation Owner. 2-week integration. 90-day pilot. 48-hour docs delivery. <span className="text-[#EC0000] font-semibold">No failure modes.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/pilot">
                <Button size="lg" className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-xl group touch-manipulation w-full sm:w-auto">
                  Book 20 Minutes
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-xl border-[#2D2D2D] bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90 hover:text-white touch-manipulation w-full sm:w-auto">
                Send Audit PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plaid-Inspired Contact Form Section */}
      <section id="contact" className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactBgImg})` }}
        />
        {/* White overlay for fading effect */}
        <div className="absolute inset-0 bg-white/85" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Form */}
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D2D2D] mb-4 font-serif text-center">
                Contact Sales
              </h2>
              <p className="text-sm sm:text-base text-[#666666] mb-6 sm:mb-8 text-center">
                Ready to transform your credit journey? Reach out to our team and we'll be in touch.
              </p>
              
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 p-4 sm:p-6 md:p-8 shadow-lg">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#EC0000] focus:ring-1 focus:ring-[#EC0000] transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#EC0000] focus:ring-1 focus:ring-[#EC0000] transition-all"
                    />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#EC0000] focus:ring-1 focus:ring-[#EC0000] transition-all"
                  />
                  
                  <input
                    type="email"
                    placeholder="Company email"
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#EC0000] focus:ring-1 focus:ring-[#EC0000] transition-all"
                  />
                  
                  <textarea
                    placeholder="What are you building, and in what countries? Details are helpful!"
                    rows={4}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#EC0000] focus:ring-1 focus:ring-[#EC0000] transition-all resize-none"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone number (optional)"
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-300 bg-white text-[#2D2D2D] placeholder:text-gray-400 focus:outline-none focus:border-[#EC0000] focus:ring-1 focus:ring-[#EC0000] transition-all"
                  />
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-between px-6 py-4 bg-[#EC0000] text-white font-semibold rounded-lg hover:bg-[#CC0000] transition-colors group touch-manipulation min-h-[48px]"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
                
                <p className="text-sm text-[#999999] mt-6 text-center">
                  By submitting this form, I confirm that I have read and understood our{" "}
                  <a href="#" className="text-[#2D2D2D] underline hover:no-underline">Privacy Statement</a>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Index;
