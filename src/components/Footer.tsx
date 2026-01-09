import { Link } from "react-router-dom";
import lumiqLogoWhite from "@/assets/lumiq-logo-white-transparent.png";

const footerLinks = {
  documents: [
    { label: "API Documentation", href: "https://docs.futeurcredx.com/", external: true },
    { label: "API Reference", href: "https://docs.futeurcredx.com/api-reference", external: true },
    { label: "Changelog", href: "https://docs.futeurcredx.com/changelog", external: true },
  ],
  lumiqai: [
    { label: "What Is It", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Security", href: "/security" },
    { label: "Pilot", href: "/pilot" },
  ],
  company: [
    { label: "About Us", href: "https://www.futeurcredx.com/about", external: true },
    { label: "Contact Us", href: "https://www.futeurcredx.com/contact-us", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-white">
      {/* Top branding section */}
      <div className="border-b border-white/10 py-8 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <img src={lumiqLogoWhite} alt="LumiqAI" className="h-10 sm:h-12 mx-auto mb-3 sm:mb-4" />
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
            Powered by FuteurCredX
          </p>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-4 sm:mb-6 px-2">
            LumiqAI™ powers readiness scoring, unlock paths, and sponsor-safe exposure decisions for fundability infrastructure.
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
            <span className="w-2 h-2 rounded-full bg-white/40"></span>
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-16">
          {/* Documents column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Documents
            </h3>
            <ul className="space-y-4">
              {footerLinks.documents.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Santander X LumiqAI column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Santander X LumiqAI
            </h3>
            <ul className="space-y-4">
              {footerLinks.lumiqai.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom dark section */}
      <div className="bg-[#0f1218] py-6 sm:py-8 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-xl font-bold tracking-wider mb-2">FUTEURCREDX</h2>
          <p className="text-gray-500 text-sm mb-6">© FUTEURCREDX {new Date().getFullYear()}</p>
          
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Enterprise Solutions</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our enterprise solutions provide financial institutions with AI-powered risk assessment tools, lending intelligence, and portfolio analytics to enhance decision-making processes and improve operational efficiency.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Data Security</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                FUTEURCREDX employs industry-leading security measures to protect your business data. All information is encrypted and stored according to the highest security standards in compliance with relevant regulations.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} FUTEURCREDX. LUMIQ AI™ and FUTEURCREDX® are registered trademarks. All rights reserved. Building business credit, empowering growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}