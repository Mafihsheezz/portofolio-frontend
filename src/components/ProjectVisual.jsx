import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function ProjectVisual({ type = 'web', compact = false, image }) {
  const Icon = type === 'mobile' ? Smartphone : Monitor;
  const className = `project-visual project-visual--${type}${compact ? ' project-visual--compact' : ''}`;

  if (image) {
    return (
      <div className={className}>
        <img
          className="project-visual__image"
          src={image.src}
          alt={image.alt}
          loading={compact ? 'lazy' : undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      role="img"
      aria-label="Placeholder: screenshot proyek belum tersedia"
    >
      <div className="project-visual__grid" aria-hidden="true" />
      <div className="project-visual__message">
        <span className="project-visual__icon">
          <Icon size={compact ? 21 : 30} strokeWidth={1.4} aria-hidden="true" />
        </span>
        <span>Screenshot belum tersedia</span>
        <small>Placeholder — ganti dengan dokumentasi proyek</small>
      </div>
      <span className="project-visual__index" aria-hidden="true">
        PROJECT / PREVIEW
      </span>
    </div>
  );
}
