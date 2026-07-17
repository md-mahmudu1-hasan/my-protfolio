import "./globals.css";
import Providers from "./providers";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";

export const metadata = {
  title: "MD Mahmudul Hasan Personal Portfolio",
  icons: {
    icon: "https://lh3.googleusercontent.com/d/1Xb6XD--y6UmGc34p34VROHy2NLg0p6Vh",
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
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display text-[#e0e0e0]">
        <ScrollProgress />
        <Providers>{children}</Providers>
        <BackToTop />
      </body>
    </html>
  );
}
