import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  ComposedChart, Area, Line
} from "recharts";
import { Rocket, TrendingUp, Zap, Shield, ArrowRight, DollarSign, Users, Clock, Target, Activity, TrendingDown } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

const detailedBreakdown = [
  { name: "Interchange", value: 79.4, color: "#EC0000" },
  { name: "CAC Savings", value: 9.2, color: "#FF4444" },
  { name: "Fees & Interest", value: 14.3, color: "#FF6666" },
];

const leverageData = [
  { category: "Credit Visibility", legacy: 20, lumiq: 95 },
  { category: "CAC Efficiency", legacy: 25, lumiq: 90 },
  { category: "Underwriting Speed", legacy: 30, lumiq: 98 },
  { category: "Risk Intelligence", legacy: 40, lumiq: 92 },
  { category: "Customer Trust", legacy: 45, lumiq: 88 },
];

const revenueProgression = [
  { month: "M0", base: 0, optimistic: 0 },
  { month: "M3", base: 4.8, optimistic: 25.7 },
  { month: "M6", base: 9.7, optimistic: 51.5 },
  { month: "M9", base: 14.5, optimistic: 77.2 },
  { month: "M12", base: 19.3, optimistic: 102.9 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { ref, count };
}

function AnimatedMetric({ label, value, suffix = "", prefix = "$", color = "#EC0000", delay = 0 }: any) {
  const { ref, count } = useCountUp(value, 2000);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-2xl p-6 bg-white border-2 border-gray-200 shadow-sm relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 30% 50%, ${color}, transparent)` }} />
      <div className="relative z-10">
        <div className="text-sm text-[#666666] mb-2 uppercase tracking-wide font-sans">{label}</div>
        <div className="text-4xl font-black font-sans" style={{ color }}>
          {prefix}{fmt.format(count)}{suffix}
        </div>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-32 bg-white">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 80% 20%, rgba(236, 0, 0, 0.03) 0%, transparent 50%)'
          }}
        />
        
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EC0000]/5 border border-[#EC0000]/20 text-[#EC0000] text-xs font-bold tracking-[0.2em] uppercase mb-8">
              <Activity className="w-3.5 h-3.5" />
              <span>Financial Impact</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-[#2D2D2D] font-serif">
              The <span className="text-[#EC0000]">$100M+</span> Impact
            </h1>
            <p className="text-xl text-[#666666] font-sans">
              Year One. Proven. Scalable.
            </p>
          </motion.div>

          {/* Hero Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            <AnimatedMetric label="Interchange Revenue" value={79.4} suffix="M" delay={0.1} />
            <AnimatedMetric label="CAC Savings" value={9.2} suffix="M" delay={0.2} />
            <AnimatedMetric label="Fee & Interest Income" value={14.3} suffix="M" delay={0.3} color="#FF4444" />
            <AnimatedMetric label="Total Year-1 Uplift" value={102.9} suffix="M" delay={0.4} color="#EC0000" />
          </div>
        </div>
      </section>

      {/* Year-1 Financial Impact */}
      <section className="py-24 bg-[#F7F7F7]">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">01</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
              <DollarSign className="h-5 w-5 text-[#EC0000]" />
              <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">Year-1 Financial Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] font-serif">Optimistic but Grounded</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Revenue Breakdown */}
            <motion.div {...fadeInUp}>
              <Card className="h-full bg-white border-2 border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-6 font-sans">Revenue Composition</h3>
                  <div className="space-y-4">
                    {detailedBreakdown.map((item, idx) => (
                      <div key={item.name}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-[#666666] font-sans">{item.name}</span>
                          <span className="font-bold font-sans" style={{ color: item.color }}>${item.value}M</span>
                        </div>
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.2 }}
                          className="h-6 rounded-lg origin-left"
                          style={{ backgroundColor: item.color, width: `${(item.value / 79.4) * 100}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-[#666666] font-sans">Total Annual Uplift</span>
                      <span className="text-3xl font-black text-[#EC0000]">$102.9M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Revenue Timeline Chart */}
            <motion.div {...fadeInUp}>
              <Card className="h-full bg-white border-2 border-gray-200 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-6 font-sans">Revenue Acceleration</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={revenueProgression}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="month" stroke="#666666" />
                      <YAxis stroke="#666666" tickFormatter={(v) => `$${v}M`} />
                      <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 12, color: "#2D2D2D" }} formatter={(v: number) => [`$${v}M`, ""]} />
                      <Legend />
                      <Area type="monotone" dataKey="optimistic" fill="#EC0000" fillOpacity={0.2} stroke="#EC0000" strokeWidth={3} name="Optimistic" />
                      <Line type="monotone" dataKey="base" stroke="#666666" strokeWidth={2} strokeDasharray="5 5" name="Base Case" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Leverage */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...fadeInUp} className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[#EC0000] text-xs font-bold tracking-[0.3em]">02</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-[#EC0000] to-transparent" />
              <Zap className="h-5 w-5 text-[#EC0000]" />
              <span className="text-[#666666] text-xs font-medium tracking-[0.2em] uppercase">Strategic Leverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] font-serif">Legacy vs. Post-LumiqAI</h2>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-[#F7F7F7] border-2 border-gray-200 shadow-sm">
              <CardContent className="p-8">
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={leverageData}>
                    <PolarGrid stroke="#d1d5db" />
                    <PolarAngleAxis dataKey="category" stroke="#666666" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#666666" />
                    <Radar name="Legacy State" dataKey="legacy" stroke="#999999" fill="#999999" fillOpacity={0.3} />
                    <Radar name="Post-LumiqAI" dataKey="lumiq" stroke="#EC0000" fill="#EC0000" fillOpacity={0.4} />
                    <Legend />
                    <Tooltip contentStyle={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 12 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#F7F7F7] border-t border-gray-200">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-6 font-serif">
              Ready to Capture This Value?
            </h2>
            <p className="text-xl text-[#666666] mb-10 font-sans">
              Deploy credit intelligence in 90 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pilot">
                <Button size="lg" className="bg-[#EC0000] hover:bg-[#CC0000] text-white font-semibold px-10 py-6 text-lg rounded-full">
                  Start Pilot
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/case-study">
                <Button variant="outline" size="lg" className="px-10 py-6 text-lg rounded-full border-2 border-gray-300 text-[#2D2D2D] hover:border-[#EC0000] hover:text-[#EC0000]">
                  Read Full Case Study
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
