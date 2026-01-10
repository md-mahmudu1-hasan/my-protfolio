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
import emailjs from '@emailjs/browser';
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
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-image",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".contact-form",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
          },
        }
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
        }
      );
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col">
      <main
        ref={mainRef}
        className="flex-grow flex items-center justify-center p-4 sm:p-8"
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-2">
              CONTACT INFO
            </p>
            <h1 className="text-5xl font-bold text-gray-100">Get in Touch</h1>
            <div className="inline-block w-0.5 h-16 bg-primary mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="contact-image flex justify-center relative">
              <div className="relative w-[350px] h-[450px] sm:w-[400px] sm:h-[514px]">
                <div className="absolute top-[-20px] left-[-20px] w-20 h-20 bg-[radial-gradient(circle,rgba(221,203,175,0.2)_1.5px,transparent_1.5px)] bg-[length:10px_10px]" />
                <div className="absolute inset-0 border-2 border-white/20 dark:border-white/10 rounded-lg transform -translate-x-3 -translate-y-3" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-lg p-3">
                  <img
                    alt="Black and white portrait of a handsome man in a suit"
                    className="w-full h-full object-cover rounded-md"
                    src="https://i.ibb.co.com/sXgPnS5/cropped-circle-image-1.png"
                  />
                </div>
                <div className="absolute bottom-[-15px] right-[-15px] w-12 h-12 rounded-full border border-white/20 dark:border-white/20" />
              </div>
            </div>

            <div className="contact-form">
              <div className="mb-8">
                <p className="text-gray-400">Massage</p>
                <h2 className="text-2xl font-semibold text-gray-100 mt-1">
                  Write Me Something
                </h2>
                <p className="text-sm text-gray-300 mt-4">
                  Call Me:{" "}
                  <span className="font-medium text-gray-200">
                    +8801522111746
                  </span>
                </p>
                <p className="text-sm text-gray-300 mt-1">
                  E-mail:{" "}
                  <span className="font-medium text-gray-200">
                    mdmahmudulhasan0008@gmail.com
                  </span>
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Example Text
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Example Text"
                    className="w-full bg-gray-200 dark:bg-gray-800 border-transparent focus:ring-primary focus:border-primary rounded placeholder-gray-500 dark:placeholder-gray-400 text-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-primary text-gray-800 font-semibold rounded hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Send Massage"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-primary/90 dark:bg-primary-dark py-8">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
            <p className="text-sm text-gray-100">
              &copy; {new Date().getFullYear()} All Rights Reserved | Md Mahmudul Hasan
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg text-gray-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
