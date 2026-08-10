import "./globals.css";
import Providers from "./providers";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";

export const metadataBase = new URL("https://mdmahmudulhasan.me");

export const metadata = {
  title: "Md Mahmudul Hasan | Full Stack Web Developer | MERN & Odoo ERP",
  description:
    "Md Mahmudul Hasan is a Bangladeshi full stack web developer and software engineer intern. Explore his MERN, Next.js, Tailwind CSS, and Odoo ERP portfolio projects, services, and contact details.",
  keywords: [
    "Md Mahmudul Hasan",
    "Bangladeshi web developer",
    "MERN stack developer",
    "Next.js portfolio",
    "Odoo ERP developer",
    "software engineer intern",
    "Tailwind CSS",
    "portfolio website",
    "full stack developer Bangladesh",
    "web developer resume",
  ],
  authors: [{ name: "Md Mahmudul Hasan" }],
  alternates: {
    canonical: "https://mdmahmudulhasan.me",
  },
  robots: {
    index: true,
    follow: true,
    "googlebot": {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "https://lh3.googleusercontent.com/d/1Xb6XD--y6UmGc34p34VROHy2NLg0p6Vh",
  },
  openGraph: {
    title: "Md Mahmudul Hasan | Full Stack Web Developer",
    description:
      "Bangladeshi full stack web developer building MERN, Next.js, Tailwind CSS, and Odoo ERP applications. View portfolio projects, experience, and contact info.",
    url: "https://mdmahmudulhasan.me",
    siteName: "Md Mahmudul Hasan Portfolio",
    type: "website",
    images: [
      {
        url: "https://mdmahmudulhasan.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Mahmudul Hasan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Mahmudul Hasan | Full Stack Web Developer",
    description:
      "Bangladeshi full stack web developer building MERN, Next.js, Tailwind CSS, and Odoo ERP applications.",
    creator: "@mdmahmudulhasan",
    images: ["https://mdmahmudulhasan.me/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Md Mahmudul Hasan",
              url: "https://mdmahmudulhasan.me",
              sameAs: [
                "https://www.linkedin.com/in/md-mahmudul-hasan-",
                "https://github.com/mdmahmudulhasan",
              ],
              jobTitle: "Full Stack Web Developer",
              description:
                "Bangladeshi full stack web developer and software engineer intern specializing in MERN, Next.js, Tailwind CSS, and Odoo ERP solutions.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rangpur",
                addressCountry: "Bangladesh",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-[#e0e0e0]">
        <ScrollProgress />
        <Providers>{children}</Providers>
        <BackToTop />
      </body>
    </html>
  );
}
