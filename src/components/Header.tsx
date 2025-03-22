
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'nonprofit', label: 'Non-Profit' },
    { id: 'events', label: 'Events' },
    { id: 'recognitions', label: 'Recognitions' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      // Set header background on scroll
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections.slice().reverse()) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 py-4 px-6 md:px-12 
      ${isScrolled ? 'bg-dark-green/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="z-10">
          <a href="#home" className="text-2xl font-display text-cream hover:text-light-brown transition-colors">
            Agustin<span className="text-light-brown">.</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden z-20 text-cream hover:text-light-brown focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-0 bg-dark-green/95 backdrop-blur-md transition-all duration-300 flex items-center justify-center
                    ${isMenuOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'}`}
        >
          <nav className="w-full">
            <ul className="flex flex-col items-center space-y-6">
              {sections.map((section) => (
                <li key={section.id} className="w-full text-center">
                  <a
                    href={`#${section.id}`}
                    className={`block py-3 text-2xl ${activeSection === section.id ? 'text-light-brown' : 'text-cream'}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
