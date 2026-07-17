"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SectionHeading from "./ui/SectionHeading";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/md-mahmudul-hasan-85ba92366",
  },
  { icon: FaGithub, url: "https://github.com/md-mahmudu1-hasan" },
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/md.mahmudul.hasan.694602",
  },
  { icon: FaTwitter, url: "https://x.com/MDMahmudul93870" },
  { icon: FaYoutube, url: "https://www.youtube.com/@CodeFairbyMahmudul" },
];

function FloatingField({ as = "input", label, ...props }) {
  const Tag = as;
  return (
    <div className="relative">
      <Tag
        placeholder=" "
        className={`peer w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent transition-all outline-none ${
          as === "textarea" ? "resize-none" : ""
        }`}
        {...props}
      />
      <label
        htmlFor={props.id}
        className="absolute left-4 top-4 text-gray-400 text-base transition-all duration-200 pointer-events-none peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mainRef = useRef(null);
  const form = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 70%",
          },
        },
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_ru1dlxa", "template_nuhqa8r", form.current, {
        publicKey: "E4JIp-bvc5Qz9nlED",
      })
      .then(
        () => {
          toast.success("Message sent successfully");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message");
        },
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col pt-10">
      <main
        ref={mainRef}
        className="flex-grow flex items-center justify-center p-4 sm:p-8"
      >
        <div className="w-full max-w-6xl mx-auto rounded-[26px] bg-gradient-to-br from-primary/30 via-white/10 to-transparent p-[1px] shadow-card">
          <div className="rounded-[25px] bg-background-dark/95 border border-white/10 p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <SectionHeading
              eyebrow="Contact Info"
              title="Get in Touch"
              className="mb-16 relative z-10"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch relative z-10">
              {/* Info Side */}
              <div className="space-y-8 h-full">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full min-h-[300px] border border-white/10 group">
                  <Image
                    alt="Portrait"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    src="https://i.ibb.co.com/sXgPnS5/cropped-circle-image-1.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Let's talk about your project
                    </h3>
                    <p className="text-gray-300 text-sm">
                      I'm currently available for freelance work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Form Side */}
              <div className="flex flex-col justify-center">
                <div className="mb-8 space-y-3">
                  <a
                    href="tel:+8801522111746"
                    className="flex items-center gap-3 text-base sm:text-lg lg:text-xl text-gray-300 hover:text-primary transition-colors min-w-0"
                  >
                    <span className="material-icons-outlined text-primary text-lg shrink-0">
                      call
                    </span>
                    <span className="break-all">+880 152 211 1746</span>
                  </a>
                  <a
                    href="mailto:mdmahmudulhasan0008@gmail.com"
                    className="flex items-center gap-3 text-base sm:text-lg lg:text-xl text-gray-300 hover:text-primary transition-colors min-w-0"
                  >
                    <span className="material-icons-outlined text-primary text-lg shrink-0">
                      mail
                    </span>
                    <span className="break-all">
                      mdmahmudulhasan0008@gmail.com
                    </span>
                  </a>
                </div>

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingField id="name" name="name" label="Name" required />
                    <FloatingField
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      required
                    />
                  </div>

                  <FloatingField id="subject" name="subject" label="Subject" />

                  <FloatingField
                    as="textarea"
                    id="message"
                    name="message"
                    label="Message"
                    rows={5}
                    required
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 mt-12 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Md Mahmudul Hasan. All Rights
            Reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, url }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary hover:text-background-dark text-gray-400 transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
