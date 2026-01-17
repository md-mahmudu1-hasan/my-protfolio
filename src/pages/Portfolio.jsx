import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function PortfolioSection() {
  const rootRef = useRef(null);

  const fetchProjects = async () => {
    const res = await axios.get(
      "https://protfolio-backend-jet.vercel.app/projects",
    );
    return res.data;
  };

  const {
    data: projects = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  useEffect(() => {
    if (!projects.length) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        },
      );

      // Card Animation
      gsap.fromTo(
        ".portfolio-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "all", // Clear GSAP inline styles after animation to allow hover effects
          scrollTrigger: {
            trigger: ".portfolio-grid", // Trigger on grid container
            start: "top 80%",
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, [projects, currentPage]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center font-display text-red-400">
        Failed to load projects
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="bg-background-light dark:bg-background-dark font-display relative overflow-hidden"
    >
      <section className="w-full py-24 lg:py-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          {/* HEADER */}
          <div className="portfolio-header text-center mb-20 relative">
            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4">
              My Work
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight relative inline-block">
              Recent Projects
              {/* Decorative line */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </h1>
          </div>

          {/* GRID */}
          <div className="portfolio-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {currentProjects.map((project) => (
              <article
                key={project._id || project.id}
                className="portfolio-card group relative flex flex-col rounded-3xl overflow-hidden bg-background-dark border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(212,187,164,0.25)]"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div className="absolute inset-0 bg-background-dark/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="backdrop-blur-md bg-black/40 border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  {/* Links Overlay - Slide up on hover */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                    <Link
                      to={`/${project._id}`}
                      className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-background-dark font-bold hover:bg-primary transition-colors"
                    >
                      View Project
                    </Link>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-white text-white font-bold hover:bg-white/10"
                      >
                        Live Demo
                        <span className="material-icons-outlined text-sm">
                          open_in_new
                        </span>
                      </a>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-grow p-8 bg-gradient-to-b from-white/5 to-transparent">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6 line-clamp-2">
                    {project.shortDescription || project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="h-px w-full bg-white/10 mb-5" />
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs font-semibold text-primary/80 uppercase tracking-widest py-1">
                        Tech:
                      </span>
                      <span className="text-xs text-gray-300 py-1 bg-white/5 px-3 rounded-md">
                        {project.language}
                      </span>
                      <span className="text-xs text-gray-300 py-1 bg-white/5 px-3 rounded-md">
                        {project.technology}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-20 gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    currentPage === idx + 1
                      ? "bg-primary text-background-dark shadow-glow scale-110"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {idx + 1}
                  {currentPage === idx + 1 && (
                    <span className="absolute inset-0 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-background-dark animate-pulse-slow" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
