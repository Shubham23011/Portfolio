
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Planet from "./animations/Planet";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 md:right-40 opacity-60 animate-float animation-delay-700">
        <Planet size="sm" color="blue" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-56 opacity-40 animate-float animation-delay-1500">
        <Planet size="sm" color="teal" hasRings />
      </div>
      
      <div className="container mx-auto text-center z-10">
        <div className="space-y-2 mb-6 animate-fade-in">
          <span className="inline-block text-sm md:text-base font-mono tracking-wider text-cosmic-teal py-1 px-3 rounded-full border border-cosmic-teal/30">
            Hello 👋, I'm
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-balance">
            <span className="block text-white">Shubham</span>
            <span className="block mt-1 bg-gradient-to-r from-cosmic-teal via-cosmic-blue to-cosmic-purple bg-clip-text text-transparent">
              Software Developer
            </span>
          </h1>
        </div>
        
        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl mx-auto animate-fade-in animation-delay-200">
          Aspiring SDE with expertise in DSA and full-stack development. Creating impactful solutions with passion and precision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 animate-fade-in animation-delay-500">
          <a href="#projects" className="btn-cosmic">
            View My Projects
          </a>
          <a href="#contact" className="btn-cosmic">
            Contact Me
          </a>
        </div>
        
        <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in animation-delay-700">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-cosmic-teal transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-cosmic-teal transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:shubhamraihero2015@gmail.com"
            className="text-white/70 hover:text-cosmic-teal transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
