import React, { useEffect } from 'react';
import { AnimatePresence, useReducedMotion } from 'motion/react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import { PageTransition } from './components/PageTransition.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Projects from './pages/Projects.jsx';

function RouteScrollManager() {
  const { pathname, hash } = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timeoutId;
    const scrollToTarget = () => {
      const target = document.getElementById(targetId);
      if (!target && attempts < 30) {
        attempts += 1;
        timeoutId = window.setTimeout(scrollToTarget, 50);
        return;
      }

      target?.scrollIntoView({
        behavior: shouldReduceMotion ? 'auto' : 'smooth',
        block: 'center',
      });
    };

    timeoutId = window.setTimeout(scrollToTarget, 50);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash, shouldReduceMotion]);

  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <RouteScrollManager />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route
            path="/projects/:slug"
            element={
              <PageTransition>
                <ProjectDetail />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <main className="not-found page-shell">
                  <p className="eyebrow">404 — Page not found</p>
                  <h1>Halaman tidak ditemukan.</h1>
                  <Link className="text-link" to="/projects">
                    Kembali ke project
                  </Link>
                </main>
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
