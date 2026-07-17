/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co.com" },
      { protocol: "https", hostname: "cdn.iconscout.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "www.vectorlogo.zone" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "img.icons8.com" },
      { protocol: "https", hostname: "git-scm.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
