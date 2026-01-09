import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Fingerprint, 
  TrendingUp, 
  Building2, 
  PiggyBank, 
  Route,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBgImg from "@/assets/hero-bg.jpg";

interface SignalIcon {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  gaugeLabel: string;
}

const signalIcons: SignalIcon[] = [
  {
    id: "identity",
    icon: Fingerprint,
    label: "Identity & Registry Signals",
    description: "Unified identity verification across UEI, SAM.gov registry, and KYC compliance layers. Ensures borrower authenticity before decisioning begins.",
    gaugeLabel: "Identity verified via registry + KYC signals"
  },
  {
    id: "vantage",
    icon: TrendingUp,
    label: "Personal VantageScore 3.0",
    description: "Soft pull credit bands shown in-app without impacting credit score. Real-time consumer credit visibility embedded in Santander's digital channels.",
    gaugeLabel: "Soft pull credit bands shown in-app"
  },
  {
    id: "business",
    icon: Building2,
    label: "Business Credit File Health",
    description: "D&B + Experian Business + registry completeness signals combined into a unified business fundability score for SMB lending decisions.",
    gaugeLabel: "D&B + Experian + registry completeness"
  },
  {
    id: "deposit",
    icon: PiggyBank,
    label: "Deposit Stability Index",
    description: "Deposit behavior patterns analyzed to determine cash flow stability. Higher approval odds via deposit signals that demonstrate repayment capacity.",
    gaugeLabel: "Higher approval odds via deposit signals"
  },
  {
    id: "routing",
    icon: Route,
    label: "Offer Eligibility Routing",
    description: "Intelligent product recommendation engine that routes borrowers to optimal offers based on composite credit readiness signals.",
    gaugeLabel: "Smart routing to optimal product offers"
  }
];

function FundabilityGauge({ hoveredSignal }: { hoveredSignal: SignalIcon | null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const target = 90;
      const duration = 900;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const t = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - t, 3);
        start = target * easeOut;
        setProgress(start);
        if (t < 1) {
          requestAnimationFrame(animate);
        } else {
          setProgress(target);
        }
      };
      animate();
    }, 300);
    return () => clearTimeout(timer);
  }, [isInView]);

  const radius = 90;
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-[220px] h-[120px] md:w-[260px] md:h-[140px]">
        <svg 
          viewBox="0 0 200 110" 
          className="w-full h-full"
        >
          {/* Background arc */}
          <path
            d="M 10 100 A 90 90 0 0 1 190 100"
            fill="none"
            stroke="#E5E5E5"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 10 100 A 90 90 0 0 1 190 100"
            fill="none"
            stroke="#EC0000"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pt-8">
          <span className="text-[42px] md:text-[52px] font-bold text-[#EC0000] font-sans">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
      
      {/* Label */}
      <p className="text-[14px] md:text-[16px] text-[#444444] font-medium mt-3 text-center max-w-[280px] font-sans">
        Approval likelihood improves by 30–45% with LumiqAI
      </p>
      
      {/* Dynamic sub-label based on hover */}
      <motion.p
        key={hoveredSignal?.id || 'default'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[13px] text-[#666666] mt-2 h-5 text-center font-sans"
      >
        {hoveredSignal?.gaugeLabel || "Hover signals to see impact"}
      </motion.p>
    </div>
  );
}

function SignalIconButton({ 
  signal, 
  isExpanded, 
  onToggle,
  onHover 
}: { 
  signal: SignalIcon; 
  isExpanded: boolean;
  onToggle: () => void;
  onHover: (signal: SignalIcon | null) => void;
}) {
  const Icon = signal.icon;
  
  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => onHover(signal)}
      onMouseLeave={() => onHover(null)}
      className="flex flex-col items-center gap-2 group transition-all duration-200"
    >
      <div className={`
        relative p-3 rounded-xl transition-all duration-200 border-2
        ${isExpanded 
          ? 'bg-[#EC0000]/10 border-[#EC0000]' 
          : 'bg-white border-gray-200 group-hover:border-[#EC0000]/50 group-hover:shadow-md'
        }
      `}>
        <Icon className={`
          w-6 h-6 transition-all duration-200
          ${isExpanded 
            ? 'text-[#EC0000]' 
            : 'text-[#666666] group-hover:text-[#EC0000]'
          }
        `} />
      </div>
      <span className={`
        text-[11px] md:text-xs font-semibold text-center max-w-[80px] md:max-w-[100px] leading-tight transition-all duration-200 font-sans
        ${isExpanded ? 'text-[#EC0000]' : 'text-[#444444] group-hover:text-[#EC0000]'}
      `}>
        {signal.label}
      </span>
    </button>
  );
}

