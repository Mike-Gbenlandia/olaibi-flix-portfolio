import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById, getScriptProjectById } from '@/data/portfolio';
import { NetflixButton } from '@/components/NetflixButton';
import { Navigation } from '@/components/Navigation';

const CaseStudyPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : null;
  const scriptProject = projectId ? getScriptProjectById(projectId) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-netflix-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bebas text-netflix-text mb-4">Case Study Not Found</h1>
          <Link to="/">
            <NetflixButton>Back to Portfolio</NetflixButton>
          </Link>
        </div>
      </div>
    );
  }

  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen bg-netflix-bg">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={`${project.brand} - ${project.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-display text-netflix-text mb-4">{project.brand}</h1>
            <h2 className="text-2xl font-semibold text-netflix-text-muted mb-4">{project.title}</h2>
            <Link to="/">
              <NetflixButton variant="outline">← Back to Portfolio</NetflixButton>
            </Link>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="bg-netflix-card rounded-xl p-8 mb-8">
              <h3 className="text-headline text-netflix-red mb-6">Overview</h3>
              <p className="text-body text-netflix-text-muted leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* Problem */}
            <div className="bg-netflix-card rounded-xl p-8 mb-8">
              <h3 className="text-headline text-netflix-red mb-6">Problem</h3>
              <p className="text-body text-netflix-text-muted leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="bg-netflix-card rounded-xl p-8 mb-8">
              <h3 className="text-headline text-netflix-red mb-6">Creative Approach</h3>
              <p className="text-body text-netflix-text-muted leading-relaxed">
                {caseStudy.approach}
              </p>
            </div>

            {/* Output */}
            <div className="bg-netflix-card rounded-xl p-8 mb-8">
              <h3 className="text-headline text-netflix-red mb-6">Final Output</h3>
              <p className="text-body text-netflix-text-muted leading-relaxed">
                {caseStudy.output}
              </p>
            </div>

            {/* Rationale */}
            <div className="bg-netflix-card rounded-xl p-8 mb-8">
              <h3 className="text-headline text-netflix-red mb-6">Why It Works</h3>
              <p className="text-body text-netflix-text-muted leading-relaxed">
                {caseStudy.rationale}
              </p>
            </div>

            {/* Role */}
            <div className="bg-netflix-card rounded-xl p-8 mb-8">
              <h3 className="text-headline text-netflix-red mb-6">My Role</h3>
              <p className="text-body text-netflix-text-muted leading-relaxed">
                {caseStudy.role}
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              {scriptProject && (
                <Link to={`/script/${project.id}`}>
                  <NetflixButton>Read Full Script</NetflixButton>
                </Link>
              )}
              <Link to="/">
                <NetflixButton variant="outline">Back to Portfolio</NetflixButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;