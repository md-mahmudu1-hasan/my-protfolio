"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import { Allprojects } from "../data/projects";

const CATEGORIES = ["All", ...new Set(Allprojects.map((p) => p.category))];
const PROJECTS_PER_PAGE = 5;

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? Allprojects
        : Allprojects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const indexOfLast = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirst = indexOfLast - PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);

  const [featured, ...rest] = currentProjects;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display relative overflow-hidden">
      <section className="w-full py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="My Work"
            title="Recent Projects"
            className="portfolio-header mb-12"
          />

          {/* Category filter chips */}
          <div className="no-scrollbar -mx-6 mb-12 sm:mb-16 flex items-center gap-3 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`chip shrink-0 ${activeCategory === category ? "chip-active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-400">
              No projects found in this category.
            </p>
          ) : (
            <div className="space-y-10 lg:space-y-14">
              {/* FEATURED CARD */}
              {featured && (
                <article className="portfolio-card group relative flex flex-col lg:flex-row rounded-3xl overflow-hidden bg-background-dark border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-lg">
                  <div className="relative w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="backdrop-blur-md bg-black/40 border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center flex-1 p-8 md:p-12 bg-gradient-to-b from-white/5 to-transparent">
                    <span className="text-xs font-semibold text-primary/80 uppercase tracking-widest mb-3">
                      {featured.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors mb-4">
                      {featured.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
                      {featured.shortDescription || featured.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className="text-xs text-gray-300 py-1.5 bg-white/5 px-3 rounded-md">
                        {featured.language}
                      </span>
                      <span className="text-xs text-gray-300 py-1.5 bg-white/5 px-3 rounded-md">
                        {featured.technology}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={`/${featured._id}`}
                        className="btn-primary"
                      >
                        View Project
                      </Link>
                      {featured.liveDemo && (
                        <a
                          href={featured.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          Live Demo
                          <span className="material-icons-outlined text-sm">
                            open_in_new
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )}

              {/* GRID */}
              {rest.length > 0 && (
                <div className="portfolio-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                  {rest.map((project) => (
                    <article
                      key={project._id || project.id}
                      className="portfolio-card group relative flex flex-col rounded-3xl overflow-hidden bg-background-dark border border-white/5 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_50px_-12px_rgba(212,187,164,0.25)]"
                    >
                      {/* IMAGE CONTAINER */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <div className="absolute inset-0 bg-background-dark/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
                            href={`/${project._id}`}
                            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-background-dark font-bold hover:bg-primary"
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
              )}
            </div>
          )}

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
