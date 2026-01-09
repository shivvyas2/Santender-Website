import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, TrendingUp, Users, DollarSign, Shield, Zap, ArrowRight, BarChart3, Target, Briefcase } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function MetricCard({ value, label, icon: Icon, delay = 0 }: { value: string; label: string; icon: any; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)]"
    >
      <Icon className="w-12 h-12 text-primary mb-4" />
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
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
      <div className="p-6 rounded-xl bg-card/30 border border-border/30">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-foreground">{consumer}</p>
        </div>
      </div>
      <div className="p-6 rounded-xl bg-primary/5 border border-primary/30">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <p className="text-foreground font-medium">{business}</p>
        </div>
      </div>
    </motion.div>
  );
}

function USS() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Shield className="w-4 h-4" />
              Unique Salient Similarities (USS)
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                proven playbook
              </span>
              {" "}applied to business credit
            </h1>

            <p className="text-xl text-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Chase Credit Journey® revolutionized consumer credit engagement. Now the same proven science powers business credit intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pilot">
                <Button size="lg" className="group">
                  Start Your Pilot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button size="lg" variant="outline">
                  See the Platform
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chase Credit Journey Historical Impact */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chase Credit Journey®: The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Proof Point
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">85%</div>
                    <div className="text-sm text-muted-foreground">Customer Satisfaction Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">2-3x</div>
                    <div className="text-sm text-muted-foreground">Increase in Digital Banking Usage</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">150M+</div>
                    <div className="text-sm text-muted-foreground">Americans Using Credit Visibility Tools</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity Gap */}
      <section className="py-24 relative bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              But 32 Million SMBs?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Still Flying Blind
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The same engagement revolution that transformed consumer credit hasn't reached business credit — until now
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">SMB Reality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">78% of SMBs</p>
                    <p className="text-sm text-muted-foreground">Have never seen their business credit score</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">85% of rejections</p>
                    <p className="text-sm text-muted-foreground">Come with no actionable feedback</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">60% considering switching</p>
                    <p className="text-sm text-muted-foreground">To fintech alternatives for transparency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 backdrop-blur border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl">The $2.3T Opportunity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">32 million SMBs</p>
                    <p className="text-sm text-muted-foreground">Generate $2.3T in annual credit demand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">$47M avg. annual loss</p>
                    <p className="text-sm text-muted-foreground">Per major bank to fintech competitors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">23% annual growth</p>
                    <p className="text-sm text-muted-foreground">Fintech SMB market share acceleration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Same{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Proven Formula
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              The consumer playbook that generated hundreds of millions in revenue — now engineered for business credit
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl bg-card/30 border border-border/30">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Chase Credit Journey®</h3>
                <p className="text-muted-foreground">Consumer Credit Intelligence</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/30">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">LUMIQ AI Business Credit Journey</h3>
                <p className="text-muted-foreground">Business Credit Intelligence</p>
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
      <section className="py-24 relative bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Business Credit{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Opportunity
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conservative projections based on Chase Credit Journey's proven results, applied to business credit portfolio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)] transition-all">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">+25%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold mb-2">Pre-Qualified SMB Conversions</p>
                <p className="text-sm text-muted-foreground">Same conversion lift Chase achieved with consumers</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)] transition-all">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">$100M+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold mb-2">Stage 1: Business Card Uplift</p>
                <p className="text-sm text-muted-foreground">Incremental interchange and fee revenue</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:shadow-[0_0_40px_rgba(51,204,255,0.15)] transition-all">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-3xl font-bold text-primary">$210-320M</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground font-semibold mb-2">Stage 2: Lending Expansion Potential</p>
                <p className="text-sm text-muted-foreground">LOC and term loan revenue opportunity</p>
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
            <Card className="bg-primary/5 backdrop-blur border-primary/30">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inside Your Risk Guardrails</h3>
                    <p className="text-muted-foreground">
                      Same science. Same proven engagement model. Same compliance rigor. Now applied to the $2.3T business credit market where your SMB customers are already looking for transparency.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-center pt-6 border-t border-border/30">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Audit-Trail Coverage</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">5x</div>
                    <div className="text-sm text-muted-foreground">More Accurate Scoring</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">2 weeks</div>
                    <div className="text-sm text-muted-foreground">Integration Timeline</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background border-primary/30 overflow-hidden">
              <CardContent className="p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  You've proven this works.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Now capture the business side.
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start a 6-week pilot with pre-agreed success criteria and see the same conversion lift you achieved with consumer credit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pilot">
                    <Button size="lg" className="group text-lg px-8 py-6">
                      Book a 20-Minute Pilot Review
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/demo">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
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
