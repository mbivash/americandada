"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "Saffron Infusion",
    subtitle: "Pure Iranian Saffron",
    image: "https://images.unsplash.com/photo-1596484552857-e9a6e13b8656?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Slow-Cooked Mutton",
    subtitle: "Tender, falling off the bone",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Aged Basmati",
    subtitle: "Extra long distinct grains",
    image: "https://images.unsplash.com/photo-1516684732162-878203c19c86?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Signature Spices",
    subtitle: "A 100-year-old family secret",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  // Track vertical scroll over 400vh to smoothly drive the horizontal transform
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map 0 -> 1 scroll to a massive X translation mapping to 4 cards + Intro
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#020202] z-20 border-t border-b border-white/5">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Massive background typography tying the luxury experience together */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 whitespace-nowrap pointer-events-none mix-blend-overlay">
          THE INGREDIENTS
        </div>

        <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-12 md:px-32 relative z-10 w-max items-center">
          
          {/* Intro Text Section */}
          <div className="w-[80vw] md:w-[35vw] shrink-0 flex items-center justify-start bg-transparent">
             <h2 className="text-6xl md:text-8xl font-light text-white leading-[0.9] tracking-tighter">
               Mastering <br/>
               <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">The Art.</span>
             </h2>
          </div>

          {/* Scrolling Gallery Cards */}
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group relative w-[80vw] md:w-[45vw] lg:w-[35vw] max-w-[600px] h-[60vh] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-[1px] border-white/10 shrink-0 bg-black cursor-pointer"
            >
               <motion.img 
                  src={card.image}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-[1s] ease-out"
                  alt={card.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
               />
               
               <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/50 to-transparent p-10 flex flex-col justify-end pointer-events-none">
                 <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                   {card.title}
                 </h3>
                 <p className="text-orange-500 font-bold text-sm md:text-lg uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                   {card.subtitle}
                 </p>
               </div>
            </div>
          ))}

          {/* Padding Outro */}
          <div className="w-[10vw] shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}
