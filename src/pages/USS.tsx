import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, DollarSign, Shield, Zap, ArrowRight, BarChart3, Target, Briefcase } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import HeroBackground from "@/components/HeroBackground";

function MetricCard({ value, label, icon: Icon, delay = 0 }: { value: string; label: string; icon: any; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] hover:border-primary/30 transition-all duration-300"
    >
      <Icon className="w-10 h-10 text-primary mb-4" />
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-[#070707]/70 dark:text-white/70 text-center">{label}</div>
    </motion.div>
  );
}

function ComparisonRow({ consumer, business, delay = 0 }: { consumer: string; business: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="grid md:grid-cols-2 gap-6 mb-6"
    >
      <div className="p-6 rounded-xl bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D]">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-[#070707] dark:text-white">{consumer}</p>
        </div>
      </div>
      <div className="p-6 rounded-xl bg-white dark:bg-[#1D1D1D] border border-primary/30">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-[#070707] dark:text-white font-medium">{business}</p>
        </div>
      </div>
    </motion.div>
  );
}

function USS() {
  const containerClass = "mx-auto w-full px-5 md:px-[5vw]";
  const neutralCard = "bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D] rounded-[24px]";

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroBackground>
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col items-start gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1146F2] text-white text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Unique Salient Similarities (USS)
              </div>

              <h1 className="text-[40px] md:text-[52px] lg:text-[72px] font-semibold mb-6 leading-[52px] md:leading-[64px] lg:leading-[85px] tracking-[-1.2px] md:tracking-[-2.16px] text-white">
                The proven playbook applied to business credit
              </h1>

              <p className="text-lg text-white/90 mb-4 max-w-3xl leading-relaxed font-normal">
                Chase Credit Journey® revolutionized consumer credit engagement. Now the same proven science powers business credit intelligence.
              </p>

              <p className="text-base text-white/70 mb-8 max-w-2xl">
                Same science. Same proven engagement model. Same compliance rigor. Now applied to the $2.3T business credit market.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/pilot">
                  <Button size="lg" variant="solver" className="text-base md:text-lg gap-6">
                    Start Your Pilot
                    <div className="w-10 h-10 p-2.5 rounded-full bg-white flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-[#070707]" />
                    </div>
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    See the Platform
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-white/80">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                  <Users className="w-4 h-4 text-white" />
                  <span>22M+ consumer users</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span>+25% conversion lift</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                  <Shield className="w-4 h-4 text-white" />
                  <span>100% audit trail</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </HeroBackground>

      {/* Chase Credit Journey Historical Impact */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">
              Chase Credit Journey®: The Proof Point
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto">
              Since implementation, Chase Credit Journey has transformed consumer credit engagement and generated massive ROI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <MetricCard 
              value="22M+" 
              label="Active Users Engaged" 
              icon={Users}
              delay={0}
            />
            <MetricCard 
              value="+25%" 
              label="Increase in Card Applications" 
              icon={TrendingUp}
              delay={0.1}
            />
            <MetricCard 
              value="$340M" 
              label="Additional Revenue (18 Months)" 
              icon={DollarSign}
              delay={0.2}
            />
            <MetricCard 
              value="+30pts" 
              label="Average Score Improvement" 
              icon={BarChart3}
              delay={0.3}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className={`${neutralCard}`}>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-[#070707]/70 dark:text-white/70">Customer Satisfaction Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2-3x</div>
                    <div className="text-sm text-[#070707]/70 dark:text-white/70">Increase in Digital Banking Usage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">150M+</div>
                    <div className="text-sm text-[#070707]/70 dark:text-white/70">Americans Using Credit Visibility Tools</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity Gap */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">
              But 32 Million SMBs? Still Flying Blind
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto">
              The same engagement revolution that transformed consumer credit hasn't reached business credit — until now
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className={`${neutralCard}`}>
              <CardHeader>
                <CardTitle className="text-2xl text-[#070707] dark:text-white">SMB Reality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#070707] dark:text-white">78% of SMBs</p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">Have never seen their business credit score</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#070707] dark:text-white">85% of rejections</p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">Come with no actionable feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#070707] dark:text-white">60% considering switching</p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">To fintech alternatives for transparency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`${neutralCard} border-primary/30`}>
              <CardHeader>
                <CardTitle className="text-2xl text-[#070707] dark:text-white">The $2.3T Opportunity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#070707] dark:text-white">32 million SMBs</p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">Generate $2.3T in annual credit demand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#070707] dark:text-white">$47M avg. annual loss</p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">Per major bank to fintech competitors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-[#070707] dark:text-white">23% annual growth</p>
                    <p className="text-sm text-[#070707]/70 dark:text-white/70">Fintech SMB market share acceleration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">
              Same Proven Formula
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto mb-12">
              The consumer playbook that generated hundreds of millions in revenue — now engineered for business credit
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl bg-white dark:bg-[#1D1D1D] border border-[#E4E7EC] dark:border-[#1D1D1D]">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#070707] dark:text-white">Chase Credit Journey®</h3>
                <p className="text-[#070707]/70 dark:text-white/70">Consumer Credit Intelligence</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white dark:bg-[#1D1D1D] border border-primary/30">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#070707] dark:text-white">LUMIQ AI Business Credit Journey</h3>
                <p className="text-[#070707]/70 dark:text-white/70">Business Credit Intelligence</p>
              </div>
            </div>

            <ComparisonRow 
              consumer="Free personal FICO® score visibility in banking app"
              business="Free owner FICO + Business Intelliscore + FSR visibility"
              delay={0}
            />
            <ComparisonRow 
              consumer="Real-time score monitoring and change alerts"
              business="Multi-bureau business credit monitoring with 340+ data points"
              delay={0.1}
            />
            <ComparisonRow 
              consumer="Pre-qualified credit card offers based on profile"
              business="Soft-approval routing to business cards, LOC, and term loans"
              delay={0.2}
            />
            <ComparisonRow 
              consumer="Personalized credit improvement recommendations"
              business="Explainable business credit insights with actionable guidance"
              delay={0.3}
            />
            <ComparisonRow 
              consumer="Score factors and educational resources"
              business="Compliance-ready adverse action reasons and audit trails"
              delay={0.4}
            />
            <ComparisonRow 
              consumer="Seamless integration into digital banking platform"
              business="2-week API integration with existing bank infrastructure"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Projected Business Impact */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold mb-4 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">
              Your Business Credit Opportunity
            </h2>
            <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 max-w-3xl mx-auto">
              Conservative projections based on Chase Credit Journey's proven results, applied to business credit portfolio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className={`${neutralCard} hover:border-primary/30 transition-all`}>
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">+25%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#070707] dark:text-white font-semibold mb-2">Pre-Qualified SMB Conversions</p>
                <p className="text-sm text-[#070707]/70 dark:text-white/70">Same conversion lift Chase achieved with consumers</p>
              </CardContent>
            </Card>

            <Card className={`${neutralCard} hover:border-primary/30 transition-all`}>
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">$100M+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#070707] dark:text-white font-semibold mb-2">Stage 1: Business Card Uplift</p>
                <p className="text-sm text-[#070707]/70 dark:text-white/70">Incremental interchange and fee revenue</p>
              </CardContent>
            </Card>

            <Card className={`${neutralCard} hover:border-primary/30 transition-all`}>
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">$210-320M</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#070707] dark:text-white font-semibold mb-2">Stage 2: Lending Expansion Potential</p>
                <p className="text-sm text-[#070707]/70 dark:text-white/70">LOC and term loan revenue opportunity</p>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <Card className={`${neutralCard} border-primary/30`}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#070707] dark:text-white">Inside Your Risk Guardrails</h3>
                    <p className="text-[#070707]/70 dark:text-white/70">
                      Same science. Same proven engagement model. Same compliance rigor. Now applied to the $2.3T business credit market where your SMB customers are already looking for transparency.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center pt-6 border-t border-[#E4E7EC] dark:border-[#1D1D1D]">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-[#070707]/70 dark:text-white/70">Audit-Trail Coverage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">5x</div>
                    <div className="text-sm text-[#070707]/70 dark:text-white/70">More Accurate Scoring</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">2 weeks</div>
                    <div className="text-sm text-[#070707]/70 dark:text-white/70">Integration Timeline</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-24 bg-white dark:bg-[#070707]">
        <div className={containerClass}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className={`${neutralCard} rounded-[32px]`}>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-[32px] md:text-[48px] font-bold mb-6 text-[#070707] dark:text-white leading-[41.6px] md:leading-[56px]">
                  You've proven this works. Now capture the business side.
                </h2>
                <p className="text-lg md:text-xl text-[#070707]/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
                  Start a 6-week pilot with pre-agreed success criteria and see the same conversion lift you achieved with consumer credit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pilot">
                    <Button size="lg" variant="solver" className="text-base md:text-lg gap-6">
                      Book a 20-Minute Pilot Review
                      <div className="w-10 h-10 p-2.5 rounded-full bg-[#070707] dark:bg-white flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-white dark:text-[#070707]" />
                      </div>
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="border-[#070707] dark:border-white text-[#070707] dark:text-white hover:bg-primary/10 hover:border-primary/50">
                      See Platform Demo
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default USS;
