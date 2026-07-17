"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the nav link for whichever section is centered in view
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile drawer on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
        )
        .fromTo(
          ".home-hero-stat",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.2",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="min-h-screen flex flex-col bg-background-dark font-body selection:bg-primary/30"
    >
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-background-dark/80 backdrop-blur-md py-3 shadow-lg border-white/5"
            : "bg-transparent py-5 border-transparent"
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
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="text-white focus:outline-none p-2"
            >
              <span className="material-icons-outlined text-2xl">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[70] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[78%] max-w-xs bg-background-light border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
            <span className="text-xl font-display font-bold text-white">
              Mahmudul<span className="text-primary">.</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-white p-2"
            >
              <span className="material-icons-outlined text-2xl">close</span>
            </button>
          </div>
          <div className="px-6 py-8 flex flex-col gap-2">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  transitionDelay: isOpen ? `${idx * 60}ms` : "0ms",
                }}
                className={`text-lg text-gray-300 hover:text-primary hover:pl-2 font-medium py-3 border-b border-white/5 transition-all duration-300 ${
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

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
              Hello<span className="text-primary">.</span>
            </h1>

            <div className="flex items-center gap-4 home-hero-subtitle">
              <div className="h-[1px] w-12 bg-primary/50" />
              <div className="text-xl md:text-2xl font-light text-primary-light">
                <TypingText text="I am Md Mahmudul Hasan" speed={80} />
              </div>
            </div>

            <p className="home-hero-subtitle text-lg text-gray-400 max-w-md leading-relaxed">
              Web Developer
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
