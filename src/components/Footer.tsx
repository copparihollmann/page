
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-green py-12 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-display text-light-brown mb-4">Agustin Coppari</h3>
            <p className="text-silver mb-4">Electrical Engineering Student specialized in AI hardware and embedded systems.</p>
            <div className="flex items-center text-silver">
              <MapPin size={16} className="mr-2 text-light-brown" />
              <span>Munich, Germany</span>
            </div>
          </div>
          
          <div className="md:col-span-2 md:pl-12">
            <h3 className="text-xl font-display text-light-brown mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="flex items-center text-silver hover:text-cream transition-colors">
                <Github size={20} className="mr-2" />
                <span>GitHub</span>
              </a>
              <a href="#" className="flex items-center text-silver hover:text-cream transition-colors">
                <Linkedin size={20} className="mr-2" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:example@example.com" className="flex items-center text-silver hover:text-cream transition-colors">
                <Mail size={20} className="mr-2" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-cream/10 text-center">
          <p className="text-silver/70 text-sm">
            &copy; {currentYear} Agustin Coppari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
