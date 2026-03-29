"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, animate } from "framer-motion";

export function Cinematic3D({ 
  children, 
  className = "",
  popOut = 30,
  maxRotation = 15
}: { 
  children: React.ReactNode;
  className?: string;
  popOut?: number;
  maxRotation?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for mouse movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

  // Map 0 -> 100 for gradient positions
  const percentX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const percentY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);

  // Dynamic radiant glare
  const background = useMotionTemplate`radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.25) 0%, transparent 60%)`;

  // Dynamic 3D rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${maxRotation}deg`, `-${maxRotation}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${maxRotation}deg`, `${maxRotation}deg`]);

  useEffect(() => {
    if (isHovered) return;

    // Cinematic continuous float animation for mobile & idle states
    const controlsX = animate(x, [-0.08, 0.08, -0.08], {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    });
    
    const controlsY = animate(y, [-0.12, 0.12, -0.12], {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [isHovered, x, y]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalized to -0.5 to +0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const touch = e.touches[0];
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const touchX = Math.max(0, Math.min(touch.clientX - rect.left, width));
    const touchY = Math.max(0, Math.min(touch.clientY - rect.top, height));
    
    x.set(touchX / width - 0.5);
    y.set(touchY / height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative [perspective:1200px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full will-change-transform rounded-[inherit]"
      >
        <div 
          style={{ transform: `translateZ(${popOut}px)` }} 
          className="w-full h-full relative rounded-[inherit] overflow-hidden drop-shadow-2xl"
        >
           {children}
           
           {/* Glare effect purely cinematic */}
           <motion.div 
             className="absolute inset-0 pointer-events-none rounded-[inherit] z-50 mix-blend-overlay transition-opacity duration-500"
             style={{ 
               opacity: isHovered ? 1 : 0.4,
               background
             }}
           />
        </div>
      </motion.div>
    </motion.div>
  );
}
