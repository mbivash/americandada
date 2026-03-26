"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { dishes } from "@/data/biryani";

import Navbar from "@/components/Navbar";
import BiryaniScroll from "@/components/BiryaniScroll";
import TextOverlays from "@/components/TextOverlays";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";
import BentoIngredients from "@/components/BentoIngredients";

export default function Home() {
  const [dishIndex, setDishIndex] = useState(0);
  const currentDish = dishes[dishIndex];

  return (
    <main className="bg-black min-h-screen text-white overflow-clip selection:bg-orange-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Main Background Image - Image 1 */}
        <div className="absolute inset-0 bg-[url('/images/image1.png')] bg-cover bg-center bg-no-repeat opacity-90 mix-blend-luminosity scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" />
        
        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {/* Removed the 'American Dadar Biryani' title as requested */}
            <h1 className="text-6xl md:text-9xl font-black mb-6 uppercase tracking-tighter text-white/70 leading-none drop-shadow-2xl">
              Authentic Dum <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400/80 via-orange-500/80 to-orange-700/80 drop-shadow-md">
                Experience.
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-white/60 mb-12 font-light max-w-3xl mix-blend-plus-lighter drop-shadow-sm"
          >
            Traditional recipes crafted with supreme patience, served hot exclusively in Habra.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            onClick={() => {
              const el = document.getElementById("locations");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white/10 backdrop-blur-md text-white/90 border border-white/20 px-10 py-5 rounded-full font-black text-xl hover:bg-orange-500 hover:text-white transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] uppercase tracking-widest relative overflow-hidden group"
          >
            <span className="relative z-10">Visit Our Store</span>
            <div className="absolute inset-0 bg-orange-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0" />
          </motion.button>
        </div>
      </section>

      {/* Dish Selector / Menu Section */}
      <div id="menu" className="bg-[#050505] border-y border-white/10 py-8 sticky top-[72px] md:top-[88px] z-40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-bold uppercase tracking-widest text-white/50 hidden md:block">Our Menu</h2>
          <div className="flex justify-center gap-4 md:gap-6 w-full md:w-auto">
            {dishes.map((d, index) => (
              <button
                key={d.id}
                onClick={() => {
                  setDishIndex(index);
                  document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex-1 md:flex-none px-6 md:px-10 py-4 border rounded-full text-xs md:text-sm font-black transition-all uppercase tracking-[0.2em] relative overflow-hidden group
                  ${
                    dishIndex === index
                      ? "border-orange-500 text-white bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                      : "border-white/20 text-white/60 hover:text-white hover:border-white/50"
                  }
                `}
              >
                <span className="relative z-10">{d.name}</span>
                {dishIndex === index && (
                  <motion.div layoutId="activeTab" className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-orange-400/20 mix-blend-overlay" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentDish.id}
          initial={{ opacity: 0, filter: "blur(20px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Main Scrollytelling Sequence */}
          <section id="story">
            <BiryaniScroll dish={currentDish}>
              <TextOverlays dish={currentDish} />
            </BiryaniScroll>

            {/* Dish Details Section */}
            <div className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,1)]">
              <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter" style={{ color: currentDish.themeColor }}>
                  {currentDish.storySection.title}
                </h2>
                <p className="text-2xl md:text-4xl text-white/70 leading-relaxed font-light max-w-4xl">
                  {currentDish.storySection.description}
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-8">
                  {currentDish.features.map((feature, i) => (
                    <span key={i} className="px-8 py-4 rounded-full border border-white/20 text-sm font-bold uppercase tracking-widest bg-white/5 relative overflow-hidden group hover:border-orange-500 transition-colors duration-500">
                      <span className="relative z-10">{feature}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="py-40 px-6 md:px-12 bg-black relative z-10 border-t border-white/5">
              <div className="absolute inset-0 bg-[url('/images/image3.webp')] bg-cover bg-fixed opacity-10 grayscale mix-blend-overlay" />
              <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                  {currentDish.experienceSection.title}
                </h2>
                <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
                <p className="text-2xl md:text-4xl text-white/50 leading-relaxed font-light max-w-4xl mx-auto">
                  {currentDish.experienceSection.description}
                </p>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <BentoIngredients />

      <Locations />

      {/* Final CTA */}
      <section className="py-40 px-6 bg-gradient-to-b from-black via-[#0d0a0b] to-black text-center relative z-10 border-y border-white/10">
        <div className="absolute inset-0 bg-[url('/images/image1.png')] bg-cover bg-center opacity-5 mix-blend-screen scale-110" />
        <h2 className="text-5xl md:text-8xl font-black mb-10 uppercase tracking-tighter relative z-10">
          Taste The <br/> <span className="text-orange-500">Authentic</span> Dadar.
        </h2>
        <p className="text-2xl md:text-3xl text-white/50 mb-16 max-w-2xl mx-auto font-light relative z-10">
          Elevate your dining with our signature dum biryani. Immerse yourself in the rich aromas right here in Habra.
        </p>
        <button 
          onClick={() => {
            document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative z-10 bg-orange-500 hover:bg-white text-white hover:text-black px-12 py-6 rounded-full font-black text-2xl uppercase tracking-widest transition-all hover:scale-110 duration-500 shadow-[0_0_30px_rgba(249,115,22,0.5)]"
        >
          Get Directions
        </button>
      </section>

      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}
