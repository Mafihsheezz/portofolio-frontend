import React from 'react';
import ProjectVisual from './ProjectVisual.jsx';

export default function ProjectGallery({ project }) {
  if (project.gallery.length === 0) {
    return (
      <div className="gallery-empty">
        <ProjectVisual type={project.visual} compact />
        <p>
          Screenshot asli belum tersedia. Area ini disiapkan untuk dokumentasi visual proyek
          ketika sudah dapat dibagikan.
        </p>
      </div>
    );
  }

  return (
    <div className={`project-gallery project-gallery--${project.visual}`}>
      {project.gallery.map((image) => (
        <figure className="project-gallery__item" key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" />
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
