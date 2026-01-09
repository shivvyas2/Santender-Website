import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Brain, Smartphone, BarChart3, Shield, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Users, Building2, Zap, Eye, Target, RefreshCw, Globe, TrendingUp, XCircle, Play, FileCheck, CreditCard, Activity
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const competitorData = [
  { bank: "Chase", consumer: "Credit Journey", business: false, prequal: true, pathways: true },
  { bank: "Capital One", consumer: "CreditWise", business: false, prequal: true, pathways: true },
  { bank: "Wells Fargo", consumer: "Close Up", business: false, prequal: true, pathways: true },
  { bank: "AmEx", consumer: "Internal scoring", business: "Business logic only", prequal: true, pathways: true },
  { bank: "Santander", consumer: false, business: false, prequal: false, pathways: false }
];

const faqs = [
  { question: "What will I see in the demo?", answer: "A fully functional, Santander-ready module showing both Consumer and Business credit intelligence layers. You'll see real-time scoring, AI eligibility, confidence bands, and the complete apply flow." },
  { question: "Is this built on Santander's actual criteria?", answer: "Yes. The eligibility engine uses Santander's published criteria. No external modeling — only Santander's own logic, automated." },
  { question: "How quickly can this be deployed?", answer: "90 days. Integration + risk review + go-live. No major rebuilds, no multi-year roadmaps, no large teams required." }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-4 flex items-center justify-between text-left group">
        <span className="text-sm font-medium text-[#2D2D2D] group-hover:text-[#EC0000] transition-colors font-sans">{question}</span>
        {isOpen ? <ChevronUp className="h-4 w-4 text-[#666666]" /> : <ChevronDown className="h-4 w-4 text-[#666666]" />}
      </button>
      <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="pb-4 text-[#666666] text-sm leading-relaxed font-sans">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function Demo() {
  const [email, setEmail] = useState("");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-white">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, rgba(236, 0, 0, 0.03) 0%, transparent 50%)'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EC0000]/5 border border-[#EC0000]/20 text-[#EC0000] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Demo</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2D2D2D] leading-tight font-serif">
              See the Credit Intelligence Layer{" "}
              <span className="text-[#EC0000]">in Action</span>
            </h1>
            
            <p className="text-lg text-[#666666] mb-10 max-w-2xl mx-auto font-sans">
              A fully functional, Santander-ready module that plugs directly into the existing Santander App — for both Consumer and Business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold px-8 py-6 rounded-full">
                <Play className="mr-2 h-4 w-4" />
                Watch the Demo
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-gray-300 text-[#2D2D2D] hover:border-[#EC0000] hover:text-[#EC0000] px-8 py-6 rounded-full">
                Request Technical Spec
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - What This Demo Shows */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">01</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
              <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">What This Demo Shows</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] font-serif">Dual Credit Intelligence Layers</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consumer Layer */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-white border-2 border-[#EC0000]/20 shadow-sm">
                <div className="p-5 bg-[#EC0000]/5 border-b border-[#EC0000]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#EC0000] flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] font-sans">Consumer Credit Intelligence Layer</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {["Real-time VantageScore display", "Santander-aligned prequalification for major consumer cards", "Eligibility Confidence Bands using Santander's published criteria", "Predictive approval pathways", "Instant Apply flow into Santander's existing card funnel", "Decline-recovery guidance based on Santander rules"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#666666] font-sans">
                        <CheckCircle2 className="h-4 w-4 text-[#EC0000] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Layer */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-white border-2 border-blue-200 shadow-sm">
                <div className="p-5 bg-blue-50 border-b border-blue-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] font-sans">Business Credit Intelligence Layer</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {["Real-time Business Credit Score", "Combined Owner FICO + Business attributes", "Prequalification mapped to Santander Business products", "Confidence bands and eligibility ranking", "Thin-file improvement recommendations", "1-Tap Apply for SMB credit products"].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#666666] font-sans">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8">
            <div className="bg-white border-l-4 border-[#EC0000] p-6 rounded-r-xl shadow-sm">
              <p className="text-[#2D2D2D] text-lg font-sans">
                <span className="font-bold">Santander becomes the first major bank</span>{" "}
                <span className="text-[#666666]">with consumer + business credit intelligence natively embedded.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Competitor Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">02</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
              <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">Why This Demo Matters</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4 font-serif">
              Because Santander currently has <span className="text-[#EC0000]">no</span> in-app credit intelligence layer.
            </h2>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-[#F7F7F7] border-2 border-gray-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-white">
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#666666] uppercase tracking-wider">Bank</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#666666] uppercase tracking-wider">Consumer</th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-[#666666] uppercase tracking-wider">Business</th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-[#666666] uppercase tracking-wider">Prequal</th>
                      <th className="px-6 py-4 text-center text-xs font-bold text-[#666666] uppercase tracking-wider">Pathways</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorData.map((row, idx) => (
                      <tr key={idx} className={`border-b border-gray-200 ${row.bank === 'Santander' ? 'bg-red-50' : 'hover:bg-gray-50'}`}>
                        <td className={`px-6 py-4 text-sm font-semibold font-sans ${row.bank === 'Santander' ? 'text-[#EC0000]' : 'text-[#2D2D2D]'}`}>{row.bank}</td>
                        <td className="px-6 py-4 text-sm font-sans">
                          {row.consumer ? <span className="text-green-600">{row.consumer}</span> : <span className="flex items-center gap-1 text-red-500"><XCircle className="h-4 w-4" /> None</span>}
                        </td>
                        <td className="px-6 py-4 text-sm font-sans">
                          {row.business === true ? <CheckCircle2 className="h-4 w-4 text-green-600" /> : row.business ? <span className="text-[#666666] text-xs">{row.business}</span> : <span className="flex items-center gap-1 text-red-500"><XCircle className="h-4 w-4" /> None</span>}
                        </td>
                        <td className="px-6 py-4 text-center">{row.prequal ? <CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /> : <XCircle className="h-4 w-4 text-red-500 mx-auto" />}</td>
                        <td className="px-6 py-4 text-center">{row.pathways ? <CheckCircle2 className="h-4 w-4 text-green-600 mx-auto" /> : <XCircle className="h-4 w-4 text-red-500 mx-auto" />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8 text-center font-serif">Frequently Asked Questions</h2>
            <Card className="bg-white border-2 border-gray-200 shadow-sm">
              <CardContent className="p-6">
                {faqs.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="booking" className="py-32 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6 font-serif">
              Ready to See It Live?
            </h2>
            <p className="text-[#666666] mb-8 font-sans">
              Schedule a personalized demo walkthrough with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your work email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#F7F7F7] border-gray-300 text-[#2D2D2D] placeholder:text-[#999999]"
              />
              <Button size="lg" className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold rounded-full whitespace-nowrap">
                Book Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
