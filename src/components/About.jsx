"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const STATS = [
  { value: "2+", label: "Years of Coding" },
  { value: "2", label: "Internships" },
  { value: "Full Stack", label: "+ Odoo/ERP" },
];

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-header",
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
        ".about-image-container",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".about-content > *",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );

      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-stats-row",
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
      className="bg-background-light dark:bg-background-dark text-gray-200 py-16 sm:py-20 lg:py-24 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Biography"
          title="Who am I?"
          className="about-header mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="about-image-container relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md group">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-300" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl -translate-x-4 -translate-y-4 transition-transform group-hover:-translate-x-6 group-hover:-translate-y-6 duration-300" />
              <Image
                src="https://i.ibb.co.com/jvZ6BMMw/cropped-circle-image.png"
                alt="Md Mahmudul Hasan"
                width={600}
                height={600}
                sizes="(min-width: 1024px) 448px, 100vw"
                style={{ width: "100%", height: "auto" }}
                className="relative rounded-2xl shadow-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Availability badge */}
              <div className="glass absolute -bottom-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-4 lg:translate-x-0 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-card">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold text-white whitespace-nowrap">
                  Available for better opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-primary" />
                <h3 className="text-xl font-semibold text-primary">About Me</h3>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight text-balance">
                Md Mahmudul Hasan
                <br />
                <span className="text-base font-body font-normal text-gray-400">
                  Software Engineer Intern · Web Developer
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
              I am a student of CSE at Rangpur Polytechnic Institute, Bangladesh.
                I'm currently a{" "}
                <strong className="text-white">
                  Software Engineer Intern at CPABooks
                </strong>
                , building ERP solutions with Python and Odoo in a remote
                team. Before that, I worked as a{" "}
                <strong className="text-white">
                  Frontend Developer Intern at Risetogether
                </strong>
                , building production UI with Next.js and TypeScript. I'm
                also a CSE student at Rangpur Polytechnic Institute,
                Bangladesh — I like solving real business problems with
                clean, scalable code, whether that's a full-stack web app or
                an Odoo module.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Md Mahmudul Hasan" },
                { label: "Email", value: "mdmahmudulhasan0008@gmail.com" },
                { label: "Address", value: "Rangpur, Bangladesh" },
                { label: "Phone", value: "+8801522111746" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 hover:border-primary/20 transition-colors"
                >
                  <p className="text-xs font-bold text-primary tracking-wider uppercase mb-1">
                    {item.label}
                  </p>
                  <p className="font-medium text-white break-words">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="/MdMahmudulHasanCV.pdf"
                download="MdMahmudulHasanCV.pdf"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group"
              >
                <div className="h-10 w-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary group-hover:border-transparent transition-all">
                  <span className="material-icons-outlined text-sm group-hover:text-background-dark">
                    download
                  </span>
                </div>
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick stats bento row */}
        <div className="about-stats-row grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-14 sm:mt-20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="about-stat relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 text-center hover:border-primary/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              <p className="relative text-4xl font-display font-bold text-primary">
                {stat.value}
              </p>
              <p className="relative mt-2 text-sm uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
