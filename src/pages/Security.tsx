import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { 
  Shield, Lock, CheckCircle2, ArrowRight, Eye, 
  FileCheck, Server, Key, Users, Database, RefreshCw,
  AlertTriangle, Brain, Zap, Globe, Code, Clock,
  ChevronRight, ExternalLink, Download
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityBgImg from "@/assets/security-bg.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 }
};

const complianceFrameworks = [
  { name: "SOC 2 Type II", status: "Certified", year: "2025" },
  { name: "NYDFS Cybersecurity Rule", status: "Compliant", year: "" },
  { name: "GLBA", status: "Compliant", year: "" },
  { name: "FCRA & ECOA", status: "Compliant", year: "" },
  { name: "NIST 800-53 / 800-171", status: "Aligned", year: "" },
  { name: "PCI-DSS v4.0", status: "Certified", year: "" },
  { name: "ISO 27001", status: "Roadmap", year: "2026" },
  { name: "CCPA / CPRA", status: "Compliant", year: "" },
  { name: "GDPR", status: "Ready", year: "" },
];

export default function Security() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* HERO SECTION */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${securityBgImg})` }}
          />
          {/* White overlay */}
          <div className="absolute inset-0 bg-white/85" />
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#EC0000]/5 border border-[#EC0000]/20 mb-6 sm:mb-8">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-[#EC0000]" />
                <span className="text-xs sm:text-sm font-bold text-[#EC0000] uppercase tracking-wider">Security & Compliance</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2D2D2D] mb-4 sm:mb-6 leading-tight font-serif">
                Bank-Grade Security.{" "}
                <span className="text-[#EC0000]">Built for Fintech Velocity.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#666666] leading-relaxed mb-6 sm:mb-10 max-w-3xl font-sans">
                Designed to exceed Santander's risk, data, and compliance standards — LumiqAI offers end-to-end protection, AI transparency, and enterprise-grade governance for SMB lending.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full touch-manipulation w-full sm:w-auto"
                  >
                    View API Docs
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-gray-300 text-[#2D2D2D] bg-white hover:bg-white hover:border-[#EC0000] hover:text-[#EC0000] font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full touch-manipulation w-full sm:w-auto"
                  >
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMPLIANCE FRAMEWORK BANNER */}
        <section className="py-12 sm:py-16 bg-[#F7F7F7] border-y border-gray-200">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center mb-10">
              <p className="text-sm font-bold text-[#EC0000] uppercase tracking-wider mb-2">Aligned With</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] font-serif">
                Global & U.S. Compliance Standards
              </h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {complianceFrameworks.map((framework, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-[#EC0000]/40 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#EC0000]" />
                  <span className="text-[#2D2D2D] text-sm font-medium">{framework.name}</span>
                  {framework.year && (
                    <span className="text-[#EC0000] text-xs font-bold">({framework.year})</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DATA GOVERNANCE & CREDIT SCORE INTEGRITY */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div {...fadeInUp} className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4 font-serif">
                Data Governance & <span className="text-[#EC0000]">Credit Integrity</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Features */}
              <motion.div {...fadeInUp} className="space-y-6">
                {[
                  {
                    icon: RefreshCw,
                    title: "Real-Time Bureau Sync",
                    desc: "All scores from Equifax, Experian, Dun & Bradstreet, and LexisNexis are refreshed in real-time using direct API integration, ensuring up-to-date and auditable credit signals."
                  },
                  {
                    icon: Clock,
                    title: "Expired Score Handling",
                    desc: "All stale/expired data is auto-flagged and removed from scoring logic until revalidation occurs."
                  },
                  {
                    icon: AlertTriangle,
                    title: "Conflicting Data Resolution",
                    desc: "In cases where bureau data conflicts with behavioral models, a triage engine prioritizes the most recent verified source, with optional human review."
                  },
                  {
                    icon: Brain,
                    title: "Behavioral Model Sync",
                    desc: "All AI/ML scoring is behavior-aware and can incorporate bureau overrides or fallback logic."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#F7F7F7] border border-gray-200 hover:border-[#EC0000]/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-[#EC0000]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 font-sans">{item.title}</h3>
                        <p className="text-[#666666] leading-relaxed font-sans">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Right Column - Score Sources Infographic */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center"
              >
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-6 text-center font-sans">Score Sources Architecture</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Bureau Data", items: ["Equifax", "Experian", "D&B"], color: "bg-[#EC0000]" },
                      { label: "Behavioral Signals", items: ["Banking data", "Deposits", "Vendor history"], color: "bg-blue-500" },
                      { label: "Registry Signals", items: ["SOS filings", "EINs", "SAM.gov"], color: "bg-green-500" },
                      { label: "Identity Verification", items: ["KYC", "Geolocation", "Phone/Email"], color: "bg-purple-500" }
                    ].map((source, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F7F7] border border-gray-200">
                        <div className={`w-3 h-3 rounded-full ${source.color}`} />
                        <div className="flex-1">
                          <div className="text-[#2D2D2D] font-semibold mb-1 font-sans">{source.label}</div>
                          <div className="flex flex-wrap gap-2">
                            {source.items.map((item, i) => (
                              <span key={i} className="text-xs text-[#666666] px-2 py-1 rounded bg-white border border-gray-200">{item}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FRAUD DETECTION & SYNTHETIC IDENTITY DEFENSE */}
        <section className="py-24 lg:py-32 bg-[#F7F7F7]">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4 font-serif">
                Fraud Detection & <span className="text-[#EC0000]">Synthetic ID Defense</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="synthetic" className="bg-white border border-gray-200 rounded-2xl px-6 data-[state=open]:border-[#EC0000]/30 shadow-sm">
                  <AccordionTrigger className="text-[#2D2D2D] hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EC0000]/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#EC0000]" />
                      </div>
                      <span className="text-lg font-bold font-sans">Synthetic ID Prevention</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] pb-6 pl-14 font-sans">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Triangulation of phone/email/address</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />IP fingerprinting + velocity alerts</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Social Security & EIN legitimacy scoring</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Real-time "fraud ring" heuristics (e.g., duplicate metadata across apps)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="warning" className="bg-white border border-gray-200 rounded-2xl px-6 data-[state=open]:border-[#EC0000]/30 shadow-sm">
                  <AccordionTrigger className="text-[#2D2D2D] hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EC0000]/10 flex items-center justify-center">
                        <AlertTriangle className="w-5 h-5 text-[#EC0000]" />
                      </div>
                      <span className="text-lg font-bold font-sans">Early Warning Triggers</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] pb-6 pl-14 font-sans">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Behavior anomalies (login patterns, timezones)</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Application data mismatch</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Account behavior vs. declared revenue</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="escalation" className="bg-white border border-gray-200 rounded-2xl px-6 data-[state=open]:border-[#EC0000]/30 shadow-sm">
                  <AccordionTrigger className="text-[#2D2D2D] hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EC0000]/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#EC0000]" />
                      </div>
                      <span className="text-lg font-bold font-sans">Partner Escalation Support</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#666666] pb-6 pl-14 font-sans">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Trigger-based alerts</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Tiered risk scoring</li>
                      <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000] mt-1 shrink-0" />Santander team can set override thresholds</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* AI MODEL GOVERNANCE & EXPLAINABILITY */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4 font-serif">
                AI Model Governance & <span className="text-[#EC0000]">Explainability</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { icon: Eye, title: "Transparent Scoring", desc: "Full scoring logs available for Santander audit teams" },
                { icon: Users, title: "Bias Testing", desc: "Monthly testing across gender, geography, race, and age" },
                { icon: Shield, title: "Human Override", desc: "Override layers for all score-based denials" },
                { icon: RefreshCw, title: "Model Retraining", desc: "Models retrain every 90 days with synthetic data" },
                { icon: Database, title: "Audit Sandbox", desc: "Dedicated sandbox for partner bank audits" },
                { icon: Brain, title: "Interpretability", desc: "Console v1.1 with full decision transparency" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full bg-white border-2 border-gray-200 hover:border-[#EC0000]/30 transition-all duration-300 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-[#EC0000]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 font-sans">{item.title}</h3>
                      <p className="text-[#666666] font-sans">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Roadmap */}
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <div className="bg-[#F7F7F7] rounded-2xl border-l-4 border-[#EC0000] p-8">
                <h3 className="text-lg font-bold text-[#2D2D2D] mb-4 font-sans">Roadmap</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#666666] font-sans">
                    Model Cards v2.0 <span className="text-[#EC0000] font-bold ml-2">Coming Soon</span>
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#666666] font-sans">
                    Interpretability Console v1.1 <span className="text-[#EC0000] font-bold ml-2">Q2 2026</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* API SECURITY + DEVELOPER INFO */}
        <section className="py-24 lg:py-32 bg-[#F7F7F7]">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4 font-serif">
                API Security & <span className="text-[#EC0000]">Developer Info</span>
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Code Block */}
              <motion.div {...fadeInUp}>
                <div className="bg-[#1a1a1a] rounded-2xl p-6 overflow-hidden shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray-400 text-sm ml-4 font-mono">Sample Endpoint</span>
                  </div>
                  <pre className="text-sm text-gray-300 overflow-x-auto font-mono">
                    <code>{`GET /api/v1/credit/score?entity_id=XXXXXXXX

