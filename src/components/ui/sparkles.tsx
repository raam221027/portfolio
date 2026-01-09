"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";


interface SparklesCoreProps {
  className?: string;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number; // higher => more particles
}

export function SparklesCore({
  className,
  particleColor = "#ffffff",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
}: SparklesCoreProps) {
  // Map density to a reasonable particle count to avoid DOM overload
  const count = Math.min(Math.max(Math.round(particleDensity / 300), 100), 120);

  const [particlesData, setParticlesData] = React.useState<Array<{left:number,top:number,size:number,delay:number,duration:number}>>([]);

  React.useEffect(() => {
    const data = Array.from({ length: count }).map(() => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = (Math.random() * (maxSize - minSize) + minSize) * 2; // px base
      const delay = Math.random() * 2;
      const duration = 1.8 + Math.random() * 2;
      return { left, top, size, delay, duration };
    });

    setParticlesData(data);
    // We only want to generate once on mount or when count/min/max change
  }, [count, minSize, maxSize]);

  const particles = particlesData.map((p, i) => (
    <motion.div
      key={i}
      animate={{ opacity: [0, 1, 0], y: [0, -8, 0], scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, repeatType: "loop", duration: p.duration, delay: p.delay }}
      style={{
        left: `${p.left}%`,
        top: `${p.top}%`,
        width: p.size,
        height: p.size,
        background: particleColor,
      }}
      className={`pointer-events-none absolute rounded-full ${className ?? ""}`}
    />
  ));

  return <div className="absolute inset-0 overflow-hidden">{particles}</div>;}

interface SparklesPreviewProps {
  children?: ReactNode;
  className?: string;
}

export function SparklesPreview({ children, className }: SparklesPreviewProps) {
  return (
    <div className={`relative w-full h-full ${className ?? ""}`}>
        {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {children ? (
          children
        ) : (
           <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            </h1>
        )}
        <div className="w-[40rem] h-40 relative">

        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      
        {/* Sparkles behind content */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full relative">
          <SparklesCore
            particleDensity={1200}
            minSize={0.4}
            maxSize={1}
            particleColor="#ffffff"
            className="opacity-50"
          />
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}
