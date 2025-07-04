import React, { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { ProjectCard } from '@/components/ProjectCard';
import { NetflixButton } from '@/components/NetflixButton';
import { scriptProjects, copyProjects } from '@/data/portfolio';
import heroImage from '@/assets/hero-portfolio.jpg';
import scriptShowcase from '@/assets/script-showcase.jpg';
import copyShowcase from '@/assets/copy-showcase.jpg';

const Index: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-netflix-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Creative Portfolio Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className={`text-hero mb-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            GBENGA MICHAEL OLAIBI
          </h1>
          <p className="text-2xl md:text-3xl text-netflix-text-muted mb-8 animate-fade-up [animation-delay:0.3s]">
            Where Words Meet Wonder
          </p>
          <p className="text-body text-netflix-text-muted mb-12 max-w-2xl mx-auto animate-fade-up [animation-delay:0.6s]">
            Crafting compelling narratives that captivate audiences and drive results. 
            From screenplays that move hearts to copy that moves markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up [animation-delay:0.9s]">
            <NetflixButton 
              size="lg"
              onClick={() => scrollToSection('scriptwriting')}
            >
              Explore Scripts
            </NetflixButton>
            <NetflixButton 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('copywriting')}
            >
              View Copy Work
            </NetflixButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-netflix-red rounded-full flex justify-center">
            <div className="w-1 h-3 bg-netflix-red rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Scriptwriting Showcase */}
      <section id="scriptwriting" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <img
                src={scriptShowcase}
                alt="Scriptwriting Showcase"
                className="w-full rounded-xl shadow-hover"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <h2 className="text-display text-netflix-text mb-6">
                Scriptwriting
              </h2>
              <h3 className="text-2xl text-netflix-red mb-6 font-bebas">
                SEASON OF THE HOOKS
              </h3>
              <p className="text-body text-netflix-text-muted mb-8 leading-relaxed">
                Every great story begins with a hook that captures the imagination. 
                My scriptwriting portfolio spans educational content, brand documentaries, 
                and compelling narratives that transform complex ideas into engaging experiences.
              </p>
              <p className="text-body text-netflix-text-muted mb-8 leading-relaxed">
                From children's educational series to investor pitch presentations, 
                each script is crafted to resonate with its intended audience while 
                achieving specific business and creative objectives.
              </p>
            </div>
          </div>

          <div className="showcase-grid">
            {scriptProjects.map((project, index) => (
              <div key={project.id} className={`animate-scale-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard project={project} type="script" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Copy Showcase */}
      <section id="copywriting" className="py-20 px-6 bg-netflix-card/30">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <img
                src={copyShowcase}
                alt="Website Copy Showcase"
                className="w-full rounded-xl shadow-hover"
              />
            </div>
            <div className="lg:w-1/2 lg:pr-8">
              <h2 className="text-display text-netflix-text mb-6">
                Website Copy
              </h2>
              <h3 className="text-2xl text-netflix-red mb-6 font-bebas">
                FIRST IMPRESSIONS THAT STICK
              </h3>
              <p className="text-body text-netflix-text-muted mb-8 leading-relaxed">
                In the digital landscape, you have seconds to make an impact. 
                My copywriting transforms complex value propositions into clear, 
                compelling messages that drive conversions and build lasting relationships.
              </p>
              <p className="text-body text-netflix-text-muted mb-8 leading-relaxed">
                From SaaS platforms to wellness brands, each project demonstrates 
                how strategic messaging can bridge the gap between what you offer 
                and what your audience truly needs.
              </p>
            </div>
          </div>

          <div className="showcase-grid">
            {copyProjects.map((project, index) => (
              <div key={project.id} className={`animate-scale-in`} style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard project={project} type="copy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-red">
        <div className="container mx-auto text-center">
          <h2 className="text-display text-white mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-body text-white/90 mb-8 max-w-2xl mx-auto">
            Every brand has a unique story waiting to be told. Let's craft yours together 
            with the power of compelling words and strategic storytelling.
          </p>
          <NetflixButton 
            variant="outline" 
            size="lg"
            className="bg-white text-netflix-red border-white hover:bg-white/90"
          >
            Start a Conversation
          </NetflixButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-netflix-red/20">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bebas text-netflix-text mb-4">
            Gbenga Michael Olaibi
          </h3>
          <p className="text-netflix-text-muted">
            Scriptwriter • Copywriter • Storyteller
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;