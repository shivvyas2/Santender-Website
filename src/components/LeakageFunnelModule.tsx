import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  CreditCard, 
  Briefcase,
  ArrowRight,
  TrendingDown,
  Brain,
  Smartphone,
  Zap
} from "lucide-react";

const funnelData = {
  auto: {
    label: "Auto",
    icon: Car,
    stages: [
      { label: "Awareness", users: "3M", percent: 100 },
      { label: "Intent", users: "600K", percent: 20 },
      { label: "Research", users: "270K", percent: 9 },
      { label: "Prequal", users: "162K", percent: 5.4, isLoss: true },
    ],
    loss: "108K",
    recovered: "+2.8%"
  },
  card: {
    label: "Cards",
    icon: CreditCard,
    stages: [
      { label: "Awareness", users: "3M", percent: 100 },
      { label: "Intent", users: "450K", percent: 15 },
      { label: "Research", users: "180K", percent: 6 },
      { label: "Prequal", users: "95K", percent: 3.2, isLoss: true },
    ],
    loss: "85K",
    recovered: "+3.1%"
  },
  smb: {
    label: "SMB",
    icon: Briefcase,
    stages: [
      { label: "Awareness", users: "3M", percent: 100 },
      { label: "Intent", users: "600K", percent: 20 },
      { label: "Research", users: "270K", percent: 9 },
      { label: "Prequal", users: "160K", percent: 5.3, isLoss: true },
    ],
    loss: "110K",
    recovered: "+3.4%"
  }
};

type FunnelType = keyof typeof funnelData;

export function LeakageFunnelModule() {
  const [activeTab, setActiveTab] = useState<FunnelType>("smb");
  const currentFunnel = funnelData[activeTab];

  return (
    <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden">
      <CardContent className="p-0">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 bg-[#FAFAFA]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-1">
                Conversion Funnel Analysis
              </h3>
              <p className="text-sm text-[#666666]">
                Customer journey from awareness to prequalification
              </p>
            </div>
            
            {/* Key Metrics */}
            <div className="flex gap-8">
              {[
                { value: "45%", label: "Research first" },
                { value: "60%", label: "Seek prequal" },
                { value: "5.3%", label: "Avg loss" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold text-[#2D2D2D]">{stat.value}</div>
                  <div className="text-xs text-[#888888] uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Tab Navigation */}
          <div className="flex gap-1 mb-8 p-1 bg-[#F5F5F5] rounded-lg w-fit">
            {(Object.keys(funnelData) as FunnelType[]).map((key) => {
              const data = funnelData[key];
              const Icon = data.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#2D2D2D] shadow-sm"
                      : "text-[#666666] hover:text-[#2D2D2D]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {data.label}
                </button>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Funnel Visualization */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {currentFunnel.stages.map((stage, index) => {
                    const widthPercent = Math.max(stage.percent, 35);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative"
                        style={{ 
                          width: `${widthPercent}%`,
                          marginLeft: `${(100 - widthPercent) / 2}%`
                        }}
                      >
                        <div 
                          className={`flex items-center justify-between px-5 py-4 rounded-lg transition-all ${
                            stage.isLoss 
                              ? "bg-[#FEF2F2] border border-[#FECACA]" 
                              : "bg-[#F8F8F8] border border-[#E5E5E5]"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <span 
                              className={`text-xl font-bold ${
                                stage.isLoss ? "text-[#DC2626]" : "text-[#2D2D2D]"
                              }`}
                            >
                              {stage.users}
                            </span>
                            <span className="text-sm text-[#666666] font-medium">{stage.label}</span>
                          </div>
                          <span 
                            className={`text-sm font-semibold px-3 py-1 rounded ${
                              stage.isLoss 
                                ? "bg-[#FEE2E2] text-[#DC2626]" 
                                : "bg-[#E5E5E5] text-[#666666]"
                            }`}
                          >
                            {stage.percent}%
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Loss Indicator */}
              <motion.div
                key={`loss-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 flex items-center gap-3 text-sm bg-[#FEF2F2] px-5 py-3 rounded-lg border border-[#FECACA]"
              >
                <TrendingDown className="w-4 h-4 text-[#DC2626]" />
                <span className="text-[#DC2626] font-medium">
                  {currentFunnel.loss} customers lost at prequalification — captured by competitors
                </span>
              </motion.div>
            </div>

            {/* LumiqAI Solution Panel */}
            <div className="bg-[#FAFAFA] rounded-xl border border-[#E5E5E5] p-6">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#E5E5E5]">
                <div className="h-10 w-10 rounded-lg bg-[#EC0000] flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-[#2D2D2D] block">LumiqAI Solution</span>
                  <span className="text-xs text-[#888888]">Recapture lost conversions</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Instant credit readiness check",
                  "In-app dynamic offers",
                  "Pre-filled lending paths"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-[#444444]">
                    <ArrowRight className="w-4 h-4 text-[#EC0000] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Recovery Metric */}
              <div className="bg-white rounded-lg p-5 border border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-[#666666] font-medium">Potential Recovery</span>
                  <motion.span 
                    key={currentFunnel.recovered}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-[#EC0000]"
                  >
                    {currentFunnel.recovered}
                  </motion.span>
                </div>
                <div className="w-full h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
                  <motion.div
                    key={activeTab}
                    initial={{ width: 0 }}
                    animate={{ width: `${parseFloat(currentFunnel.recovered) * 10}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="h-full bg-[#EC0000] rounded-full"
                  />
                </div>
                <div className="text-xs text-[#888888] mt-3">
                  Est. {currentFunnel.loss} users recoverable per cycle
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {[
                  { icon: Brain, label: "AI Decision Layer" },
                  { icon: Smartphone, label: "App-Embedded" },
                ].map((badge, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E5E5E5] rounded-full text-xs text-[#666666] font-medium"
                  >
                    <badge.icon className="w-3.5 h-3.5" />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
