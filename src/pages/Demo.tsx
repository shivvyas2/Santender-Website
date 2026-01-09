import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  Smartphone, 
  BarChart3, 
  Shield, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  CheckCircle2,
  Play
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const demoScreens = [
  {
    title: "Portfolio Dashboard Overview",
    description: "Chase internal teams see real-time portfolio intelligence across all business customers.",
    caption: "Live portfolio views by approval tier, product fit, and credit score cohorts.",
    image: "/dashboard/dashboard.png"
  },
  {
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and insights for portfolio performance tracking.",
    caption: "Real-time metrics and visualizations for data-driven decision making.",
    image: "/mockups/analytics.png"
  },
  {
    title: "Credit Score Analysis",
    description: "Detailed credit score breakdown and analysis for business customers.",
    caption: "Visual representation of credit metrics and trends.",
    image: "/dashboard/Screenshot 2025-11-18 at 03.04.01.png"
  },
  {
    title: "Customer Portfolio View",
    description: "Individual customer portfolio insights and credit journey tracking.",
    caption: "Track customer credit health and eligibility in real-time.",
    image: "/dashboard/users.png"
  },
  {
    title: "Risk Assessment Dashboard",
    description: "Comprehensive risk assessment and scoring interface.",
    caption: "AI-powered risk analysis with policy-aligned decisioning.",
    image: "/dashboard/Screenshot 2025-11-18 at 18.20.47.png"
  },
  {
    title: "Approval Workflow",
    description: "Streamlined approval process with automated decision routing.",
    caption: "Reduce manual review load by 20% with intelligent automation.",
    image: "/dashboard/Screenshot 2025-11-18 at 18.20.53.png"
  },
  {
    title: "Product Eligibility Matrix",
    description: "Real-time product eligibility and recommendation engine.",
    caption: "Match customers to the right products based on credit profile.",
    image: "/dashboard/Screenshot 2025-11-18 at 18.21.01.png"
  },
  {
    title: "Performance Metrics",
    description: "Key performance indicators and conversion tracking.",
    caption: "Measure lift, approval rates, and portfolio performance.",
    image: "/dashboard/Screenshot 2025-11-18 at 18.21.07.png"
  },
  {
    title: "Audit Trail & Compliance",
    description: "Complete audit trail for all credit decisions and model governance.",
    caption: "100% transparency for risk teams and regulators.",
    image: "/dashboard/Screenshot 2025-11-18 at 18.21.16.png"
  },
  {
    title: "Advanced Analytics View",
    description: "Deep dive into portfolio analytics and trend analysis.",
    caption: "Advanced reporting and insights for strategic decision making.",
    image: "/dashboard/Screenshot 2025-11-18 at 18.21.31.png"
  }
];

const features = [
  {
    icon: Brain,
    title: "AI-Powered Pre-Qualification",
    description: "Real-time signal processing aligned to your risk appetite and policy layers."
  },
  {
    icon: Smartphone,
    title: "Embedded UX",
    description: "Credit Journey-style experience for SMBs inside Chase Business."
  },
  {
    icon: BarChart3,
    title: "Portfolio Intelligence Tracker",
    description: "Live portfolio views by approval tier, product fit, and credit score cohorts."
  },
  {
    icon: Shield,
    title: "Risk & Audit Layer",
    description: "Every decision logged. 100% audit trail. Built for ECOA, OCC, and MRM workflows."
  }
];

const faqs = [
  {
    question: "How does LUMIQ AI integrate with existing Chase systems?",
    answer: "LUMIQ AI uses REST APIs and SDKs that plug directly into your existing Chase Business mobile and web applications. No changes to your current underwriting workflow are required. The integration typically takes 2-4 weeks for initial setup, with full deployment achievable in a 90-day pilot."
  },
  {
    question: "What credit data sources does LUMIQ AI use?",
    answer: "LUMIQ AI pulls Experian Intelliscore, FSR (Financial Stability Risk), and owner FICO/VantageScore data. We apply your existing policy layers, scorecard rules, and risk overlays to ensure all decisions align with Chase's risk appetite and compliance requirements."
  },
  {
    question: "How is customer data secured and governed?",
    answer: "All data is encrypted in transit and at rest. LUMIQ AI is SOC 2-aligned with ISO 27001-compatible controls. We support configurable data residency, retention policies, and provide full audit trails for compliance teams. Risk ownership remains entirely with Chase — we never override your approval authority."
  },
  {
    question: "What results can we expect from a pilot?",
    answer: "Typical pilot outcomes include 8-15% lift in qualified SMB applications, 20-35% reduction in manual review load, and measurable incremental interchange revenue per booked card. The pilot runs A/B testing to measure lift, approval-rate delta, and loss-rate delta against your control group."
  },
  {
    question: "Can LUMIQ AI extend beyond credit cards to lending products?",
    answer: "Yes. The same decision infrastructure can be extended to Business Lines of Credit, Term Loans, and Commercial Real Estate lending in Stage 2. The scoring and governance rails are product-agnostic and designed for multi-product expansion."
  },
  {
    question: "What level of customization is available?",
    answer: "LUMIQ AI is fully customizable to your policy rules, risk thresholds, adverse action logic, and brand guidelines. You maintain complete control over decision rules, score cutoffs, and product eligibility criteria."
  }
];

