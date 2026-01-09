import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutionLinks = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Value & Outcomes", href: "/#value" },
  { label: "Security & Compliance", href: "/#security" },
  { label: "Integration", href: "/#security" },
];

const resourceLinks = [
  { label: "Case Study", href: "/case-study" },
  { label: "Demo", href: "/demo" },
  { label: "Pilot", href: "/pilot" },
  { label: "USS Framework", href: "/uss" },
];

const policyLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Security", href: "/security" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#070707] text-white">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto w-full px-5 md:px-[5vw] pt-16 pb-8 space-y-12">
        <div className="flex flex-col lg:flex-row gap-12 border-b border-white/10 pb-12">
          <div className="flex-1 space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">LUMIQ AI FOR CHASE</p>
            <p className="text-3xl md:text-4xl font-bold leading-tight max-w-xl">
              Business-credit journeys grounded in proven consumer-scale outcomes.
            </p>
            <p className="text-white/70 max-w-lg">
              Deploy enterprise-grade underwriting workflows, explainable decisions, and measured uptake across cards,
              LOC, and term lending — without leaving your existing controls.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/company/lumiqai"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
              >
                <Linkedin className="w-4 h-4" />
                Linkedin
              </a>
              <a
                href="https://x.com/lumiq"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition"
              >
                <Twitter className="w-4 h-4" />
                X / Twitter
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Solutions</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                {solutionLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-white transition">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Resources</h4>
              <ul className="space-y-3 text-white/70 text-sm">
                {resourceLinks.map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-3">Ready to pilot</p>
            <p className="text-lg font-semibold">Start a 6-week pilot with pre-agreed success metrics.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="/#cta">
              <Button variant="solverSecondary" className="gap-3">
                Book Pilot Review
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Link to="/demo">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/60">
          <span>© {new Date().getFullYear()} LUMIQ AI for Chase. All rights reserved.</span>
          <div className="flex flex-wrap gap-4">
            {policyLinks.map((item) => (
              <Link key={item.label} to={item.href} className="hover:text-white transition">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

