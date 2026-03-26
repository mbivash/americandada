"use client";

import { type ReactNode } from "react";
import { BiryaniDish } from "@/data/biryani";

interface Props {
  dish: BiryaniDish;
  children: ReactNode;
}

export default function BiryaniScroll({ dish, children }: Props) {
  // Since we moved the highly-engaging image sliding logic natively into `TextOverlays`,
  // `BiryaniScroll` now serves as an elegant, dark, thematic theater stage wrapper.
  // We removed the dark overlays that were muting the images previously.
  // Instead, a subtle beautiful ambient glow is applied to the background.

  return (
    <div className="relative bg-[#080503] w-full border-t border-white/5">
      {/* Fixed Ambient Background glow */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0 pointer-events-none">
        {/* Soft, deep radial lighting emphasizing the food */}
        <div 
          className="absolute inset-0 opacity-20 transition-colors duration-1000 blur-[150px]"
          style={{ background: `radial-gradient(circle at center, ${dish.themeColor}, transparent 70%)` }}
        />
        
        {/* Animated subtle grid/texture for premium feel without distracting from the plates */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      {/* Scrollable Animated Content - the plated images and text will float naturally here */}
      <div className="relative z-10 w-full -mt-[100vh]">
        {children}
      </div>
    </div>
  );
}
