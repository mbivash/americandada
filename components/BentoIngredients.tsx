"use client";

import { motion } from "framer-motion";
import { Cinematic3D } from "./Cinematic3D";

const ingredients = [
  {
    id: 1,
    title: "Saffron Infusion",
    subtitle: "Pure Iranian Saffron",
    description: "Hand-picked golden threads steeped to perfection, giving our biryani its signature royal aroma and golden hue.",
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1200&q=80",
    color: "from-amber-600/60 to-transparent"
  },
  {
    id: 2,
    title: "Marinated Chicken",
    subtitle: "Falling off the bone",
    description: "Marinated overnight in secret spices and slow-cooked in sealed handis to absorb every ounce of flavor.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1200&q=80",
    color: "from-red-600/60 to-transparent"
  },
  {
    id: 3,
    title: "Aged Basmati",
    subtitle: "Extra long distinct grains",
    description: "Premium aged grains that remain light, fluffy, and perfectly separated, soaking up the rich broth.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1200&q=80",
    color: "from-orange-500/60 to-transparent"
  },
  {
    id: 4,
    title: "100-Year Spices",
    subtitle: "A family secret",
    description: "Our proprietary blend of 18 whole spices, freshly roasted and ground daily to create an unforgettable taste.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    color: "from-orange-700/60 to-transparent"
  }
];

export default function BentoIngredients() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Massive Luxury Typography Heading */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <h2 className="text-5xl md:text-[8rem] font-light text-white leading-[0.9] tracking-tighter mix-blend-plus-lighter">
            Mastering <br/>
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">The Art.</span>
          </h2>
          <p className="mt-8 text-xl md:text-3xl text-white/50 max-w-2xl font-light">
            You cannot rush perfection. Every layer of our dum biryani is crafted using the absolute finest ingredients sourced globally.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {ingredients.map((item, index) => (
            <motion.div 
              key={item.id}
              className="w-full h-full rounded-[2rem]"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
            >
              <Cinematic3D className="group w-full h-full rounded-[2rem]" popOut={20} maxRotation={10}>
                <div className={`relative overflow-hidden rounded-[2rem] bg-[#020202] border border-white/10 aspect-square md:aspect-[4/3] flex flex-col justify-end p-8 md:p-12 md:cursor-none w-full h-full`}>
                  {/* Background High-Res Image (Fully bright on mobile, hidden on desktop until hover) */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover opacity-80 md:opacity-0 md:group-hover:opacity-80 grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-[1.5s] ease-out scale-100 md:scale-110 md:group-hover:scale-100"
                    />
                  </div>

                  {/* Dramatic Lighting Overlay (Much lighter so mobile images are visible!) */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60 md:opacity-0 md:group-hover:opacity-60 transition-opacity duration-[1.5s] ease-out rounded-[2rem]`} />
                  
                  {/* Dark bottom gradient exclusively for text legibility, transparent top so image shows entirely! */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[2rem]" />

                  {/* Text Content */}
                  <div className="relative z-10 transition-transform duration-1000 ease-out translate-y-0 md:translate-y-8 md:group-hover:translate-y-0">
                    <span className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-[0.3em] block mb-3 opacity-100 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-1000">
                      {item.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </h3>
                    
                    {/* Description (Always visible on mobile) */}
                    <div className="overflow-hidden">
                      <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed max-w-lg opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-all duration-1000 ease-out delay-100">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Frame Glow */}
                  <div className="absolute inset-0 border-[2px] border-orange-500/0 md:group-hover:border-orange-500/40 rounded-[2rem] transition-colors duration-1000 pointer-events-none" />
                </div>
              </Cinematic3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
