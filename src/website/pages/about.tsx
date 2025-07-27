import React, { useEffect } from "react";
import Header from "../../reuseable/header";
import Footer from "../../reuseable/footer";
import BannerSlider from "../../reuseable/bannerSlider";
import { useDocumentMeta } from "../../reuseable/useDocumentMeta";

type Banner = {
  title: string;
  subtitle: string;
  img: string;
  cta1: { text: string; link: string };
  cta2: { text: string; link: string };
};

const banners: Banner[] = [
  {
    title: "About Us",
    subtitle:
      "Evaluate unified solutions for Lead Management (LMS) and Human Resource Management (HRM). Schedule your free LMS demo today!",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    cta1: { text: "Discover More", link: "#" },
    cta2: { text: "Contact Us", link: "#" },
  },
  {
    title: "About Us",
    subtitle:
      "Evaluate unified solutions for Lead Management (LMS) and Human Resource Management (HRM). Schedule your free LMS demo today!",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    cta1: { text: "Discover More", link: "#" },
    cta2: { text: "Contact Us", link: "#" },
  },
];

const About: React.FC = () => {
  useDocumentMeta({
    title: "About Us | Gonard Web",
    description: "About Gonard Web services and solutions.",
    canonicalUrl: "https://gonardweb.com/about-us",
  });

  return (
    <div className="font-sans bg-gray-50 text-gray-800 overflow-x-hidden min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BannerSlider banners={banners} />
      </main>
      <Footer />
    </div>
  );
};

export default About;
