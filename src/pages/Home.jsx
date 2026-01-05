import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import Services from "./Services";
import { PortfolioSection, portfolioLoader } from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import Social from "./Social";

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
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      )
        .fromTo(
          ".home-hero-subtitle",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "<0.1"
        )
        .fromTo(
          ".home-hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "<0.1"
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
    <div ref={rootRef} className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-primary">
            Home
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-primary hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary focus:outline-none"
            >
              <span className="material-icons-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background-light dark:bg-background-dark border-t border-white/10">
            <div className="px-4 py-2 flex flex-col gap-4">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-primary hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)} // click korle menu close hobe
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
      <main className="flex-grow grid grid-cols-12 gap-0">
        <div className="col-span-12 lg:col-span-4 bg-background-light dark:bg-background-dark flex flex-col justify-between p-8 md:p-12">
          <div className="flex-grow flex flex-col justify-center py-12">
            <h1
              id="/"
              className="home-hero-title text-7xl md:text-8xl font-bold text-white"
            >
              Hello.
            </h1>
            <div className="flex items-center mt-6">
              <div className="w-16 h-0.5 bg-primary" />
              <p className="home-hero-subtitle ml-4 text-xl font-medium text-primary">
                <TypingText text="I am Md Mahmudul Hasan" />
              </p>
            </div>
            <p className="home-hero-subtitle mt-2 text-lg text-[#e0e0e0]">
              MERN Stack Developer
            </p>
            <a
              href="/MdMahmudulHasanCV.pdf"
              download="MdMahmudulHasanCV.pdf"
              className="home-hero-cta mt-10 bg-primary text-[#0b2e31] font-semibold py-3 px-6 rounded-lg w-fit flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <span className="material-icons-outlined text-xl">download</span>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-primary flex flex-col items-center justify-between pt-8 md:pt-12">
          <h2 className="text-2xl font-bold text-[#0b2e31] pt-10">Mahmudul</h2>
          <div className="w-full flex-grow flex items-end">
            <img
              src="https://i.ibb.co.com/nNLcpWM5/aiease-1760716831413.png"
              alt="Portrait of James Barnes, a professional graphic designer, smiling with his arms crossed."
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 bg-background-light dark:bg-background-dark flex flex-col justify-between p-8 md:p-12">
          <div className="flex-grow flex flex-col justify-center py-12">
            <p className="text-[#e0e0e0] leading-relaxed max-w-sm">
              I am a MERN Stack Developer. My specialty lies in building
              full-stack scalable web applications. I focus on writing clean,
              optimized code and designing system architectures that align with
              the company's technical goals.
            </p>
            <button className="mt-10 text-xl font-medium text-primary flex items-center space-x-3 group w-fit">
              <a href="#contact">Lets Talk</a>
              <span className="material-icons-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-6 px-8">
        <div className="max-w-7xl mx-auto">
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                className="h-6 object-contain filter grayscale opacity-70"
                alt={`Company logo ${i}`}
                src={
                  [
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAGOW46jcLHMitmfuphDPokNwZN4KlnTwxJXyonXFVtFDSW47yLiH7hZJ6UHXvwoOfj5IvuRXOv-sl_fuYHoHp-eLqtFoBBxHeAoNWiVlyE5gy3_IfQmEwIZ5SSPM_BrBA56S-N9jfp--qrGY3U3ssbo-r5AM0oulNID4MR8f72hjMbP_KEumfc9krEmxn4u6SvZsJNc70TzxOhZMRQLsJyjdyxphYN8wtf63Hx7H1lzzdIxlQZXYMy-yDujKMNKfO7Vl9AICy0zTrD",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBCrLqt78aBEkxAdDwPg03jpmouUB1wBBko5PeU9fRSsFFN38rGuUs9NstZc72cLmz7YHtYxI4qwa0fm__WMJ9PgfRW83ke214Q2mVUex0wt4-Za8ZMLGAOIWMxc9CI6Pn9GtI7BAYUkFT_K2pLfag0cJyQIkVHaNSW54YB-Yei1P3d2iiJ5GyakLiT7yt8YYbOeshYijpvdmqHXBvNYwH4_55NPBYTYHapVZlS3dRBGGrcq7zxiZJe4MZHywhNOCd1zS5Ajq0Jh8a7",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBryyxDsHucBvYSC5UIbUhXDH0zXJzQC2NXvz4iYIWkqMjjPjfhUVPNRmytNtAuEPP554bLXyeDPuv7bsFVKjSXRzRnKsxiGKcr3PDStNRU2RBiEGN30B4RxkUlRquhJEmJo1JD0SKBkk_SWCPrbeHjEJWOOouH7KAY-JbmLqvYfD616rb4Re8hDj7gXIuId_jnif6cNcBQ0d15U1eIgaUgpK4jbMkvFFCj3eJoK2PxoU1vcf4P7r8s-QtztWByzoH4Ff2lakU0XByD",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuCi4T3k5e_KA7hHVPrVvrFUTvCZiZvVECoHI0CJcRwLzs5DYflWSTXTYb3IqVBhpq8IdP37NhDBlFFCewHDr389-mHcw8GBaOoJdh-GAw12ewZdQTXQPCV0wuZzZ7nWuHFsX1PQsHfaLTk9o0fI2r5HXcZAevbCoZJrHt5HcH53vY7MB5rKfBGp-fSCeDNst96luVsvT3OIwLeEc8blZkNSmzCCSVluNfAGP6Hvb2JLQ0PjrSsBSSPicXz-hzcEQNQPXorEBD77_Hx0",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBn_-sRZlDpnMtItmKddNdvQ3AdVTfJoXAK5Jz8sQYD7TMuo7Ul_WJJgLLhwdRXQCrW2UBm9rqFz-WUjlt_hiCPqb3Z5Xc5yFKzW6-palGjHXpze1uzvQVoRuYaux9c4FytcvuYeUjbOR_rf5kj7wLIm2fV0c0EgzL4bPxpu6hxPv7-6Dt6TXjwGVSJqefib6IsQXNoWs7g9bzNVMUd3q6t_ZAgIxhT2sCVv3pMdaWjW3nG6t58cPeEBPnxZWaaaInnUPYbZQVO765i",
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDkjlc4SvP3CX0ULzXl3g50G0k2gER6hQDLJUru2-MPgFo1LsRQ_vHPoQ2HrQOLpkYRHWTT4zjrJha22XKrfxtAl1QeczbHz9G-ksek9isEo5mhNYrPd9ZMonM4sh-9zzVzNQM63v0-33v5-PVLeDgfBYCecf0Q6VVcZWREsQ3yQHcOqc1d8KjyPAIZON2ncf6NjynR6lf1Ix58b0VMksGX6ifBzMFm9p1I4T0ifNwFqZmVs6cpHzXqtVhxPi0QM2ZY-FU6zAHfAf8A",
                  ][i - 1]
                }
              />
            ))}
          </div> */}
        </div>
      </footer>

            <section id="social">
             <Social />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <PortfolioSection projects={portfolioLoader()} />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
