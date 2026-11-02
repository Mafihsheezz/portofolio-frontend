import React from 'react';
import { ArrowDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectHero({ project }) {
  return (
    <header className="detail-hero page-shell">
      <Link className="back-link" to="/projects">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Projects
      </Link>
      <div className="detail-hero__heading">
        <p className="eyebrow">
          PROJECT {project.number} <span>/</span> {project.category}
        </p>
        <h1>{project.title}</h1>
        <p className="detail-hero__summary">{project.summary}</p>
        <div className="detail-hero__meta">
          <span className="status-pill">
            <i aria-hidden="true" />
            {project.status}
          </span>
          <span>{project.role}</span>
        </div>
      </div>
      <a className="scroll-cue" href="#project-overview">
        Explore case study <ArrowDown size={16} aria-hidden="true" />
      </a>
      <div className={`detail-hero__visual detail-hero__visual--${project.visual}`}>
        <ProjectVisual type={project.visual} image={project.preview} />
      </div>
    </header>
  );
}
