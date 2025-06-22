// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';

// --- KOMPONEN IKON SVG ---
const FiChevronLeft = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);
const FiChevronRight = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);
const FiGithub = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const FiLinkedin = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const FiMail = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const FiMapPin = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);
const FiPhone = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);
const FiCode = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
const FiTool = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);
const FiUsers = (props: any) => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);


// --- DATA KONFIGURASI DENGAN GALERI ---
const personalInfo = {
  name: "Adi Sunjana",
  title: "Frontend Developer",
  location: "Garut, Indonesia",
  email: "adisunjana443@gmail.com",
  phone: "085724905705",
  linkedin: "https://linkedin.com/in/adi-sunjana-0a4b401b0",
  github: "https://github.com/ezz001-dev",
  summary: "Saya mengubah ide kompleks menjadi aplikasi web yang intuitif dan responsif. Dengan pengalaman lebih dari 4 tahun di ekosistem Angular, saya menghadirkan solusi digital yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang luar biasa."
};

const portfolioItems = [
  {
    title: "Aplikasi Kasir (Fullstack)",
    description: "Merancang dan membangun sistem Point-of-Sale dari nol, menghasilkan aplikasi siap produksi yang di-deploy secara otomatis menggunakan Docker & CI/CD.",
    tags: ["React Native", "Laravel", "Docker", "CI/CD"],
    image: "Screenshot 2025-06-21 111001.png",
    galleryImages: [
      "6249140457942665289.jpg",
      "6249140457942665293.jpg",
      "6249140457942665290.jpg",
      "6249140457942665288.jpg",
      "6249140457942665289.jpg",
      "6249140457942665294.jpg",
    ]
  },
  {
    title: "BCA Life",
    description: "Ikut Serta dalam membangun sistem Keuangan untuk salah satu bank swasta , Dan Memimpin dalam upgarde angular dari versi 5 ke 17 ",
    tags: ["Angular", "Cordova", "Java", "PrimeNG"],
    image: "Screenshot 2024-03-18 104206.png",
    galleryImages: [
      "https://placehold.co/600x400/1a202c/718096?text=Mobile+Login",
      "https://placehold.co/600x800/1a202c/718096?text=Transaction+Page",
      "https://placehold.co/800x600/1a202c/718096?text=Product+List",
      "https://placehold.co/600x400/1a202c/718096?text=Reporting",
      "https://placehold.co/600x400/1a202c/718096?text=Settings",
      "https://placehold.co/600x400/1a202c/718096?text=Settings",
    ]
  },
  {
    title: "Dashboard ERP",
    description: "Merancang dan Membangun sistem Dashboard untuk ERP Bisnis",
    tags: ["Angular", "Chart JS", "PrimeNG", "Responsive Design"],
    image: "Screenshot 2022-11-23 162501.png",
    galleryImages: [
      "Screenshot 2022-11-23 161922.png",
      "Screenshot 2022-11-23 161854.png",
      "Screenshot 2022-11-23 161827.png",
      "Screenshot 2022-11-23 162522.png",
      "Screenshot 2022-11-23 162407.png",
      "Screenshot 2022-11-23 161719.png",
    ]
  },
  {
    title: "Black Experience",
    description: "Ikut Serta Dalam Pengembangan Web Application Untuk Komunitas Otomotif",
    tags: ["Laravel", "Bootstrap", "Responsive Design", "Jquery"],
    image: "Project_1.png",
    galleryImages: [
      "iPhone-SE-2016-www.blackxperience.com.png",
      "iPhone-SE-2016-www.blackxperience.com.png",
      "https://placehold.co/800x600/1a202c/718096?text=Product+List",
      "iPhone-SE-2016-www.blackxperience.com (2).png",
      "iPhone-SE-2016-www.blackxperience.com (2).png",
      "iPhone-SE-2016-www.blackxperience.com (1).png",
    ]
  },
  {
    title: "Aplikasi Keuangan LPS",
    description: "Ikut Serta Dalama pengembangan aplikasi Lembaga Penjamin Simpanan (LPS)",
    tags: ["Angular", "TypeScript", "PrimeNG"],
    image: "Screenshot 2025-06-21 113113.png",
    galleryImages: [
      "https://placehold.co/800x600/2d3748/90cdf4?text=Data+Table",
      "https://placehold.co/600x400/2d3748/90cdf4?text=Login+Screen",
      "https://placehold.co/600x800/2d3748/90cdf4?text=Chart+Analytics",
      "https://placehold.co/600x400/2d3748/90cdf4?text=User+Profile",
      "https://placehold.co/600x400/2d3748/90cdf4?text=Form+Input",
      "https://placehold.co/600x400/2d3748/90cdf4?text=Form+Input",
    ]
  },
  {
    title: "SunLife",
    description: "Revamp Website Asuransi yang sebelumnya menggunakan angular js ke Angular 15",
    tags: ["Angular", "REST API", "Okta Authtentication", "Organizaton Chart", "Responsive Design"],
    image: "Project_3.png",
    galleryImages: [
      "Screenshot 2024-07-25 174405.png",
      "Screenshot 2024-07-25 174152.png",
      "Sunlife_sub_1.png",
      "Screenshot 2024-07-25 174131.png",
      "Screenshot 2024-07-25 174109.png",
      "Screenshot 2024-07-29 144555.png",
    ]
  },
  {
    title: "Clove Moment",
    description: "Berkontribusi dalam Penegmbangan dan peluncuran platform sosial media baru, memungkinkan interaksi komunitas yang lebih baik dan pengelolaan konten yang efisien melalui CMS.",
    tags: ["Angular", "REST API", "Community Platform"],
    image: "Screenshot_20221221_172026.png",
    galleryImages: [
      "Screenshot_20221221_172013.png",
      "Screenshot_20221221_172042.png",
      "Screenshot_20221221_172057.png",
      "Screenshot_20221221_172236.png",
      "Screenshot_20221221_171956.png",
      "Screenshot_20221221_171956.png",
    ]
  },
  {
    title: "Bina Sawit Makmur Indonesia",
    description: "Berkontribusi dalam Pengembangan Project Company Profile beserta CMS Menggunakan Angular dan Laravel",
    tags: ["Angular", "REST API", "Laravel", "Responsive Mobile"],
    image: "Project_5.png",
    galleryImages: [
      "sub_p_5.png",
      "iPhone-13-PRO-binasawitmakmur.com (1).png",
      "sub_p_5.png",
      "sub_p_5_1.png",
      "sub_p_5_2.png",
      "sub_p_5_3.png",
    ]
  },
  {
    title: "Grand Tech",
    description: "Membangun Web Company Profile",
    tags: ["Angular", "REST API", "Responsive Mobile"],
    image: "Screenshot 2025-06-21 113557.png",
    galleryImages: [
      "Screenshot 2025-06-21 113834.png",
      "Screenshot 2025-06-21 113854.png",
      "Screenshot 2025-06-21 113914.png",
      "Screenshot 2025-06-21 114008.png",
      "Screenshot 2025-06-21 114053.png",
      "Screenshot 2025-06-21 113557.png",
    ]
  },
];

