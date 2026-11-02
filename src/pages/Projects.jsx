import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="projects-page page-shell">
      <motion.header
        className="projects-header"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
      >
        <p className="eyebrow">Selected Works <span>— 2026</span></p>
        <h1>
          Things I&apos;ve Built
          <br />
          &amp; Worked On<span>.</span>
        </h1>
        <div className="projects-header__bottom">
          <p>
            Beberapa proyek yang saya kerjakan selama proses belajar dan mengembangkan
            kemampuan di bidang software development.
          </p>
          <span>
            {String(projects.length).padStart(2, '0')} PROJECTS
            <ArrowDown size={15} aria-hidden="true" />
          </span>
        </div>
      </motion.header>

      <section className="project-list" aria-label="Daftar proyek">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
    </main>
  );
}
