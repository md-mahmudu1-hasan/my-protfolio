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
        ".about-image",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-white antialiased min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb  -10">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Biography
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-100">
            Who am I?
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-10">
          <div className="about-image relative flex justify-center lg:justify-end">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[radial-gradient(#4A5B5D_1px,transparent_1px)] [background-size:8px_8px] opacity-50 dark:opacity-100" />
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-teal-500/10 dark:to-teal-500/20 rounded" />
              <img
                src="https://i.ibb.co.com/jvZ6BMMw/cropped-circle-image.png"
                alt="A professional black and white portrait of James Barnes"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="about-text flex flex-col">
            <div className="flex items-center mb-6">
              <span className="w-px h-10 bg-primary mr-4" />
              <p className="text-lg font-semibold text-primary">About Me</p>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-100">
              Md Mahmudul Hasan&apos;s Details
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I am a MERN Focused Full Stack Developer who prefer learing first . Because I am not an AI.I am that one who used that.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="flex items-center bg-gray-200/10 dark:bg-gray-800/50 p-4 rounded-lg">
                <span className="w-1.5 h-full bg-primary rounded-full mr-4" />
                <div>
                  <p className="text-xs font-medium text-gray-400">Name</p>
                  <p className="font-semibold text-gray-100">Md Mahmudul Hasan</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-200/10 dark:bg-gray-800/50 py-4 rounded-lg">
                <span className="w-1 h-full bg-primary rounded-full mr-4" />
                <div>
                  <p className="text-xs font-medium text-gray-400">Email</p>
                  <p className="font-semibold text-xs text-gray-100">
                    mdmahmudulhasan0008@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-gray-200/10 dark:bg-gray-800/50 p-4 rounded-lg">
                <span className="w-1.5 h-full bg-primary rounded-full mr-4" />
                <div>
                  <p className="text-xs font-medium text-gray-400">Address</p>
                  <p className="font-semibold text-gray-100">Rangpur,Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center bg-gray-200/10 dark:bg-gray-800/50 p-4 rounded-lg">
                <span className="w-1.5 h-full bg-primary rounded-full mr-4" />
                <div>
                  <p className="text-xs font-medium text-gray-400">Phone</p>
                  <p className="font-semibold text-gray-100">+8801522111746</p>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <button className="inline-flex items-center justify-center bg-primary text-gray-900 font-semibold px-6 py-3 rounded-lg hover:brightness-105 transition-all duration-300 shadow-md">
                <span className="material-icons-outlined mr-2 text-2xl">
                  download
                </span>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