const experiences = [
  {
    role: "Fullstack Developer",
    company: "Proyek Aplikasi Kasir (Freelance)",
    period: "Mar 2025 – Jun 2025",
    description: "Merancang sistem kasir full-stack dari nol, menghasilkan aplikasi siap produksi dengan backend Laravel dan frontend React Native."
  },
  {
    role: "Frontend Developer",
    company: "PT Insura Media Solusi",
    period: "Jun 2022 – Nov 2024",
    description: "Memimpin modernisasi aplikasi keuangan inti dengan migrasi Angular (v5 ke v17), meningkatkan performa dan skalabilitas sistem."
  },
  {
    role: "Frontend Developer",
    company: "PT Redbuzz Mediatama",
    period: "Nov 2020 – May 2022",
    description: "Membangun platform sosial media dan CMS internal yang meningkatkan interaksi pengguna dan efisiensi pengelolaan konten."
  },
];

const skills = [
  {
    category: "Hard Skills",
    icon: <FiCode className="w-8 h-8 mb-4 text-teal-400" />,
    items: ["Angular (v5-v17)", "TypeScript", "HTML5/CSS3", "Tailwind CSS", "PrimeNG", "Angular Material", "Bootstrap 5", "Laravel", "REST API", "CI/CD", "React Native"]
  },
  {
    category: "Tools",
    icon: <FiTool className="w-8 h-8 mb-4 text-teal-400" />,
    items: ["Git", "GitHub", "GitLab", "Bitbucket", "Figma", "Trello", "Docker", "n8n"]
  },
  {
    category: "Soft Skills",
    icon: <FiUsers className="w-8 h-8 mb-4 text-teal-400" />,
    items: ["Leadership", "Problem Solving", "Fast Learner", "Teamwork", "Agile"]
  }
];

