import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Social from "./Social";

export function portfolioLoader() {
  return [
    {
      id: "habit-tracker",
      title: "Habit Tracker Web App",
      category: "MERN Stack Project",
      description:
        "Users can create, track, and manage daily habits. Add habits with category, reminder time, and optional image upload. Includes My Habits table with update, delete, and mark-complete options, plus public habits browsing with search and filters.",
      image:
        "https://i.ibb.co.com/23Mwq73D/Screenshot-2025-11-19-152629.png",
      liveDemo: "https://habit-tracker-009.netlify.app/", 
    },
    {
      id: "talent-trade",
      title: "Talent Trade – Skill Sharing Platform",
      category: "React & Firebase Project",
      description:
        "A modern skill-sharing platform where users can offer their expertise, learn new skills, and connect with others. Features include Firebase authentication, responsive UI, protected routes, profile tooltips, toast notifications, Swiper animations, AOS effects, and a clean design built with Tailwind & Material Tailwind.",
      liveDemo: "https://talent-trade.netlify.app/",
      image:
        "https://i.ibb.co.com/gZhQ3dnr/Screenshot-2025-11-18-183832.png",
    },
    {
      id: "app-store",
      title: "App Store App Store Platform",
      category: "React Project",
      description:
        "A modern app listing platform where users can browse apps with pagination, sort results, and filter using search. The platform allows users to explore apps efficiently with a clean UI, dynamic data handling, and smooth user experience.",
      image:
        "https://i.ibb.co.com/nsD13RqX/Screenshot-2025-12-06-135705.png",
      liveDemo: "https://web-apps-market.netlify.app/",
    },
    {
      id: "product-hub",
      title: "Product Hub – Product Management Web App",
      category: "Next.js Project",
      description:
        "Product Hub is a product-focused web application built with Next.js and Tailwind CSS. Users can add, view, and manage products with features like protected routes, client-side authentication, and a clean responsive UI. Products include title, descriptions, price, and optional image uploads, with table/grid view for easy management.",
      image:
        "https://i.ibb.co.com/yc3BhK8z/Screenshot-2025-12-06-135804.png",
      liveDemo: "https://product-hub-nu.vercel.app/",
    },
  ];
}

export function PortfolioSection({ projects }) {
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
        ".portfolio-project",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".portfolio-image",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".portfolio-text",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.2,
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
      className="bg-background-light dark:bg-background-dark font-display min-h-screen"
    >
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-2">
              PORTFOLIO
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Latest Projects
            </h1>
          </div>

          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 md:gap-4 border border-gray-400 dark:border-gray-500 rounded-full p-2">
              <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-600 dark:bg-gray-300 text-white dark:text-black">
                MERN Stack Development
              </button>
            </div>
          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`portfolio-project ${
                  index === 1 ? "order-1 md:order-2" : ""
                }`}
              >
                <div
                  className={`portfolio-image w-full h-auto ${
                    index === 1 ? "order-1 md:order-2" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div
                  className={`portfolio-text flex flex-col justify-center ${
                    index === 1 ? "order-2 md:order-1" : ""
                  }`}
                >
                  <p className="text-sm text-gray-400 mb-2">
                    {project.category}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <a target="_blank" href={project.liveDemo} className="font-medium text-gray-200 hover:text-white group flex items-center">
                    See More
                    <span className="material-icons-outlined ml-1 transform group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full bg-[#f3eada] dark:bg-[#b49a7c] py-8 md:py-12 mt-16 md:mt-24">
        {/* <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">3K</p>
              <p className="text-sm text-gray-700">Project Done</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">
                98+
              </p>
              <p className="text-sm text-gray-700">Happy Client</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">13</p>
              <p className="text-sm text-gray-700">Award Win</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gray-800">
                10+
              </p>
              <p className="text-sm text-gray-700">Years Experience</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default PortfolioSection; //make it more beautifully designed card and implement a see more button which is worked also .make it more designed but same color theme 