import React, { useState } from "react";
import {
  Swiper as SwiperTestimonial,
  SwiperSlide as SwiperSlideTestimonial,
} from "swiper/react";
import BannerSlider from "../../reuseable/bannerSlider";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../../reuseable/header";
import Footer from "../../reuseable/footer";
import { useDocumentMeta } from "../../reuseable/useDocumentMeta";

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
];

const services = [
  {
    title: "Website Design and Development",
    desc: "At Gonardweb, we specialize in crafting bespoke digital experiences that captivate audiences and drive results...",
    image: (
      <img
        src="/home/web-design.png"
        alt="Website Design and Development"
        className="w-16 h-16 object-contain bg-fuchsia-200 p-3 rounded-full mb-5"
      />
    ),
    link: "/services/web-design",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications for your business.",
    image: (
      <img
        src="/home/app-development.png"
        alt="Website Design and Development"
        className="w-16 h-16 object-contain bg-green-200 p-3 rounded-full mb-5"
      />
    ),
    link: "/services/mobile-app",
  },
  {
    title: "E-commerce & CMS",
    desc: "Beautiful and user-friendly interfaces.",
    image: (
      <img
        src="/home/online.png"
        alt="Website Design and Development"
        className="w-16 h-16 object-contain bg-gray-200 p-3 rounded-full mb-5"
      />
    ),
    link: "/services/ecommerce-cms",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Boost your visibility and ranking with our SEO expertise.",
    image: (
      <img
        src="/home/seo.png"
        alt="Website Design and Development"
        className="w-16 h-16 object-contain bg-red-200 p-3 rounded-full mb-5"
      />
    ),
    link: "/services/seo",
  },
  {
    title: "Digital Marketing(Meta/Google)",
    desc: "Grow your business with targeted digital marketing.",
    image: (
      <img
        src="/home/web-design.png"
        alt="Digital Marketing(Meta/Google)"
        className="w-16 h-16 object-contain bg-cyan-200 p-3 rounded-full mb-5"
      />
    ),
    link: "/services/digital-marketing",
  },
  {
    title: "Website Analytics",
    desc: "Get actionable insights with advanced analytics.",
    image: (
      <img
        src="/home/data.png"
        alt="Website Analytics"
        className="w-16 h-16 object-contain bg-pink-200 p-3 rounded-full mb-5"
      />
    ),
    link: "/services/analytics",
  },
];

const technologies = [
  "React-Native",
  "React",
  "Html5",
  "Css3",
  "Javascript",
  "AngularJs",
  "flutter",
  "Android",
  "ios",
  "Mongodb",
  "Ionic",
  "PHP",
  "Laravel",
  "NodeJs",
  "Wordpress",
  "Shopify",
  "CodeIgniter",
  "Python",
];

