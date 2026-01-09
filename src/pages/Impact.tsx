import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  Sankey, Rectangle, Cell, ComposedChart, Area, Line
} from "recharts";
import { Rocket, TrendingUp, Zap, Shield, ArrowRight, DollarSign, Users, Clock, Target, ChevronLeft } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";

const brand = {
  bg: "bg-slate-950",
  card: "bg-slate-900/70",
  border: "border border-slate-800/60",
  text: "text-slate-200",
  sub: "text-slate-400",
  accent: "#33CCFF",
  accentSoft: "#5CBFEF",
  success: "#22C55E",
  warning: "#F59E0B",
};

const fmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });

// Year-1 Financial Impact Data
const financialData = [
  { metric: "Reach", base: 60, optimistic: 70 },
  { metric: "Engagement", base: 35, optimistic: 45 },
  { metric: "Conversion Lift", base: 15, optimistic: 25 },
  { metric: "Incremental Cards", base: 15.4, optimistic: 55.1 },
  { metric: "Avg Spend/Card", base: 60, optimistic: 80 },
  { metric: "Interchange Rev", base: 16.7, optimistic: 79.4 },
  { metric: "CAC Savings", base: 2.6, optimistic: 9.2 },
  { metric: "Total Annual Lift", base: 19.3, optimistic: 102.9 },
];

// Detailed breakdown for Optimistic scenario
const detailedBreakdown = [
  { name: "Interchange", value: 79.4, color: brand.accent },
  { name: "CAC Savings", value: 9.2, color: brand.accentSoft },
  { name: "Fees & Interest", value: 14.3, color: "#7dd3fc" },
];

// Strategic Leverage Comparison
const leverageData = [
  { category: "Credit Visibility", legacy: 20, lumiq: 95 },
  { category: "CAC Efficiency", legacy: 25, lumiq: 90 },
  { category: "Underwriting Speed", legacy: 30, lumiq: 98 },
  { category: "Risk Intelligence", legacy: 40, lumiq: 92 },
  { category: "Customer Trust", legacy: 45, lumiq: 88 },
];

// Stage 2 Lending Data
const stage2Data = [
  { product: "Business LOC", volumeMin: 8, volumeMax: 12, revenueMin: 70, revenueMax: 110 },
  { product: "Term Loans", volumeMin: 5, volumeMax: 8, revenueMin: 60, revenueMax: 90 },
  { product: "Commercial RE", volumeMin: 4, volumeMax: 6, revenueMin: 80, revenueMax: 120 },
];

// Revenue progression chart data
const revenueProgression = [
  { month: "M0", base: 0, optimistic: 0 },
  { month: "M3", base: 4.8, optimistic: 25.7 },
  { month: "M6", base: 9.7, optimistic: 51.5 },
  { month: "M9", base: 14.5, optimistic: 77.2 },
  { month: "M12", base: 19.3, optimistic: 102.9 },
];

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

function AnimatedMetric({ label, value, suffix = "", prefix = "$", color = brand.accent, delay = 0 }) {
  const { ref, count } = useCountUp(value, 2000);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`rounded-2xl p-6 ${brand.card} ${brand.border} relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 30% 50%, ${color}, transparent)` }} />
      <div className="relative z-10">
        <div className="text-sm text-slate-400 mb-2">{label}</div>
        <div className="text-4xl font-bold" style={{ color }}>
          {prefix}{fmt.format(count)}{suffix}
        </div>
      </div>
    </motion.div>
  );
}