// Komponen Slider Portfolio dan Galeri
const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [galleryKey, setGalleryKey] = useState(0);

  const handleSlideChange = (newIndex: any) => {
    setCurrentIndex(newIndex);
    setGalleryKey(prevKey => prevKey + 1); // Memaksa galeri untuk re-render dengan animasi
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? portfolioItems.length - 1 : currentIndex - 1;
    handleSlideChange(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === portfolioItems.length - 1 ? 0 : currentIndex + 1;
    handleSlideChange(newIndex);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main Slider */}
      <div className="relative group">
        <div className="relative h-[30rem] overflow-hidden rounded-2xl shadow-2xl bg-gray-800">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-opacity duration-700 ease-in-out"
              style={{ opacity: index === currentIndex ? 1 : 0 }}
            >
              <img
                src={'images/' + item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x800/1a202c/e2e8f0?text=Image+Not+Found'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="mb-4 max-w-2xl">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-teal-500/20 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* PERBAIKAN: Tombol sekarang selalu terlihat di mobile dan tetap memiliki efek hover di desktop */}
        <button onClick={prevSlide} className="absolute top-1/2 left-2 md:-left-12 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white cursor-pointer transition-all duration-300 z-10 md:opacity-0 md:group-hover:opacity-100">
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-2 md:-right-12 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white cursor-pointer transition-all duration-300 z-10 md:opacity-0 md:group-hover:opacity-100">
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Galeri Masonry */}
      <div key={galleryKey} className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 masonry-gallery h-[400px]">
        {portfolioItems[currentIndex].galleryImages.map((imgSrc, index) => (
          <div
            key={index}
            className={`gallery-item item-${index + 1} max-h-[400px] w-full mx-auto rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
          >
            <img
              src={'images/' + imgSrc}
              alt={`Detail proyek ${portfolioItems[currentIndex].title} #${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onError={(e: any) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/4a5568/e2e8f0?text=Not+Found'; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Komponen utama aplikasi
function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="bg-gray-900 text-gray-300 font-sans antialiased">
      <style>
        {`
                html {
                    scroll-behavior: smooth;
                }
                .bg-grid-pattern {
                    background-image: linear-gradient(to right, rgba(45, 55, 72, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 55, 72, 0.2) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
                .fade-in-section {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                .fade-in-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
                /* Animasi untuk galeri */
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .masonry-gallery .gallery-item {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                /* Membuat beberapa item galeri lebih tinggi untuk efek masonry */
                .masonry-gallery .item-2, .masonry-gallery .item-4 {
                    grid-row: span 2 / span 2;
                }
                .masonry-gallery .gallery-item:nth-child(1) { animation-delay: 0.1s; }
                .masonry-gallery .gallery-item:nth-child(2) { animation-delay: 0.2s; }
                .masonry-gallery .gallery-item:nth-child(3) { animation-delay: 0.3s; }
                .masonry-gallery .gallery-item:nth-child(4) { animation-delay: 0.4s; }
                .masonry-gallery .gallery-item:nth-child(5) { animation-delay: 0.5s; }
                `}
      </style>

      <header className="sticky top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md shadow-black/10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white hover:text-teal-400 transition-colors">AS</a>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#about" className="hover:text-teal-400 transition-colors">Tentang Saya</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Pengalaman</a>
            <a href="#portfolio" className="hover:text-teal-400 transition-colors">Portofolio</a>
            <a href="#contact" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105">Kontak</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center text-center bg-grid-pattern">
          <div className="container mx-auto px-6 z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">{personalInfo.name}</h1>
            <p className="text-xl md:text-2xl font-light text-teal-400 mb-8 tracking-wider">{personalInfo.title}</p>
            <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10">{personalInfo.summary}</p>
            <div className="flex justify-center items-center space-x-4">
              <a href="#portfolio" className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20">Lihat Karya Saya</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-3 rounded-full bg-gray-800 hover:bg-gray-700"><FiLinkedin className="w-6 h-6" /></a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-3 rounded-full bg-gray-800 hover:bg-gray-700"><FiGithub className="w-6 h-6" /></a>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-gray-800/50 fade-in-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16"><h2 className="text-4xl font-bold text-white">Sedikit Tentang Saya</h2><div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded"></div></div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="max-w-md mx-auto"><img src="https://placehold.co/600x600/1a202c/e2e8f0?text=AS" alt="Adi Sunjana" className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-gray-700" /></div>
              <div className="text-lg text-gray-300 space-y-4">
                <p>Kecintaan saya pada teknologi berawal dari keinginan untuk memecahkan masalah. Bagi saya, coding bukan hanya tentang menulis baris perintah, tetapi tentang merancang solusi elegan yang memudahkan hidup orang lain.</p>
                <p>Spesialisasi saya adalah membangun antarmuka pengguna yang 'hidup'—dari menangani tantangan teknis seperti migrasi besar pada framework Angular, hingga merancang setiap detail interaksi pengguna.</p>
                <p className="pt-4 border-t border-gray-700/50 mt-6 font-semibold"><span className="text-teal-400">Sedang belajar : </span> Saat ini, saya aktif mengeksplorasi otomatisasi alur kerja (n8n) dan potensi Vector Database untuk membangun aplikasi AI generasi berikutnya.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 bg-gray-900 fade-in-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16"><h2 className="text-4xl font-bold text-white">Perjalanan Profesional Saya</h2><div className="w-32 h-1 bg-teal-500 mx-auto mt-4 rounded"></div></div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 w-1 h-full bg-gray-700/50 rounded-full"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 md:pl-0 mb-12">
                  <div className="md:flex md:justify-between md:items-center">
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}><div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-teal-500"><p className="text-sm text-gray-400 mb-1">{exp.period}</p><h3 className="text-xl font-bold text-white">{exp.role}</h3><p className="text-md text-teal-400 mb-3">{exp.company}</p><p className="text-gray-300 leading-relaxed">{exp.description}</p></div></div>
                    <div className={`absolute md:relative left-4 md:left-auto top-1 -translate-x-1/2 md:translate-x-0 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 shadow-lg ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}><div className="w-3 h-3 bg-white rounded-full"></div></div>
                    <div className="md:w-5/12 md:order-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 bg-gray-800/50 fade-in-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16"><h2 className="text-4xl font-bold text-white">Keahlian & Teknologi</h2><div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded"></div></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {skills.map((skillCat) => (
                <div key={skillCat.category} className="bg-gray-900/70 p-8 rounded-xl shadow-lg hover:shadow-teal-500/10 hover:border-teal-500/50 border border-transparent transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex justify-center mb-4">{skillCat.icon}</div>
                  <h3 className="text-2xl font-bold text-center text-white mb-6">{skillCat.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">{skillCat.items.map(skill => (<span key={skill} className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1.5 rounded-md">{skill}</span>))}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-24 bg-gray-900 fade-in-section">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16"><h2 className="text-4xl font-bold text-white">Karya Pilihan Saya</h2><div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded"></div></div>
            <PortfolioSlider />
          </div>
        </section>

        <section id="contact" className="py-24 bg-gray-800/50 fade-in-section">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Mari Terhubung</h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">Punya ide menarik atau proyek yang menantang? Saya ingin mendengarnya. Mari kita ciptakan sesuatu yang luar biasa bersama.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-3 text-lg hover:text-teal-400 transition-colors"><FiMail className="w-6 h-6" /><span>{personalInfo.email}</span></a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center space-x-3 text-lg hover:text-teal-400 transition-colors"><FiPhone className="w-6 h-6" /><span>{personalInfo.phone}</span></a>
              <div className="flex items-center space-x-3 text-lg"><FiMapPin className="w-6 h-6" /><span>{personalInfo.location}</span></div>
            </div>
            <div className="mt-12"><a href={`mailto:${personalInfo.email}`} className="bg-teal-500 text-white font-bold py-4 px-10 rounded-full hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/20 text-lg">Mulai Percakapan</a></div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. Dibuat dengan penuh semangat.</p>
          <p className="text-sm mt-2">Dibangun dengan React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App