const testimonials = [
  {
    title: "Elevating Business Solutions",
    feedback:
      "“Gonardweb exceeded our expectations with their innovative solutions and exceptional service. Their expertise has significantly enhanced our business operations. We highly recommend Gonardweb to anyone seeking top-notch IT solutions.”",
    name: "Mr. Himanshu Rustogi",
    company: "THE INVESTMENT SOLUTION",
    companyColor: "text-purple-700",
    img: "/testimonials/himanshu.jpg",
  },
  {
    title: "Gonardweb' Innovative Solutions Propel Success",
    feedback:
      "“Gonardweb enhanced our real estate operations with their innovative solutions. Their expertise and dedication have been instrumental in driving our business forward. We highly recommend Gonardweb for anyone seeking cutting-edge technology in the real estate industry.”",
    name: "Mr. Vinay Sahgal",
    company: "SEHGAL ESTATE",
    companyColor: "text-blue-700",
    img: "/testimonials/vinay.jpg",
  },
  {
    title: "Driving Success with Strategic Solutions",
    feedback:
      "“Working with Gonardweb has been transformative for UrbanPlus Infrabuild Private Limited. Their strategic insights and innovative solutions have propelled our business to new heights. Trustworthy, efficient, and results-driven, Gonardweb is an invaluable partner in our success.”",
    name: "Mr. Yogesh",
    company: "URBANPLUS INFRABUILD PRIVATE LIMITED",
    companyColor: "text-indigo-700",
    img: "/testimonials/yogesh.jpg",
  },
  {
    title: "Outstanding Support & Delivery",
    feedback:
      "“The team at Gonardweb provided outstanding support throughout our project. Their timely delivery and attention to detail made all the difference. We look forward to working with them again!”",
    name: "Ms. Priya Sharma",
    company: "PRIME REALTY",
    companyColor: "text-pink-700",
    img: "/testimonials/priya.jpg",
  },
  {
    title: "Professionalism at its Best",
    feedback:
      "“Gonardweb' professionalism and technical expertise are unmatched. They understood our requirements perfectly and delivered a solution that exceeded our expectations.”",
    name: "Mr. Rajeev Mehra",
    company: "MEHRA ASSOCIATES",
    companyColor: "text-green-700",
    img: "/testimonials/rajeev.jpg",
  },
  {
    title: "Reliable & Innovative Partner",
    feedback:
      "“We have found a reliable and innovative partner in Gonardweb. Their team is proactive, creative, and always ready to help.”",
    name: "Ms. Anjali Verma",
    company: "VERMA GROUP",
    companyColor: "text-orange-700",
    img: "/testimonials/anjali.jpg",
  },
  {
    title: "Exceptional Results",
    feedback:
      "“Gonardweb delivered exceptional results for our business. Their solutions are robust, scalable, and user-friendly.”",
    name: "Mr. Suresh Gupta",
    company: "GUPTA ENTERPRISES",
    companyColor: "text-red-700",
    img: "/testimonials/suresh.jpg",
  },
  {
    title: "Great Communication & Service",
    feedback:
      "“Communication was seamless and the service was top-notch. Highly recommended for any IT needs!”",
    name: "Ms. Ritu Singh",
    company: "SINGH CONSULTANTS",
    companyColor: "text-blue-700",
    img: "/testimonials/ritu.jpg",
  },
];

const excellenceSlides = [
  {
    title: "Elevate Your Business With World-Class Excellence",
    desc: "jiTalent embraces the power of change to create 360° value and shared success for our partners, communities, and the talented individuals we connect with.",
    points: [
      {
        icon: "/icons/medal.svg",
        title: "Recognition and Rewards",
        desc: "The company values employee contributions through recognition programs.",
      },
      {
        icon: "/icons/support.svg",
        title: "Supportive Work Environment",
        desc: "Employees benefit from a collaborative work culture that encourages professional development.",
      },
      {
        icon: "/icons/global.svg",
        title: "Global Exposure",
        desc: "ToXSL offers employees a chance to work on global projects and interact with diverse teams.",
      },
    ],
    image: "/home/who-we-are.png",
  },
  {
    title: "Elevate Your Business With World-Class Excellence",
    desc: "jiTalent embraces the power of change to create 360° value and shared success for our partners, communities, and the talented individuals we connect with.",
    points: [
      {
        icon: "/icons/medal.svg",
        title: "Recognition and Rewards",
        desc: "The company values employee contributions through recognition programs.",
      },
      {
        icon: "/icons/support.svg",
        title: "Supportive Work Environment",
        desc: "Employees benefit from a collaborative work culture that encourages professional development.",
      },
      {
        icon: "/icons/global.svg",
        title: "Global Exposure",
        desc: "ToXSL offers employees a chance to work on global projects and interact with diverse teams.",
      },
    ],
    image: "/home/who-we-are.png",
  },
  {
    title: "Elevate Your Business With World-Class Excellence",
    desc: "jiTalent embraces the power of change to create 360° value and shared success for our partners, communities, and the talented individuals we connect with.",
    points: [
      {
        icon: "/icons/medal.svg",
        title: "Recognition and Rewards",
        desc: "The company values employee contributions through recognition programs.",
      },
      {
        icon: "/icons/support.svg",
        title: "Supportive Work Environment",
        desc: "Employees benefit from a collaborative work culture that encourages professional development.",
      },
      {
        icon: "/icons/global.svg",
        title: "Global Exposure",
        desc: "ToXSL offers employees a chance to work on global projects and interact with diverse teams.",
      },
    ],
    image: "/home/who-we-are.png",
  },
];

