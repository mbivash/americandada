"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiryaniDish } from "@/data/biryani";

function StorySection({ 
  content, 
  color, 
  imageSrc, 
  isTransparentImage, 
  reverse,
  hasSlideGlow,
  hasAuraGlow,
  isGif
}: { 
  content: { title: string; subtitle: string }; 
  color: string;
  imageSrc?: string;
  isTransparentImage?: boolean;
  reverse?: boolean;
  hasSlideGlow?: boolean;
  hasAuraGlow?: boolean;
  isGif?: boolean;
}) {
  const ref = useRef(null);
  
  // Use scroll progress for dynamic motion graphic tied to user's scrolling
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculate transforms for slow, continuous scroll fade
  // 0 -> 0.3: Fade in as section enters
  // 0.3 -> 0.6: Fully visible in center
  // 0.6 -> 1.0: Slow, continuous fade out as user scrolls to next section
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  
  // Background motion
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0.15, 0.15, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.8, 1, 1, 1.2]);

  // Text motion
  const textX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [reverse ? 60 : -60, 0, 0, reverse ? -60 : 60]);
  const textScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.9, 1, 1, 0.9]);

  // Visual motion
  const visualScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [
    isTransparentImage ? 0.5 : 0.8, 
    1, 
    1, 
    isTransparentImage ? 0.5 : 0.8
  ]);
  
  const visualRotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [
    isTransparentImage ? -15 : 0, 
    0, 
    0, 
    isTransparentImage ? 15 : 0
  ]);
  
  const visualY = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [
    isTransparentImage ? 150 : 0, 
    0, 
    0, 
    isTransparentImage ? -150 : 0
  ]);
  
  const visualX = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [
    isTransparentImage ? 0 : (reverse ? -80 : 80), 
    0, 
    0, 
    isTransparentImage ? 0 : (reverse ? 80 : -80)
  ]);

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-24 py-20 relative overflow-hidden overflow-y-visible">
      
      {/* Dynamic Background Element */}
      <motion.div
        style={{ opacity: bgOpacity, scale: bgScale }}
        className="absolute inset-0 bg-radial-gradient from-orange-500/40 to-transparent pointer-events-none"
      />

      {/* Main Grid Wrapper layouting Text and Visual separate */}
      <div className={`w-full max-w-7xl flex flex-col gap-12 items-center ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* TEXT AREA - Decoupled and distinct */}
        <motion.div
          style={{ opacity, x: textX, scale: textScale }}
          className="flex-1 text-left relative z-10 bg-black/40 p-8 md:p-12 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl will-change-[opacity,transform]"
        >
          <div className="w-16 h-1 mb-8 rounded-full" style={{ backgroundColor: color }} />
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-[0.9] drop-shadow-2xl">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-2xl md:text-4xl font-light text-white/90 tracking-tight leading-relaxed max-w-xl">
              {content.subtitle}
            </p>
          )}
        </motion.div>

        {/* VISUAL AREA - Clearly separated from Text */}
        {imageSrc && (
          <motion.div
            style={{ opacity, scale: visualScale, rotate: visualRotate, x: visualX, y: visualY }}
            className="flex-1 relative z-10 flex justify-center items-center will-change-[opacity,transform]"
          >
            {/* 1. Plated Transparent Layout */}
            {isTransparentImage && !hasSlideGlow && (
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -top-20 left-1/4 w-32 h-32 bg-white/10 blur-[40px] rounded-full animate-[pulse_4s_infinite]" />
                <img 
                  src={imageSrc} 
                  alt="Plated Biryani" 
                  loading="eager"
                  fetchPriority="high"
                  className="w-full max-w-md object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.8)] will-change-transform"
                />
              </motion.div>
            )}

            {/* 2. Slide Glow Effect Layout */}
            {hasSlideGlow && (
              <div className="relative p-[3px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] group w-full max-w-md mx-auto bg-black">
                {/* The spinning neon slide glows mapped uniquely using conic gradients */}
                <div className="absolute -inset-[150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(transparent_0deg,transparent_270deg,#f97316_360deg)] opacity-100" />
                <div className="absolute -inset-[150%] animate-[spin_5s_linear_infinite_2.5s] bg-[conic-gradient(transparent_0deg,transparent_270deg,#ffffff_360deg)] opacity-100" />
                
                {/* Inner Image Masking overlay */}
                <div className="relative rounded-[30px] overflow-hidden w-full aspect-[4/5] bg-black">
                  <motion.img 
                    src={imageSrc} 
                    alt="Signature" 
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover opacity-90 transition-all duration-700 will-change-transform"
                    whileHover={{ scale: 1.05 }}
                  />
                  {/* Subtle inner shadow ensuring border pops */}
                  <div className="absolute inset-0 border-[4px] border-[#0a0a0a]/50 rounded-[30px] pointer-events-none" />
                </div>
              </div>
            )}

            {/* 3. Aura Glow - Creative Professional Border */}
            {hasAuraGlow && (
              <div className="relative p-[2px] rounded-[2rem] w-full max-w-md mx-auto group">
                 {/* Multi-layered pulsing professional aura */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-orange-600 via-amber-400 to-orange-700 rounded-[2rem] animate-[pulse_3s_infinite_alternate] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                 
                 {/* Sleek Inner Image */}
                 <div className="relative rounded-[calc(2rem-2px)] overflow-hidden w-full aspect-[4/5] bg-[#050505] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] border border-white/20">
                   <motion.img 
                     src={imageSrc} 
                     alt="Creative detail" 
                     loading="eager"
                     fetchPriority="high"
                     className="w-full h-full object-cover opacity-95 md:mix-blend-luminosity md:hover:mix-blend-normal transition-all duration-700 will-change-transform"
                     whileHover={{ scale: 1.05 }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                 </div>
              </div>
            )}

            {/* 4. HD Cinematic Loop / Standard Image layout */}
            {!isTransparentImage && !hasSlideGlow && !hasAuraGlow && (
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] group w-full max-w-md border border-white/20">
                <motion.img 
                  src={imageSrc} 
                  alt="Visual Detail" 
                  loading="eager"
                  fetchPriority="high"
                  className={`w-full object-cover transition-all duration-700 will-change-transform ${isGif ? 'aspect-square md:aspect-video animate-[pulse_8s_ease-in-out_infinite_alternate] scale-110' : 'aspect-[4/5]'}`}
                  whileHover={{ scale: 1.1 }}
                />
              </div>
            )}
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default function TextOverlays({ dish }: { dish: BiryaniDish }) {
  return (
    <div className="relative z-10 w-full overflow-hidden">

      {/* Section 1: Uses the new 'hasSlideGlow' dynamic neon border effect separating text and image directly */}
      <StorySection 
        content={dish.section1} 
        color={dish.themeColor} 
        imageSrc="/images/image1.png"
        isTransparentImage={false} 
        hasSlideGlow={true}
      />
      
      {/* Section 2: Slide Glow Professional Formatting reversed */}
      <StorySection 
        content={dish.section2} 
        color={dish.themeColor} 
        imageSrc="/images/image2.png" 
        isTransparentImage={false}
        hasSlideGlow={true}
        reverse={true}
      />
      
      {/* Section 3: Natural beautiful photo */}
      <StorySection 
        content={dish.section3} 
        color={dish.themeColor} 
        imageSrc="/images/image3.webp" 
        isTransparentImage={false}
      />
      
      {/* Section 4: Highly Catchy HD Cinematic Loop Integration to guarantee HD quality without breaking */}
      <StorySection 
        content={dish.section4} 
        color={dish.themeColor} 
        imageSrc="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=80" 
        isTransparentImage={false}
        reverse={true}
        isGif={true}
      />

    </div>
  );
}
