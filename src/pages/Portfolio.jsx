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
    const res = await axios.get("https://protfolio-backend-jet.vercel.app/projects");
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
      gsap.fromTo(
        ".portfolio-project",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [projects, currentPage]);

  if (isLoading) {
    return <Loader></Loader>
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400">
        Failed to load projects
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className="bg-background-light dark:bg-background-dark font-display"
    >
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          {/* HEADER */}
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest text-gray-400 mb-2">
              PORTFOLIO
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Latest Projects
            </h1>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {currentProjects.map((project) => (
              <article
                key={project._id || project.id}
                className="portfolio-project group relative overflow-hidden rounded-2xl
                border border-white/10 bg-white/5 backdrop-blur-sm
                transition-transform duration-200
                hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white ring-1 ring-white/20">
                    {project.category}
                  </span>
                </div>

                {/* CONTENT */}
                {/* CONTENT */}
                <div className="p-5 md:p-6 flex flex-col gap-4">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h2>

                  <p className="text-gray-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 px-2 py-1 bg-white/5 text-xs">
                        {project.technology}
                      </span>
                      <span className="rounded-full border border-white/10 px-2 py-1 bg-white/5 text-xs">
                        {project.language}
                      </span>
                    </div>

                    {/* See More Button */}
                    <Link
                      to={`/${project._id}`}
                      className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 font-semibold text-gray-900 hover:bg-primary transition-colors justify-center sm:justify-start"
                    >
                      See More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-3">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    currentPage === idx + 1
                      ? "bg-primary text-gray-900"
                      : "bg-white/5 text-gray-300 hover:bg-primary/80"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
