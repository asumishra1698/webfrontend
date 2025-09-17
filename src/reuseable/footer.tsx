import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <FaFacebook />,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: <FaTwitter />,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: <FaYoutube />,
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top section: Links and Subscribe form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Useful Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="/about" className="hover:text-blue-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-700">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faqs" className="hover:text-blue-700">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-blue-700">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-blue-700">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Careers */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Careers</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="/blog" className="hover:text-blue-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="/press" className="hover:text-blue-700">
                  Press
                </a>
              </li>
              <li>
                <a href="/partnerships" className="hover:text-blue-700">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="/support" className="hover:text-blue-700">
                  Support
                </a>
              </li>
              <li>
                <a href="/help-center" className="hover:text-blue-700">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="/events" className="hover:text-blue-700">
                  Events
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-blue-700">
                  Community
                </a>
              </li>
              <li>
                <a href="/social-media" className="hover:text-blue-700">
                  Social Media
                </a>
              </li>
              <li>
                <a href="/newsletter" className="hover:text-blue-700">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="/subscribe" className="hover:text-blue-700">
                  Subscribe
                </a>
              </li>
            </ul>
          </div>
          {/* Subscribe Form */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4">Subscribe</h4>
            <p className="text-gray-600 text-sm mb-4">
              Join our community to receive updates
            </p>
            <form className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-gray-100 border border-gray-200 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-700 text-white rounded-r-full font-semibold hover:bg-blue-800 transition text-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              By subscribing, you agree to our{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="/" className="text-2xl font-bold text-gray-900">
              ReactWeb
            </a>
            <p className="text-sm text-gray-500 mt-1">
              © {currentYear} ReactWeb. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500 mt-2 justify-center md:justify-start">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