export function HeroSection() {
  const [expandedSignal, setExpandedSignal] = useState<string | null>(null);
  const [hoveredSignal, setHoveredSignal] = useState<SignalIcon | null>(null);

  const toggleSignal = (id: string) => {
    setExpandedSignal(prev => prev === id ? null : id);
  };

  const expandedData = signalIcons.find(s => s.id === expandedSignal);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden pt-16 md:pt-20 pb-12 md:pb-16 px-6 md:px-12 lg:px-16">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      />
      {/* White overlay for fading effect */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#EC0000]/5 border border-[#EC0000]/20 rounded-full text-[#EC0000] text-sm font-semibold uppercase tracking-wider font-sans">
                LumiqAI for Santander
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[32px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#2D2D2D] font-serif"
            >
              Stop Credit Shoppers From{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#EC0000]">Leaving</span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute bottom-2 left-0 w-full h-2 bg-[#EC0000]/15 -z-0 origin-left"
                />
              </span>{" "}
              Santander.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-[#666666] max-w-[90%] lg:max-w-[85%] font-sans leading-relaxed"
            >
              LumiqAI embeds Consumer VantageScore 3.0, Business credit intelligence, deposit stability, and soft-prequal orchestration directly into Santander's digital channels—boosting funded conversions across auto, cards, and SMB lending.
            </motion.p>

            {/* Signal Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-4"
            >
              <p className="text-[#666666] text-sm font-semibold uppercase tracking-wider mb-4 font-sans">
                Signal Taxonomy
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 lg:gap-5">
                {signalIcons.map((signal) => (
                  <SignalIconButton
                    key={signal.id}
                    signal={signal}
                    isExpanded={expandedSignal === signal.id}
                    onToggle={() => toggleSignal(signal.id)}
                    onHover={setHoveredSignal}
                  />
                ))}
              </div>

              {/* Micro-drawer */}
              <AnimatePresence>
                {expandedData && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 rounded-xl bg-[#F7F7F7] border-2 border-[#EC0000]/20 max-w-[90%]">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EC0000]/10 flex items-center justify-center flex-shrink-0">
                          {React.createElement(expandedData.icon, { className: "w-4 h-4 text-[#EC0000]" })}
                        </div>
                        <div>
                          <p className="text-[#2D2D2D] font-semibold text-sm mb-1 font-sans">{expandedData.label}</p>
                          <p className="text-[15px] text-[#666666] leading-relaxed font-sans">
                            {expandedData.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4"
            >
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold text-[16px] px-8 py-4 h-auto rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group font-sans"
                >
                  Contact Sales
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-sm text-[#999999] font-medium pt-2 font-sans"
            >
              Plug-in Module. No Core Replacement. No Raw Credentials Stored.
            </motion.p>
          </div>

          {/* Right Column - Fundability Gauge + Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Fundability Gauge Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg w-full max-w-sm">
              <FundabilityGauge hoveredSignal={hoveredSignal} />
            </div>

            {/* Image Placeholder Frame */}
            <div 
              className="w-full max-w-sm aspect-[4/3] rounded-2xl flex flex-col items-center justify-center bg-[#F7F7F7] border-2 border-dashed border-gray-300 hover:border-[#EC0000]/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-[#EC0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[14px] text-[#666666] text-center px-6 font-sans font-medium">
                Insert WITH LumiqAI mockup here
              </p>
              <p className="text-[12px] text-[#999999] mt-1 font-sans">
                Credit panel preview
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
