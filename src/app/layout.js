import { Poppins } from "next/font/google";
import "./css/globals.css";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Metadata object for SEO and social media sharing
export const metadata = {
  metadataBase: new URL("https://www.yourwebsite.com"), // Define the base URL for resolving images and other relative URLs
  title: "Personal Portfolio",
  description:
    "A professional portfolio showcasing my work, skills, and experience.",
  openGraph: {
    title: "Personal Portfolio",
    description:
      "A professional portfolio showcasing my work, skills, and experience.",
    url: "https://www.yourwebsite.com", // Absolute URL
    images: "/assets/images/logostoonprodREC.ico", // Image path is relative, will resolve based on metadataBase
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Portfolio",
    description:
      "A professional portfolio showcasing my work, skills, and experience.",
    image: "/assets/images/logo.ico", // Image path is relative, will resolve based on metadataBase
    site: "https://www.yourwebsite.com", // Absolute URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta Tags for SEO */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/assets/images/logo.ico"
          type="image/x-icon"
        />

        {/* Global Styles */}
        {/* <link rel="stylesheet" href="/assets/css/style.css" /> */}

        {/* Open Graph and Twitter meta tags for social sharing */}
        <meta property="og:title" content="vCard - Personal Portfolio" />
        <meta
          property="og:description"
          content="A professional portfolio showcasing my work, skills, and experience."
        />
        <meta property="og:image" content="/assets/images/logo.ico" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="vCard - Personal Portfolio" />
        <meta
          name="twitter:description"
          content="A professional portfolio showcasing my work, skills, and experience."
        />
        <meta name="twitter:image" content="/assets/images/logo.ico" />
        <meta name="twitter:url" content="https://www.yourwebsite.com" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        /> */}
      </head>

      <body className={poppins.className}>
        {/* Main Content */}
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <article className="about active" data-page="about">
              {children}
            </article>
          </div>
        </main>
        {/* Footer Section */}
        <footer>
          <p>&copy; 2024 Stoon-Production. All Rights Reserved.</p>
          <p>
            Contact me at:{" "}
            <a href="mailto:dissojak@gmai.com">Dissojak@gmai.com</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
