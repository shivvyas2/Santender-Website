import { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-white min-h-screen text-[#2D2D2D] font-sans relative antialiased">
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed left-0 top-0 right-0 h-0.5 z-[60] origin-left bg-[#EC0000]"
        style={{ scaleX: scrollYProgress }}
      />

      <Header />
      
      <main className="relative">
        {children}
      </main>

      <Footer />
    </div>
  );
}
