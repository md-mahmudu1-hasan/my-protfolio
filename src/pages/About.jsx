import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function About() {
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
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark text-gray-200 py-20 px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
            Biography
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-3 text-white">
            Who am I?
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="about-image-container relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md group">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-2xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-300" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl -translate-x-4 -translate-y-4 transition-transform group-hover:-translate-x-6 group-hover:-translate-y-6 duration-300" />
              <img
                src="https://i.ibb.co.com/jvZ6BMMw/cropped-circle-image.png"
                alt="Md Mahmudul Hasan"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-primary" />
                <h3 className="text-xl font-semibold text-primary">About Me</h3>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight">
                Md Mahmudul Hasan
                <br />
                <span className="text-base font-body font-normal text-gray-400">
                  Professional MERN Stack Developer
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a student of CSE at Rangpur Polytechnic Institute,
                Bangladesh. I specialize in{" "}
                <strong className="text-white">MERN Stack Development</strong>.
                My approach is practical—I prefer learning by building. I focus
                on creating scalable, efficient, and user-friendly web
                applications.
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
                  className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors"
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

            <div className="pt-4">
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
      </div>
    </section>
  );
}

export default About;
