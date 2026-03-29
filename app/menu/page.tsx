"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { menuData } from "@/data/menu";
import { useEffect } from "react";

export default function MenuPage() {
  useEffect(() => {
    // Scroll to top when menu page is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-orange-500 selection:text-white pb-32">
      <Navbar />

      {/* Menu Header */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="absolute inset-0 bg-radial-gradient from-orange-500/10 to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-orange-500 font-bold uppercase tracking-[0.4em] mb-4 block">The Authentic Experience</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mix-blend-plus-lighter">
            Our Menu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-700 text-3xl md:text-5xl tracking-normal font-serif">
              আমাদের মেনু
            </span>
          </h1>
        </motion.div>
      </section>

      {/* Menu Grid Content */}
      <section className="px-6 py-20 max-w-7xl mx-auto relative z-10 masonry-grid">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {menuData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid bg-[#050505] border border-white/10 rounded-3xl p-8 hover:bg-[#0a0a0a] transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
            >
              <h3 className="text-2xl font-black text-white/90 uppercase tracking-widest mb-8 pb-4 border-b border-orange-500/30 group-hover:border-orange-500/80 transition-colors">
                {category.category}
              </h3>

              <ul className="space-y-6">
                {category.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline gap-4 w-full">
                      <span className="text-lg font-semibold text-white/80 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                      <div className="flex-1 border-b border-dotted border-white/20 relative top-[-6px]" />
                      <span className="text-lg font-black text-orange-400">
                        {item.price}
                      </span>
                    </div>
                    {item.details && (
                      <span className="text-sm font-light text-white/50 tracking-wide">
                        {item.details}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Attach footer with no margin overlap */}
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
