import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import ProjectGallery from '../components/ProjectGallery.jsx';
import ProjectHero from '../components/ProjectHero.jsx';
import { projects } from '../data/projects.js';

function DetailSection({ number, eyebrow, title, children, className = '' }) {
  return (
    <section className={`detail-section ${className}`}>
      <div className="detail-section__label">
        <span>{number}</span>
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <div className="detail-section__content">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex < 0) return <Navigate to="/projects" replace />;

  const project = projects[projectIndex];
  const previous = projects[projectIndex - 1];
  const next = projects[projectIndex + 1];

  return (
    <main className="project-detail page-shell">
      <ProjectHero project={project} />

      <div className="detail-content" id="project-overview">
        <DetailSection number="01" eyebrow="Project Overview" title="The context">
          <p>{project.overview}</p>
        </DetailSection>

        <DetailSection number="02" eyebrow="My Role & Contribution" title="What I worked on">
          <p className="detail-section__lead">
            Peran dalam proyek: <strong>{project.role}</strong>
          </p>
          <ul className="contribution-list">
            {project.contributions.map((contribution) => (
              <li key={contribution}>
                <Check size={17} aria-hidden="true" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection number="03" eyebrow="Development Process" title="Work in progress">
          <ol className="process-list">
            {project.process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </DetailSection>

        <DetailSection number="04" eyebrow="Tech Stack" title="Tools used">
          <ul className="tech-list tech-list--detail">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection number="05" eyebrow="Project Gallery" title="Visual documentation">
          <ProjectGallery project={project} />
        </DetailSection>

        <DetailSection
          number="06"
          eyebrow="Challenges & Learning"
          title="Notes from the process"
          className="detail-section--last"
        >
          <p>{project.challengeLearning}</p>
        </DetailSection>
      </div>

      <nav className="project-navigation" aria-label="Navigasi proyek">
        <Link className="back-link" to="/projects">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Projects
        </Link>
        <div className="project-navigation__adjacent">
          {previous ? (
            <Link to={`/projects/${previous.slug}`}>
              <span>Previous Project</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : (
            <span className="project-navigation__empty">First project</span>
          )}
          {next ? (
            <Link className="project-navigation__next" to={`/projects/${next.slug}`}>
              <span>Next Project</span>
              <strong>{next.title}</strong>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          ) : (
            <span className="project-navigation__empty">Latest project</span>
          )}
        </div>
      </nav>
    </main>
  );
}
