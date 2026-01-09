import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LeakageFunnelModule } from "@/components/LeakageFunnelModule";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  XCircle,
  Clock,
  DollarSign,
  Building2,
  CreditCard,
  LineChart,
  Gauge,
  FileCheck,
  Eye,
  ChevronRight,
  Activity,
  Car,
  Briefcase,
  TrendingDown,
  ExternalLink,
  Percent,
  Timer,
  MousePointerClick,
  X
} from "lucide-react";
import chaseCreditJourneyImg from "@/assets/chase-credit-journey.jpg";
import capitalOneCreditwiseImg from "@/assets/capital-one-creditwise.jpg";
import wellsFargoFicoImg from "@/assets/wells-fargo-credit-closeup.png";
import citiFicoScoreImg from "@/assets/citi-fico-score.png";
import caseStudyBgImg from "@/assets/case-study-bg.jpg";

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
    name: "Wells Fargo Close-Up",
    color: "#D71E28",
    image: wellsFargoFicoImg,
    introduced: "Launched 2017",
    keyMetric: "28% increase in card applications",
    retention: "15M+ customers enrolled"
  },
  {
    name: "Citi FICO in-app",
    color: "#003B70",
    image: citiFicoScoreImg,
    introduced: "Launched 2015",
    keyMetric: "32% higher product engagement",
    retention: "25M+ cardholders access monthly"
  }
];

const revenueProjections = [
  { 
    icon: Car, 
    title: "Consumer Auto Loans", 
    year1: "$60–100M", 
    year3: "$180–350M", 
    note: "Reduce post-approval leakage to competitors with in-app credit journey",
    modelingBasis: "AutoFi Performance Extrapolation",
    logic: [
      "SC's Drive® pre-qual converts at 16% but loses 23% of approved customers to competitors post-decision",
      "Adding credit visibility retains customers through the full journey—from consideration to funding",
      "Model assumes 40-60% reduction in post-approval leakage through continuous engagement"
    ],
    benchmarks: [
      { company: "Capital One Auto Navigator", result: "52% higher conversion vs. traditional channels", source: "Capital One 2023 Investor Day" },
      { company: "Chase Auto", result: "34% reduction in customer attrition post-approval", source: "J.D. Power 2023 Auto Finance Study" },
      { company: "Ally Auto", result: "28% increase in repeat financing customers", source: "Ally Financial Annual Report 2023" }
    ]
  },
  { 
    icon: CreditCard, 
    title: "Consumer & Commercial Cards", 
    year1: "$35–60M", 
    year3: "$100–200M", 
    note: "Based on 30% adoption lift comparable to Wells Fargo",
    modelingBasis: "Wells Fargo FICO Score Program",
    logic: [
      "Wells Fargo's FICO Score feature drove 28-32% increase in card applications within 18 months",
      "Credit visibility creates 'consideration moments'—users checking scores are 3.2× more likely to apply",
      "SC's Ultimate Cash Back Card and Commercial Card lack this engagement layer"
    ],
    benchmarks: [
      { company: "Wells Fargo", result: "28% increase in card applications after FICO launch", source: "Wells Fargo Digital Banking Report 2022" },
      { company: "Chase Credit Journey", result: "30-40% higher card application rates", source: "Chase 2023 Digital Banking Summit" },
      { company: "Citi", result: "25M+ cardholders access FICO monthly, 32% higher engagement", source: "Citi Investor Presentation Q4 2023" }
    ]
  },
  { 
    icon: Building2, 
    title: "SMB Lines of Credit", 
    year1: "$50–80M", 
    year3: "$150–300M", 
    note: "Business Line of Credit ($10K–$500K) with AutoFi-style prequal",
    modelingBasis: "Consumer Auto Pre-Qual Applied to Business",
    logic: [
      "72% of SMB owners don't know their business credit score—creating massive drop-off at application",
      "Applying AutoFi's instant decisioning logic ($10K–$500K lines) reduces abandonment by 45-60%",
      "Model assumes similar conversion lift seen in consumer auto applied to business credit products"
    ],
    benchmarks: [
      { company: "Kabbage (Amex)", result: "67% reduction in application abandonment with instant prequal", source: "American Express Business Lending 2023" },
      { company: "BlueVine", result: "3.2× higher conversion with credit visibility dashboard", source: "BlueVine SMB Finance Report 2023" },
      { company: "OnDeck", result: "41% increase in line utilization with credit monitoring", source: "OnDeck Capital Annual Report 2022" }
    ]
  },
  { 
    icon: Briefcase, 
    title: "SMB Term & Equipment Loans", 
    year1: "$40–70M", 
    year3: "$120–250M", 
    note: "Term Loans, Equipment & Vehicle Financing with eligibility logic",
    modelingBasis: "Equipment Finance Pre-Qualification",
    logic: [
      "SC offers Term Loans ($10K–$1M), Equipment Financing ($25K–$1M) with no pre-qualification layer",
      "Adding eligibility signals reduces 'fear of rejection'—the #1 reason SMBs don't apply for financing",
      "Model assumes 35-50% lift in completed applications with upfront eligibility visibility"
    ],
    benchmarks: [
      { company: "Balboa Capital", result: "38% higher equipment loan conversion with soft-pull prequal", source: "Equipment Leasing & Finance Foundation 2023" },
      { company: "Currency (formerly LoanBuilder)", result: "44% reduction in time-to-decision with eligibility layer", source: "PayPal Business Lending Report 2023" },
      { company: "Fundbox", result: "52% of SMBs complete applications when shown eligibility first", source: "Fundbox SMB Credit Study 2023" }
    ]
  }
];

