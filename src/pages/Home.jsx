import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Contact from "./Contact";
import Social from "./Social";
import PortfolioSection from "./Portfolio";

function TypingText({ text, speed = 120, pause = 1200 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    function type() {
      if (cancelled) return;
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index += 1;
        setTimeout(type, speed);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          index = 0;
          setDisplayed("");
          type();
        }, pause);
      }
    }

    type();

    return () => {
      cancelled = true;
    };
  }, [text, speed, pause]);

  return <>{displayed}</>;
}

function Home() {
  const rootRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".home-hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      )
        .fromTo(
          ".home-hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ".home-hero-cta",
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.3",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const links = [
    { label: "Social", href: "#social" },
    { label: "About me", href: "#about" },
    { label: "Service", href: "#services" },
    { label: "Projects", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      ref={rootRef}
      className="min-h-screen flex flex-col bg-background-dark font-body selection:bg-primary/30"
    >
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
          scrolled
            ? "bg-background-dark/80 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-display font-bold text-white tracking-tight"
          >
            Mahmudul<span className="text-primary">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              <span className="material-icons-outlined text-2xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background-dark/95 backdrop-blur-xl border-t border-white/10 absolute w-full">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-lg text-gray-300 hover:text-white font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-grow min-h-screen pt-20 grid grid-cols-1 lg:grid-cols-12 gap-0 relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] opacity-40 animate-pulse-slow" />
        </div>

        {/* Text Column */}
        <div className="lg:col-span-4 flex flex-col justify-center p-8 md:p-16 lg:pl-20 z-10 order-2 lg:order-1">
          <div className="space-y-6">
            <h1 className="home-hero-title text-6xl md:text-8xl font-display font-bold text-white leading-none tracking-tighter">
              Hello<span className="text-primary">.</span>
            </h1>

            <div className="flex items-center gap-4 home-hero-subtitle">
              <div className="h-[1px] w-12 bg-primary/50" />
              <div className="text-xl md:text-2xl font-light text-primary-light">
                <TypingText text="I am Md Mahmudul Hasan" speed={80} />
              </div>
            </div>

            <p className="home-hero-subtitle text-lg text-gray-400 max-w-md leading-relaxed">
              MERN Stack Developer
            </p>

            <div className="home-hero-cta pt-6">
              <a
                href="/MdMahmudulHasanCV.pdf"
                download="MdMahmudulHasanCV.pdf"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-background-dark font-bold rounded-full overflow-hidden transition-all hover:pr-10 hover:shadow-[0_0_20px_rgba(212,187,164,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="material-icons-outlined relative z-10 transition-transform group-hover:rotate-180">
                  download
                </span>
                <span className="relative z-10">Download CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-4 relative z-10 flex items-end justify-center bg-gradient-to-t from-background-dark via-background-light/50 to-transparent order-1 lg:order-2 h-[50vh] lg:h-auto">
          <div className="relative w-full h-full max-w-md mx-auto flex items-end">
            {/* Glow effect behind image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-t from-primary/30 to-transparent blur-3xl opacity-60" />

            <img
              src="https://i.ibb.co.com/nNLcpWM5/aiease-1760716831413.png"
              alt="Md Mahmudul Hasan"
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl mask-image-b"
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
          <div className="glass p-8 rounded-2xl md:bg-transparent md:p-0 md:glass-none border-none">
            <p className="text-gray-300 leading-relaxed text-lg font-light home-hero-subtitle">
              I am a{" "}
              <span className="text-white font-medium">
                MERN Stack Developer
              </span>
              . My specialty lies in building full-stack scalable web
              applications. I focus on writing clean, optimized code and
              designing system architectures that align with the company's
              technical goals.
            </p>

            <button className="mt-8 group inline-flex items-center gap-2 text-primary font-medium text-lg hover:text-white transition-colors home-hero-cta ml-auto lg:ml-0">
              <a href="#contact">Lets Talk</a>
              <span className="material-icons-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </main>

      <footer className="hidden">
        {/* Hiding original footer to replace with better section flow, or keep empty if handled by sections */}
      </footer>

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