function ComparisonBar({ label, legacy, lumiq, delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="mb-6"
    >
      <div className="text-sm text-slate-300 mb-2 flex justify-between">
        <span>{label}</span>
        <span className="text-slate-500">Legacy: {legacy}% → LUMIQ: {lumiq}%</span>
      </div>
      <div className="relative h-12 bg-slate-900 rounded-lg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${legacy}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="absolute h-full bg-slate-700"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${lumiq}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.4 }}
          className="absolute h-full"
          style={{ background: `linear-gradient(90deg, ${brand.accent}, ${brand.accentSoft})` }}
        />
        <div className="absolute inset-0 flex items-center justify-end px-4">
          <span className="text-white font-semibold text-sm">+{lumiq - legacy}% improvement</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.style.background = "#020617";
  }, []);

  return (
    <PageLayout>
      {/* HERO */}
      <section ref={heroRef} className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              The <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">$100M+</span> Impact
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground">Year One. Proven. Scalable.</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
              Not a projection. A replication of Chase's own Credit Journey success—now weaponized for SMB.
            </p>
          </motion.div>

          {/* Hero Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <AnimatedMetric label="Interchange Revenue" value={79.4} suffix="M" delay={0.1} />
            <AnimatedMetric label="CAC Savings" value={9.2} suffix="M" delay={0.2} />
            <AnimatedMetric label="Fee & Interest Income" value={14.3} suffix="M" delay={0.3} color={brand.success} />
            <AnimatedMetric label="Total Year-1 Uplift" value={102.9} suffix="M" delay={0.4} color="#F59E0B" />
          </div>
        </div>
      </section>

      {/* YEAR-1 FINANCIAL IMPACT */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-6 w-6" style={{ color: brand.accent }} />
              <h2 className="text-4xl font-extrabold">Year-1 Financial Impact</h2>
            </div>
            <p className="text-xl text-slate-400">Optimistic but Grounded — Mirrors Chase Credit Journey Trajectory</p>
          </motion.div>

          {/* Revenue Breakdown Visualization */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Revenue Composition Breakdown</h3>
              <div className="space-y-4">
                {detailedBreakdown.map((item, idx) => (
                  <div key={item.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300">{item.name}</span>
                      <span className="font-semibold" style={{ color: item.color }}>${item.value}M</span>
                    </div>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                      className="h-8 rounded-lg origin-left relative overflow-hidden"
                      style={{ backgroundColor: item.color, opacity: 0.8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                    </motion.div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-slate-300">Total Annual Uplift</span>
                  <span className="text-3xl font-bold" style={{ color: brand.accent }}>$102.9M</span>
                </div>
              </div>
            </motion.div>

            {/* Revenue Progression Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Revenue Acceleration Timeline</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={revenueProgression}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" tickFormatter={(v) => `$${v}M`} />
                  <Tooltip
                    contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 12, color: "#e2e8f0" }}
                    formatter={(v: number) => [`$${v}M`, ""]}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="optimistic" fill={brand.accent} fillOpacity={0.3} stroke={brand.accent} strokeWidth={3} name="Optimistic Path" />
                  <Line type="monotone" dataKey="base" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" name="Base Case" />
                </ComposedChart>
              </ResponsiveContainer>
              <p className="text-xs text-slate-500 mt-4">Exponential growth curve validated by consumer Credit Journey adoption rates</p>
            </motion.div>
          </div>

          {/* Detailed Metrics Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Complete Financial Model — Base vs. Optimistic</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="py-3 pr-6 text-slate-400 font-semibold">Metric</th>
                    <th className="py-3 pr-6 text-slate-400 font-semibold">Base Case</th>
                    <th className="py-3 pr-6 text-slate-400 font-semibold">Optimistic (Visine-Clear)</th>
                    <th className="py-3 text-slate-400 font-semibold">Uplift</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-300">Reach</td>
                    <td className="py-4 pr-6">60%</td>
                    <td className="py-4 pr-6 font-semibold" style={{ color: brand.accent }}>70%</td>
                    <td className="py-4 text-slate-400">+10%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-300">Engagement</td>
                    <td className="py-4 pr-6">35%</td>
                    <td className="py-4 pr-6 font-semibold" style={{ color: brand.accent }}>45%</td>
                    <td className="py-4 text-slate-400">+10%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-300">Conversion Lift</td>
                    <td className="py-4 pr-6">+15%</td>
                    <td className="py-4 pr-6 font-semibold" style={{ color: brand.accent }}>+25%</td>
                    <td className="py-4 text-slate-400">+67%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-300">Incremental Cards</td>
                    <td className="py-4 pr-6">≈ 15.4K</td>
                    <td className="py-4 pr-6 font-semibold" style={{ color: brand.accent }}>≈ 55.1K</td>
                    <td className="py-4 text-slate-400">+257%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-300">Avg Spend / Card</td>
                    <td className="py-4 pr-6">$60K</td>
                    <td className="py-4 pr-6 font-semibold" style={{ color: brand.accent }}>$80K</td>
                    <td className="py-4 text-slate-400">+33%</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-800/30">
                    <td className="py-4 pr-6 text-slate-200 font-semibold">Interchange Revenue</td>
                    <td className="py-4 pr-6 font-semibold">$16.7M</td>
                    <td className="py-4 pr-6 font-bold text-xl" style={{ color: brand.accent }}>$79.4M</td>
                    <td className="py-4 text-slate-300 font-semibold">+375%</td>
                  </tr>
                  <tr className="border-b border-slate-800 bg-slate-800/30">
                    <td className="py-4 pr-6 text-slate-200 font-semibold">CAC Savings</td>
                    <td className="py-4 pr-6 font-semibold">$2.6M</td>
                    <td className="py-4 pr-6 font-bold text-xl" style={{ color: brand.accentSoft }}>$9.2M</td>
                    <td className="py-4 text-slate-300 font-semibold">+254%</td>
                  </tr>
                  <tr className="bg-slate-800/50">
                    <td className="py-4 pr-6 text-white font-bold text-lg">Total Annual Lift</td>
                    <td className="py-4 pr-6 font-semibold">$19.3M</td>
                    <td className="py-4 pr-6 font-bold text-2xl" style={{ color: "#F59E0B" }}>$102.9M</td>
                    <td className="py-4 text-white font-bold">+433%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 mt-6">
              <strong className="text-slate-300">Breakdown:</strong> $79.4M gross interchange + $9.2M marketing savings + $14.3M fee & interest income = 
              <strong style={{ color: brand.accent }}> $102.9M</strong> triple-digit-million uplift in Year 1.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC LEVERAGE */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6" style={{ color: brand.warning }} />
              <h2 className="text-4xl font-extrabold">Strategic Leverage</h2>
            </div>
            <p className="text-xl text-slate-400">The Transformation — Legacy State vs. Post-LUMIQ Reality</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before/After Comparison */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-8">Performance Radar</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={leverageData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="category" stroke="#94a3b8" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
                  <Radar name="Legacy State" dataKey="legacy" stroke="#64748b" fill="#64748b" fillOpacity={0.3} />
                  <Radar name="Post-LUMIQ" dataKey="lumiq" stroke={brand.accent} fill={brand.accent} fillOpacity={0.5} />
                  <Legend />
                  <Tooltip
                    contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 12 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Detailed Comparison Bars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-2xl font-semibold mb-8">Capability Transformation</h3>
              {leverageData.map((item, idx) => (
                <ComparisonBar
                  key={item.category}
                  label={item.category}
                  legacy={item.legacy}
                  lumiq={item.lumiq}
                  delay={idx * 0.1}
                />
              ))}
            </motion.div>
          </div>

          {/* Legacy vs LUMIQ Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border} mt-8`}
          >
            <h3 className="text-2xl font-semibold mb-6">The Reality Shift</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-700">
                    <th className="py-3 pr-6 text-slate-400 font-semibold">Legacy State</th>
                    <th className="py-3 text-slate-400 font-semibold">Post-LUMIQ Reality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-400">No unified personal + business credit view</td>
                    <td className="py-4 font-semibold" style={{ color: brand.accent }}>Integrated FICO + Intelliscore + FSR dashboard</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-400">CAC &gt;$160 / card via paid media</td>
                    <td className="py-4 font-semibold" style={{ color: brand.accent }}>Owned-channel conversion → –40% cost per approval</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-400">Manual underwriting friction</td>
                    <td className="py-4 font-semibold" style={{ color: brand.accent }}>AI Stage 1–4 decisioning in seconds</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 pr-6 text-slate-400">Fragmented risk data</td>
                    <td className="py-4 font-semibold" style={{ color: brand.accent }}>Unified journey → lower loss ratios by 1–3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STAGE 2 PREVIEW */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6" style={{ color: brand.success }} />
              <h2 className="text-4xl font-extrabold">Stage 2 Preview — Lending Expansion</h2>
            </div>
            <p className="text-xl text-slate-400">The Next Wave: <span style={{ color: brand.success }}>$210–320M</span> Additional Uplift Potential</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {stage2Data.map((product, idx) => (
              <motion.div
                key={product.product}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl p-6 ${brand.card} ${brand.border} relative overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-5" style={{ background: `radial-gradient(circle at 50% 50%, ${brand.success}, transparent)` }} />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-4">{product.product}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Volume Uplift</div>
                      <div className="text-2xl font-bold" style={{ color: brand.success }}>
                        +{product.volumeMin}–{product.volumeMax}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Revenue Lift (Year 1)</div>
                      <div className="text-2xl font-bold" style={{ color: brand.accent }}>
                        ${product.revenueMin}–{product.revenueMax}M
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${brand.card} ${brand.border} text-center`}
          >
            <div className="text-sm text-slate-400 mb-2">Combined Stage 2 Impact (Teaser)</div>
            <div className="text-5xl font-extrabold mb-4" style={{ color: brand.success }}>
              $210–320M
            </div>
            <p className="text-slate-300 mb-6">Lending uplift potential across Business LOC, Term Loans, and Commercial Real Estate</p>
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="h-4 w-4" />
              <span>Stage 2 timeline begins Q2 post Stage-1 validation</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPLIANCE & GOVERNANCE */}
      <section className="py-16 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6" style={{ color: brand.accent }} />
              <h2 className="text-4xl font-extrabold">Compliance & Governance</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-xl font-semibold mb-4">Regulatory Alignment</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full grid place-items-center mt-0.5" style={{ background: brand.accent }}>
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <span>FCRA / GLBA / ECOA compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full grid place-items-center mt-0.5" style={{ background: brand.accent }}>
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <span>Individual and Company Liability framework adherence</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full grid place-items-center mt-0.5" style={{ background: brand.accent }}>
                    <div className="h-2 w-2 rounded-full bg-slate-950" />
                  </div>
                  <span>Full explainability and audit trail for regulators</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 ${brand.card} ${brand.border}`}
            >
              <h3 className="text-xl font-semibold mb-4">Chase Rules Enforced</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accent }}>5/24</div>
                  <div className="text-xs text-slate-400">Card limit rule</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accent }}>2/30</div>
                  <div className="text-xs text-slate-400">Recent apps limit</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accent }}>1/30</div>
                  <div className="text-xs text-slate-400">Business app limit</div>
                </div>
                <div className={`rounded-lg p-4 ${brand.border} bg-slate-800/40`}>
                  <div className="text-2xl font-bold mb-1" style={{ color: brand.accent }}>&lt;40%</div>
                  <div className="text-xs text-slate-400">Exposure threshold</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-6">Ready to Deploy?</h2>
            <p className="text-xl text-slate-300 mb-8">
              90-day pilot. 250K digitally-active SMBs. $100M+ uplift trajectory.
            </p>
            <Link
              to="/#demo"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold text-lg"
              style={{ background: brand.accent, color: "#06121a" }}
            >
              Explore Interactive Demo <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs text-muted-foreground text-center">© {new Date().getFullYear()} FuteurCredX · For internal evaluation by JPMorgan Chase CCB.</p>
        </div>
      </footer>
    </PageLayout>
  );
}
