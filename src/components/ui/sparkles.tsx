"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SparklesCoreProps {
  className?: string;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
}

export function SparklesCore({
  className,
  particleColor = "#ffffff",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 1200,
}: SparklesCoreProps) {
  const count = Math.min(Math.max(Math.round(particleDensity / 300), 200), 550);

  const [particlesData, setParticlesData] = React.useState<
    Array<{
      left: number;
      top: number;
      size: number;
      delay: number;
      duration: number;
      xMovement: number;
      yMovement: number;
      direction: "up" | "down" | "left" | "right" | "diagonal-up" | "diagonal-down";
    }>
  >([]);

  React.useEffect(() => {
    const directions = ["up", "down", "left", "right", "diagonal-up", "diagonal-down"] as const;
    
    const data = Array.from({ length: count }).map(() => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = (Math.random() * (maxSize - minSize) + minSize) * 2;
      const delay = Math.random() * 3; // Increased randomness
      const duration = 1.5 + Math.random() * 3.5; // More varied durations (1.5s - 5s)
      
      // Random direction
      const direction = directions[Math.floor(Math.random() * directions.length)];
      
      // Random movement amount based on direction
      const movementRange = 25 + Math.random() * 50; // 15-40px movement
      let xMovement = 0;
      let yMovement = 0;
      
      switch (direction) {
        case "up":
          yMovement = -movementRange;
          break;
        case "down":
          yMovement = movementRange;
          break;
        case "left":
          xMovement = -movementRange;
          break;
        case "right":
          xMovement = movementRange;
          break;
        case "diagonal-up":
          xMovement = (Math.random() > 0.5 ? 1 : -1) * movementRange * 0.7;
          yMovement = -movementRange * 0.7;
          break;
        case "diagonal-down":
          xMovement = (Math.random() > 0.5 ? 1 : -1) * movementRange * 0.7;
          yMovement = movementRange * 0.7;
          break;
      }
      
      return { left, top, size, delay, duration, xMovement, yMovement, direction };
    });

    setParticlesData(data);
  }, [count, minSize, maxSize]);

  const particles = particlesData.map((p, i) => (
    <motion.div
      key={i}
      animate={{
        opacity: [0, 1, 0.8, 0],
        x: [0, p.xMovement * 0.5, p.xMovement],
        y: [0, p.yMovement * 0.5, p.yMovement],
        scale: [0.8, 1.2, 1, 0.6],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: p.duration,
        delay: p.delay,
        ease: "easeInOut",
      }}
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

  return <div className="absolute inset-0 overflow-hidden">{particles}</div>;
}

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
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white"></h1>
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
                particleColor="#00b7ffe5"
                className="opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}