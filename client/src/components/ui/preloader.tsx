import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isMounted = true;

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setProgress(100);
      setTimeout(() => {
        if (isMounted) {
          window.scrollTo(0, 0);
          setLoading(false);
        }
      }, 300);
      return;
    }

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 85) return prev;
        return prev + Math.random() * 8 + 2;
      });
    }, 200);

    // Preload critical images
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ];

      let loadedImages = 0;
      const totalImages = imageUrls.length;

      imageUrls.forEach((url) => {
        const img = new Image();
        img.onload = () => {
          loadedImages++;
          const imageProgress = (loadedImages / totalImages) * 20;
          setProgress(prev => Math.min(prev + imageProgress, 90));
        };
        img.src = url;
      });
    };

    // Wait for DOM content to be ready
    const handleDOMContentLoaded = () => {
      setProgress(50);
      preloadImages();
    };

    // Wait for page to fully load
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        if (isMounted) {
          window.scrollTo(0, 0);
          setLoading(false);
        }
      }, 300);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else if (document.readyState === 'interactive') {
      setProgress(50);
      preloadImages();
    } else {
      setProgress(90);
    }

    window.addEventListener('load', handleLoad);

    // Fallback timer (max 5 seconds)
    const fallbackTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        if (isMounted) setLoading(false);
      }, 500);
    }, 5000);

    return () => {
      isMounted = false;
      clearInterval(progressInterval);
      clearTimeout(fallbackTimer);
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        filter: "blur(10px)"
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          className="w-20 h-20 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/logo.jpeg" alt="S.R. Future Classes Logo" className="w-16 h-16 object-contain rounded-xl bg-white p-1 shadow-md" />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-3xl font-bold text-slate-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          S.R. Future Classes
        </motion.h1>

        <motion.p
          className="text-slate-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Premium Coaching Institute
        </motion.p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-slate-200 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full gradient-blue rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        {/* Progress Text */}
        <motion.div
          className="text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-slate-500">
            {progress < 30 && "Loading resources..."}
            {progress >= 30 && progress < 70 && "Preparing content..."}
            {progress >= 70 && progress < 100 && "Almost ready..."}
            {progress >= 100 && "Welcome to S.R. Future Classes!"}
          </p>
          <p className="text-xs text-slate-400 mt-1">{Math.round(progress)}%</p>
        </motion.div>
      </div>
    </motion.div>
  );
}