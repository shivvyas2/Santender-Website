import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Target, Scale, TrendingUp, Shield, Brain, ChevronRight, Activity } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Revolution() {
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
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EC0000]/5 border border-[#EC0000]/20 mb-8">
              <Activity className="h-4 w-4 text-[#EC0000]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#EC0000] uppercase">The Business Credit Journey Revolution</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-[#2D2D2D] mb-8 font-serif">
              Advanced Systems
              <br />
              <span className="text-[#EC0000]">
                Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed font-sans">
              Unified credit visibility that transforms how 7 million SMBs understand their financial health—powered by the tri-score spectrum Santander can leverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Revolution */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeInUp}>
            <Card className="bg-white border-2 border-gray-200 shadow-sm mb-8">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">01</span>
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
                  <Target className="h-6 w-6 text-[#EC0000]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] font-serif">Revolution — Purpose & Problem</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-red-600 font-sans">The Gap</h3>
                    <p className="text-[#666666] leading-relaxed mb-4 font-sans">
                      Small-business customers have <strong className="text-[#2D2D2D]">no unified way</strong> to monitor both the personal and business credit health that underwrites every lending or card approval decision.
                    </p>
                    <p className="text-[#666666] leading-relaxed mb-4 font-sans">
                      Consumer Credit Journey scaled to 40M+ users. Yet <strong className="text-[#2D2D2D]">7 million business owners remain invisible</strong> to their own dual credit profile.
                    </p>
                    <p className="text-red-600 font-semibold font-sans">
                      This invisibility leaves billions in lending & card revenue under-optimized.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-[#EC0000] font-sans">
                      <Brain className="h-5 w-5" />
                      LumiqAI's Answer
                    </h3>
                    <p className="text-[#666666] leading-relaxed mb-4 font-sans">
                      <strong className="text-[#EC0000]">LumiqAI</strong> automates dual-score orchestration: owner FICO + business credit (Intelliscore, FSR, PAYDEX) → instant soft-approval insights, behavioral scoring, and one-tap card applications.
                    </p>
                    <p className="text-[#666666] leading-relaxed font-sans">
                      All inside the Santander Business app. Zero friction. Maximum transparency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* System Intelligence Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { num: "1", icon: Scale, title: "Dual Scoring", desc: "Personal FICO + Business Credit unified in a single AI-powered likelihood score" },
              { num: "2", icon: Shield, title: "Rule Intelligence", desc: "5/24 · 2/30 · 1/30 · EX freeze · 40% max utilization enforced automatically" },
              { num: "3", icon: TrendingUp, title: "Instant Soft-Approval", desc: "No credit pull until application. Real-time transparent decision preview" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-white border-2 border-gray-200 hover:border-[#EC0000]/30 transition-all shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-black opacity-5 text-[#EC0000]">
                    {item.num}
                  </div>
                  <CardContent className="p-6 relative z-10">
                    <div className="h-10 w-10 rounded-xl bg-[#EC0000]/10 flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-[#EC0000]" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-[#2D2D2D] font-sans">{item.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed font-sans">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Now */}
          <motion.div {...fadeInUp}>
            <Card className="bg-white border-2 border-gray-200 shadow-sm mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">02</span>
                  <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] font-serif">Why Now — Market Moment</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-[#EC0000] font-sans">Strategic Timing</h4>
                    <p className="text-[#666666] leading-relaxed font-sans">
                      Santander already serves <strong className="text-[#2D2D2D]">millions of SMBs</strong> with deep personal & business credit history. 
                      Yet these customers have no window into how Santander views them—until they apply.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-[#2D2D2D] font-sans">Competitive White Space</h4>
                      <p className="text-[#666666] text-sm leading-relaxed font-sans">
                        No major bank offers a Credit Journey–style product for SMBs. LumiqAI gives Santander first-mover advantage.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-[#2D2D2D] font-sans">AI-Enabled Economics</h4>
                      <p className="text-[#666666] text-sm leading-relaxed font-sans">
                        Gen AI makes explainable, real-time decisioning affordable at scale—something impossible just 24 months ago.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div {...fadeInUp}>
            <Card className="bg-[#EC0000]/5 border-2 border-[#EC0000]/20">
              <CardContent className="p-12 text-center">
                <Sparkles className="h-8 w-8 text-[#EC0000] mx-auto mb-6" />
                
                <h3 className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-6 font-serif">
                  The Vision
                </h3>
                <p className="text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed mb-10 font-sans">
                  Give <span className="text-[#EC0000] font-semibold">millions of SMB clients</span> the same credit-journey transparency that consumers already enjoy—
                  a shared roadmap to better borrowing, greater trust, and higher card spend.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/impact">
                    <Button size="lg" className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold px-8 py-6 rounded-full">
                      See Financial Impact
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button variant="outline" size="lg" className="px-8 py-6 rounded-full border-2 border-gray-300 text-[#2D2D2D] hover:border-[#EC0000] hover:text-[#EC0000]">
                      Try Interactive Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-10 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-[#999999] font-sans">
            © {new Date().getFullYear()} FuteurCredX · For internal evaluation
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
