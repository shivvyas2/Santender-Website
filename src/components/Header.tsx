import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "Case Study",
    href: "/case-study",
  },
  {
    label: "Security",
    href: "/security",
  },
  {
    label: "Pilot",
    href: "/pilot",
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Main header row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center">
              {/* Santander flame icon */}
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-8 sm:h-8">
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="#EC0000"/>
                <path d="M16 6c-1.5 3-1 5 0 7 1 2 2 4 0 7 3-2 4-5 3-8-.5-2-2-4-3-6z" fill="white"/>
                <path d="M12 8c-1 2.5-.5 4.5.5 6 1 1.5 1.5 3 0 5.5 2.5-1.5 3-4 2.5-6-.3-1.5-1.5-3.5-3-5.5z" fill="white"/>
                <path d="M20 8c1 2.5.5 4.5-.5 6-1 1.5-1.5 3 0 5.5-2.5-1.5-3-4-2.5-6 .3-1.5 1.5-3.5 3-5.5z" fill="white"/>
              </svg>
              <span className="ml-1.5 sm:ml-2 text-base sm:text-xl font-semibold text-[#2D2D2D] font-sans">
                <span className="text-[#EC0000]">Santander</span> × LumiqAI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className={`
                  px-4 py-2 text-sm font-medium transition-colors
                  ${isActive(item.href) ? 'text-[#EC0000]' : 'text-[#444444] hover:text-[#EC0000]'}
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-[#EC0000] text-white text-sm font-semibold hover:bg-[#CC0000] transition-all duration-200 hover:shadow-lg"
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-[#444444] hover:text-[#EC0000] transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <nav className="px-4 sm:px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    block py-3 px-2 text-base font-medium border-b border-gray-100 touch-manipulation
                    ${isActive(item.href) ? 'text-[#EC0000]' : 'text-[#444444]'}
                  `}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full mt-4 mx-2 px-5 py-3.5 rounded-full bg-[#EC0000] text-white text-center text-sm font-semibold touch-manipulation"
              >
                Contact Sales
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
