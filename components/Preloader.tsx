"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll instantly to prevent user from skipping the intro
    document.body.style.overflow = "hidden"; 

    let counter = 0;
    const interval = setInterval(() => {
      // Cinematic easing jump simulation (makes it feel organic, like resolving data)
      counter += Math.floor(Math.random() * 15) + 1;
      
      if (counter >= 100) {
        counter = 100;
        clearInterval(interval);
        
        // Hang dramatic tension at 100% for exactly 1.2s before splitting open
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "auto"; // Unlock scroll once resolved
        }, 1200); 
      }
      setProgress(counter);
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="master-preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }} 
          className="fixed inset-0 z-[9990] bg-[#050505] flex flex-col items-center justify-center border-b-[2px] border-orange-500/20 shadow-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Minimal Brand Identifier */}
            <div className="text-orange-500 uppercase tracking-[0.5em] text-sm md:text-sm font-bold opacity-80 mix-blend-plus-lighter text-center">
              American Dadar
            </div>
            
            {/* The Master Percentage */}
            <motion.h1 
              className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-t from-zinc-800 to-zinc-200 tabular-nums tracking-tighter mix-blend-screen"
            >
              {progress}%
            </motion.h1>
            
            {/* Ultra sleek glowing progress bar */}
            <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden mt-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
