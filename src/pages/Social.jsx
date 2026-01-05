import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

function Social() {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/md-mahmudul-hasan-85ba92366",
      title: "LinkedIn",
      bg: "bg-gradient-to-br from-sky-500 to-sky-700",
      color: "text-white",
    },
    {
      icon: FaGithub,
      url: "https://github.com/md-mahmudu1-hasan",
      title: "GitHub",
      bg: "bg-gradient-to-br from-gray-700 to-gray-900",
      color: "text-white",
    },
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/md.mahmudul.hasan.694602",
      title: "Facebook",
      bg: "bg-gradient-to-br from-blue-600 to-blue-800",
      color: "text-white",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/MDMahmudul93870",
      title: "Twitter",
      bg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      color: "text-white",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/8801522111746",
      title: "WhatsApp",
      bg: "bg-gradient-to-br from-green-500 to-green-700",
      color: "text-white",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Connect with me
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-100">
            Let's Connect
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {socialLinks.map(({ icon: Icon, url, title, bg, color }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className={`w-12 h-12 flex items-center justify-center rounded-full ${bg} ${color} shadow-lg transition-transform duration-200 hover:scale-110`}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Social;
export { Social };
