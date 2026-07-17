"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./ui/SectionHeading";

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

function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-header",
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

      gsap.fromTo(
        ".services-cta",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-cta",
            start: "top 90%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="What I Do"
          className="services-header mb-16"
        />

        <div className="grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i, index) => (
            <div
              key={index}
              className="service-card group relative p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-card overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-6xl font-bold text-white/5 absolute -top-4 -right-4 group-hover:text-white/10 transition-colors">
                  0{index + 1}
                </span>

                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 ring-1 ring-primary/20 flex items-center justify-center mb-5 sm:mb-6 text-primary group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                  <span className="material-icons-outlined text-2xl sm:text-3xl">
                    {i.icon || "star"}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 sm:mb-3 group-hover:text-primary transition-colors">
                  {i.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bento strip */}
        <div className="services-cta mt-8 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-white/5 to-transparent p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold text-white">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mt-2">
              Let's build something great together.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            Start a Conversation
            <span className="material-icons-outlined text-lg">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
