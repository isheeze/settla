
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We track the scroll progress of the entire container relative to the viewport.
  // "start 20%" means the animation starts when the top of the container is at 20% from the top of the screen.
  // "end 80%" means it finishes when the bottom is at 80% from the top.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Determine which card is currently "most" in view based on progress
    // latest is 0 to 1. We multiply by cardLength and floor it.
    const newActiveCard = Math.min(
      Math.floor(latest * cardLength),
      cardLength - 1
    );
    
    if (newActiveCard !== activeCard) {
      setActiveCard(newActiveCard);
    }
  });

  const linearGradients = [
    "linear-gradient(to bottom right, #6366f1, #4f46e5)",
    "linear-gradient(to bottom right, #4338ca, #3730a3)",
    "linear-gradient(to bottom right, #312e81, #1e1b4b)",
    "linear-gradient(to bottom right, #1e1b4b, #4338ca)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div
      className="relative flex justify-center gap-10 md:gap-20"
      ref={containerRef}
    >
      {/* Left side: Scrolling Text Content */}
      <div className="relative flex items-start w-full lg:w-1/2">
        <div className="max-w-xl w-full">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="min-h-[60vh] flex items-center py-20 md:py-32"
            >
              <div className="flex gap-6 md:gap-10">
                {/* Visual Progress Indicator - Vertical Line */}
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: activeCard === index ? 1.25 : 1,
                      backgroundColor: activeCard === index ? "#6366f1" : "#e0e7ff",
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4 rounded-full border-4 border-white shadow-xl z-10"
                  />
                  {index !== content.length - 1 && (
                    <div className="w-1 h-full bg-indigo-50 mt-2 rounded-full relative">
                      <motion.div 
                         initial={{ height: "0%" }}
                         animate={{ height: activeCard > index ? '100%' : (activeCard === index ? '50%' : '0%') }}
                         className="absolute top-0 w-full bg-indigo-600 transition-all duration-300"
                      />
                    </div>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0.2 }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-4xl md:text-6xl font-black text-indigo-950 tracking-tight mb-8">
                    {item.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-indigo-900/60 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
          {/* Bottom padding to allow the last item to hit the active zone */}
          <div className="h-[20vh]" />
        </div>
      </div>

      {/* Right side: Sticky Visual Container */}
      <div className="sticky top-[20vh] hidden lg:flex h-[60vh] w-[500px] xl:w-[600px] items-center justify-center">
        <div
          className={cn(
            "relative w-full h-full overflow-hidden rounded-[4rem] shadow-[0_64px_128px_-32px_rgba(79,70,229,0.3)] border-[12px] border-white/40 backdrop-blur-sm transition-all duration-700",
            contentClassName,
          )}
          style={{ background: backgroundGradient }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 3 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="w-full h-full"
            >
               {/* Ambient decorative elements inside the sticky box */}
               <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                 <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 rounded-full blur-[80px]" />
                 <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-indigo-400/20 rounded-full blur-[100px]" />
               </div>
               
               {content[activeCard].content ?? null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