export default function CaseStudy() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [activeRevenueModal, setActiveRevenueModal] = useState<number | null>(null);
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <PageLayout>
      {/* Competitor Modal */}
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

      {/* Revenue Projection Modal */}
      <AnimatePresence>
        {activeRevenueModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setActiveRevenueModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-[#EC0000]/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center">
                    {(() => {
                      const IconComponent = revenueProjections[activeRevenueModal].icon;
                      return <IconComponent className="h-6 w-6 text-[#EC0000]" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2D2D2D] font-serif">{revenueProjections[activeRevenueModal].title}</h3>
                    <p className="text-sm text-[#666666]">{revenueProjections[activeRevenueModal].modelingBasis}</p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveRevenueModal(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Projections Summary */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F7F7F7] rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#EC0000]">{revenueProjections[activeRevenueModal].year1}</div>
                    <div className="text-sm text-[#666666] font-sans">Year 1 Projection</div>
                  </div>
                  <div className="bg-[#F7F7F7] rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#EC0000]">{revenueProjections[activeRevenueModal].year3}</div>
                    <div className="text-sm text-[#666666] font-sans">Year 3 Projection</div>
                  </div>
                </div>

                {/* Modeling Logic */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <LineChart className="h-4 w-4 text-[#EC0000]" />
                    <h4 className="font-bold text-[#2D2D2D] font-sans">Modeling Logic</h4>
                  </div>
                  <ul className="space-y-2">
                    {revenueProjections[activeRevenueModal].logic.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#666666] font-sans">
                        <ChevronRight className="h-4 w-4 text-[#EC0000] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitor Benchmarks */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-4 w-4 text-[#EC0000]" />
                    <h4 className="font-bold text-[#2D2D2D] font-sans">Comparable Results</h4>
                  </div>
                  <div className="space-y-3">
                    {revenueProjections[activeRevenueModal].benchmarks.map((benchmark, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-green-50 to-transparent border border-green-200 rounded-xl p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="font-semibold text-[#2D2D2D] text-sm font-sans mb-1">{benchmark.company}</div>
                            <div className="text-green-700 font-bold text-sm">{benchmark.result}</div>
                          </div>
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        </div>
                        <div className="text-xs text-[#666666] mt-2 font-sans">{benchmark.source}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Insight */}
                <div className="bg-[#EC0000]/5 border border-[#EC0000]/20 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-[#EC0000] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#2D2D2D] text-sm font-sans mb-1">Key Insight</div>
                      <p className="text-sm text-[#666666] font-sans">{revenueProjections[activeRevenueModal].note}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-32 px-6 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${caseStudyBgImg})` }}
          />
          {/* White overlay for fading effect */}
          <div className="absolute inset-0 bg-white/75" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EC0000]/5 border border-[#EC0000]/20 text-[#EC0000] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <Activity className="w-3.5 h-3.5" />
                <span>CASE STUDY</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-[#2D2D2D] mb-8 font-serif">
                From Auto Finance Dominance to
                <br />
                <span className="text-[#EC0000]">
                  Full Lending Conversion
                </span>
                <br />
                <span className="text-[#666666]">Orchestration</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#666666] max-w-4xl leading-relaxed font-sans mb-10">
                Prepared for: Santander Consumer USA Digital Lending & Product Innovation Division
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="h-14 px-8 bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold text-base rounded-lg">
                    Contact Sales
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="h-14 px-8 border-[#2D2D2D] bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90 hover:text-white font-semibold text-base rounded-lg"
                >
                  Download Full Case Study
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="py-16 px-6 bg-[#F7F7F7] border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">01</span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
                <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">Executive Summary</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp}>
              <p className="text-lg text-[#666666] leading-relaxed mb-8 font-sans">
                Santander Consumer USA (SC) has proven its ability to drive conversions in auto finance using AutoFi.
                However, SC is missing the same credit-visibility → eligibility → conversion loop in:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: Car, title: "Consumer Auto Loans", desc: "Pre-qual via Drive® but competitors steal post-approval customers" },
                  { icon: CreditCard, title: "Consumer Credit Card", desc: "Ultimate Cash Back Card lacks in-app eligibility visibility" },
                  { icon: CreditCard, title: "Commercial Card", desc: "No pre-qualification flow for business card applicants" },
                  { icon: Building2, title: "SMB Lending Products", desc: "Lines of Credit, Term Loans, Equipment Financing lack eligibility logic" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white border-2 border-gray-200 hover:border-[#EC0000]/30 transition-all duration-300 shadow-sm">
                      <CardContent className="p-6">
                        <div className="h-12 w-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center mb-4">
                          <item.icon className="h-6 w-6 text-[#EC0000]" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-[#2D2D2D] font-sans">{item.title}</h3>
                        <p className="text-[#666666] text-sm leading-relaxed font-sans">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - AutoFi Stack Success */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">02</span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
                <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">AutoFi Stack Success</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6 font-serif">
                Santander's Auto Loan <span className="text-[#EC0000]">Conversion Engine</span>
              </h2>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="bg-[#F7F7F7] border-2 border-gray-200 overflow-hidden shadow-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {[
                      { label: "Incorporated", value: "2015", sub: "AutoFi founding, SC partnership 2021" },
                      { label: "Decisioning", value: "~60s", sub: "Lender engines via RouteOne/DealerTrack" },
                      { label: "Lead Increase", value: "+34%", sub: "Leads and credit applications at dealerships" },
                      { label: "Conversion", value: "16%", sub: "Online leads → ~$123K profit/dealer/year" }
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-[#EC0000] mb-2">{item.value}</div>
                        <div className="text-sm font-semibold text-[#2D2D2D] mb-1 font-sans">{item.label}</div>
                        <div className="text-xs text-[#666666] font-sans">{item.sub}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white border-l-4 border-[#EC0000] p-6 rounded-r-xl">
                    <p className="text-[#2D2D2D] text-lg font-sans">
                      <span className="font-bold">Strategic Advantage:</span>{" "}
                      <span className="text-[#666666]">Customers are pre-qualified at the moment of purchase intent — frictionless. This model currently applies only to auto finance.</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 3 - The Missing Credit Visibility Loop */}
        <section className="py-24 px-6 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">03</span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
                <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">The Gap</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6 font-serif">
                The Missing Credit Visibility Loop in <span className="text-[#EC0000]">Cards & SMB</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* The Gap */}
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full bg-red-50 border-2 border-red-200">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <span className="text-red-600 text-xs font-bold tracking-[0.2em] uppercase">The Gap</span>
                    </div>
                    
                    {/* Phone mockups showing current state */}
                    <div className="flex justify-center gap-2 sm:gap-3 mb-6">
                      <div className="flex flex-col items-center">
                        <img 
                          src="/2.png"
                          alt="Consumer app - no credit visibility"
                          className="w-20 sm:w-24 h-auto drop-shadow-lg"
                        />
                        <p className="text-xs text-red-500 mt-2 font-medium">Consumer</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <img 
                          src="/Santander Screenshots/Case Study/The Missing Credit Visibility Loop in Cards & SMB/The GAP/Without LumiqAI/business.png"
                          alt="Business app - no credit visibility"
                          className="w-20 sm:w-24 h-auto drop-shadow-lg"
                        />
                        <p className="text-xs text-red-500 mt-2 font-medium">Business</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {[
                        "SC does not offer a Credit Journey-style feature like competitors",
                        "Customers are educated about credit → then exit SC apps to check eligibility elsewhere",
                        "SC has no in-app answer when users think: \"Am I eligible?\""
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-[#666666] font-sans text-sm">
                          <XCircle className="h-4 w-4 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Competitive Landscape */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full bg-white border-2 border-gray-200 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-2 mb-6">
                      <Eye className="h-5 w-5 text-[#666666]" />
                      <span className="text-[#666666] text-xs font-bold tracking-[0.2em] uppercase">Competitors with Credit Visibility</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {competitorData.map((comp, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveModal(index)}
                          className="flex items-center gap-2 p-3 bg-[#F7F7F7] rounded-lg border border-gray-200 hover:border-[#EC0000] hover:bg-white transition-all cursor-pointer text-left"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-[#666666] text-sm font-sans">{comp.name}</span>
                        </button>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 text-sm font-medium font-sans">
                        Santander is the only major U.S. consumer bank without a credit journey feature in-app.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* SMB Knowledge Gap */}
            <motion.div {...fadeInUp}>
              <Card className="bg-white border-2 border-[#EC0000]/20 shadow-sm">
                <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8">
                  <div className="text-center md:text-left">
                    <div className="text-6xl md:text-7xl font-black text-[#EC0000] mb-2">72%</div>
                    <div className="text-sm text-[#666666] uppercase tracking-wide font-sans">of SMB owners</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl text-[#666666] font-sans">
                      <span className="font-bold text-[#2D2D2D]">Do not know their business credit score.</span>{" "}
                      SC is losing customers before application completion in non-auto lending channels due to lack of eligibility clarity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - Interactive Leakage Funnel */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">04</span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
                <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">Leakage Funnel Math</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 font-serif">
                SC Auto vs. Cards vs. SMB Lending
              </h2>
              <p className="text-[#666666] font-sans">Based on lending behavior benchmarks: 45% research financing before purchase, 60% seek pre-approval.</p>
            </motion.div>

            <motion.div {...fadeInUp}>
              <LeakageFunnelModule />
            </motion.div>
          </div>
        </section>

        {/* Section 5 - Revenue Uplift Modeling */}
        <section className="py-24 px-6 bg-[#F7F7F7]">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">05</span>
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
                <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">Revenue Uplift Modeling</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 font-serif">
                If SC Deploys AutoFi-Style Logic <span className="text-[#EC0000]">WITH LumiqAI</span>
              </h2>
              <p className="text-[#666666] font-sans mb-4">Industry reference: Chase, Capital One, Wells Fargo, and Citi all compete for auto loan and SMB customers using in-app credit visibility. 69% digital banking users use Credit Journey tools (+8 pts YoY).</p>
              <p className="text-sm text-[#EC0000] font-medium flex items-center gap-2">
                <MousePointerClick className="h-4 w-4" />
                Click any card to see the modeling logic and comparable results
              </p>
            </motion.div>

            {/* Product Line Projections */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              {revenueProjections.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="h-full bg-white border-2 border-gray-200 hover:border-[#EC0000] hover:shadow-lg transition-all shadow-sm cursor-pointer group"
                    onClick={() => setActiveRevenueModal(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="h-10 w-10 rounded-lg bg-[#EC0000]/10 flex items-center justify-center group-hover:bg-[#EC0000]/20 transition-colors">
                          <item.icon className="h-5 w-5 text-[#EC0000]" />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-[#EC0000] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>View details</span>
                          <ChevronRight className="h-3 w-3" />
                        </div>
                      </div>
                      <h3 className="font-bold text-base mb-4 text-[#2D2D2D] font-sans">{item.title}</h3>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#666666] font-sans">Year 1</span>
                          <span className="text-lg font-bold text-[#EC0000]">{item.year1}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#666666] font-sans">Year 3</span>
                          <span className="text-lg font-bold text-[#EC0000]">{item.year3}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#666666] font-sans leading-relaxed">{item.note}</p>
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <div className="text-xs text-[#999999] font-sans">Based on: {item.modelingBasis}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Total Projections */}
            <motion.div {...fadeInUp}>
              <Card className="bg-[#EC0000] border-0">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 text-center">
                    <div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">$185–310M</div>
                      <div className="text-white/80 font-sans">Projected Year 1 Uplift</div>
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">$550–1.1B</div>
                      <div className="text-white/80 font-sans">Projected 3-Year Cumulative</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6 font-serif">
                Ready to close the <span className="text-[#EC0000]">conversion gap?</span>
              </h2>
              <p className="text-xl text-[#666666] mb-10 font-sans">
                Deploy LumiqAI in 90 days. No core system replacement required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold px-10 py-6 text-lg rounded-full">
                  Request Pilot Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-[#2D2D2D] bg-[#2D2D2D] text-white hover:bg-[#2D2D2D]/90 hover:text-white font-semibold px-10 py-6 text-lg rounded-full">
                  Download Full Analysis
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
