import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectCard({ project, index }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`project-card project-card--${index % 2 === 0 ? 'wide' : 'offset'}`}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.08 }}
    >
      <Link
        className="project-card__link"
        to={`/projects/${project.slug}`}
        aria-label={`Lihat detail ${project.title}`}
      >
        <div className={`project-card__visual project-card__visual--${project.visual}`}>
          <ProjectVisual type={project.visual} image={project.preview} />
          <span className="project-card__number">PROJECT {project.number}</span>
        </div>
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{project.category}</span>
            <span className="status-pill">
              <i aria-hidden="true" />
              {project.status}
            </span>
          </div>
          <div className="project-card__content">
            <div>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            <span className="project-card__arrow" aria-hidden="true">
              <ArrowUpRight size={22} />
            </span>
          </div>
          <div className="project-card__footer">
            <span className="project-card__role">{project.role}</span>
            <ul className="tech-list" aria-label="Teknologi proyek">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <span className="project-card__view">
              View project <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
