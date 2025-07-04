import React from 'react';
import { Link } from 'react-router-dom';
import { NetflixButton } from './NetflixButton';
import { ScriptProject, CopyProject } from '@/data/portfolio';

interface ProjectCardProps {
  project: ScriptProject | CopyProject;
  type: 'script' | 'copy';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, type }) => {
  const hasScript = 'script' in project;

  return (
    <div className="netflix-card group cursor-pointer">
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={`${project.brand} - ${project.title}`}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-bold text-lg mb-1">{project.brand}</h3>
          <p className="text-netflix-text-muted text-sm mb-3">{project.title}</p>
          <div className="flex gap-2">
            {hasScript && (
              <Link to={`/script/${project.id}`}>
                <NetflixButton size="sm" variant="primary">
                  Read Script
                </NetflixButton>
              </Link>
            )}
            <Link to={`/case-study/${project.id}`}>
              <NetflixButton size="sm" variant="outline">
                Case Study
              </NetflixButton>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-headline text-netflix-text mb-2">{project.brand}</h3>
        <h4 className="text-lg font-semibold text-netflix-text-muted mb-3">{project.title}</h4>
        <p className="text-body text-netflix-text-muted mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex gap-3">
          {hasScript && (
            <Link to={`/script/${project.id}`}>
              <NetflixButton size="sm" variant="primary">
                Read Full Script
              </NetflixButton>
            </Link>
          )}
          <Link to={`/case-study/${project.id}`}>
            <NetflixButton size="sm" variant="outline">
              Read Case Study
            </NetflixButton>
          </Link>
        </div>
      </div>
    </div>
  );
};