// Example Request
{
  "entity_id": "d10acdef-8393-4c6f-9c0f-82aa55a935cd",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}

// Response
{
  "score": 742,
  "score_type": "Equifax",
  "status": "active",
  "last_updated": "2026-01-08T19:04:12Z"
}`}</code>
                  </pre>
                </div>
              </motion.div>

              {/* Token & Rate Limits */}
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Key className="w-6 h-6 text-[#EC0000]" />
                    <h3 className="text-lg font-bold text-[#2D2D2D] font-sans">Token Scope</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666] font-sans">
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000]" />JWT, 60-minute lifespan</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000]" />Scopes: read:score, read:entity, read:flags</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000]" />Optional: IP-restricted, role-bound scopes</li>
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-[#EC0000]" />
                    <h3 className="text-lg font-bold text-[#2D2D2D] font-sans">Rate Limits</h3>
                  </div>
                  <ul className="space-y-2 text-[#666666] font-sans">
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000]" />Base: 1,000 req/hr/client</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000]" />Burstable: up to 5,000/hr</li>
                    <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-[#EC0000]" />429 error includes backoff timing headers</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* INCIDENT RESPONSE & BREACH PROTOCOLS */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4 font-serif">
                Incident Response & <span className="text-[#EC0000]">Breach Protocols</span>
              </h2>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* Timeline */}
              <motion.div {...fadeInUp} className="mb-12">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
                  {[
                    { icon: "🔍", label: "Detect" },
                    { icon: "🚨", label: "Contain" },
                    { icon: "🧑‍💻", label: "Notify" },
                    { icon: "✅", label: "Remediate" },
                    { icon: "📊", label: "Report" }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full bg-[#EC0000]/10 border-2 border-[#EC0000]/30 flex items-center justify-center text-2xl mb-2">
                          {step.icon}
                        </div>
                        <span className="text-sm font-semibold text-[#2D2D2D] font-sans">{step.label}</span>
                      </div>
                      {idx < 4 && <ArrowRight className="w-6 h-6 text-[#EC0000]/40 mx-2 hidden md:block" />}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* SLAs */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { title: "Detection SLA", value: "< 15 min", desc: "Anomaly flagged" },
                  { title: "Breach Disclosure (Regulated)", value: "72 hours", desc: "Regulatory notification" },
                  { title: "Breach SLA (Partners)", value: "24 hours", desc: "Santander notification" }
                ].map((sla, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="text-center p-6 rounded-2xl bg-[#F7F7F7] border border-gray-200"
                  >
                    <div className="text-3xl font-bold text-[#EC0000] mb-2 font-sans">{sla.value}</div>
                    <div className="text-lg font-semibold text-[#2D2D2D] mb-1 font-sans">{sla.title}</div>
                    <div className="text-sm text-[#666666] font-sans">{sla.desc}</div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* MIDDLEWARE COMPATIBILITY + EXPANSION READY */}
        <section className="py-24 lg:py-32 bg-[#F7F7F7]">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4 font-serif">
                Middleware & <span className="text-[#EC0000]">Expansion Ready</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Code,
                  title: "Plug-in Ready",
                  desc: "Compatible with Santander Tech Stack",
                  items: ["AutoFi", "DriveUSA", "OnDeck", "Marqeta Middleware"]
                },
                {
                  icon: Globe,
                  title: "Expansion Ready",
                  desc: "Multi-region support",
                  items: ["Santander Mexico", "Santander UK", "Open Banking APIs", "Multi-language docs"]
                },
                {
                  icon: Server,
                  title: "Hosting Flexibility",
                  desc: "Cloud regions",
                  items: ["AWS U.S. East (Default)", "AWS Frankfurt (EU)", "Google Cloud São Paulo (LatAm)"]
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full bg-white border-2 border-gray-200 hover:border-[#EC0000]/30 transition-all duration-300 shadow-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-[#EC0000]/10 flex items-center justify-center mb-4">
                        <card.icon className="w-6 h-6 text-[#EC0000]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#2D2D2D] mb-2 font-sans">{card.title}</h3>
                      <p className="text-[#666666] mb-4 font-sans">{card.desc}</p>
                      <ul className="space-y-2">
                        {card.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[#666666] font-sans">
                            <ChevronRight className="w-4 h-4 text-[#EC0000]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST FAQ */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D2D2D] mb-4 font-serif">
                Trust <span className="text-[#EC0000]">FAQ</span>
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: "How does LumiqAI integrate with existing bank systems?",
                    a: "LumiqAI connects via RESTful APIs and webhooks with OAuth 2.0 authentication. We support direct integration with core banking platforms, loan origination systems (AutoFi, DriveUSA), and CRM tools. Typical integration takes 2-4 weeks with full sandbox testing."
                  },
                  {
                    q: "What data encryption standards do you use?",
                    a: "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. API keys are rotated every 90 days, and we use hardware security modules (HSMs) for cryptographic key management."
                  },
                  {
                    q: "How is customer data isolated between institutions?",
                    a: "Each partner bank operates in a fully isolated tenant environment with dedicated database schemas, separate encryption keys, and network-level segmentation. No data is ever shared or accessible across tenants."
                  },
                  {
                    q: "What happens to data after the lending decision?",
                    a: "Transaction data is retained per regulatory requirements (typically 7 years for FCRA compliance). Customers can request data deletion for non-regulatory data. All PII is tokenized and stored separately from analytical data."
                  },
                  {
                    q: "How do you handle fraud alerts?",
                    a: "They trigger an internal escalation via our synthetic ID detection module and notify the bank's trust team within seconds. All alerts are logged with full audit trails."
                  },
                  {
                    q: "Can we conduct our own security audits?",
                    a: "Yes. We provide a dedicated audit sandbox, full API documentation, and support annual penetration testing by your security team. SOC 2 Type II reports are available upon request."
                  },
                  {
                    q: "What's your disaster recovery and uptime SLA?",
                    a: "We guarantee 99.95% uptime with multi-region failover. RPO is 1 hour and RTO is 4 hours. All data is replicated across geographically distributed data centers in real-time."
                  }
                ].map((item, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`} className="bg-[#F7F7F7] border border-gray-200 rounded-2xl px-6 data-[state=open]:border-[#EC0000]/30">
                    <AccordionTrigger className="text-[#2D2D2D] hover:no-underline py-6 font-semibold text-left font-sans">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#666666] pb-6 font-sans">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="py-24 lg:py-32 bg-[#F7F7F7] border-t border-gray-200">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6 font-serif">
                Want to test LumiqAI in <span className="text-[#EC0000]">Santander Sandbox?</span>
              </h2>
              <p className="text-xl text-[#666666] mb-8 font-sans">
                Get full access to our technical security documentation and sandbox environment.
              </p>
              <Button 
                size="lg" 
                className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold px-10 py-6 text-lg rounded-full"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
