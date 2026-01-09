import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { 
  Shield, Lock, TrendingUp, BarChart3, CheckCircle2, 
  Target, Zap, ArrowRight, Smartphone, Building2, 
  AlertTriangle, Eye, XCircle, LineChart, Settings, Car, BadgeCheck, Clock, CreditCard, Info, ChevronDown, User, Briefcase, Wallet, DollarSign, Home, Truck, X
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import carLoanIcon from "@/assets/car-loan.svg";
import consumerCardImg from "@/assets/consumer-card.png";
import commercialCardImg from "@/assets/commercial-card-new.jpg";
import autofiLogo from "@/assets/autofi-logo.svg";
import lumiqLogo from "@/assets/lumiq-logo.svg";
import lumiqLogoWhite from "@/assets/lumiq-logo-white-new.png";
import chaseCreditJourneyImg from "@/assets/chase-credit-journey.jpg";
import capitalOneCreditwiseImg from "@/assets/capital-one-creditwise.jpg";
import wellsFargoFicoImg from "@/assets/wells-fargo-credit-closeup.png";
import citiFicoScoreImg from "@/assets/citi-fico-score.png";
import consumerAppScreenshot from "@/assets/consumer-app-screenshot.png";
import businessAppScreenshot from "@/assets/business-app-screenshot.png";
import loanPiggybankIcon from "@/assets/loan-piggybank.svg";
import termLoanIcon from "@/assets/term-loan.svg";
import apartmentIcon from "@/assets/apartment.svg";
import carLoan2Icon from "@/assets/car-loan-2.svg";
import creditCardIcon from "@/assets/credit-card-icon.svg";
import officeBuildingIcon from "@/assets/office-building.svg";
import carLoanDocIcon from "@/assets/car-loan-doc.svg";
import howItWorksBgImg from "@/assets/how-it-works-bg.jpg";

const competitorData = [
  {
    name: "Chase",
    product: "Credit Journey",
    color: "#003087",
    image: chaseCreditJourneyImg,
    introduced: "Launched 2016",
    keyMetric: "30-40% higher card applications",
    retention: "42% increase in MAU"
  },
  {
    name: "Capital One",
    product: "CreditWise",
    color: "#004977",
    image: capitalOneCreditwiseImg,
    introduced: "Launched 2014",
    keyMetric: "35% higher card application rates",
    retention: "50M+ enrolled users"
  },
  {
    name: "Wells Fargo",
    product: "FICO Score Panel",
    color: "#D71E28",
    image: wellsFargoFicoImg,
    introduced: "Launched 2017",
    keyMetric: "28% increase in card applications",
    retention: "15M+ customers enrolled"
  },
  {
    name: "Citi",
    product: "FICO Monitoring",
    color: "#003B70",
    image: citiFicoScoreImg,
    introduced: "Launched 2015",
    keyMetric: "32% higher product engagement",
    retention: "25M+ cardholders access monthly"
  }
];

export default function HowItWorks() {
  const [expandedCard, setExpandedCard] = useState<'credit' | 'smb' | 'auto' | null>(null);
  const [activeCompetitorModal, setActiveCompetitorModal] = useState<number | null>(null);
  
  const toggleCard = (card: 'credit' | 'smb' | 'auto') => {
    setExpandedCard(expandedCard === card ? null : card);
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <PageLayout>
      {/* Competitor Modal */}
      <AnimatePresence>
        {activeCompetitorModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveCompetitorModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-sm w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 flex items-center justify-between" style={{ borderTopColor: competitorData[activeCompetitorModal].color, borderTopWidth: 4 }}>
                <h3 className="text-lg font-bold text-[#2D2D2D] font-serif">{competitorData[activeCompetitorModal].name} {competitorData[activeCompetitorModal].product}</h3>
                <button
                  onClick={() => setActiveCompetitorModal(null)}
                  className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="w-32 h-48 mx-auto mb-4 rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm">
                  <img
                    src={competitorData[activeCompetitorModal].image}
                    alt={`${competitorData[activeCompetitorModal].name} Screenshot`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#F7F7F7]">
                    <span className="text-lg">📅</span>
                    <span className="text-[#666666]">{competitorData[activeCompetitorModal].introduced}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#EC0000]/5 border border-[#EC0000]/20">
                    <span className="text-lg">💳</span>
                    <span className="text-[#EC0000] font-semibold">{competitorData[activeCompetitorModal].keyMetric}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[#EC0000]/5 border border-[#EC0000]/20">
                    <span className="text-lg">🔄</span>
                    <span className="text-[#EC0000] font-semibold">{competitorData[activeCompetitorModal].retention}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-white">
        
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${howItWorksBgImg})` }}
          />
          {/* White overlay for fading effect */}
          <div className="absolute inset-0 bg-white/85" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeInUp} className="max-w-5xl">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Where AI meets ROI: Breaking Down the $55.2M Impact
              </h1>
              <p className="font-sans text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
                Auto + SMB segment insights modeled on Santander funnel data.{" "}
                <span className="text-gray-900 font-semibold">Bank retains all decisioning power.</span>
              </p>
              
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold rounded-full mb-8"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              {/* Drive + AutoFi Partnership Banner */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-1">
                    <p className="font-sans text-white/80 text-sm uppercase tracking-wider mb-2">Proven Model</p>
                    <p className="font-sans text-white text-lg md:text-xl leading-relaxed">
                      <span className="font-bold text-[#EC0000]">Drive</span> is a program and brand of Santander Consumer USA Inc., a leading consumer finance company providing automotive financing to more than{" "}
                      <span className="font-bold text-white">3.1 million customers</span>.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-3">
                    <span className="font-sans text-white/60 text-sm">In partnership with</span>
                    <span className="font-sans text-white font-bold text-xl">AutoFi</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex items-center gap-4 shrink-0">
                      <img src={lumiqLogoWhite} alt="LumiqAI" className="w-24 h-24 object-contain" />
                      <div>
                        <p className="text-white font-bold text-lg">LumiqAI</p>
                        <p className="text-white/60 text-xs">Evolved Engagement</p>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-sans text-white text-lg md:text-xl leading-relaxed">
                        <span className="text-[#EC0000] font-bold text-xl md:text-2xl">LumiqAI mirrors proven AutoFi engagement success</span>
                        <span className="text-white/90">—but applies it to </span>
                        <span className="font-bold text-white">credit cards + SMB loans</span>
                        <span className="text-white/90">, unlocking the same conversion mechanics across </span>
                        <span className="font-bold text-[#EC0000]">all lending products</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1 — ARCHITECTURE PLACEMENT */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#EC0000] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  Architecture Placement (Non-invasive Integration)
                </h2>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
                  LumiqAI sits <span className="text-gray-900 font-semibold">between</span> Santander's core banking, lending, and digital channels as a{" "}
                  <span className="text-gray-900 font-semibold">middleware signal processor</span>, not a credit decisioning engine.
                </p>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8">
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">Integration Stack:</h3>
                  <div className="space-y-4">
                    {[
                      { bold: "Ingests", text: "owner + SMB financial behavior via secure bank feeds" },
                      { bold: "Queries", text: "consumer + business credit bureaus" },
                      { bold: "Evaluates", text: "registry, identity, cashflow stability, and fundability signals" },
                      { bold: "Surfaces", text: "insights into Santander apps and banker dashboards" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#EC0000] shrink-0 mt-0.5" />
                        <span className="font-sans text-gray-600">
                          <span className="text-gray-900 font-semibold">{item.bold}</span> {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#EC0000] rounded-2xl p-6 mb-8">
                  <p className="font-sans text-white font-bold text-center text-lg">
                    No Core System Replacement. No Core Policy Enforcement. No Lending Decisions Made by LumiqAI.
                  </p>
                </div>

                {/* AutoFi Engagement Blueprint - Premium Redesigned Section */}
                <TooltipProvider>
                <div className="relative rounded-3xl p-8 md:p-10 max-w-[1200px] mx-auto overflow-hidden" style={{ background: '#FBFAF9' }}>
                  {/* Dotted Grid Overlay */}
                  <div 
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(circle, #d4d4d4 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}
                  />
                  
                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                      <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <span>Engagement Blueprint</span>
                      </div>
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                        AutoFi Engagement Blueprint — <span className="text-[#EC0000]">Evolved by LumiqAI</span>
                      </h3>
                      <p className="font-sans text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                        From Drive to Full-Suite: Proven at 3.1M+ users. Adapted by LumiqAI for Cards, SMB Lending, and In-App Pre-Approvals.
                      </p>
                    </div>

                    {/* Timeline Comparison Strip */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 p-6 mb-10 shadow-sm">
                      <p className="font-sans text-xs uppercase tracking-wider text-gray-500 text-center mb-4 font-medium">Legacy vs Evolved Engagement Stack</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Legacy Side */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 border border-gray-700">
                          <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shrink-0 p-2">
                            <img src={autofiLogo} alt="AutoFi" className="w-full h-full object-contain" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-sans font-bold text-white">AutoFi (Drive)</span>
                              <span className="text-[10px] bg-gray-600 text-gray-300 px-2 py-0.5 rounded-full">Legacy</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-400">
                              <span>Dealer Experience</span>
                              <span className="text-gray-500">→</span>
                              <span>Auto Loans Only</span>
                            </div>
                          </div>
                        </div>
                        {/* Evolved Side */}
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#EC0000]/5 to-blue-500/5 border border-[#EC0000]/20">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-md p-1.5 overflow-hidden">
                            <img src={lumiqLogo} alt="LumiqAI" className="w-full h-full object-contain" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-sans font-bold text-gray-900">LumiqAI</span>
                              <span className="text-[10px] bg-[#EC0000] text-white px-2 py-0.5 rounded-full font-medium">Evolved</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <span>Embedded App UX</span>
                              <span className="text-[#EC0000]">→</span>
                              <span className="font-medium text-gray-900">Cards + SMB + Auto</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Three Glassmorphic Product Cards */}
                    <div className="space-y-5 mb-10">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Credit Cards Card */}
                        <motion.div 
                          onClick={() => toggleCard('credit')}
                          whileHover={{ scale: 1.02, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className={`group relative bg-white/85 backdrop-blur-md rounded-[20px] p-7 border cursor-pointer transition-all duration-300 ${
                            expandedCard === 'credit' 
                              ? 'border-[#EC0000] shadow-lg shadow-[#EC0000]/10 ring-2 ring-[#EC0000]/10' 
                              : 'border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-[#EC0000]/30'
                          }`}
                        >
                          {/* Floating Icon */}
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                            <img src={creditCardIcon} alt="Credit Card" className="w-12 h-12 object-contain" />
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-display text-xl font-bold text-gray-900">Instant Credit Card Approvals</h4>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedCard === 'credit' ? 'rotate-180' : ''}`} />
                          </div>
                          <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4">
                            Surface eligible cards directly inside the Santander app, including consumer cashback and commercial fleet cards.
                          </p>
                          <p className="font-sans text-gray-500 text-xs mb-4 italic">
                            LumiqAI intelligently matches based on VantageScore, cashflow velocity, and spend intent.
                          </p>
                          {/* Sub-features */}
                          <div className="space-y-2 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#EC0000]" />
                              <span className="text-gray-700">Real-time in-app score matching</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#EC0000]" />
                              <span className="text-gray-700">Prequal routing (consumer + commercial)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-[#EC0000]" />
                              <span className="text-gray-700">1-click application</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* SMB Lending Card */}
                        <motion.div 
                          onClick={() => toggleCard('smb')}
                          whileHover={{ scale: 1.02, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className={`group relative bg-white/85 backdrop-blur-md rounded-[20px] p-7 border cursor-pointer transition-all duration-300 ${
                            expandedCard === 'smb' 
                              ? 'border-blue-600 shadow-lg shadow-blue-500/10 ring-2 ring-blue-600/10' 
                              : 'border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-blue-500/30'
                          }`}
                        >
                          {/* Floating Icon */}
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                            <img src={officeBuildingIcon} alt="SMB Pre-Qualification" className="w-12 h-12 object-contain" />
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-display text-xl font-bold text-gray-900">Embedded SMB Pre-Qualification</h4>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedCard === 'smb' ? 'rotate-180' : ''}`} />
                          </div>
                          <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4">
                            LumiqAI maps Santander's lending rules into a plug-and-play experience for working capital, equipment, term loans, and more.
                          </p>
                          {/* Sub-features */}
                          <div className="space-y-2 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              <span className="text-gray-700">2+ years in business</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              <span className="text-gray-700">Revenue/asset detection</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-blue-600" />
                              <span className="text-gray-700">Auto-tiering of eligible SKUs</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Auto Loan Card */}
                        <motion.div 
                          onClick={() => toggleCard('auto')}
                          whileHover={{ scale: 1.02, y: -4 }}
                          transition={{ duration: 0.2 }}
                          className={`group relative bg-white/85 backdrop-blur-md rounded-[20px] p-7 border cursor-pointer transition-all duration-300 ${
                            expandedCard === 'auto' 
                              ? 'border-orange-500 shadow-lg shadow-orange-500/10 ring-2 ring-orange-500/10' 
                              : 'border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:border-orange-500/30'
                          }`}
                        >
                          {/* Floating Icon */}
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
                            <img src={carLoanDocIcon} alt="Auto Loan Pre-Approvals" className="w-12 h-12 object-contain" />
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-display text-xl font-bold text-gray-900">In-App Auto Loan Pre-Approvals</h4>
                            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedCard === 'auto' ? 'rotate-180' : ''}`} />
                          </div>
                          <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4">
                            Extend Santander's successful AutoFi blueprint into a full in-app experience. No redirects, no duplicate forms.
                          </p>
                          {/* Sub-features */}
                          <div className="space-y-2 pt-3 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-orange-500" />
                              <span className="text-gray-700">Soft pull embedded in-app</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-orange-500" />
                              <span className="text-gray-700">Drive-style speed, now white-labeled</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-orange-500" />
                              <span className="text-gray-700">Personalized APR + amount</span>
                            </div>
                          </div>
                          {/* Mockup Preview */}
                          <div className="mt-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-3 text-white">
                            <div className="flex items-center justify-between text-xs">
                              <span className="opacity-80">Pre-Approved</span>
                              <span className="font-bold">$35,000 @ 4.99%</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence mode="wait">
                        {expandedCard === 'credit' && (
                          <motion.div
                            key="credit"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/60 p-6 shadow-sm">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Consumer Card */}
                                <a 
                                  href="https://www.santanderbank.com/personal/credit-card" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="block"
                                >
                                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#EC0000]/40 hover:shadow-lg hover:bg-white transition-all duration-200 h-full">
                                    <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 shadow-md">
                                      <img src={consumerCardImg} alt="Santander Ultimate Cash Back Card" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h5 className="font-sans font-bold text-gray-900">Consumer Credit Card</h5>
                                        <span className="text-[10px] bg-[#EC0000] text-white px-2 py-0.5 rounded-full font-medium">Personal</span>
                                      </div>
                                      <p className="font-sans text-gray-600 text-sm mb-2">
                                        <span className="font-semibold">Santander Ultimate Cash Back®</span> — 3% cash back, low intro APR, no annual fees.
                                      </p>
                                      <p className="font-sans text-[#EC0000] text-xs leading-relaxed">
                                        <span className="font-semibold">LumiqAI:</span> Surfaces this card to eligible consumers based on credit score, spending patterns, and account history.
                                      </p>
                                    </div>
                                  </div>
                                </a>
                                {/* Commercial Card */}
                                <a 
                                  href="https://www.santanderbank.com/commercial/commercial-capabilities/working-capital/payables/commercial-card" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="block"
                                >
                                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-500/40 hover:shadow-lg hover:bg-white transition-all duration-200 h-full">
                                    <div className="w-24 h-16 rounded-lg overflow-hidden shrink-0 shadow-md">
                                      <img src={commercialCardImg} alt="Santander Commercial Card" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h5 className="font-sans font-bold text-gray-900">Commercial Card Solutions</h5>
                                        <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">Business</span>
                                      </div>
                                      <p className="font-sans text-gray-600 text-sm mb-2">
                                        Virtual cards, purchasing cards, and fleet cards for streamlined corporate payments.
                                      </p>
                                      <p className="font-sans text-blue-600 text-xs leading-relaxed">
                                        <span className="font-semibold">LumiqAI:</span> Identifies SMB owners eligible for commercial cards based on business cashflow, revenue, and credit health.
                                      </p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {expandedCard === 'smb' && (
                          <motion.div
                            key="smb"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/60 p-6 shadow-sm">
                              <p className="font-sans text-gray-500 text-sm mb-4 text-center">Compare Santander lending options</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                                {/* Business Line of Credit */}
                                <div className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200">
                                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-md overflow-hidden">
                                    <img src={loanPiggybankIcon} alt="Business Line of Credit" className="w-10 h-10 object-contain" />
                                  </div>
                                  <h5 className="font-sans font-bold text-gray-900 mb-1">Business Line of Credit</h5>
                                  <p className="font-sans text-gray-500 text-xs mb-2">$10K – $500K • 1 year revolving</p>
                                  <p className="font-sans text-gray-600 text-sm mb-3">Short-term working capital financing needs with flexible access.</p>
                                  <div className="space-y-1.5 mb-3">
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">2+ years in business</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Consistent revenue history</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Owner credit profile</span>
                                    </div>
                                  </div>
                                  <p className="font-sans text-blue-600 text-xs border-t border-blue-100 pt-2">
                                    <span className="font-semibold">LumiqAI:</span> Auto-checks eligibility criteria in-app.
                                  </p>
                                </div>
                                {/* Term Loan */}
                                <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-200">
                                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-md overflow-hidden">
                                    <img src={termLoanIcon} alt="Term Loan" className="w-10 h-10 object-contain" />
                                  </div>
                                  <h5 className="font-sans font-bold text-gray-900 mb-1">Term Loan</h5>
                                  <p className="font-sans text-gray-500 text-xs mb-2">$10K – $1M • Up to 5 years</p>
                                  <p className="font-sans text-gray-600 text-sm mb-3">Fixed-rate financing with predictable monthly payments.</p>
                                  <div className="space-y-1.5 mb-3">
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">2+ years in business</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Stable cashflow patterns</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Collateral for $100K+</span>
                                    </div>
                                  </div>
                                  <p className="font-sans text-green-600 text-xs border-t border-green-100 pt-2">
                                    <span className="font-semibold">LumiqAI:</span> Matches terms to repayment capacity.
                                  </p>
                                </div>
                                {/* Commercial Real Estate */}
                                <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-200">
                                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-md overflow-hidden">
                                    <img src={apartmentIcon} alt="Commercial Real Estate" className="w-10 h-10 object-contain" />
                                  </div>
                                  <h5 className="font-sans font-bold text-gray-900 mb-1">Commercial Real Estate</h5>
                                  <p className="font-sans text-gray-500 text-xs mb-2">$25K – $1M • Up to 25 years</p>
                                  <p className="font-sans text-gray-600 text-sm mb-3">Purchase, renovate, or refinance owner-occupied CRE.</p>
                                  <div className="space-y-1.5 mb-3">
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">2+ years in business</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Up to 80% LTV</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Strong business financials</span>
                                    </div>
                                  </div>
                                  <p className="font-sans text-purple-600 text-xs border-t border-purple-100 pt-2">
                                    <span className="font-semibold">LumiqAI:</span> Identifies CRE-ready businesses.
                                  </p>
                                </div>
                                {/* Equipment & Vehicle */}
                                <div className="p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all duration-200">
                                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-md overflow-hidden">
                                    <img src={carLoan2Icon} alt="Equipment & Vehicle" className="w-10 h-10 object-contain" />
                                  </div>
                                  <h5 className="font-sans font-bold text-gray-900 mb-1">Equipment & Vehicle</h5>
                                  <p className="font-sans text-gray-500 text-xs mb-2">$25K – $1M • Up to 10 years</p>
                                  <p className="font-sans text-gray-600 text-sm mb-3">Finance new equipment, machinery, or vehicles.</p>
                                  <div className="space-y-1.5 mb-3">
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">2+ years in business</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Asset as collateral</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                                      <span className="text-gray-600 text-xs">Fixed monthly payments</span>
                                    </div>
                                  </div>
                                  <p className="font-sans text-orange-600 text-xs border-t border-orange-100 pt-2">
                                    <span className="font-semibold">LumiqAI:</span> Pre-qualifies based on asset needs.
                                  </p>
                                </div>
                              </div>
                              {/* LumiqAI Auto-Qualification Note */}
                              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                <div className="flex items-start gap-3">
                                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                    <Zap className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <p className="font-sans font-semibold text-gray-900 text-sm mb-1">LumiqAI Auto-Qualification</p>
                                    <p className="font-sans text-gray-600 text-xs leading-relaxed">
                                      LumiqAI automatically evaluates eligibility criteria—time in business, revenue patterns, credit profile, and collateral capacity—directly within the app, enabling instant pre-qualification without manual document review.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {expandedCard === 'auto' && (
                          <motion.div
                            key="auto"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/60 p-6 shadow-sm">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                                      <img src={carLoanIcon} alt="Auto Loan" className="w-7 h-7" />
                                    </div>
                                    <div>
                                      <h5 className="font-sans font-bold text-gray-900">Drive × AutoFi Integration</h5>
                                      <p className="font-sans text-gray-500 text-sm">Proven at 3.1M+ customer scale</p>
                                    </div>
                                  </div>
                                  <p className="font-sans text-gray-600 text-sm leading-relaxed">
                                    LumiqAI brings the same instant pre-approval experience that made Drive successful—now embedded directly in the Santander mobile app.
                                  </p>
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                                      <span className="text-gray-700">Soft pull pre-qualification</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                                      <span className="text-gray-700">Real-time approval status</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                                      <span className="text-gray-700">One-tap application</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white">
                                  <p className="font-sans text-white/80 text-xs uppercase tracking-wider mb-2">In-App Experience</p>
                                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="text-white/80 text-sm">Pre-Approved Amount</span>
                                      <span className="text-white font-bold text-lg">$35,000</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <span className="text-white/80 text-sm">Est. APR</span>
                                      <span className="text-white font-bold">4.99%</span>
                                    </div>
                                  </div>
                                  <p className="font-sans text-white/90 text-xs">
                                    <span className="font-semibold">LumiqAI:</span> Displays personalized pre-approval offers based on credit profile and account relationship.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* DRIVE vs LUMIQAI Comparison Table */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/60 p-6 mb-10 shadow-sm">
                      <h4 className="font-display text-lg font-bold text-gray-900 text-center mb-6">
                        DRIVE vs LUMIQAI — Shift in Customer Experience
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="py-3 px-4 text-left font-semibold text-gray-600">Feature</th>
                              <th className="py-3 px-4 text-center font-semibold text-gray-500">Drive (AutoFi)</th>
                              <th className="py-3 px-4 text-center font-semibold text-[#EC0000]">LumiqAI</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50/50">
                              <td className="py-3 px-4 text-gray-700">Lending Type</td>
                              <td className="py-3 px-4 text-center text-gray-500">Auto Only</td>
                              <td className="py-3 px-4 text-center text-green-600 font-medium flex items-center justify-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Auto + SMB + Cards
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50/50">
                              <td className="py-3 px-4 text-gray-700">App Integration</td>
                              <td className="py-3 px-4 text-center text-gray-500">Dealer/Broker Portal</td>
                              <td className="py-3 px-4 text-center text-green-600 font-medium flex items-center justify-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Embedded Inside App
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50/50">
                              <td className="py-3 px-4 text-gray-700">Credit Funnel</td>
                              <td className="py-3 px-4 text-center text-gray-500">Hard Pull / Apply</td>
                              <td className="py-3 px-4 text-center text-green-600 font-medium flex items-center justify-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Soft Pull / Smart Pre-Qual
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50/50">
                              <td className="py-3 px-4 text-gray-700">UX Flow</td>
                              <td className="py-3 px-4 text-center text-gray-500">Redirect to Web Form</td>
                              <td className="py-3 px-4 text-center text-green-600 font-medium flex items-center justify-center gap-1">
                                <CheckCircle2 className="w-4 h-4" /> Embedded Pre-Approval Banner
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Animated Stat Capsules */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/60 px-5 py-3 rounded-full shadow-sm cursor-default"
                      >
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                          <User className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-display text-xl font-bold text-gray-900">3.1M+</p>
                          <p className="text-xs text-gray-500">Users Supported</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/60 px-5 py-3 rounded-full shadow-sm cursor-default"
                      >
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-display text-xl font-bold text-gray-900">54%</p>
                          <p className="text-xs text-gray-500">Faster vs Legacy Flows</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ y: -3 }}
                        className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-200/60 px-5 py-3 rounded-full shadow-sm cursor-default"
                      >
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-display text-xl font-bold text-gray-900">+22%</p>
                          <p className="text-xs text-gray-500">Product Activation</p>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
                </TooltipProvider>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — WHAT LUMIQAI DOES VS DOESN'T DO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#EC0000] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  What LumiqAI Does vs What It Doesn't Do
                </h2>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 border-gray-200">
                        <TableHead className="font-sans text-gray-900 font-bold text-base py-4">Function</TableHead>
                        <TableHead className="font-sans text-gray-900 font-bold text-base text-center py-4">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { func: "Provides credit education modules", status: "YES", yes: true },
                        { func: "Displays SMB + owner credit signals", status: "YES", yes: true },
                        { func: "Runs composite health analytics", status: "YES", yes: true },
                        { func: "Prequalifies loan options", status: "Optional", yes: true },
                        { func: "Makes lending decisions", status: "NEVER", yes: false },
                        { func: "Enforces credit policy", status: "NEVER", yes: false }
                      ].map((row, idx) => (
                        <TableRow key={idx} className="border-gray-200">
                          <TableCell className="font-sans text-gray-600 py-4">{row.func}</TableCell>
                          <TableCell className="text-center py-4">
                            <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                              row.yes 
                                ? "bg-green-100 text-green-700" 
                                : "bg-red-100 text-red-700"
                            }`}>
                              {row.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6">
                  <p className="font-sans text-white text-center mb-3">
                    <span className="text-[#EC0000] font-bold">Key Principle:</span> LumiqAI enhances clarity, not control. Santander retains 100% ownership of underwriting, routing, approvals, declines, offer logic, and credit policy.
                  </p>
                  <p className="font-sans text-white/70 text-sm text-center">
                    Just like AutoFi empowers dealers without replacing their decision process, LumiqAI empowers customers without replacing Santander's credit policies.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — IN-APP CREDIT VISIBILITY */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#EC0000] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  In-App Credit Visibility (The Missing Module at Santander)
                </h2>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
                  Santander educates users on credit in its learning center—but{" "}
                  <span className="text-gray-900 font-semibold">does not provide a native credit score monitoring panel</span>{" "}
                  inside its banking app or business banking UI.
                </p>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8">
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">Competitor comparison:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {competitorData.map((comp, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCompetitorModal(idx)}
                        className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-[#EC0000] hover:bg-white transition-all cursor-pointer"
                      >
                        <p className="font-sans text-gray-900 font-semibold">{comp.name}</p>
                        <p className="font-sans text-sm text-[#EC0000] font-medium">→ {comp.product}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Auto Loan Pre-Qual Feature Callout */}
                <div className="bg-gradient-to-br from-[#EC0000] to-[#CC0000] rounded-2xl p-6 md:p-8 mb-8 shadow-xl">
                  <div className="flex flex-col lg:flex-row items-start gap-6">
                    {/* Left: Description */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                          <img src={carLoanIcon} alt="Auto Loan" className="w-8 h-8 invert" />
                        </div>
                        <h3 className="font-sans text-xl font-bold text-white">
                          Auto Loan Pre-Qual — Built Into the Credit Journey Widget
                        </h3>
                      </div>
                      <p className="font-sans text-white/90 text-base leading-relaxed mb-4">
                        LumiqAI embeds an <span className="font-bold text-white">Auto Loan Pre-Qualification application</span> directly within the consumer app's credit journey widget. Customers can check if they're pre-approved and apply—without leaving the app.
                      </p>
                      <div className="bg-white/10 rounded-xl p-4 border border-white/20 mb-4">
                        <p className="font-sans text-white font-semibold text-center">
                          <span className="text-white/70">The insight:</span> Consumers are already on the app. If they see they're pre-approved → <span className="underline">they apply</span>.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full font-medium">Zero friction</span>
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full font-medium">In-app experience</span>
                        <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full font-medium">Drive × AutoFi mechanics</span>
                      </div>
                    </div>

                    {/* Right: Widget Mockup */}
                    <div className="w-full lg:w-80 shrink-0">
                      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                        {/* Widget Header */}
                        <div className="bg-gradient-to-r from-[#EC0000] to-[#CC0000] px-4 py-3 flex items-center gap-3">
                          <img src={carLoanIcon} alt="Auto Loan" className="w-6 h-6 invert" />
                          <span className="font-sans text-white font-bold text-sm">Auto Loan Pre-Qualification</span>
                        </div>
                        
                        {/* Pre-Approval Status */}
                        <div className="p-4 border-b border-gray-100">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-sans text-gray-500 text-xs uppercase tracking-wider">Your Status</span>
                            <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                              <BadgeCheck className="w-3 h-3" />
                              Pre-Approved
                            </div>
                          </div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-sans text-3xl font-bold text-gray-900">$35,000</span>
                            <span className="font-sans text-gray-500 text-sm">max approval</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 text-gray-600 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>Rate from <span className="font-semibold text-gray-900">4.99% APR</span></span>
                          </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="px-4 py-3 bg-gray-50 grid grid-cols-2 gap-3">
                          <div className="text-center">
                            <p className="font-sans text-xs text-gray-500">Credit Score</p>
                            <p className="font-sans text-lg font-bold text-[#EC0000]">724</p>
                          </div>
                          <div className="text-center">
                            <p className="font-sans text-xs text-gray-500">Est. Payment</p>
                            <p className="font-sans text-lg font-bold text-gray-900">$498/mo</p>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="p-4">
                          <button className="w-full bg-[#EC0000] hover:bg-[#CC0000] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
                            <Car className="w-5 h-5" />
                            Apply Now
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <p className="font-sans text-center text-gray-400 text-xs mt-2">No impact to credit score</p>
                        </div>

                        {/* Footer */}
                        <div className="bg-gray-900 px-4 py-2 flex items-center justify-center gap-2">
                          <span className="text-gray-400 text-xs">Powered by</span>
                          <span className="text-white font-semibold text-xs">LumiqAI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl border border-green-200 p-6 mb-8">
                  <p className="font-sans text-gray-700 mb-3">
                    <span className="text-green-700 font-bold">Insight:</span> All major banks provide credit insight tools for consumers, but{" "}
                    <span className="text-gray-900 font-semibold">none provide business credit monitoring for SMBs</span>. This gives Santander the{" "}
                    <span className="text-green-700 font-bold">first-mover advantage</span> in SMB credit visibility if deployed via LumiqAI.
                  </p>
                  <p className="font-sans text-gray-600 text-sm border-t border-green-200 pt-3">
                    <span className="font-semibold">The AutoFi/Drive parallel:</span> Just as Drive gave Santander a competitive edge in auto financing through transparency, LumiqAI delivers the same advantage for credit cards and SMB loans.
                  </p>
                </div>

                <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">Widget surfaces:</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: LineChart, title: "VantageScore (Consumer)" },
                    { icon: Building2, title: "Business Credit Score", desc: "(Experian/FSR composite)" },
                    { icon: Target, title: "Fundability meter" },
                    { icon: BarChart3, title: "Eligibility proximity" },
                    { icon: Zap, title: "Next-best-actions" },
                    { icon: Settings, title: "Product recommendations" },
                    { icon: Eye, title: "Soft pre-approval insights", desc: "using deposit + bureau + registry signals" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3 shadow-sm">
                      <div className="w-10 h-10 rounded-lg bg-[#EC0000]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-[#EC0000]" />
                      </div>
                      <div>
                        <p className="font-sans text-gray-900 font-semibold">{item.title}</p>
                        {item.desc && <p className="font-sans text-xs text-gray-500">{item.desc}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — DEPLOYMENT FLOW */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#EC0000] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  Deployment Flow — How a Customer Journey Converts Better
                </h2>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* WITHOUT LumiqAI */}
                  <div>
                    <h3 className="font-sans text-xl font-bold text-red-600 mb-6 flex items-center gap-2">
                      <XCircle className="w-6 h-6" />
                      Without LumiqAI
                    </h3>
                    <div className="bg-red-50 rounded-2xl border border-red-200 p-6 h-full">
                      <div className="bg-white rounded-xl p-4 mb-6 border-2 border-dashed border-red-200">
                        <p className="font-sans text-sm text-red-400 text-center mb-3">Current experience</p>
                        <div className="flex justify-center gap-6">
                          {/* Consumer iPhone Mockup */}
                          <div className="flex flex-col items-center flex-1 max-w-[180px]">
                            <div className="relative w-full">
                              {/* iPhone Frame */}
                              <div className="relative bg-gray-900 rounded-[24px] p-2 shadow-2xl">
                                {/* Notch */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                                {/* Screen */}
                                <div className="rounded-[18px] overflow-hidden bg-white aspect-[9/19.5]">
                                  <img 
                                    src={consumerAppScreenshot} 
                                    alt="Consumer banking app - single balance" 
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-3 font-semibold">Consumer</p>
                            <p className="text-xs text-red-500">1 balance shown</p>
                          </div>
                          
                          {/* Business iPhone Mockup */}
                          <div className="flex flex-col items-center flex-1 max-w-[180px]">
                            <div className="relative w-full">
                              {/* iPhone Frame */}
                              <div className="relative bg-gray-900 rounded-[24px] p-2 shadow-2xl">
                                {/* Notch */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-2xl z-10"></div>
                                {/* Screen */}
                                <div className="rounded-[18px] overflow-hidden bg-white aspect-[9/19.5]">
                                  <img 
                                    src={businessAppScreenshot} 
                                    alt="Business banking app - 3 balances" 
                                    className="w-full h-full object-cover object-top"
                                  />
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-3 font-semibold">Business</p>
                            <p className="text-xs text-red-500">3 balances shown</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          "User researches credit externally",
                          "No in-app score monitoring",
                          "No fundability guidance",
                          "No internal prequal for cards or SMB loans",
                          "User abandons application due to uncertainty",
                          "User leaks to competitors offering credit visibility"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                            <span className="font-sans text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* WITH LumiqAI */}
                  <div>
                    <h3 className="font-sans text-xl font-bold text-green-600 mb-6 flex items-center gap-2">
                      <CheckCircle2 className="w-6 h-6" />
                      With LumiqAI
                    </h3>
                    <div className="bg-green-50 rounded-2xl border border-green-200 p-6 h-full">
                      <div className="bg-white rounded-xl p-8 mb-6 text-center border-2 border-dashed border-green-200">
                        <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-2" />
                        <p className="font-sans text-sm text-green-500">Enhanced experience</p>
                      </div>
                      <div className="space-y-3">
                        {[
                          "User sees consumer + business score inside Santander app",
                          "Fundability is measured, explainable, and live",
                          "Prequal confidence increases",
                          "Application completion increases",
                          "Product CTR increases",
                          "CAC reduces",
                          "Churn reduces",
                          "SMB loan conversion increases",
                          "Credit card conversion increases",
                          "Offer acceptance increases"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span className="font-sans text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#EC0000] to-[#CC0000] rounded-2xl p-6 mt-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <p className="font-sans text-white font-semibold text-lg">
                        This mirrors the <span className="font-bold">AutoFi/Drive success pattern</span>—instant eligibility clarity—but{" "}
                        <span className="font-bold underline">extends it to all lending products</span>.
                      </p>
                      <p className="font-sans text-white/80 text-sm mt-2">
                        3.1M+ Drive customers already experience this with auto loans. Now bring it to credit cards + SMB.
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-xl px-4 py-2 flex items-center gap-2">
                      <span className="text-white/70 text-sm">Powered by</span>
                      <span className="text-white font-bold">AutoFi Model</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — SECURITY & COMPLIANCE */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#EC0000] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  Security & Compliance
                </h2>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="font-sans text-lg text-gray-600 mb-8 leading-relaxed">
                  LumiqAI is built to pass regulated institutional due diligence:
                </p>

                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-8">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 border-gray-200">
                        <TableHead className="font-sans text-gray-900 font-bold py-4">Security Feature</TableHead>
                        <TableHead className="font-sans text-gray-900 font-bold text-center py-4">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { feature: "AES-256 encryption at rest", status: "Implemented" },
                        { feature: "TLS 1.2+ encrypted data transmission", status: "Standard" },
                        { feature: "Field-level tokenization", status: "Active" },
                        { feature: "SAML + SCIM for identity & access mgmt", status: "Supported" },
                        { feature: "RBAC (Role-based access control)", status: "Supported" },
                        { feature: "Audit trails + observability", status: "Live + real-time" },
                        { feature: "FCRA + GLBA compliance logic", status: "Embedded" },
                        { feature: "Zero-Trust architecture", status: "Design-first" },
                        { feature: "SOC 2 Type II alignment", status: "In process" }
                      ].map((row, idx) => (
                        <TableRow key={idx} className="border-gray-200">
                          <TableCell className="font-sans text-gray-600 py-4">{row.feature}</TableCell>
                          <TableCell className="text-center py-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                              <Shield className="w-3.5 h-3.5" />
                              {row.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6">
                  <p className="font-sans text-white text-center">
                    <span className="text-green-400 font-bold">Outcome:</span> Secure, compliant, modular, and Santander-pilot-ready without credential exposure or policy disruption.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — REVENUE IMPACT */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#EC0000] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">6</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                  The Revenue Impact Santander Stands to Gain
                </h2>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8">
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">Industry abandonment benchmark:</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="font-sans text-gray-600">
                        <span className="text-gray-900 font-semibold">60%+</span> of digital applicants abandon loan or card apps before submission
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <span className="font-sans text-gray-600">
                        <span className="text-gray-900 font-semibold">67%</span> abandonment on personal loans alone can equate to{" "}
                        <span className="text-[#EC0000] font-bold">$100M+ lost interest revenue</span> annually at a major bank's scale
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="font-sans text-gray-600 mb-4">
                      If Santander serviced 3M–4M consumer auto shoppers annually, and 45% research financing before purchase, and 60% apply for pre-approval, then:
                    </p>
                    <Table>
                      <TableHeader>
                        <TableRow className="border-gray-200">
                          <TableHead className="font-sans text-gray-900 font-bold">Stage</TableHead>
                          <TableHead className="font-sans text-gray-900 font-bold text-right">Conservative Range</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-gray-200">
                          <TableCell className="font-sans text-gray-600">Annual shoppers</TableCell>
                          <TableCell className="text-right font-sans text-gray-900 font-semibold">300K–600K</TableCell>
                        </TableRow>
                        <TableRow className="border-gray-200">
                          <TableCell className="font-sans text-gray-600">Financing researchers</TableCell>
                          <TableCell className="text-right font-sans text-gray-900 font-semibold">135K–270K</TableCell>
                        </TableRow>
                        <TableRow className="border-gray-200">
                          <TableCell className="font-sans text-gray-600">Pre-approval applicants</TableCell>
                          <TableCell className="text-right font-sans text-gray-900 font-semibold">81K–162K</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm mb-8">
                  <h3 className="font-sans text-xl font-bold text-gray-900 mb-6">Projected uplift modeled on peer bank results:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                      <p className="font-sans text-4xl font-bold text-green-600 mb-2">12–17%</p>
                      <p className="font-sans text-gray-600">lift in product conversion after credit visibility deployment</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                      <p className="font-sans text-4xl font-bold text-green-600 mb-2">25%</p>
                      <p className="font-sans text-gray-600">higher retention when credit transparency is embedded</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#EC0000] to-[#CC0000] rounded-2xl p-8">
                  <p className="font-sans text-xl text-white font-semibold text-center mb-4">
                    Santander stands to gain <span className="font-bold">$300M+ incremental lending value</span> over 3 years with a{" "}
                    <span className="font-bold">3.8× ROI</span> if SMB + consumer lending modules adopt LumiqAI.
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-4 border-t border-white/20">
                    <span className="font-sans text-white/70 text-sm">Modeled on</span>
                    <span className="bg-white/20 rounded-lg px-3 py-1 text-white font-semibold text-sm">Drive × AutoFi Success</span>
                    <span className="font-sans text-white/70 text-sm">with 3.1M+ customer baseline</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 — SUMMARY */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Summary — Why This is a Strategic Win for Santander
              </h2>
              <p className="font-sans text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                The same engagement mechanics that made <span className="text-gray-900 font-semibold">Drive × AutoFi</span> successful for 3.1M+ auto customers—now applied across your entire lending portfolio.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { text: "No bank currently offers business credit monitoring inside lending journeys for SMBs", tag: "First-Mover" },
                  { text: "Santander gets first-mover advantage—just like Drive did for auto financing", tag: "Proven" },
                  { text: "LumiqAI mirrors proven AutoFi/Drive engagement success → applies it to credit cards + SMB loans", tag: "AutoFi Model" },
                  { text: "Fixes measurable leakage with the same transparency mechanics that work for Drive", tag: "Drive Proven" },
                  { text: "Increases CTR → application completion → offer acceptance → funded loans", tag: "Conversion" },
                  { text: "Reduces CAC + churn through proactive credit visibility", tag: "Efficiency" },
                  { text: "Strengthens risk transparency without replacing Santander's decisioning", tag: "Compliant" },
                  { text: "Creates explainable audit trails—same FCRA/GLBA compliance as AutoFi", tag: "Audit Ready" },
                  { text: "Plug-and-play deployment inside Santander digital channels", tag: "Easy Deploy" },
                  { text: "Symphony-like funnel logic where every customer question is answered instantly", tag: "Experience" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 flex items-start gap-3 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#EC0000] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <span className="font-sans text-gray-600">{item.text}</span>
                      <span className="ml-2 inline-flex px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">{item.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 — CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Capture Lost Revenue?
              </h2>
              <p className="font-sans text-xl text-gray-600 mb-10">
                20-minute pilot integration call → Leakage audit PDF → Mock implementation plan → Santander revenue seizure.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg"
                >
                  Book 20 Minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-xl"
                >
                  Send Audit PDF
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 lg:hidden z-50 shadow-lg">
          <Button 
            className="w-full bg-[#EC0000] hover:bg-[#CC0000] text-white font-bold py-6 rounded-xl"
          >
            Book Pilot Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

      </div>
    </PageLayout>
  );
}
