import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = {
  Frontend: [
    {
      name: "HTML5",
      level: 95,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      level: 90,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      level: 88,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      level: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      level: 78,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      level: 92,
      logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
  ],

  Backend: [
    {
      name: "Node.js",
      level: 30,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB Atlas",
      level: 82,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      level: 80,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ],

  Tools: [
    {
      name: "Git",
      level: 85,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      level: 30,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],
};

export default function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".progress-bar").forEach((bar) => {
      gsap.to(bar, {
        width: bar.dataset.level + "%",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bar,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section className="min-h-screen px-6 py-20 bg-background-light font-display text-primary">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <div className="text-center">
          <h1 className="inline-block text-lg font-semibold tracking-widest border-2 border-primary dark:border-gray-500 px-8 py-3">
            SKILLS
          </h1>
        </div>

        {/* Categories */}
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h2 className="mb-6 text-sm font-bold tracking-[0.3em] text-center">
              {category}
              <span className="block mx-auto mt-2 h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </h2>

            <div className="space-y-5">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/10 dark:bg-gray-900/40 backdrop-blur border border-white/10 dark:border-gray-700/40 rounded-xl p-4"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="h-7 w-7 object-contain"
                    />

                    <span className="text-sm font-semibold">
                      {skill.name}
                    </span>

                    <span className="ml-auto text-xs font-semibold text-cyan-500">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 bg-gray-200/60 dark:bg-gray-700/60 rounded-full overflow-hidden">
                    <div
                      className="progress-bar h-full w-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      data-level={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
