
import { BookOpen, Calendar, Medal } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";
import Planet from "./animations/Planet";

const Education = () => {
  const educations = [
    {
      degree: "B.Tech, Information Technology",
      institution: "National Institute of Technology Srinagar",
      period: "2021 - 2025",
      details: ["CGPA: 7.657"]
    },
    {
      degree: "Senior Secondary (XII), CBSE",
      institution: "Sunbeam English School Bhagwanpur, Varanasi",
      period: "2019",
      details: ["Percentage: 85.00%"]
    },
    {
      degree: "Secondary (X), CBSE",
      institution: "St. Joseph's High School, Patna",
      period: "2017",
      details: ["Percentage: 93.00%"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="absolute top-40 right-10 opacity-30 pointer-events-none">
        <Planet size="lg" color="purple" hasRings />
      </div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-heading">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educations.map((edu, index) => (
            <BlurredCard 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-cosmic-blue/10 rounded-lg">
                  <BookOpen className="h-6 w-6 text-cosmic-blue" />
                </div>
                <div className="flex items-center text-sm text-cosmic-teal">
                  <Calendar className="w-4 h-4 mr-1.5" />
                  <span>{edu.period}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-white/70 mb-4">{edu.institution}</p>
              
              {edu.details.length > 0 && (
                <ul className="space-y-2 text-white/80">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Medal className="h-5 w-5 text-cosmic-teal flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </BlurredCard>
          ))}
        </div>
        
        <BlurredCard className="max-w-xl mx-auto mt-12 animate-fade-in animation-delay-500">
          <h3 className="text-xl font-semibold text-white mb-4">Extra Curricular Activities</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <Medal className="h-5 w-5 text-cosmic-teal flex-shrink-0 mt-0.5" />
              <span>Operations, Semicolon_NITSGR: Organised 10+ coding challenges and mentored peers.</span>
            </li>
            <li className="flex items-start gap-3">
              <Medal className="h-5 w-5 text-cosmic-teal flex-shrink-0 mt-0.5" />
              <span>Secured 1st position in Mathematics Quiz Tournament in class 12.</span>
            </li>
            <li className="flex items-start gap-3">
              <Medal className="h-5 w-5 text-cosmic-teal flex-shrink-0 mt-0.5" />
              <span>Qualified 2nd level of the National Science.</span>
            </li>
          </ul>
        </BlurredCard>
      </div>
    </section>
  );
};

export default Education;
