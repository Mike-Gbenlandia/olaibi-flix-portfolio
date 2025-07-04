import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getScriptProjectById } from '@/data/portfolio';
import { NetflixButton } from '@/components/NetflixButton';
import { Navigation } from '@/components/Navigation';

const ScriptPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getScriptProjectById(projectId) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-netflix-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bebas text-netflix-text mb-4">Script Not Found</h1>
          <Link to="/">
            <NetflixButton>Back to Portfolio</NetflixButton>
          </Link>
        </div>
      </div>
    );
  }

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

        {/* Script Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-netflix-card rounded-xl p-8 mb-8">
              <h3 className="text-headline text-netflix-text mb-6">Full Script</h3>
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-netflix-text-muted text-body leading-relaxed font-mono">
                  {project.script}
                </pre>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link to={`/case-study/${project.id}`}>
                <NetflixButton>Read Case Study</NetflixButton>
              </Link>
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

export default ScriptPage;