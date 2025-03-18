
import { useEffect } from "react";

const Stars = () => {
  useEffect(() => {
    const container = document.getElementById("stars-container");
    if (!container) return;

    // Clear any existing stars
    container.innerHTML = "";

    // Create small stars (numerous)
    for (let i = 0; i < 150; i++) {
      createStar(container, 'small');
    }
    
    // Create medium stars (fewer)
    for (let i = 0; i < 50; i++) {
      createStar(container, 'medium');
    }
    
    // Create large stars (rare)
    for (let i = 0; i < 15; i++) {
      createStar(container, 'large');
    }
    
    // Create shooting stars
    for (let i = 0; i < 3; i++) {
      createShootingStar(container);
    }
    
    // Periodically create new shooting stars
    const shootingStarInterval = setInterval(() => {
      if (document.getElementById("stars-container")) {
        createShootingStar(container);
      } else {
        clearInterval(shootingStarInterval);
      }
    }, 8000);
    
    return () => {
      clearInterval(shootingStarInterval);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);
  
  const createStar = (container: HTMLElement, size: 'small' | 'medium' | 'large') => {
    const star = document.createElement("div");
    star.classList.add("star");
    
    // Set size based on type
    let sizeValue, animationDuration, opacity;
    
    switch(size) {
      case 'large':
        sizeValue = Math.random() * 1 + 2; // 2-3px
        animationDuration = Math.random() * 2 + 3; // 3-5s
        opacity = Math.random() * 0.3 + 0.7; // 0.7-1.0
        star.style.boxShadow = `0 0 ${Math.random() * 5 + 5}px ${Math.random() * 2 + 2}px rgba(255, 255, 255, 0.8)`;
        break;
      case 'medium':
        sizeValue = Math.random() * 1 + 1.5; // 1.5-2.5px
        animationDuration = Math.random() * 2 + 2; // 2-4s
        opacity = Math.random() * 0.2 + 0.5; // 0.5-0.7
        star.style.boxShadow = `0 0 ${Math.random() * 3 + 2}px rgba(255, 255, 255, 0.6)`;
        break;
      default: // small
        sizeValue = Math.random() * 0.5 + 1; // 1-1.5px
        animationDuration = Math.random() * 2 + 2; // 2-4s
        opacity = Math.random() * 0.3 + 0.2; // 0.2-0.5
        star.style.boxShadow = `0 0 ${Math.random() * 2 + 1}px rgba(255, 255, 255, 0.5)`;
    }
    
    // Apply styles
    star.style.width = `${sizeValue}px`;
    star.style.height = `${sizeValue}px`;
    star.style.opacity = opacity.toString();
    
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    
    // Random animation
    star.style.animationDelay = `${Math.random() * 5}s`;
    star.style.animationDuration = `${animationDuration}s`;
    
    // Add to container with twinkle animation
    container.appendChild(star);
    star.classList.add("animate-twinkle");
  };
  
  const createShootingStar = (container: HTMLElement) => {
    const shootingStar = document.createElement("div");
    
    // Random starting position (top of screen, random horizontal position)
    const startX = Math.random() * 80 + 10; // 10-90% of width
    const startY = Math.random() * 30; // 0-30% of height
    
    // Calculate end position (diagonal trajectory)
    const angle = Math.random() * 40 + 20; // 20-60 degrees
    const distance = Math.random() * 30 + 20; // 20-50% of the screen
    const radians = angle * Math.PI / 180;
    const endX = startX + Math.cos(radians) * distance;
    const endY = startY + Math.sin(radians) * distance;
    
    // Style the shooting star
    shootingStar.className = "absolute w-[2px] h-[2px] bg-white rounded-full";
    shootingStar.style.left = `${startX}%`;
    shootingStar.style.top = `${startY}%`;
    shootingStar.style.boxShadow = "0 0 4px 1px white, 0 0 10px 2px rgba(255,255,255,0.5)";
    
    // Create a tail effect
    shootingStar.style.setProperty("--start-x", `${startX}%`);
    shootingStar.style.setProperty("--start-y", `${startY}%`);
    shootingStar.style.setProperty("--end-x", `${endX}%`);
    shootingStar.style.setProperty("--end-y", `${endY}%`);
    
    // Add custom animation
    const duration = Math.random() * 1 + 0.5; // 0.5-1.5 seconds
    shootingStar.style.animation = `shooting-star ${duration}s linear forwards`;
    
    // Add to container
    container.appendChild(shootingStar);
    
    // Remove after animation completes
    setTimeout(() => {
      if (shootingStar.parentNode === container) {
        container.removeChild(shootingStar);
      }
    }, duration * 1000 + 100);
  };

  return (
    <>
      <style>
        {`
          @keyframes shooting-star {
            0% {
              transform: translate(0, 0) scale(1);
              opacity: 1;
            }
            70% {
              opacity: 1;
            }
            100% {
              transform: translate(calc(var(--end-x) - var(--start-x)), calc(var(--end-y) - var(--start-y))) scale(0.2);
              opacity: 0;
            }
          }
        `}
      </style>
      <div 
        id="stars-container" 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      />
    </>
  );
};

export default Stars;
