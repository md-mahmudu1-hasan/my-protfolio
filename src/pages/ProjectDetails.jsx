import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";

const Badge = ({ children }) => {
  return (
    <span className="inline-block rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm font-medium text-white">
      {children}
    </span>
  );
};
const ProjectDetails = () => {
  const { id } = useParams();

    const fetchProjects = async () => {
    const res = await axios.get(`https://protfolio-backend-jet.vercel.app/projects/${id}`);
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
    return <Loader></Loader>
  }

  if (isError) {
    return <div>Error...</div>;
  }

  console.log(project);
  
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition-colors"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back Home
          </Link>

          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-primary transition-colors"
          >
            Live Demo
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
                d="M13.5 6H21m0 0v7.5M21 6l-9 9"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6H7.875C6.839 6 6 6.84 6 7.875v8.25C6 17.16 6.84 18 7.875 18h8.25C17.16 18 18 17.16 18 16.125V13.5"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <section className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute left-6 right-6 bottom-6">
                  <p className="text-sm tracking-widest text-gray-300 mb-2">
                    {project.category}
                  </p>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {project.title}
                  </h1>
                  <p className="mt-3 text-gray-200 leading-relaxed max-w-2xl">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <Badge>{project.technology}</Badge>
                  <Badge>{project.language}</Badge>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h2 className="text-lg font-semibold text-white mb-2">
                      Overview
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {project.projectOverview}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h2 className="text-lg font-semibold text-white mb-2">
                      Description
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 ring-1 ring-primary/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.378-1.709a.75.75 0 00-1.06-1.06l-4.72 4.72-2.01-2.01a.75.75 0 10-1.06 1.06l2.54 2.54a.75.75 0 001.06 0l5.25-5.25z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4">
                Packages Used
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.entries(project.packagesUsed).map(([name, version]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <p className="text-xs text-gray-400 mt-1">{version}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;