const accordionData = [
  {
    title: "Creative App Design",
    content:
      "Dive into a world of boundless imagination and artistic expression with our Creative App Design. Seamlessly blending form and function, our app is crafted to inspire innovation, foster creativity, and elevate your digital experience.",
  },
  {
    title: "Technologically Sound Apps",
    content:
      "Dive into a world of boundless imagination and artistic expression with our Creative App Design. Seamlessly blending form and function, our app is crafted to inspire innovation, foster creativity, and elevate your digital experience.",
  },
  {
    title: "Apps for Social Interaction",
    content:
      "Dive into a world of boundless imagination and artistic expression with our Creative App Design. Seamlessly blending form and function, our app is crafted to inspire innovation, foster creativity, and elevate your digital experience.",
  },
];

export default function Home() {
  useDocumentMeta({
    title: "Home | ReactWeb",
    description: "ReactWeb services and solutions.",
    canonicalUrl: "https://gonardweb.com/about-us",
  });
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <div className="font-sans bg-gray-50 text-gray-800 overflow-x-hidden">
        <Header />
        <BannerSlider banners={banners} />

        <section className="py-20 px-4 max-w-7xl mx-auto" id="about">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Side: Main About Content */}
            <div>
              <span className="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest">
                ABOUT COMPANY
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
                More than <span className="text-blue-700">15+ years</span> we
                provide IT solutions &amp; Software Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Since 2018, gonardweb has been a dedicated provider of
                customized solutions for various industries, with a strong
                emphasis on real estate. We stand out by offering both custom
                and platform-based solutions, ensuring your specific needs are
                met. Choose gonardweb for a unique and flexible approach to
                address your business requirements.
              </p>
              <div className="divide-y divide-gray-200 border-t border-b border-gray-200 bg-white rounded-xl shadow-sm">
                {accordionData.map((item, idx) => (
                  <div key={item.title} className="py-2">
                    <button
                      className={`w-full flex items-center justify-between font-semibold cursor-pointer py-1 px-4 focus:outline-none transition-colors ${
                        openAccordion === idx ? "text-red-600" : ""
                      }`}
                      onClick={() =>
                        setOpenAccordion(openAccordion === idx ? null : idx)
                      }
                    >
                      <span>{item.title}</span>
                      <span
                        className={`ml-2 text-2xl ${
                          openAccordion === idx
                            ? "text-red-600"
                            : "text-blue-700"
                        }`}
                      >
                        {openAccordion === idx ? "–" : "+"}
                      </span>
                    </button>
                    {openAccordion === idx && (
                      <div className="mt-2 text-gray-600 animate-fadeIn px-4">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Right Side: Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white border rounded-xl p-8 shadow-sm flex flex-col items-start min-h-[260px] hover:bg-blue-50 transition">
                <span className="mb-6">
                  <img
                    src="/home/headphones.png"
                    alt="IT support & helpdesk"
                    className="w-12 h-12 object-contain"
                  />
                </span>
                <h3 className="font-bold text-2xl mb-2">
                  IT support &amp; helpdesk
                </h3>
                <p className="text-gray-600 text-base">
                  Reliable IT support and helpdesk solutions tailored for
                  seamless operations, are brought to you by gonardweb.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-8 shadow-sm flex flex-col items-start min-h-[260px] hover:bg-blue-50 transition">
                <span className="mb-6">
                  <img
                    src="/home/diamond.png"
                    alt="IT support & helpdesk"
                    className="w-12 h-12 object-contain"
                  />
                </span>
                <h3 className="font-bold text-2xl mb-2">User Experience</h3>
                <p className="text-gray-600 text-base">
                  Elevate your digital journey with us, where intuitive user
                  experiences redefine the way, you interact with technology.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-8 shadow-sm flex flex-col items-start min-h-[260px] hover:bg-blue-50 transition">
                <span className="mb-6">
                  <img
                    src="/home/medalist.png"
                    alt="IT support & helpdesk"
                    className="w-12 h-12 object-contain"
                  />
                </span>
                <h3 className="font-bold text-2xl mb-2">Analytic Solutions</h3>
                <p className="text-gray-600 text-base">
                  Uncover actionable insights and drive data-driven decisions
                  with gonardweb' advanced analytic solutions.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-8 shadow-sm flex flex-col items-start min-h-[260px] hover:bg-blue-50 transition">
                <span className="mb-6">
                  <img
                    src="/home/gear.png"
                    alt="IT support & helpdesk"
                    className="w-12 h-12 object-contain"
                  />
                </span>
                <h3 className="font-bold text-2xl mb-2">Business Planning</h3>
                <p className="text-gray-600 text-base">
                  Chart your path to success with gonardweb – Your partner in
                  strategic business planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
          id="what-we-do"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 ">
            {/* Left: Illustration */}
            <div className="flex-1 flex justify-center">
              <img
                src="/home/service.png"
                alt="Eliminate IT Challenges"
                className="max-w-full md:max-w-lg"
                loading="lazy"
              />
            </div>
            {/* Right: Content */}
            <div className="flex-1">
              <span className="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest">
                WHAT WE DO
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
                Eliminate the IT challenges your business is facing
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-red-500 text-2xl">
                    {FaCheckCircle({})}
                  </span>
                  <span className="text-lg text-white">
                    We are offering a{" "}
                    <b className="text-white">Lead Management System</b> to
                    enhance sales strategies, monitor connections, manage leads,
                    and improve business. We give solutions for a variety of
                    uses, such as{" "}
                    <b className="text-white">Human Resource Administration</b>.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-red-500 text-2xl">
                    {FaCheckCircle({})}
                  </span>
                  <span className="text-lg text-white">
                    We provide a range of development services to meet the needs
                    of various software project types. Our organization will be
                    greatly enhanced by our combined technological prowess,
                    extensive industry knowledge, and creative business
                    concepts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 max-w-full bg-white" id="services">
          <div className="max-w-7xl mx-auto items-center gap-12 ">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 leading-tight">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-xl transition border-t-4 border-blue-600"
                >
                  <span>{service.image}</span>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                  <a
                    href={service.link}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-red-600 transition group"
                  >
                    READ MORE
                    <span className="block w-8 h-px bg-gray-400 group-hover:bg-red-600 transition"></span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 px-2 md:px-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 md:rounded-[48px] max-w-7xl mx-auto mt-12 shadow-lg">
          <div className="relative">
            <button
              type="button"
              className="excellence-prev absolute -left-16 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-900 rounded-full p-3 shadow transition cursor-pointer hidden md:block"
              aria-label="Previous"
              tabIndex={0}
            >
              <FaChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="excellence-next absolute -right-16 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-900 rounded-full p-3 shadow transition cursor-pointer hidden md:block"
              aria-label="Next"
              tabIndex={0}
            >
              <FaChevronRight size={22} />
            </button>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".excellence-next",
                prevEl: ".excellence-prev",
              }}
              className="!pb-12"
            >
              {excellenceSlides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-[#2156b9] md:bg-transparent rounded-3xl h-full flex flex-col md:flex-row items-center gap-8 p-6 md:p-4 min-h-[420px]">
                    <div className="flex-1 text-white">
                      <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight font-sans">
                        {slide.title}
                      </h2>
                      <p className="mb-8 text-base font-sans font-bold">
                        {slide.desc}
                      </p>
                      <ul className="space-y-5">
                        {slide.points.map((point, i) => (
                          <li className="flex items-start gap-3" key={i}>
                            <span>
                              <img
                                src={point.icon}
                                alt={point.title}
                                className="w-7 h-7"
                              />
                            </span>
                            <div>
                              <div className="font-semibold text-base font-sans">
                                {point.title}
                              </div>
                              <div className="text-white/90 text-sm font-sans">
                                {point.desc}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                      <img
                        src={slide.image}
                        alt="Excellence Illustration"
                        className="max-w-[420px] md:max-w-[460px] w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50" id="technology">
          <div className="max-w-7xl mx-auto items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-900 leading-tight">
              Our Technology
            </h2>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView={6}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 6 },
              }}
              className="!pb-8"
            >
              {technologies.map((tech) => (
                <SwiperSlide key={tech}>
                  <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 h-30 w-full shadow hover:shadow-lg transition">
                    <img
                      src={`/logos/${tech.toLowerCase()}.png`}
                      alt={tech}
                      className="w-28 h-20 object-contain"
                    />
                    {/* <span className="text-gray-700 font-medium text-base text-center">
                  {tech}
                </span> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section
          className="py-10 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
          id="testimonials"
        >
          <div className="max-w-7xl mx-auto items-center">
            <h2 className="text-4xl font-bold text-center text-white">
              Testimonials
            </h2>
            <p className="mt-4 mb-12 text-center text-white max-w-4xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ut ipsum voluptatum temporibus, possimus velit aliquid excepturi
              ab est in iure, praesentium illo corporis voluptatibus,
              repellendus reprehenderit minus voluptates necessitatibus?
            </p>
            <div className="relative">
              {/* Navigation Arrows OUTSIDE Swiper */}
              <button
                type="button"
                className="testimonial-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-900 rounded-full p-3 shadow transition cursor-pointer md:block"
                aria-label="Previous"
                tabIndex={0}
              >
                <FaChevronLeft size={22} />
              </button>
              <button
                type="button"
                className="testimonial-next absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-900 rounded-full p-3 shadow transition cursor-pointer md:block"
                aria-label="Next"
                tabIndex={0}
              >
                <FaChevronRight size={22} />
              </button>
              <SwiperTestimonial
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={3}
                spaceBetween={32}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".testimonial-next",
                  prevEl: ".testimonial-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1200: { slidesPerView: 3 },
                }}
                className="!pb-12"
              >
                {testimonials.map((t, idx) => (
                  <SwiperSlideTestimonial key={idx} className="h-full">
                    <div className="relative bg-white rounded-2xl shadow-lg p-8 h-full flex flex-col justify-between border border-gray-100 hover:shadow-2xl transition min-h-[400px]">
                      <div>
                        <h3 className="text-xl font-bold text-red-600 mb-3">
                          {t.title}
                        </h3>
                        <p className="text-gray-700 text-base mb-8">
                          {t.feedback}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-gray-200"
                        />
                        <div>
                          <div className="font-bold text-gray-900">
                            {t.name}
                          </div>
                          <div
                            className={`text-xs font-semibold uppercase ${t.companyColor}`}
                          >
                            {t.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-5xl text-gray-100 absolute bottom-6 right-8 select-none pointer-events-none">
                        &#10077;
                      </div>
                    </div>
                  </SwiperSlideTestimonial>
                ))}
              </SwiperTestimonial>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 m-16">
          <div className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-12 relative overflow-hidden">
            <div className="flex-1 z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Us for Legal Assistance
              </h2>
              <p className="text-white/90 mb-6">
                Experienced lawyers ready to fight for your rights
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-50 transition"
                >
                  Our areas of Law
                </a>
                <a
                  href="/"
                  className="text-white/90 font-medium flex items-center gap-2 hover:underline"
                >
                  New successes
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* Right Illustration */}
            <div className="flex-1 flex justify-end items-end z-10 mt-8 md:mt-0">
              <img
                src="/cta-illustration.png"
                alt="CTA Illustration"
                className="w-48 md:w-64 object-contain"
                loading="lazy"
              />
            </div>
            {/* Decorative Letter/Shape */}
            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[10rem] md:text-[14rem] font-extrabold text-white/10 select-none pointer-events-none z-0">
              M
            </span>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
