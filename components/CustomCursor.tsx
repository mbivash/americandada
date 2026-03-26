"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use Framer Motion optimized values for zero-lag tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Spring configurations for the smooth trailing ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Triggers interactive states when hovering anything clickable
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') !== null
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    }

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        /* Hide default cursor globally on desktop exclusively since phones don't use it */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Outer glassy ring (trails naturally via springs) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-orange-500/80 rounded-full pointer-events-none z-[99999] opacity-0 md:opacity-100 mix-blend-difference flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-[0_0_10px_rgba(249,115,22,0.4)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0)",
          borderColor: isHovering ? "rgba(255,255,255,0.8)" : "rgba(249,115,22,0.8)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="text-[4px] uppercase tracking-[2px] font-black text-white mix-blend-exclusion"
          >
            Explore
          </motion.div>
        )}
      </motion.div>

      {/* Tiny immediate core dot - tracks exactly 1:1 with mouse hardware */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[100000] opacity-0 md:opacity-100 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
