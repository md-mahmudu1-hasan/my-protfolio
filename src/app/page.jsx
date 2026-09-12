import Image from "next/image";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Experience from "../components/Experience";
import PortfolioSection from "../components/Portfolio";

const NAV_LINKS = [
  { label: "Social", href: "#social" },
  { label: "About me", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const HERO_STATS = [
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Shipped" },
  { value: "MERN", label: "Core Stack" },
];

function Home() {
  return (
    <div
      id="top"
      className="min-h-screen flex flex-col bg-background-dark font-body selection:bg-primary/30"
    >
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-background-dark/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-display font-bold text-white tracking-tight"
          >
            Mahmudul<span className="text-primary">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none text-white focus:outline-none p-2 cursor-pointer" aria-label="Open menu">
                <span className="material-icons-outlined text-2xl">menu</span>
              </summary>
              <nav className="absolute right-0 top-14 w-64 rounded-xl border border-white/10 bg-background-dark p-4 shadow-2xl">
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="py-3 text-gray-300 hover:text-primary">{link.label}</a>)}
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="bg-noise flex-grow min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-12 gap-0 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
          <div className="absolute top-[30%] right-[15%] w-[20%] h-[20%] bg-primary/10 rounded-full blur-[100px] animate-float-slow" />
        </div>

        {/* Text Column */}
        <div className="lg:col-span-4 flex flex-col justify-center p-8 md:p-16 lg:pl-20 z-10 order-2 lg:order-1">
          <div className="space-y-6">
            <h1 className="home-hero-title text-6xl md:text-8xl font-display font-bold text-white leading-none tracking-tighter">
              Md Mahmudul Hasan
            </h1>

            <div className="flex items-center gap-4 home-hero-subtitle">
              <div className="h-[1px] w-16 bg-primary/50" />
              <div className="text-xl md:text-2xl font-light text-primary-light">
                Full Stack Web Developer | MERN | Next.js | Odoo ERP | Software Engineer Intern
              </div>
            </div>

            <p className="home-hero-subtitle text-lg text-gray-400 max-w-md leading-relaxed">
              software engineer building modern web applications, responsive UI, and business-ready ERP solutions.
            </p>

            <div className="home-hero-cta pt-6 flex flex-wrap gap-4">
              <a
                href="/MdMahmudulHasanCV.pdf"
                download="MdMahmudulHasanCV.pdf"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-background-dark font-bold rounded-full overflow-hidden transition-all hover:pr-10 hover:shadow-glow"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="material-icons-outlined relative z-10 transition-transform group-hover:rotate-180">
                  download
                </span>
                <span className="relative z-10">Download CV</span>
              </a>
            </div>

            {/* Stat badges */}
            <div className="flex flex-wrap gap-6 pt-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="home-hero-stat">
                  <p className="text-3xl font-display font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-4 relative z-10 flex items-end justify-center bg-gradient-to-t from-background-dark via-background-light/50 to-transparent order-1 lg:order-2 h-[50vh] lg:h-auto">
          <div className="relative w-full h-full max-w-md mx-auto flex items-end">
            {/* Glow effect behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-t from-primary/30 to-transparent blur-3xl opacity-60" />

            <Image
              src="https://i.ibb.co.com/nNLcpWM5/aiease-1760716831413.png"
              alt="Md Mahmudul Hasan"
              fill
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-contain relative z-10 drop-shadow-2xl"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 80%, transparent 100%)",
              }}
            />
          </div>
          <div className="absolute bottom-10 left-0 w-full text-center z-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white/10 tracking-widest uppercase select-none">
              Mahmudul
            </h2>
          </div>
        </div>

        {/* Intro Column */}
        <div className="lg:col-span-4 flex flex-col justify-center p-8 md:p-16 lg:pr-20 z-10 order-3 text-right lg:text-left">
          <div className="bg-white/5 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border border-white/10 md:border-0 p-8 md:p-0 rounded-2xl">
            <p className="text-gray-300 leading-relaxed text-lg font-light home-hero-subtitle">
              I am a{" "}
              <span className="text-white font-medium">
                Web Developer
              </span>{" "}
              and Software Engineer Intern, currently building ERP solutions
              with Odoo. I care about clean, scalable code and system designs
              that solve real business problems.
            </p>

            <a
              href="#contact"
              className="mt-8 group inline-flex items-center gap-2 text-primary font-medium text-lg hover:text-white transition-colors home-hero-cta ml-auto lg:ml-0"
            >
              Lets Talk
              <span className="material-icons-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-gray-500 hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="material-icons-outlined text-xl">expand_more</span>
        </a>
      </main>

      {/* Sections */}
      <div className="relative z-10 space-y-0 bg-background-dark">
        <section id="social" className="py-10 border-t border-white/5">
          <Social />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Home;
