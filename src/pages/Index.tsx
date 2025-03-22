
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import NonProfit from '@/components/NonProfit';
import Events from '@/components/Events';
import Recognitions from '@/components/Recognitions';
import ExpandableSection from '@/components/ExpandableSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Reveal animation for sections
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all elements with reveal class
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-bg-green text-cream">
      <Header />
      
      <main>
        <Hero 
          image="/page/lovable-uploads/98cfbc7b-877a-45e9-a8b1-0d9696294068.png"
        />
        
        <AboutMe />
        
        <div className="section pt-4 md:pt-8">
          <ExpandableSection title="Experience" number="01" defaultOpen={false}>
            <Experience />
          </ExpandableSection>
          
          <ExpandableSection title="Education" number="02" defaultOpen={false}>
            <Education />
          </ExpandableSection>
          
          <ExpandableSection title="Projects" number="03" defaultOpen={false}>
            <Projects />
          </ExpandableSection>
          
          <ExpandableSection title="Non-Profit" number="04" defaultOpen={false}>
            <NonProfit />
          </ExpandableSection>
          
          <ExpandableSection title="Events" number="05" defaultOpen={false}>
            <Events />
          </ExpandableSection>
          
          <ExpandableSection title="Recognitions" number="06" defaultOpen={false}>
            <Recognitions />
          </ExpandableSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
