import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import LearningPath from "@/components/sections/learning-path";
import SectionHighlights from "@/components/sections/section-highlights";
import Features from "@/components/sections/features";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import FloatingWhatsApp from "@/components/ui/floating-whatsapp";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Preloader from "@/components/ui/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
      return;
    }

    // Wait for page to fully load
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500);
    };

    window.addEventListener('load', handleLoad);

    // Fallback timer (max 4 seconds)
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      <motion.div 
        className="min-h-screen bg-slate-50 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Animated Particles Background */}
        <div className="particle-bg">
          {[...Array(9)].map((_, i) => (
            <span key={i} className="particle" />
          ))}
        </div>
        
        <Header />
        <main className="relative z-10">
          <Hero />
          <LearningPath />
          <SectionHighlights />
          <Features />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTop />
      </motion.div>
    </>
  );
}
