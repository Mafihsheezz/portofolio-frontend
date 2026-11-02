import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="about-section page-shell" id="tentang" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow">Sedikit tentang saya</p>
        <h2 id="about-title">
          Belajar, mencoba,
          <br />
          dan terus bertumbuh.
        </h2>
        <div className="about-focus">
          <span>Fokus saat ini</span>
          <strong>Frontend Development</strong>
        </div>
      </div>
      <div className="about-copy">
        <p>
          Saya merupakan mahasiswa D-IV Teknologi Rekayasa Perangkat Lunak di Universitas
          Gadjah Mada yang memiliki ketertarikan pada pengembangan website, khususnya
          Frontend Development.
        </p>
        <p>
          Saya mulai tertarik dengan bidang ini karena senang melihat bagaimana desain
          dapat diubah menjadi tampilan website yang bisa digunakan secara langsung.
          Dalam proses belajar, saya mencoba mengembangkan kemampuan melalui praktikum,
          eksplorasi teknologi, dan pengerjaan proyek bersama tim.
        </p>
        <p>
          Bagi saya, setiap proyek menjadi kesempatan untuk mencoba hal baru, memahami
          proses pengembangan perangkat lunak, dan memperbaiki kemampuan dalam menulis
          kode maupun membangun antarmuka.
        </p>
        <Link className="text-link" to="/projects">
          Lihat proyek pilihan <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
