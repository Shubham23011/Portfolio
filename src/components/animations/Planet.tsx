
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PlanetProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "teal" | "pink";
  children?: ReactNode;
  hasRings?: boolean;
  hasGlow?: boolean;
}

const Planet = ({
  className,
  size = "md",
  color = "blue",
  children,
  hasRings = false,
  hasGlow = false,
}: PlanetProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-36 h-36",
  };
  
  const colorClasses = {
    blue: "bg-gradient-to-br from-cosmic-blue to-cosmic-teal",
    purple: "bg-gradient-to-br from-cosmic-purple to-cosmic-pink",
    teal: "bg-gradient-to-br from-cosmic-teal to-cosmic-blue/70",
    pink: "bg-gradient-to-br from-cosmic-pink to-cosmic-purple/70",
  };

  const glowClasses = {
    blue: "shadow-[0_0_20px_rgba(67,97,238,0.4),0_0_40px_rgba(67,97,238,0.2)]",
    purple: "shadow-[0_0_20px_rgba(114,9,183,0.4),0_0_40px_rgba(114,9,183,0.2)]",
    teal: "shadow-[0_0_20px_rgba(76,201,240,0.4),0_0_40px_rgba(76,201,240,0.2)]",
    pink: "shadow-[0_0_20px_rgba(247,37,133,0.4),0_0_40px_rgba(247,37,133,0.2)]",
  };
  
  return (
    <div className={cn("relative", className)}>
      {/* Cosmic dust particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white w-1 h-1 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Planet rings */}
      {hasRings && (
        <>
          <div className={cn(
            "absolute rounded-full border-2 border-white/10 animate-rotate-slow",
            size === "sm" ? "w-20 h-20 -top-2 -left-2" : 
            size === "md" ? "w-32 h-32 -top-4 -left-4" : 
            "w-44 h-44 -top-4 -left-4"
          )} />
          <div className={cn(
            "absolute rounded-full border border-white/5 animate-rotate-slow",
            size === "sm" ? "w-24 h-24 -top-4 -left-4" : 
            size === "md" ? "w-36 h-36 -top-6 -left-6" : 
            "w-48 h-48 -top-6 -left-6"
          )} style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        </>
      )}
      
      {/* Planet body */}
      <div
        className={cn(
          "rounded-full overflow-hidden animate-float-enhanced relative",
          sizeClasses[size],
          colorClasses[color],
          hasGlow && glowClasses[color]
        )}
      >
        {/* Surface details */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 50 + 10}%`,
                height: `${Math.random() * 50 + 10}%`,
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                opacity: Math.random() * 0.3 + 0.1,
              }}
            />
          ))}
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer pointer-events-none" />
        
        {children}
      </div>
    </div>
  );
};

export default Planet;
