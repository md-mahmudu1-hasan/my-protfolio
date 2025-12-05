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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    {
      id: 1,
      title: "WEB DEVELOPMENT (MERN)",
      description:
        "Full-stack web applications using MongoDB, Express.js, React, and Node.js, ensuring clean code, scalability, and performance.",
    },
    {
      id: 2,
      title: "BACKEND DEVELOPMENT",
      description:
        "Server-side development with Node.js, Express.js, and MongoDB, creating APIs, authentication, and database integration.",
    },
    {
      id: 3,
      title: "RESPONSIVE FRONTEND",
      description:
        "Frontend development with React.js and Tailwind CSS, making modern, responsive, and dynamic user interfaces.",
    },
    {
      id: 4,
      title: "FULL-STACK PROJECTS",
      description:
        "Building complete projects from frontend to backend, deploying them, and ensuring smooth functionality across platforms.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark py-16 sm:py-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            SERVICE
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            What I Do ?
          </h2>
        </div>
        <div className="mt-12 sm:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i, index) => (
            <div
              key={index}
              className="service-card bg-gray-200/10 dark:bg-gray-800/30 rounded-lg p-6 flex flex-col"
            >
              <span className="text-5xl font-bold text-primary">0{index}.</span>
              <h3 className="mt-4 text-xl font-semibold text-gray-100">
                {i.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300">{i.description}</p>
              <div className="mt-auto pt-6">
                <div className="w-12 h-1 bg-primary rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
