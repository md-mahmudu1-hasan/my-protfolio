"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "ReactJS",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png",
      },
      {
        name: "HTML5",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png",
      },
      {
        name: "CSS3",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        name: "Odoo",
        logo: "https://cdn.simpleicons.org/odoo/714B67",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "NodeJS",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "ExpressJS",
        logo: "https://img.icons8.com/color/48/express-js.png",
      },
      {
        name: "MongoDB",
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      {
        name: "Git",
        logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitHub",
        logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      },
      {
        name: "VS Code",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      },
      {
        name: "PyCharm",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg",
      },
      {
        name: "Cursor",
        logo: "https://cdn.simpleicons.org/cursor/white",
      },
      {
        name: "Figma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
    ],
  },
];

const ALL_SKILLS = skillCategories.flatMap((c) => c.skills);

const isSvgLogo = (url) =>
  url.endsWith(".svg") || url.includes("simpleicons.org");

function SkillLogo({ skill, sizeClass = "h-12 w-12 md:h-14 md:w-14" }) {
  return (
    <div
      className={`${sizeClass} relative grayscale group-hover:grayscale-0 transition-all duration-300`}
    >
      <Image
        src={skill.logo}
        alt={skill.name}
        fill
        sizes="56px"
        unoptimized={isSvgLogo(skill.logo)}
        className="object-contain drop-shadow-lg"
      />
    </div>
  );
}

function Skills() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-tile",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark py-16 sm:py-20 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Expertise"
          title="My Tech Stack"
          className="skills-header mb-16"
        />
      </div>

      {/* Continuous logo marquee */}
      <div className="skills-marquee relative mb-12 sm:mb-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 sm:gap-16 py-2">
          {[...ALL_SKILLS, ...ALL_SKILLS].map((skill, idx) => (
            <div
              key={`${skill.name}-${idx}`}
              className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 opacity-90 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={skill.logo}
                alt={skill.name}
                fill
                sizes="44px"
                unoptimized={isSvgLogo(skill.logo)}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {skillCategories.map((category, idx) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(idx)}
              className={`chip ${activeTab === idx ? "chip-active" : ""}`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
          {skillCategories[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-tile group relative w-[calc(50%-0.625rem)] sm:w-40 lg:w-44 bg-white/5 border border-white/5 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <SkillLogo skill={skill} />

              <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
