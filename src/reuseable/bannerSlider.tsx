import React from "react";
import Slider from "react-slick";

const banners = [
  {
    title: "Explore integrated LMS and HRM solution",
    subtitle:
      "Evaluate unified solutions for Lead Management (LMS) and Human Resource Management (HRM). Schedule your free LMS demo today!",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    cta1: { text: "Discover More", link: "#" },
    cta2: { text: "Contact Us", link: "#" },
  },
   {
    title: "Explore integrated LMS and HRM solution",
    subtitle:
      "Evaluate unified solutions for Lead Management (LMS) and Human Resource Management (HRM). Schedule your free LMS demo today!",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    cta1: { text: "Discover More", link: "#" },
    cta2: { text: "Contact Us", link: "#" },
  },
  // Add more slides as needed
];

const BannerSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
   <div className="w-full overflow-hidden">
  <Slider {...settings}>
        {banners.map((banner, idx) => (
          <div key={idx}>
            <div
              className="relative h-[400px] md:h-[500px] flex items-center justify-start"
              style={{
                backgroundImage: `url(${banner.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative z-10 max-w-2xl ml-8 md:ml-24 text-left">
                <div className="mb-3">
                  <span className="bg-white/30 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest">
                    EMPOWER YOUR BUSINESS
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {banner.title}
                </h1>
                <p className="text-white text-lg mb-8">{banner.subtitle}</p>
                <div className="flex gap-4">
                  <a
                    href={banner.cta1.link}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded transition"
                  >
                    {banner.cta1.text}
                  </a>
                  <a
                    href={banner.cta2.link}
                    className="bg-white text-blue-900 font-semibold px-6 py-3 rounded transition border border-white hover:bg-blue-50"
                  >
                    {banner.cta2.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;