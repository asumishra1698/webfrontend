import React from "react";
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Useful Links</h4>
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
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Careers</h4>
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
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
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
          <div className="md:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-3">Subscribe</h4>
            <p className="text-gray-600 text-sm mb-4">
              Join our community to receive updates
            </p>
            <form className="flex max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-gray-100 border border-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-700 text-white rounded-r-full font-semibold hover:bg-blue-800 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              By subscribing, you agree to our{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">YourBrand.</span>
          </div>

          <div className="flex gap-4">
            {[
              {
                href: "https://facebook.com",
                label: "Facebook",
                iconPath: "M22 12c0-5.522-4.477-10-10-10S2...",
              },
              {
                href: "https://instagram.com",
                label: "Instagram",
                iconPath: "M12 2.163c3.204 0...",
              },
              {
                href: "https://linkedin.com",
                label: "LinkedIn",
                iconPath: "M19 0h-14c-2.761 0...",
              },
              {
                href: "https://youtube.com",
                label: "YouTube",
                iconPath: "M23.498 6.186a2.993...",
              },
            ].map(({ href, label, iconPath }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <svg
                  className="w-5 h-5 text-gray-500 hover:text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={iconPath}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t mt-8 pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-2">
          <div className="flex gap-4">
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
          <div>© {currentYear} Gonardweb. All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
