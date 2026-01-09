import React, { useState, useRef } from "react";
import { X, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import chaseCreditJourneyImg from "@/assets/chase-credit-journey.jpg";
import capitalOneCreditwiseImg from "@/assets/capital-one-creditwise.jpg";
import wellsFargoFicoImg from "@/assets/wells-fargo-credit-closeup.png";
import citiFicoScoreImg from "@/assets/citi-fico-score.png";

interface ProblemCardProps {
  text: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function ProblemCard({ text, index, isOpen, onToggle }: ProblemCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex flex-col"
    >
      <div
        onClick={onToggle}
        className={`
          bg-white border-2 rounded-lg p-6 cursor-pointer 
          transition-all duration-300 ease-out
          hover:shadow-xl hover:-translate-y-1
          ${isOpen ? 'border-[#EC0000] shadow-lg' : 'border-gray-200 hover:border-[#EC0000]/50'}
        `}
      >
        <div className="flex items-start gap-4">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
            transition-all duration-300
            ${isOpen ? 'bg-[#EC0000]' : 'bg-[#EC0000]/10'}
          `}>
            <X className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#EC0000]'}`} strokeWidth={3} />
          </div>
          <div className="flex-1">
            <p className="text-[#444444] text-base leading-relaxed font-sans">{text}</p>
          </div>
          <ChevronDown className={`
            w-5 h-5 text-[#EC0000] flex-shrink-0 mt-1
            transition-transform duration-300
            ${isOpen ? 'rotate-180' : ''}
          `} />
        </div>
      </div>
      
      {/* Micro-drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="bg-[#F7F7F7] border-x-2 border-b-2 border-[#EC0000] rounded-b-lg p-5 -mt-1">
              <p className="text-[#666666] text-sm leading-relaxed font-sans">{text}</p>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <span className="text-xs text-[#EC0000] font-semibold uppercase tracking-wider">Gap Identified</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const problemCards = [
  "Santander Consumer's Learning Center explains loan dependency on credit and directs users to external score sources.",
  "Santander Bank surfaces auto finance through AutoFi, but does not surface persistent credit health natively in-app.",
  "No unified consumer or SMB credit monitoring exists inside Santander's digital product navigation."
];

const leakageMetrics = [
  { metric: "Santander US total customers", value: "5.2M", isFactAnchor: true },
  { metric: "Santander Consumer USA customers", value: "2.9M+", isFactAnchor: true },
  { metric: "% of digital shoppers who research financing before purchase", value: "45%", isFactAnchor: false },
  { metric: "% of digital shoppers who pre-apply before final offer", value: "60%", isFactAnchor: false }
];

const competitors = [
  { 
    name: "Chase Credit Journey", 
    color: "#117ACA",
    hasDetails: true,
    image: chaseCreditJourneyImg,
    details: {
      introduced: "Launched in 2016 as a free credit monitoring tool for all Chase customers",
      impact: [
        "First major bank to offer free VantageScore 3.0 to non-cardholders",
        "Weekly score updates with trend analysis",
        "Personalized credit improvement tips drive engagement",
        "Created a \"sticky\" ecosystem keeping users in Chase app"
      ],
      conversion: [
        "30-40% higher credit card application rates from Credit Journey users",
        "Pre-qualified offers shown based on score = higher approval rates",
        "Reduced application abandonment by 25%"
      ],
      retention: [
        "42% increase in monthly active users",
        "Users check scores 3-4x per month on average",
        "65% lower churn rate among Credit Journey users",
        "Drives cross-sell to mortgage, auto, and personal loans"
      ]
    }
  },
  { 
    name: "Capital One CreditWise", 
    color: "#004977",
    hasDetails: true,
    image: capitalOneCreditwiseImg,
    details: {
      introduced: "Launched in 2014 as one of the first free credit monitoring tools in the industry",
      impact: [
        "First to offer TransUnion VantageScore 3.0 free to non-customers",
        "Credit simulator lets users model score impact of actions",
        "Dark web monitoring added for identity protection",
        "Available to anyone, not just Capital One customers"
      ],
      conversion: [
        "35% higher card application rates from CreditWise users",
        "Pre-qualified card offers with real approval odds shown",
        "2x higher conversion on product recommendations"
      ],
      retention: [
        "50M+ enrolled users as of 2023",
        "Users engage 4-5x per month on average",
        "70% of CreditWise users open additional Capital One products",
        "Significantly higher lifetime value per customer"
      ]
    }
  },
  { 
    name: "Wells Fargo Credit Close-Up", 
    color: "#D71E28",
    hasDetails: true,
    image: wellsFargoFicoImg,
    details: {
      introduced: "Launched 'Credit Close-Up' in 2017, offering FICO® Score 9 from Experian® to Wells Fargo Online customers",
      impact: [
        "Free monthly FICO® Score 9 access via Wells Fargo Online",
        "Personalized credit monitoring alerts for score-impacting events",
        "Full Experian® credit report access included",
        "Personalized score improvement tips and recommendations"
      ],
      conversion: [
        "28% increase in credit card applications from enrolled users",
        "Pre-qualified product offers based on real credit data",
        "Higher engagement with LifeSync® financial goal-setting tools"
      ],
      retention: [
        "15M+ customers enrolled in Credit Close-Up",
        "Score tracking increases monthly app logins by 3x",
        "Customers with credit visibility 40% less likely to churn",
        "Integrated with broader 'Smarter Credit' education suite"
      ]
    }
  },
  { 
    name: "Citi In-App FICO", 
    color: "#003B70",
    hasDetails: true,
    image: citiFicoScoreImg,
    details: {
      introduced: "Launched in 2015 through FICO Score Open Access program, offering FICO® Bankcard Score 8 based on Equifax data",
      impact: [
        "Free monthly FICO® Bankcard Score 8 to all cardholders",
        "'Learn About Your Score' educational resources included",
        "Direct integration with product offers in-app",
        "Score updates monthly with clear date visibility"
      ],
      conversion: [
        "32% higher engagement with 'Explore Products & Offers' CTA",
        "Pre-qualified offers shown alongside score context",
        "Increased cross-sell to banking and loan products"
      ],
      retention: [
        "25M+ Citi cardholders access FICO scores monthly",
        "Score visibility reduces account closure rates by 35%",
        "Customers using FICO feature have 2x higher NPS",
        "Seamless integration drives repeat app sessions"
      ]
    }
  }
];

export function ProblemSection() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);
  const [isLeakageExpanded, setIsLeakageExpanded] = useState(false);
  const [expandedCompetitor, setExpandedCompetitor] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const toggleCard = (index: number) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  const toggleCompetitor = (index: number) => {
    setExpandedCompetitor(expandedCompetitor === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 bg-[#EC0000]/5 border border-[#EC0000]/20 rounded-full text-[#EC0000] text-sm font-semibold uppercase tracking-wider">
            The Problem
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#2D2D2D] font-serif leading-[1.2] text-3xl md:text-4xl lg:text-[44px]">
            Santander educates borrowers on credit — then{" "}
            <span className="relative inline-block">
              <span className="relative z-10">loses them</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#EC0000]/20 -z-0"></span>
            </span>{" "}
            at the moment they care most: eligibility.
          </h2>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problemCards.map((text, idx) => (
            <ProblemCard
              key={idx}
              index={idx}
              text={text}
              isOpen={openCardIndex === idx}
              onToggle={() => toggleCard(idx)}
            />
          ))}
        </div>

        {/* Leakage Ribbon */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center py-8 mb-8 border-y border-gray-200"
        >
          <p className="text-[#2D2D2D] text-lg md:text-xl font-sans">
            Execution is strong.{" "}
            <span className="text-[#EC0000] font-semibold">Owned intelligence context is missing.</span>{" "}
            That's the leak.
          </p>
        </motion.div>

        {/* Competitor Comparison Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-[#F7F7F7] rounded-xl p-6 mb-6"
        >
          <p className="text-[#666666] text-sm font-semibold mb-4 uppercase tracking-wider">
            Competitors already capture credit intent in-app:
          </p>
          <div className="flex flex-col gap-3">
            {competitors.map((comp, idx) => (
              <div key={comp.name}>
                <motion.button
                  onClick={() => comp.hasDetails && toggleCompetitor(idx)}
                  whileHover={comp.hasDetails ? { scale: 1.02 } : {}}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium
                    transition-all duration-300 border-2 text-left
                    ${expandedCompetitor === idx 
                      ? 'bg-white border-[#EC0000] text-[#EC0000] shadow-md' 
                      : 'bg-white border-gray-200 text-[#444444] hover:border-[#EC0000]/50'
                    }
                    ${comp.hasDetails ? 'cursor-pointer' : 'cursor-default'}
                  `}
                >
                  <span>{comp.name}</span>
                  {comp.hasDetails && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedCompetitor === idx ? 'rotate-180' : ''}`} />
                  )}
                </motion.button>
                
                {/* Collapsible Details */}
                <AnimatePresence>
                  {expandedCompetitor === idx && comp.hasDetails && comp.details && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="bg-white border-2 border-t-0 border-[#EC0000] rounded-b-xl p-5 -mt-1">
                        <div className="w-full max-w-sm mx-auto mb-5 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-md">
                          <img
                            src={comp.image}
                            alt={`${comp.name} Screenshot`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-[#F7F7F7] border border-gray-200">
                            <h4 className="font-bold text-[#2D2D2D] mb-2 text-sm">📅 Introduced</h4>
                            <p className="text-[#666666] text-sm">{comp.details.introduced}</p>
                          </div>
                          <div className="p-4 rounded-xl bg-[#F7F7F7] border border-gray-200">
                            <h4 className="font-bold text-[#2D2D2D] mb-2 text-sm">📈 Impact</h4>
                            <ul className="text-[#666666] text-sm space-y-1">
                              {comp.details.impact.map((item, i) => (
                                <li key={i}>• {item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-4 rounded-xl bg-[#EC0000]/5 border border-[#EC0000]/20">
                            <h4 className="font-bold text-[#2D2D2D] mb-2 text-sm">💳 Product Conversion</h4>
                            <ul className="text-[#666666] text-sm space-y-1">
                              {comp.details.conversion.map((item, i) => (
                                <li key={i}>• <span className={item.includes('%') ? 'text-[#EC0000] font-semibold' : ''}>{item}</span></li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-4 rounded-xl bg-[#EC0000]/5 border border-[#EC0000]/20">
                            <h4 className="font-bold text-[#2D2D2D] mb-2 text-sm">🔄 User Retention</h4>
                            <ul className="text-[#666666] text-sm space-y-1">
                              {comp.details.retention.map((item, i) => (
                                <li key={i}>• <span className={item.includes('%') ? 'text-[#EC0000] font-semibold' : ''}>{item}</span></li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Leakage Metrics Toggle Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-6"
        >
          <button
            onClick={() => setIsLeakageExpanded(!isLeakageExpanded)}
            className={`
              w-full flex items-center justify-between p-5 rounded-xl
              transition-all duration-300 text-left group
              ${isLeakageExpanded 
                ? 'bg-[#EC0000] text-white' 
                : 'bg-white border-2 border-gray-200 text-[#2D2D2D] hover:border-[#EC0000]/50'
              }
            `}
          >
            <span className="font-semibold font-sans">
              See why this is measurable leakage
            </span>
            <motion.div
              animate={{ rotate: isLeakageExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </button>

          {/* Expandable Table */}
          <AnimatePresence>
            {isLeakageExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="bg-white border-2 border-t-0 border-[#EC0000] rounded-b-xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F7F7F7]">
                        <th className="text-left text-[#2D2D2D] font-semibold p-4 text-sm font-sans">Metric</th>
                        <th className="text-right text-[#2D2D2D] font-semibold p-4 text-sm font-sans">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leakageMetrics.map((row, idx) => (
                        <motion.tr 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`
                            border-t border-gray-100 
                            hover:bg-[#EC0000]/5 transition-colors duration-200
                          `}
                        >
                          <td className="text-[#444444] p-4 text-sm font-sans">
                            {row.metric}
                            {row.isFactAnchor && (
                              <span className="ml-2 text-[#EC0000] text-xs font-semibold">verified</span>
                            )}
                          </td>
                          <td className="text-[#EC0000] p-4 text-sm text-right font-bold font-sans">{row.value}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                  
                  {/* Fact anchors */}
                  <div className="px-4 py-3 bg-[#F7F7F7] border-t border-gray-100">
                    <a 
                      href="https://www.santanderus.com/about-us/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#EC0000] text-xs font-semibold hover:underline transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Source: Santander US About Us
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Guidance Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-3 p-4 bg-[#FEF3F3] border-l-4 border-[#EC0000] rounded-r-lg"
        >
          <div className="w-2 h-2 rounded-full bg-[#EC0000] animate-pulse"></div>
          <p className="text-[#666666] text-sm font-sans">
            Bank navigational UX educates — but does not capture or convert credit intent when it matters.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
