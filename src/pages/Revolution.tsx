import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Target, Scale, TrendingUp, Shield, Users, Brain, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

export default function Revolution() {
  useEffect(() => {
    document.body.style.background = "hsl(var(--background))";
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">The Business Credit Journey Revolution</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Explained for{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Advanced Systems Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unified credit visibility that transforms how 7 million SMBs understand their financial health—powered by the tri-score spectrum Chase already uses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE REVOLUTION */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-xl border border-border/50 mb-8 hover:border-border transition-all"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="font-display text-3xl font-bold">I. Revolution — Purpose & Problem</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                  The Gap
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Small-business customers of JPMorgan Chase have <strong className="text-foreground">no unified way</strong> to monitor both the personal and business credit health that underwrites every lending or card approval decision.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Consumer Credit Journey scaled to 40M+ users. Yet <strong className="text-foreground">7 million business owners remain invisible</strong> to their own dual credit profile.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This invisibility leaves billions in lending & card revenue under-optimized.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-secondary" />
                  LUMIQ's Answer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-primary">LUMIQ AI</strong> automates dual-score orchestration: owner FICO + business credit (Intelliscore, FSR, PAYDEX) → instant soft-approval insights, behavioral scoring, and one-tap card applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All inside the Chase Business app. Zero friction. Maximum transparency.
                </p>
              </div>
            </div>
          </motion.div>

          {/* System Intelligence Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <ScoreCard
              number="1"
              title="Dual Scoring"
              description="Personal FICO + Business Credit unified in a single AI-powered likelihood score"
              icon={<Scale className="h-5 w-5" />}
            />
            <ScoreCard
              number="2"
              title="Rule Intelligence"
              description="5/24 · 2/30 · 1/30 · EX freeze · 40% max utilization enforced automatically"
              icon={<Shield className="h-5 w-5" />}
            />
            <ScoreCard
              number="3"
              title="Instant Soft-Approval"
              description="No credit pull until application. Real-time transparent decision preview"
              icon={<TrendingUp className="h-5 w-5" />}
            />
          </div>

          {/* WHY NOW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-xl border border-border/50 mb-8"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-success" />
              <h2 className="font-display text-3xl font-bold">II. Why Now — Market Moment</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary">
                  Strategic Timing
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Chase already serves <strong className="text-foreground">7M SMBs</strong> with deep personal & business credit history. 
                  Yet these customers have no window into how Chase views them—until they apply.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Competitive White Space</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    No major bank offers a Credit Journey–style product for SMBs. LUMIQ AI gives Chase first-mover advantage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">AI-Enabled Economics</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Gen AI makes explainable, real-time decisioning affordable at scale—something impossible just 24 months ago.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <Sparkles className="h-7 w-7 text-primary mx-auto mb-4" />
              
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                The Vision
              </h3>
              <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Give <span className="text-primary font-semibold">7 million SMB clients</span> the same credit-journey transparency that consumers already enjoy—
                a shared roadmap to better borrowing, greater trust, and higher card spend.
                <br/><br/>
                All now powered by AI that understands <span className="text-secondary font-semibold">both the company and the human behind it</span>.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/impact">
                  <motion.button
                    className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(51, 204, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    See Financial Impact <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </Link>
                <Link to="/demo">
                  <motion.button
                    className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold border-2 border-border bg-card/50 backdrop-blur-sm text-foreground hover:border-primary/50 hover:bg-card transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Try Interactive Demo
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FuteurCredX · For internal evaluation by JPMorgan Chase CCB
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

function ScoreCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-3xl p-6 bg-gradient-to-br from-card/70 to-card/30 backdrop-blur-xl border border-border/50 relative overflow-hidden group"
      style={{ boxShadow: 'var(--shadow-glow)' }}
    >
      <div className="absolute top-0 right-0 text-8xl font-bold opacity-5 text-primary font-display">
        {number}
      </div>
      <div className="relative z-10">
        <div className="mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
