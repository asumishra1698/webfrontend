import React, { useState } from "react";
import BannerSlider from "../../reuseable/bannerSlider";
import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";


const services = [
  {
    title: "Website Design and Development",
    desc: "At IQSetters, we specialize in crafting bespoke digital experiences that captivate audiences and drive results...",
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
    name: "John Doe",
    feedback:
      "gonardweb delivered our project on time with great quality. Highly recommended!",
    company: "Acme Corp",
  },
  {
    name: "Jane Smith",
    feedback: "Professional team and excellent support throughout the process.",
    company: "Tech Solutions",
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

export default function Portfolio() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div className="font-sans bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Banner Section */}
      <BannerSlider />

      {/* About Section */}
      <section className="py-10 px-4 max-w-7xl mx-auto" id="about">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side: Main About Content */}
          <div>
            <span className="inline-block bg-pink-100 text-pink-700 px-4 py-1 rounded-full text-xs font-bold mb-4 tracking-widest">
              ABOUT COMPANY
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
              More than <span className="text-blue-700">5+ years</span> we
              provide IT solutions &amp; Software Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Since 2020, gonardweb has been a dedicated provider of customized
              solutions for various industries, with a strong emphasis on real
              estate. We stand out by offering both custom and platform-based
              solutions, ensuring your specific needs are met. Choose gonardweb
              for a unique and flexible approach to address your business
              requirements.
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
                        openAccordion === idx ? "text-red-600" : "text-blue-700"
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
                Reliable IT support and helpdesk solutions tailored for seamless
                operations, are brought to you by gonardweb.
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
                Uncover actionable insights and drive data-driven decisions with
                gonardweb' advanced analytic solutions.
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

      {/* What We Do Section */}
      <section className="py-10 px-4 max-w-full bg-white" id="what-we-do">
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 leading-tight">
              Eliminate the IT challenges your business is facing
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-1 text-red-500 text-2xl">
                  {FaCheckCircle({})}
                </span>
                <span className="text-lg text-gray-700">
                  We are offering a{" "}
                  <b className="text-gray-900">Lead Management System</b> to
                  enhance sales strategies, monitor connections, manage leads,
                  and improve business. We give solutions for a variety of uses,
                  such as{" "}
                  <b className="text-gray-900">Human Resource Administration</b>
                  .
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 text-red-500 text-2xl">
                  {FaCheckCircle({})}
                </span>
                <span className="text-lg text-gray-700">
                  We provide a range of development services to meet the needs
                  of various software project types. Our organization will be
                  greatly enhanced by our combined technological prowess,
                  extensive industry knowledge, and creative business concepts.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4 max-w-full bg-white" id="services">
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

      {/* Our Technology Section */}
      <section className="py-10 px-4 bg-gray-50" id="technology">
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

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white" id="testimonials">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <p className="text-lg italic mb-4 text-gray-700">
                "{t.feedback}"
              </p>
              <div className="font-semibold text-blue-800">{t.name}</div>
              <div className="text-blue-600">{t.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto" id="insights">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Get the Latest Insights
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Stay updated with our latest news, tips, and technology trends.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white" id="contact">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Contact Us
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              Gonardweb
            </h3>
            <p className="mb-2 text-gray-700">
              B-2/3, 2nd Floor, Sector-16, Noida, Uttar Pradesh, India
            </p>
            <p className="mb-2 text-gray-700">
              Email:{" "}
              <a
                href="mailto:info@gonardweb.com"
                className="text-blue-700 underline"
              >
                info@gonardweb.com
              </a>
            </p>
            <p className="mb-2 text-gray-700">
              Phone:{" "}
              <a href="tel:+918287886733" className="text-blue-700 underline">
                +91 8287886733
              </a>
            </p>
            <p className="text-gray-700">
              Website:{" "}
              <a
                href="https://www.gonardweb.com/"
                className="text-blue-700 underline"
              >
                www.gonardweb.com
              </a>
            </p>
          </div>
          {/* Contact Form */}
          <form className="bg-blue-50 rounded-xl p-8 shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-2 mt-10">
        &copy; {new Date().getFullYear()} gonardweb. All rights reserved.
      </footer>
    </div>
  );
}
