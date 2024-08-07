import Footer from '@/components/footer';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import ThemeContextProvider from '@/context/theme-context';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://hamidul-islam.vercel.app'),
  alternates: {
    canonical: 'https://hamidul-islam.vercel.app',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: '/Hamidul-Islam.jpg',
  },
  title: 'Hamid | Software Developer Portfolio',
  description:
    "Explore Hamid's professional journey as a skilled Software developer with 5 years of experience. Discover projects, skills, and expertise.",
  keywords:
    'Hamid, Hamidul Islam, Hamidul-Islam, md Hamid, hamid vercel, hamid-vercel, portfolio, Software developer, web developer, JavaScript, React, Nextjs, GraphQL, ExpressJs, Node.js, MongoDB, SQL, HTML, CSS, projects, experience',
  author: 'Hamid',
  robots: 'index, follow',
  og: {
    title: 'Hamid | Software Developer Portfolio',
    type: 'website',
    url: 'https://hamidul-islam.vercel.app',
    image: '/Hamidul-Islam.jpg',
    description:
      "Explore Hamid's professional journey as a skilled Software developer with 5 years of experience. Discover projects, skills, and expertise.",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@hamid-ul-islam',
    title: 'Hamid | Software Developer Portfolio',
    description:
      "Explore Hamid's professional journey as a skilled Software developer with 5 years of experience. Discover projects, skills, and expertise.",
    image: '/Hamidul-Islam.jpg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1PKNR02QVE"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1PKNR02QVE')`}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* grid */}
        <div className="absolute top-0 -z-10 h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center"></div>
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none h-[50rem] w-full inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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
