
import { Code, Database, Globe, Rocket } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <BlurredCard className="animate-cosmic-pulse">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-cosmic-purple">
                Who I Am
              </h3>
              
              <div className="space-y-4 text-white/80">
                <p className="animate-fade-in">
                  I'm an aspiring Software Development Engineer with expertise in DSA and full-stack development. I'm proficient in C++, Python, ReactJS, Node.js, MySQL, and MongoDB.
                </p>
                
                <p className="animate-fade-in animation-delay-200">
                  I'm passionate about problem-solving, agile development, and open-source contributions. I thrive in collaborative environments and am constantly expanding my technical skillset to build innovative applications.
                </p>
                
                <p className="animate-fade-in animation-delay-300">
                  My goal is to leverage technology to create impactful solutions in a dynamic tech environment, applying my knowledge of algorithms, data structures, and full-stack development to solve real-world problems.
                </p>
              </div>
            </BlurredCard>
          </div>
          
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <BlurredCard className="animate-fade-in animation-delay-100 hover:border-cosmic-blue/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cosmic-blue/10 rounded-md animate-pulse-cosmic">
                    <Code className="h-5 w-5 text-cosmic-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Frontend Development</h4>
                    <p className="text-sm text-white/70 mt-1">
                      Creating beautiful, responsive user interfaces with modern web technologies.
                    </p>
                  </div>
                </div>
              </BlurredCard>
              
              <BlurredCard className="animate-fade-in animation-delay-300 hover:border-cosmic-teal/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cosmic-teal/10 rounded-md animate-pulse-cosmic">
                    <Database className="h-5 w-5 text-cosmic-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Backend Development</h4>
                    <p className="text-sm text-white/70 mt-1">
                      Building robust server-side applications and APIs with efficient architecture.
                    </p>
                  </div>
                </div>
              </BlurredCard>
              
              <BlurredCard className="animate-fade-in animation-delay-500 hover:border-cosmic-purple/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cosmic-purple/10 rounded-md animate-pulse-cosmic">
                    <Globe className="h-5 w-5 text-cosmic-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Full Stack Applications</h4>
                    <p className="text-sm text-white/70 mt-1">
                      Developing end-to-end solutions from database design to user interface.
                    </p>
                  </div>
                </div>
              </BlurredCard>
              
              <BlurredCard className="animate-fade-in animation-delay-700 hover:border-cosmic-pink/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cosmic-pink/10 rounded-md animate-pulse-cosmic">
                    <Rocket className="h-5 w-5 text-cosmic-pink" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Algorithms & DSA</h4>
                    <p className="text-sm text-white/70 mt-1">
                      Solving complex problems with efficient data structures and algorithms.
                    </p>
                  </div>
                </div>
              </BlurredCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
