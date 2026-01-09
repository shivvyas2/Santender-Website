import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeProvider";
import Index from "./pages/Index";
import Revolution from "./pages/Revolution";
import Impact from "./pages/Impact";
import Demo from "./pages/Demo";
import Pilot from "./pages/Pilot";
import USS from "./pages/USS";
import HowItWorks from "./pages/HowItWorks";
import CaseStudy from "./pages/CaseStudy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/revolution" element={<Revolution />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/pilot" element={<Pilot />} />
            <Route path="/uss" element={<USS />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/case-study" element={<CaseStudy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

