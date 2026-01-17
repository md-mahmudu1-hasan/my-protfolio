import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

function Social() {
  const socialLinks = [
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/md-mahmudul-hasan-85ba92366",
      title: "LinkedIn",
      bg: "bg-[#0077b5]",
    },
    {
      icon: FaGithub,
      url: "https://github.com/md-mahmudu1-hasan",
      title: "GitHub",
      bg: "bg-[#333]",
    },
    {
      icon: FaFacebookF,
      url: "https://www.facebook.com/md.mahmudul.hasan.694602",
      title: "Facebook",
      bg: "bg-[#1877f2]",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/MDMahmudul93870",
      title: "Twitter",
      bg: "bg-[#1da1f2]",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/8801522111746",
      title: "WhatsApp",
      bg: "bg-[#25d366]",
    },
  ];

  return (
    <div className="py-20 border-b border-white/5">
      <div className="text-center mb-10">
        <p className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
          Network
        </p>
        <h2 className="mt-2 text-3xl font-display font-bold text-white">
          Connect with Me
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 px-4">
        {socialLinks.map(({ icon: Icon, url, title, bg }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className={`group relative w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-transparent transition-all duration-300 hover:scale-110 overflow-hidden`}
          >
            <div
              className={`absolute inset-0 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <Icon className="h-6 w-6 text-gray-300 group-hover:text-white relative z-10 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Social;
