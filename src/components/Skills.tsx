
import BlurredCard from "./ui/BlurredCard";
import Planet from "./animations/Planet";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "FastAPI"]
    },
    {
      title: "Programming Languages",
      skills: ["C Programming", "C++ Programming", "Python"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="absolute bottom-20 left-10 opacity-30 pointer-events-none">
        <Planet size="md" color="teal" />
      </div>
      
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <BlurredCard 
                key={categoryIndex}
                className="animate-fade-in h-full"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <h3 className="text-lg font-semibold text-cosmic-teal mb-4">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-full bg-space border border-white/10 text-white/90 transition-all duration-300 
                      hover:border-cosmic-blue/30 hover:text-white hover:shadow-sm hover:shadow-cosmic-blue/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </BlurredCard>
            ))}
          </div>
          
          <div className="mt-12 animate-fade-in animation-delay-500">
            <BlurredCard>
              <h3 className="text-lg font-semibold text-cosmic-teal mb-4 text-center">
                All Skills
              </h3>
              
              <div className="flex flex-wrap justify-center gap-2">
                {["HTML", "CSS", "JavaScript", "C Programming", "C++ Programming", "SQL", "Node.js", "Express.js", "MongoDB", "Docker", "Tailwind CSS", "ReactJS", "Python", "FastAPI"].map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-space border border-white/10 text-white/90 transition-all duration-300 
                    hover:border-cosmic-blue/30 hover:text-white hover:shadow-sm hover:shadow-cosmic-blue/20"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </BlurredCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
