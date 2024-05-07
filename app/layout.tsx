import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://hamidul-islam.vercel.app"),
  alternates: {
    canonical: "https://hamidul-islam.vercel.app",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    images: "/hamid-square.jpg",
  },
  title: "Hamid | Full-Stack Developer Portfolio",
  description:
    "Explore Hamid's professional journey as a skilled full-stack developer with 5 years of experience. Discover projects, skills, and expertise.",
  keywords:
    "Hamid, portfolio, full-stack developer, web developer, JavaScript, React, Node.js, MongoDB, SQL, HTML, CSS, projects, experience",
  author: "Hamid",
  robots: "index, follow",
  og: {
    title: "Hamid | Full-Stack Developer Portfolio",
    type: "website",
    url: "https://hamidul-islam.vercel.app",
    image: "/hamid-square.jpg",
    description:
      "Explore Hamid's professional journey as a skilled full-stack developer with 5 years of experience. Discover projects, skills, and expertise.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@hamid-ul-islam",
    title: "Hamid | Full-Stack Developer Portfolio",
    description:
      "Explore Hamid's professional journey as a skilled full-stack developer with 5 years of experience. Discover projects, skills, and expertise.",
    image: "/hamid-square.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
