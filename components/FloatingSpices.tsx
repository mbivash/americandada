"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingSpices() {
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ w: 1000, h: 1000 });

  useEffect(() => {
    setIsClient(true);
    setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateSpices = () => {
    return Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      x: Math.random() * windowSize.w,
      y: Math.random() * windowSize.h, // Random initial scatter
      size: Math.random() * 8 + 3, // 3px to 11px
      duration: Math.random() * 30 + 20, // Super slow cinematic drifting
      delay: Math.random() * -40, // Negative delay to start mid-animation
      blur: Math.random() > 0.5 ? 2 : Math.random() > 0.8 ? 8 : 0, // Cinematic Depth-of-Field
      opacity: Math.random() * 0.5 + 0.1, // Never overpowering the text
    }));
  };

  const [spices, setSpices] = useState<any[]>([]);
  
  // Re-generate dynamically only on client
  useEffect(() => {
    if (isClient) setSpices(generateSpices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSize.w, isClient]);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden mix-blend-screen">
      {spices.map((spice) => (
        <motion.div
          key={spice.id}
          className="absolute bg-gradient-to-t from-orange-600 to-amber-300 rounded-full"
          style={{
            left: spice.x,
            width: spice.size,
            height: spice.size > 8 ? spice.size * 2 : spice.size, // Some look like falling strands/spices
            filter: `blur(${spice.blur}px)`,
            opacity: spice.opacity,
            boxShadow: `0 0 ${spice.size * 2}px rgba(249,115,22,0.8)`
          }}
          animate={{ 
            y: [windowSize.h + 200, -200], // Float up endlessly
            rotate: [0, 360],
            x: [spice.x, spice.x + (Math.random() * 100 - 50)] // drift elegantly
          }}
          transition={{
            y: { duration: spice.duration, repeat: Infinity, ease: "linear", delay: spice.delay },
            x: { duration: spice.duration / 2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
            rotate: { duration: spice.duration / 4, repeat: Infinity, ease: "linear" }
          }}
        />
      ))}
    </div>
  );
}
