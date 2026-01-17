import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
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

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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

  const items = [
    {
      id: 1,
      title: "MERN Development",
      description:
        "Building scalable, full-stack web applications using MongoDB, Express.js, React, and Node.js. High-performance, secure, and maintainable code.",
      icon: "code",
    },
    {
      id: 2,
      title: "Backend Engineering",
      description:
        "Robust server-side architecture with Node.js & Express. Designing RESTful APIs, implementing proper authentication, and database optimization.",
      icon: "storage",
    },
    {
      id: 3,
      title: "Frontend Experience",
      description:
        "Crafting pixel-perfect, responsive user interfaces with React, Tailwind CSS, and Framer Motion for engaging user experiences.",
      icon: "web",
    },
    {
      id: 4,
      title: "Full-Stack Deployment",
      description:
        "End-to-end development life cycle management, from architecture planning to deployment on cloud platforms and CI/CD integration.",
      icon: "rocket_launch",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Services
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            What I Do
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i, index) => (
            <div
              key={index}
              className="service-card group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-6xl font-bold text-white/5 absolute -top-4 -right-4 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </span>

                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <span className="material-icons-outlined text-3xl">
                    {i.icon || "star"}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {i.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light">
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