const walkthrough = [
  { step: 1, title: "Login", description: "Secure authentication via Chase SSO", image: "/dashboard/Mockups%20Laptop/Login.png" },
  { step: 2, title: "Signup", description: "Quick registration and account setup", image: "/dashboard/Mockups%20Laptop/Signup.png" },
  { step: 3, title: "Credit Journey Activation", description: "One-tap access to business credit insights", image: "/dashboard/Mockups%20Laptop/dashboard%20hero_.png" },
  { step: 4, title: "Score Display", description: "Personal FICO + Business FSR & Intelliscore", image: "/dashboard/Mockups%20Laptop/Analytics.png" },
  { step: 5, title: "Eligible Card Match", description: "AI-recommended products based on policy", image: "/dashboard/Mockups%20Laptop/Products.png" },
  { step: 6, title: "Backend Dashboard", description: "Portfolio-level analytics for Chase teams", image: "/dashboard/Mockups%20Laptop/Users.png" },
  { step: 7, title: "Model Audit View", description: "Full transparency and compliance logging", image: "/dashboard/Mockups%20Laptop/Reports.png" }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-[#070707]/10 dark:border-white/10 last:border-0"
      initial={false}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-[#070707] dark:text-white group-hover:text-primary transition-colors">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#070707]/70 dark:text-white/70 group-hover:text-primary transition-colors flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#070707]/70 dark:text-white/70 group-hover:text-primary transition-colors flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-[#070707]/70 dark:text-white/70 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Demo() {
  const [email, setEmail] = useState("");
  const [activeWalkthrough, setActiveWalkthrough] = useState(0);

  const handleScheduleDemo = () => {
    console.log("Scheduling demo for:", email);
    // Add your booking logic here
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#070707]">
        <div className="relative z-10 mx-auto w-full px-5 md:px-[5vw] py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div {...fadeInUp}>
              <h1 className="text-[40px] md:text-[56px] font-bold mb-6 leading-tight text-[#070707] dark:text-white">
                See the LUMIQ AI Business Credit Journey{" "}
                <span className="text-primary">
                  in Action
                </span>
              </h1>
              <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 mb-8 leading-relaxed">
                The missing link in your business banking experience. Pre-qualify SMBs for the right product using real-time Experian Intelliscore + FSR signals — directly inside your app.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="solver"
                  className="group"
                  onClick={() => document.getElementById('interactive-gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Launch Interactive Demo
                  <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-[#070707] dark:border-white text-[#070707] dark:text-white hover:bg-primary/10 hover:border-primary/50"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book a Credit Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Right: Hero Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="/dashboard/demo_hero.png"
                alt="Chase Business Credit Journey hero dashboard"
                className="w-full max-w-[720px] h-auto object-contain"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Gallery Section */}
      <section id="interactive-gallery" className="py-20 bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#070707] dark:text-white">
              Experience the Platform
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Explore key screens and see how LUMIQ AI powers business credit decisions at scale.
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {demoScreens.map((screen, index) => (
                <CarouselItem key={index}>
                <Card className="p-8 bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]">
                  <div className="aspect-video bg-white dark:bg-[#0F0F0F] rounded-[20px] mb-6 overflow-hidden border border-[#E4E7EC] dark:border-[#1C1C1C] group hover:border-primary/50 transition-all duration-300 cursor-pointer">
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#070707] dark:text-white">{screen.title}</h3>
                    <p className="text-[#070707]/70 dark:text-white/70 mb-2">{screen.description}</p>
                    <p className="text-sm text-primary italic">{screen.caption}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Breakdown Grid - What You'll See */}
      <section className="py-20 bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#070707] dark:text-white">
              What You'll See in the Demo
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Four core capabilities that power business credit intelligence.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] hover:border-primary/30 transition-all duration-300 rounded-[24px] group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#070707] dark:text-white">{feature.title}</h3>
                  <p className="text-[#070707]/70 dark:text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mini Playthrough Carousel */}
      <section className="py-20 bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#070707] dark:text-white">
              Complete User Journey Preview
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Follow the complete journey from login and signup to backend analytics.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {walkthrough.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveWalkthrough(index)}
                    className={`p-4 rounded-[20px] border transition-all duration-300 text-left ${
                    activeWalkthrough === index
                      ? 'border-primary bg-primary/10'
                      : 'border-[#E4E7EC] dark:border-[#1C1C1C] bg-white dark:bg-[#1D1D1D] hover:border-primary/50'
                  }`}
                >
                  <div className="text-2xl font-bold text-primary mb-2">{item.step}</div>
                  <div className="text-sm font-medium text-[#070707] dark:text-white">{item.title}</div>
                </button>
              ))}
            </div>

            <Card className="p-8 bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[28px]">
              <div className="aspect-video bg-white dark:bg-[#0F0F0F] rounded-[20px] mb-6 overflow-hidden border border-[#E4E7EC] dark:border-[#1C1C1C] relative group">
                {walkthrough[activeWalkthrough].image ? (
                  <img
                    src={walkthrough[activeWalkthrough].image}
                    alt={walkthrough[activeWalkthrough].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary mb-4">
                        {walkthrough[activeWalkthrough].step}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-[#070707] dark:text-white">
                        {walkthrough[activeWalkthrough].title}
                      </h3>
                      <p className="text-[#070707]/70 dark:text-white/70">
                        {walkthrough[activeWalkthrough].description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mb-4 text-center">
                <h3 className="text-xl font-bold mb-2 text-[#070707] dark:text-white">
                  {walkthrough[activeWalkthrough].title}
                </h3>
                <p className="text-sm text-[#070707]/70 dark:text-white/70">
                  {walkthrough[activeWalkthrough].description}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  disabled={activeWalkthrough === 0}
                  onClick={() => setActiveWalkthrough(Math.max(0, activeWalkthrough - 1))}
                  className="border-[#070707] dark:border-white text-[#070707] dark:text-white"
                >
                  Previous
                </Button>
                <span className="text-sm text-[#070707]/70 dark:text-white/70">
                  Step {activeWalkthrough + 1} of {walkthrough.length}
                </span>
                <Button
                  disabled={activeWalkthrough === walkthrough.length - 1}
                  onClick={() => setActiveWalkthrough(Math.min(walkthrough.length - 1, activeWalkthrough + 1))}
                >
                  Next
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw] max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#070707] dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70">
              Everything you need to know about the LUMIQ AI platform.
            </p>
          </motion.div>

        <Card className="p-8 bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[28px]">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </Card>
        </div>
      </section>

      {/* Impact Block */}
      <section className="py-20 bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#070707] dark:text-white">
              Why LUMIQ AI Wins
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-2xl mx-auto">
              Proven results from pilot implementations with enterprise banking partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]">
              <div className="text-5xl font-bold text-primary mb-4">8-15%</div>
              <div className="text-lg font-medium mb-2 text-[#070707] dark:text-white">Application Lift</div>
              <p className="text-sm text-[#070707]/70 dark:text-white/70">
                Increase in qualified applications during A/B testing
              </p>
            </Card>
            <Card className="p-8 text-center bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]">
              <div className="text-5xl font-bold text-primary mb-4">20-35%</div>
              <div className="text-lg font-medium mb-2 text-[#070707] dark:text-white">Faster Decisions</div>
              <p className="text-sm text-[#070707]/70 dark:text-white/70">
                Reduction in manual review load and processing time
              </p>
            </Card>
            <Card className="p-8 text-center bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]">
              <div className="text-5xl font-bold text-primary mb-4">100%</div>
              <div className="text-lg font-medium mb-2 text-[#070707] dark:text-white">Audit Logged</div>
              <p className="text-sm text-[#070707]/70 dark:text-white/70">
                Complete transparency with FSR + Intelliscore input signals
              </p>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="solver"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Pilot in 6 Weeks
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-[#070707] dark:border-white text-[#070707] dark:text-white hover:bg-primary/10 hover:border-primary/50"
            >
              Download Model Governance Framework
            </Button>
          </div>
        </div>
      </section>

      {/*
      <section id="booking" className="py-20 bg-white dark:bg-[#070707]">
        <div className="mx-auto w-full px-5 md:px-[5vw] max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-12 bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[32px] shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-[#070707] dark:text-white">
                  Schedule Your Demo
                </h2>
                <p className="text-[#070707]/70 dark:text-white/70 mb-2">
                  Speak with our Credit Intelligence Team
                </p>
                <p className="text-sm text-[#070707]/60 dark:text-white/60 italic">
                  NDA available upon request
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#070707] dark:text-white">Name</label>
                  <Input placeholder="Full name" className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#070707] dark:text-white">Company</label>
                  <Input placeholder="Company name" className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#070707] dark:text-white">Role</label>
                  <Input placeholder="Your role" className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#070707] dark:text-white">Work Email</label>
                  <Input 
                    type="email" 
                    placeholder="you@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white dark:bg-[#0F0F0F] border-[#E4E7EC] dark:border-[#1C1C1C]"
                  />
                </div>
                <Button 
                  size="lg" 
                  variant="solver"
                  className="w-full"
                  onClick={handleScheduleDemo}
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-[#070707]/10 dark:border-white/10">
                <div className="flex items-start gap-3 text-sm text-[#070707]/70 dark:text-white/70">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p>
                    Includes integration spec, dashboard preview, and model governance overview tailored for your internal teams.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      */}
    </PageLayout>
  );
}

