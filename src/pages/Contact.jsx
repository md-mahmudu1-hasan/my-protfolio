import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

function Contact() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
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
      );
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col pt-10">
      <main
        ref={mainRef}
        className="flex-grow flex items-center justify-center p-4 sm:p-8"
      >
        <div className="w-full max-w-6xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-8 md:p-12 lg:p-16 relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="text-center mb-16 relative z-10">
            <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">
              Contact Info
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get in Touch
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10">
            {/* Info Side */}
            <div className="space-y-8">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-full min-h-[300px] border border-white/10 group">
                <img
                  alt="Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
              <div className="mb-8 space-y-2">
                <a
                  href="tel:+8801522111746"
                  className="block text-xl text-gray-300 hover:text-primary transition-colors"
                >
                  +880 152 211 1746
                </a>
                <a
                  href="mailto:mdmahmudulhasan0008@gmail.com"
                  className="block text-xl text-gray-300 hover:text-primary transition-colors"
                >
                  mdmahmudulhasan0008@gmail.com
                </a>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all outline-none"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-400"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all outline-none"
                    placeholder="Project Subject"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
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
