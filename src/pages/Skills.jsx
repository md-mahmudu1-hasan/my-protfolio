import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const usingNow = [
  { label: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "JAVASCRIPT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "REACT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "MONGODB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "GIT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "EXPRESS JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { label: "TAILWIND CSS", src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }, // Tailwind CSS logo
  { label: "FIREBASE", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const learning = [
  { label: "NODEJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "NEXTJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { label: "PYTHON", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { label: "BOOTSTRAP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
  { label: "FIGMA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

const otherSkills = [
  { label: "VIDEO EDIT", src: "https://cdn-icons-png.flaticon.com/512/727/727245.png" },
  { label: "YOUTUBE", src: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png" },
];


function SkillsGrid({ title, items }) {
  return (
    <section>
      <h2 className="text-sm font-bold tracking-[0.2em] mb-8">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 justify-items-center">
        {items.map((item) => (
          <div
            key={item.label}
            className="skill-item flex flex-col items-center space-y-3 text-center w-24"
          >
            <img
              alt={item.label}
              className="h-16 w-16 object-contain"
              src={item.src}
            />
            <span className="text-xs font-medium tracking-wider text-gray-600 dark:text-gray-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const rootRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".skill-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="bg-background-light dark:bg-background-dark font-display text-primary dark:text-gray-300 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="inline-block text-lg font-semibold tracking-widest border-2 border-primary dark:border-gray-500 px-8 py-3">
            SKILLS
          </h1>
        </header>
        <main className="space-y-16">
          <SkillsGrid title="USING NOW:" items={usingNow} />
          <SkillsGrid title="LEARNING:" items={learning} />
          <SkillsGrid title="OTHER SKILLS:" items={otherSkills} />
        </main>
      </div>
    </div>
  );
}

export default Skills;
