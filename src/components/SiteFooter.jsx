import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>Designed &amp; Built by Muhammad Faqih Ghufron</span>
      <span>
        &copy; <time>{new Date().getFullYear()}</time>
      </span>
    </footer>
  );
}
