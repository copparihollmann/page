
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

// Create a custom event for section expansion
export const expandSection = (sectionId: string) => {
  // Normalize the section ID to match ExpandableSection's format
  const normalizedId = sectionId.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');
  const event = new CustomEvent('expandSection', { detail: { sectionId: normalizedId } });
  document.dispatchEvent(event);
};

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isMobile = useIsMobile();
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'non-profit', label: 'Non-Profit' }, // Fix: ensure this matches the ID format
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
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    // Re-enable scrolling when nav item is clicked
    document.body.style.overflow = '';

    // Trigger section expansion via custom event
    expandSection(sectionId);
    
    // Use the normalized ID for scrolling
    const normalizedId = sectionId.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');
    const element = document.getElementById(normalizedId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Clean up overflow style on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 py-4 px-6 md:px-12 
      ${isScrolled ? 'bg-dark-green/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="z-10">
          <a 
            href="#home" 
            className="text-2xl font-display text-cream hover:text-light-brown transition-colors"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            Agustin<span className="text-light-brown">.</span>
          </a>
        </div>
        
        {/* Mobile menu button - used with Drawer for better mobile UX */}
        {isMobile ? (
          <Drawer>
            <DrawerTrigger asChild>
              <button 
                className="text-cream hover:text-light-brown focus:outline-none"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="bg-dark-green border-t border-dark-olive h-[80vh]">
              <nav className="flex flex-col h-full pt-6 pb-10">
                <div className="px-6 mb-6 flex justify-end">
                  <DrawerClose asChild>
                    <button 
                      className="text-cream hover:text-light-brown focus:outline-none"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </DrawerClose>
                </div>
                <ul className="flex flex-col items-center space-y-6 px-6 overflow-y-auto">
                  {sections.map((section) => (
                    <li key={section.id} className="w-full text-center">
                      <DrawerClose asChild>
                        <a
                          href={`#${section.id}`}
                          className={`block py-3 text-2xl ${activeSection === section.id ? 'text-light-brown' : 'text-cream'}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(section.id);
                          }}
                        >
                          {section.label}
                        </a>
                      </DrawerClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </DrawerContent>
          </Drawer>
        ) : (
          <button 
            className="md:hidden z-50 text-cream hover:text-light-brown focus:outline-none"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section.id);
                  }}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Legacy Mobile Navigation - will be removed once drawer is confirmed working */}
        {!isMobile && (
          <div 
            className={`md:hidden fixed inset-0 bg-dark-green bg-opacity-95 backdrop-blur-md transition-all duration-300 flex items-center justify-center
                      ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            style={{ zIndex: 40 }}
          >
            <nav className="w-full max-h-[100vh] overflow-y-auto py-20 px-6">
              <ul className="flex flex-col items-center space-y-6">
                {sections.map((section) => (
                  <li key={section.id} className="w-full text-center">
                    <a
                      href={`#${section.id}`}
                      className={`block py-3 text-2xl ${activeSection === section.id ? 'text-light-brown' : 'text-cream'}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(section.id);
                      }}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
