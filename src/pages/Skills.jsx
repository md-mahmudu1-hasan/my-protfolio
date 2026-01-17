import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
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
      { name: "Next.js",
         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      {
        name: "JavaScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
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
        name: "Figma",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      },
    ],
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Section Title Animation
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

      // Category Groups Animation
      skillCategories.forEach((_, index) => {
        gsap.fromTo(
          `.skill-category-${index}`,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `.skill-category-${index}`,
              start: "top 85%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="skills-header text-center mb-20">
          <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            My Tech Stack
          </h2>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`skill-category-${idx}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-white/10 flex-grow max-w-[50px] md:max-w-[100px]" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-200 uppercase tracking-widest">
                  {category.title}
                </h3>
                <div className="h-px bg-white/10 flex-grow" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/10 hover:border-primary/20 hover:-translate-y-1"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    <div className="h-12 w-12 md:h-14 md:w-14 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>

                    <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
