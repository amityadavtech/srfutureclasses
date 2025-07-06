import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-24 right-6 z-[99]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full shadow-lg glow-effect"
        aria-label="Scroll to top"
      >
        <motion.div
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </motion.div>
      </Button>
    </motion.div>
  );
}