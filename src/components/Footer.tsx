import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-green py-8 sm:py-12 px-4 sm:px-6 border-t border-light-brown/20">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          <div className="border-b md:border-b-0 pb-8 md:pb-0">
            <h3 className="text-light-brown text-xl uppercase tracking-wider mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="#experience" className="text-silver hover:text-cream transition-colors">Experience</a></li>
              <li><a href="#education" className="text-silver hover:text-cream transition-colors">Education</a></li>
              <li><a href="#projects" className="text-silver hover:text-cream transition-colors">Projects</a></li>
              <li><a href="#nonprofit" className="text-silver hover:text-cream transition-colors">Non-Profit</a></li>
            </ul>
          </div>
          
          <div className="border-b md:border-b-0 pb-8 md:pb-0">
            <h3 className="text-light-brown text-xl uppercase tracking-wider mb-6">Follow</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-silver hover:text-cream transition-colors flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-silver hover:text-cream transition-colors flex items-center">
                  <Linkedin className="w-5 h-5 mr-2" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-light-brown text-xl uppercase tracking-wider mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:example@example.com" className="text-silver hover:text-cream transition-colors flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>Email me</span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-silver mt-1" />
                <span className="text-silver">Munich, Germany</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-silver/70 text-sm text-center md:text-left">
            &copy; {currentYear} Agustin Coppari. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="text-2xl sm:text-3xl md:text-4xl font-display text-light-brown md:transform md:-rotate-90 md:rotate-0">
              Agustin
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
