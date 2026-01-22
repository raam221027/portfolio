import React, { ReactNode, FC, CSSProperties } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string; // optional extra classes for the card
  style?: CSSProperties; // optional style override
}

export const GlowCard: FC<GlowCardProps> = ({ children, className = "", style }) => {
  const rainbowGradient = `
    conic-gradient(
      from 225deg at 50% 50%,
      #a855f7 0deg,
      #3b82f6 60deg,
      #06b6d4 120deg,
      #10b981 180deg,
      #eab308 240deg,
      #f97316 280deg,
      #ef4444 320deg,
      #a855f7 360deg
    )
  `;

  return (
    <div className="relative flex items-center justify-center p-1">
      {/* Inner rainbow border glow */}
      <div
        className="absolute -inset-1 rounded-3xl"
        style={{
          background: rainbowGradient,
          filter: "blur(30px)",
          opacity: 0.6,
        }}
      />

      {/* Outer diffused glow */}
      <div
        className="absolute -inset-2 rounded-3xl"
        style={{
          background: rainbowGradient,
          filter: "blur(50px)",
          opacity: 0.6,
        }}
      />

      {/* Card Content */}
      <div
        className={`relative rounded-3xl bg-[#1a1d2e] px-1 py-10 shadow-2xl text-white z-10 w-full ${className}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};
