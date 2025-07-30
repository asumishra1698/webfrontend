import React from "react";
import Layout from "../../components/layout";
import BannerSlider from "../../components/bannerSlider";
import { useDocumentMeta } from "../../components/useDocumentMeta";

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
    title: "About Us | ReactWeb",
    description: "About ReactWeb services and solutions.",
    canonicalUrl: "https://gonardweb.com/about-us",
  });

  return (
    <Layout>
      <BannerSlider banners={banners} />      
    </Layout>
  );
};

export default About;