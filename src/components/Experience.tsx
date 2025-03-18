
import { Briefcase, Calendar } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Internship",
      company: "Business Web Solutions",
      location: "Remote",
      period: "Jan 2024 - Mar 2024",
      description: [
        "Gained expertise in front-end and back-end development through structured learning modules and hands-on projects aimed at building core development skills.",
        "Worked collaboratively on a full-stack Student Management Application using the MERN stack featuring functionalities for efficient student data management."
      ]
    },
    {
      title: "Web Development Internship",
      company: "OctaNet Software Services",
      location: "Remote",
      period: "Sep 2023 - Oct 2023",
      description: [
        "Developed two wonderful projects which is based on Front End Development.",
        "The first project is building of Landing Website in which I have made a Travelling Website. The second project is the building up of a To Do List Website."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-space-light/20">
      <div className="container mx-auto">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-cosmic-blue/30 space-y-12 ml-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[42px] top-0 w-8 h-8 bg-space p-1 rounded-full border-2 border-cosmic-blue flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-cosmic-blue" />
                </div>
                
                <BlurredCard className="ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <div className="flex items-center text-sm text-cosmic-teal mt-1 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-cosmic-blue mb-4">
                    {exp.company}, {exp.location}
                  </p>
                  
                  <ul className="space-y-2 text-white/80">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-0.5 before:bg-cosmic-teal">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </BlurredCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
