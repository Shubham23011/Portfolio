
import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BlurredCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: CSSProperties;
}

const BlurredCard = ({
  children,
  className,
  hoverEffect = true,
  style,
}: BlurredCardProps) => {
  return (
    <div
      className={cn(
        "cosmic-card relative overflow-hidden",
        hoverEffect && "transform transition-all duration-500 hover:scale-[1.02] hover:shadow-cosmic-glow",
        className
      )}
      style={style}
    >
      {/* Glow effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-cosmic-blue/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BlurredCard;
