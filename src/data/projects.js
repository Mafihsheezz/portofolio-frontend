import hipmiDetailUsaha from '../../assets/projects/HIPMI-DIY/hipmi-detail-usaha.png';
import hipmiHome from '../../assets/projects/HIPMI-DIY/hipmi-home.png';
import hipmiKatalog from '../../assets/projects/HIPMI-DIY/hipmi-katalog.png';
import hipmiKelolaUsaha from '../../assets/projects/HIPMI-DIY/hipmi-kelola-usah.png';
import hipmiMobileLogin from '../../assets/projects/HIPMI-DIY/HIPMI-DIY-MOBILE/mobile-hipmi-login.png';
import hipmiMobileSignup from '../../assets/projects/HIPMI-DIY/HIPMI-DIY-MOBILE/mobile-hipmi-signup.png';

export const projects = [
  {
    slug: 'hipmi-diy',
    number: '01',
    title: 'Website Manajemen Katalog dan Bisnis HIPMI DIY',
    category: 'Web Development',
    role: 'Frontend Developer',
    status: 'In Progress',
    technologies: [
      'Laravel Blade',
      'Tailwind CSS',
      'JavaScript',
      'Figma',
      'Git',
      'GitHub',
    ],
    summary:
      'Proyek akademik bersama stakeholder HIPMI DIY untuk mengembangkan sistem informasi katalog dan pengelolaan bisnis anggota.',
    overview:
      'Proyek akademik yang dikerjakan bersama stakeholder HIPMI DIY ini bertujuan mengembangkan sistem informasi untuk membantu penyajian katalog dan pengelolaan bisnis anggota. Website menyediakan fitur pencarian dan filter untuk memudahkan pengguna menemukan usaha berdasarkan informasi yang tersedia, serta halaman detail untuk melihat profil dan informasi setiap usaha. Selain itu, tersedia halaman pengelolaan yang memungkinkan anggota melihat daftar usaha yang dimiliki beserta statusnya. Dengan adanya sistem ini, informasi bisnis anggota dapat disajikan secara lebih terstruktur dan memudahkan proses pencarian maupun pengelolaan data usaha.',
    contributions: [
      'Merevisi desain UI/UX berdasarkan proses proyek bersama stakeholder.',
      'Mengembangkan antarmuka frontend untuk sistem informasi.',
    ],
    process: [
      'Kolaborasi proyek akademik bersama stakeholder HIPMI DIY.',
      'Revisi desain UI/UX menggunakan Figma.',
      'Implementasi antarmuka frontend.',
    ],
    challengeLearning:
      'Catatan spesifik tentang tantangan dan pembelajaran proyek ini belum diberikan. ',
    preview: {
      src: hipmiHome,
      alt: 'Tampilan halaman utama BPD HIPMI DIY dengan navigasi dan bagian hero.',
    },
    gallery: [
      {
        src: hipmiHome,
        alt: 'Halaman utama BPD HIPMI DIY dengan navigasi Tentang Kami, Katalog Usaha, dan Bergabung.',
        caption:
          'Halaman utama memperkenalkan BPD HIPMI DIY melalui navigasi Tentang Kami, Katalog Usaha, dan Bergabung, serta area hero organisasi.',
      },
      {
        src: hipmiKatalog,
        alt: 'Halaman katalog usaha HIPMI DIY dengan pencarian, filter sektor dan wilayah, serta daftar usaha.',
        caption:
          'Katalog usaha menyediakan pencarian dan filter sektor maupun wilayah untuk membantu pengunjung menemukan usaha anggota.',
      },
      {
        src: hipmiDetailUsaha,
        alt: 'Halaman detail Bagas Kuliner Nusantara dengan informasi usaha dan kontak pemilik.',
        caption:
          'Halaman detail usaha menampilkan profil Bagas Kuliner Nusantara, ringkasan informasi usaha, dan pilihan untuk menghubungi pemilik.',
      },
      {
        src: hipmiKelolaUsaha,
        alt: 'Halaman pengelolaan usaha anggota dengan filter status dan daftar pengajuan.',
        caption:
          'Halaman pengelolaan usaha menampilkan daftar pengajuan anggota beserta status dan tindakan yang tersedia pada masing-masing usaha.',
      },
    ],
    visual: 'web',
  },
  {
    slug: 'hipmi-mobile',
    number: '02',
    title: 'HIPMI DIY Mobile Application',
    category: 'Mobile Development',
    role: 'Frontend Developer',
    status: 'In Progress',
    technologies: ['Kotlin', 'Android Studio', 'XML Layout'],
    summary:
      'Aplikasi mobile HIPMI DIY dengan kontribusi pada antarmuka Login dan Sign Up menggunakan XML Layout.',
    overview:
      'Proyek ini merupakan pengembangan aplikasi mobile HIPMI DIY. Dokumentasi yang tersedia menunjukkan dua rancangan antarmuka Android: Login untuk pengguna yang sudah memiliki akun dan Sign Up untuk membuat akun. Form Login memuat kolom email dan password, sedangkan form Sign Up memuat nama, email, password, konfirmasi password, serta persetujuan syarat dan ketentuan.',
    contributions: [
      'Mengimplementasikan antarmuka halaman Login menggunakan XML Layout.',
      'Mengimplementasikan antarmuka halaman Sign Up menggunakan XML Layout.',
    ],
    process: [
      'Implementasi antarmuka Login pada aplikasi Android.',
      'Implementasi antarmuka Sign Up menggunakan XML Layout.',
    ],
    challengeLearning:
      'Catatan spesifik tentang tantangan dan pembelajaran proyek ini belum diberikan. ',
    preview: {
      src: hipmiMobileLogin,
      alt: 'Rancangan halaman Login aplikasi HIPMI DIY dengan logo, kolom email dan password, serta tombol Login.',
    },
    gallery: [
      {
        src: hipmiMobileLogin,
        alt: 'Rancangan halaman Login aplikasi HIPMI DIY dengan kolom email dan password.',
        caption:
          'Halaman Login menampilkan identitas HIPMI DIY, input email dan password, tombol Login, serta tautan untuk pengguna yang ingin mendaftar.',
      },
      {
        src: hipmiMobileSignup,
        alt: 'Rancangan halaman Sign Up aplikasi HIPMI DIY dengan form data akun dan persetujuan syarat.',
        caption:
          'Halaman Sign Up memuat form nama, email, password, konfirmasi password, persetujuan syarat dan ketentuan, serta tombol Register.',
      },
    ],
    visual: 'mobile',
  },
];
