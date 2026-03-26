"use client";

import { motion } from "framer-motion";

const ingredients = [
  {
    id: 1,
    title: "Saffron Infusion",
    subtitle: "Pure Iranian Saffron",
    description: "Hand-picked golden threads steeped to perfection, giving our biryani its signature royal aroma and golden hue.",
    image: "https://images.unsplash.com/photo-1596484552857-e9a6e13b8656?auto=format&fit=crop&w=1200&q=80",
    color: "from-amber-500/80 to-transparent"
  },
  {
    id: 2,
    title: "Slow-Cooked Meat",
    subtitle: "Falling off the bone",
    description: "Marinated overnight in secret spices and slow-cooked in sealed handis to absorb every ounce of flavor.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    color: "from-red-600/80 to-transparent"
  },
  {
    id: 3,
    title: "Aged Basmati",
    subtitle: "Extra long distinct grains",
    description: "Premium aged grains that remain light, fluffy, and perfectly separated, soaking up the meat's rich broth.",
    image: "https://images.unsplash.com/photo-1516684732162-878203c19c86?auto=format&fit=crop&w=1200&q=80",
    color: "from-orange-400/80 to-transparent"
  },
  {
    id: 4,
    title: "100-Year Spices",
    subtitle: "A family secret",
    description: "Our proprietary blend of 18 whole spices, freshly roasted and ground daily to create an unforgettable taste.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    color: "from-orange-700/80 to-transparent"
  }
];

export default function BentoIngredients() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Massive Luxury Typography Heading */}
        <div className="text-center md:text-left mb-16 md:mb-24">
          <h2 className="text-6xl md:text-[8rem] font-light text-white leading-[0.9] tracking-tighter mix-blend-plus-lighter">
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
              className={`group relative overflow-hidden rounded-[2rem] bg-[#050505] border border-white/10 aspect-square md:aspect-[4/3] flex flex-col justify-end p-8 md:p-12 cursor-none`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              
              {/* Background High-Res Image (Hidden by default, revealed on hover) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
                />
              </div>

              {/* Dramatic Lighting Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-out`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Text Content */}
              <div className="relative z-10 transition-transform duration-700 ease-out translate-y-8 group-hover:translate-y-0">
                <span className="text-orange-500 font-bold text-sm md:text-base uppercase tracking-[0.3em] block mb-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {item.subtitle}
                </span>
                <h3 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                  {item.title}
                </h3>
                
                {/* Description (Slides up elegantly) */}
                <div className="overflow-hidden">
                  <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-out delay-100">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Frame Glow */}
              <div className="absolute inset-0 border-[2px] border-orange-500/0 group-hover:border-orange-500/30 rounded-[2rem] transition-colors duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
