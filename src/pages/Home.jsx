import React from 'react';
import { ArrowDownRight, ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/profile.png';
import AboutSection from '../components/AboutSection.jsx';

const contactItems = [
  {
    label: 'Email',
    value: 'muhammadfaqihghufron@mail.ugm.ac.id',
    href: 'mailto:muhammadfaqihghufron@mail.ugm.ac.id',
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/faqihghufron',
    href: 'https://www.linkedin.com/in/faqihghufron',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/Mafihsheezz',
    href: 'https://github.com/Mafihsheezz',
    Icon: Github,
  },
  { label: 'Lokasi', value: 'Yogyakarta, Indonesia', Icon: MapPin },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero" id="home" aria-labelledby="home-title">
        <div className="home-hero__inner page-shell">
          <div className="home-intro">
            <p className="eyebrow">Frontend Developer · </p>
            <h1 id="home-title">
              <span>Membangun website</span>
              <span>yang nyaman dilihat</span>
              <span>dan mudah digunakan.</span>
            </h1>
            <p className="home-intro__copy">
              Halo, saya Muhammad Faqih Ghufron. Saat ini saya sedang belajar dan
              mengembangkan kemampuan di bidang Frontend Development. Melalui berbagai
              proyek, saya ingin terus memahami bagaimana membangun website yang tidak
              hanya menarik secara visual, tetapi juga nyaman digunakan.
            </p>
            <Link className="button button--primary" to="/projects">
              Lihat Proyek <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <span className="home-intro__index">PORTFOLIO / 2026</span>
          </div>

          <figure className="home-portrait">
            <div className="home-portrait__image">
              <img
                src={profileImage}
                alt="Potret Muhammad Faqih Ghufron."
                width="1200"
                height="1401"
              />
            </div>
            <figcaption className="home-profile-card">
              <span className="home-profile-card__label">Frontend Developer UGM</span>
              <h2>Learning, building, and growing through code.</h2>
              <div className="home-profile-card__tags">
                <span>Frontend Development</span>
                <span>Student</span>
              </div>
            </figcaption>
            <span className="home-portrait__index" aria-hidden="true">
              01 — ABOUT ME
            </span>
          </figure>
          <a className="home-scroll" href="#tentang" aria-label="Gulir ke bagian tentang saya">
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <AboutSection />

      <section className="contact-section page-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-heading">
          <p className="eyebrow">Mari terhubung</p>
          <h2 id="contact-title">
            Let&apos;s
            <br />
            Connect<span>.</span>
          </h2>
          <p>
            Punya pertanyaan, ingin berdiskusi, atau tertarik dengan proyek yang saya
            kerjakan? Jangan ragu untuk menghubungi saya.
          </p>
        </div>
        <div className="contact-details">
          <p className="eyebrow">Temukan saya di</p>
          <ul className="contact-list">
            {contactItems.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <Icon size={20} aria-hidden="true" />
                <div>
                  <span>{label}</span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {value}
                    </a>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <a
            className="button button--primary"
            href="mailto:muhammadfaqihghufron@mail.ugm.ac.id?subject=Let%27s%20Connect!&body=Hi%20Faqih%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
          >
            Get in Touch <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}
