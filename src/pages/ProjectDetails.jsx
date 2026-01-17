import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";

const Badge = ({ children, variant = "default" }) => {
  const styles =
    variant === "primary"
      ? "bg-primary/10 text-primary border-primary/20"
      : "bg-white/5 text-gray-300 border-white/10";

  return (
    <span
      className={`inline-block rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase ${styles}`}
    >
      {children}
    </span>
  );
};

const ProjectDetails = () => {
  const { id } = useParams();

  const fetchProjects = async () => {
    const res = await axios.get(
      `https://protfolio-backend-jet.vercel.app/projects/${id}`,
    );
    return res.data;
  };

  const {
    data: project = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: fetchProjects,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-dark text-red-400">
        Failed to load project details.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-body text-gray-200 selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </div>
            <span>Back to Portfolio</span>
          </Link>

          <div className="text-xl font-display font-bold text-white tracking-tight">
            Mahmudul<span className="text-primary">.</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12 lg:py-16 relative z-10">
        {/* Header Section */}
        <header className="mb-12 max-w-4xl">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="primary">{project.category}</Badge>
            {project.status && <Badge>{project.status}</Badge>}
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {project.title}
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-lg hover:bg-white hover:text-background-dark transition-all duration-300"
              >
                Live Demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                GitHub
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            )}
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image & Details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Hero Image */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Description Blocks */}
            <div className="grid gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-white">
                  Project Overview
                </h3>
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                  <p>{project.projectOverview}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-white">
                  Full Description
                </h3>
                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Tech Stack */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full" />
                Tech Stack
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-3">
                    Core Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{project.technology}</Badge>
                    <Badge>{project.language}</Badge>
                  </div>
                </div>

                {project.packagesUsed && (
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-3">
                      Packages & Libs
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(project.packagesUsed).map(
                        ([name, version]) => (
                          <div
                            key={name}
                            className="flex justify-between items-center text-sm py-2 border-b border-white/5 last:border-0"
                          >
                            <span className="text-gray-300">{name}</span>
                            <span className="text-gray-500 font-mono text-xs">
                              {version}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full" />
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.keyFeatures?.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-gray-300 leading-relaxed group"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
