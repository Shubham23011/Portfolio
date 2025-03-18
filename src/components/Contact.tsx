
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import BlurredCard from "./ui/BlurredCard";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-space-light/20">
      <div className="container mx-auto">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <BlurredCard>
              <h3 className="text-xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cosmic-blue/10 rounded-md">
                    <Mail className="h-5 w-5 text-cosmic-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <a 
                      href="mailto:shubhamraihero2015@gmail.com" 
                      className="text-white/70 hover:text-cosmic-teal transition-colors"
                    >
                      shubhamraihero2015@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cosmic-purple/10 rounded-md">
                    <Phone className="h-5 w-5 text-cosmic-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <a 
                      href="tel:+918709603623" 
                      className="text-white/70 hover:text-cosmic-teal transition-colors"
                    >
                      +91 8709603623
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-cosmic-teal/10 rounded-md">
                    <MapPin className="h-5 w-5 text-cosmic-teal" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Location</h4>
                    <p className="text-white/70">
                      Patna, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-white/70">
                <p>
                  I'm always open to discussing new projects, opportunities in technology, 
                  or partnerships. Feel free to reach out!
                </p>
              </div>
            </BlurredCard>
          </div>
          
          <div className="animate-fade-in animation-delay-300">
            <BlurredCard>
              <h3 className="text-xl font-semibold text-white mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-space border border-white/10 rounded-md text-white focus:border-cosmic-teal focus:ring-1 focus:ring-cosmic-teal/50 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-space border border-white/10 rounded-md text-white focus:border-cosmic-teal focus:ring-1 focus:ring-cosmic-teal/50 focus:outline-none transition-all"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2.5 bg-space border border-white/10 rounded-md text-white focus:border-cosmic-teal focus:ring-1 focus:ring-cosmic-teal/50 focus:outline-none transition-all"
                    placeholder="Your message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cosmic w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </BlurredCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
