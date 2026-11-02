import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-brand" to="/" aria-label="Muhammad Faqih Ghufron — Home">
          <span className="site-brand__mark">MF</span>
          <span>Muhammad Faqih Ghufron</span>
        </Link>
        <nav className="site-nav" aria-label="Navigasi utama">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">Tentang</NavLink>
          <Link to="/#contact">Kontak</Link>
        </nav>
      </div>
    </header>
  );
}
