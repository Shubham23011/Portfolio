
import { ExternalLink, Github, Calendar } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";

const Projects = () => {
  const projects = [
    {
      title: "Finance Tracker Application",
      period: "Nov 2024 - Dec 2024",
      description: "Developed a comprehensive Finance Tracker Application that allows users to manage their finances effectively. Users can add, delete, and categorize their expenses and incomes.",
      technologies: ["Tailwind CSS", "ReactJS", "Express", "MongoDB"],
      link: "https://github.com/Shubham23011/Finance-Tracker-Application",
      repo: "https://github.com/Shubham23011/Finance-Tracker-Application"
    },
    {
      title: "Notes Application",
      period: "Oct 2024 - Nov 2024",
      description: "Developed a full-featured Notes App allowing users to add, edit, delete, pin, and search notes. This app provides a seamless user experience with a responsive interface and efficient note management.",
      technologies: ["Tailwind CSS", "ReactJS", "Express", "MongoDB"],
      link: "https://notes-manager-application.netlify.app/",
      repo: "https://github.com/Shubham23011/Notes-Application"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-space-light/20">
      <div className="container mx-auto">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group h-full"
            >
              <BlurredCard className="h-full flex flex-col animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-cosmic-teal transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-space text-white/70 hover:text-cosmic-teal hover:bg-space-accent/20 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full bg-space text-white/70 hover:text-cosmic-teal hover:bg-space-accent/20 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-cosmic-teal mb-3">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  <span>{project.period}</span>
                </div>
                
                <p className="text-white/80 mb-4 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs rounded-full bg-space text-cosmic-teal border border-cosmic-teal/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </BlurredCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
