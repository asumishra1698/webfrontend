import React from "react";
const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    iconPath: "M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    iconPath: "M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975.975 2.242-1.247 3.608-1.309C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072c-.058 1.277-.316 2.45-1.373 3.507C2.488 2.502 2.23 3.675 2.172 4.952C2.163 8.332 2.163 8.741 2.163 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.373 3.507 1.057 1.057 2.23 1.315 3.507 1.373C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.45-.316 3.507-1.373 1.057-1.057 1.315-2.23 1.373-3.507.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.373-3.507C19.398.388 18.225.13 16.948.072 15.668.013 15.259 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    iconPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    iconPath: "M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.425 3.5 12 3.5 12 3.5s-7.425 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.153 0 12 0 12s0 3.847.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.575 20.5 12 20.5 12 20.5s7.425 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.847 24 12 24 12s0-3.847-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top section: Links and Subscribe form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Useful Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="/about" className="hover:text-blue-700">About Us</a></li>
              <li><a href="/contact" className="hover:text-blue-700">Contact Us</a></li>
              <li><a href="/faqs" className="hover:text-blue-700">FAQs</a></li>
              <li><a href="/terms-of-service" className="hover:text-blue-700">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="hover:text-blue-700">Privacy Policy</a></li>
            </ul>
          </div>
          {/* Careers */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Careers</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="/blog" className="hover:text-blue-700">Blog</a></li>
              <li><a href="/press" className="hover:text-blue-700">Press</a></li>
              <li><a href="/partnerships" className="hover:text-blue-700">Partnerships</a></li>
              <li><a href="/support" className="hover:text-blue-700">Support</a></li>
              <li><a href="/help-center" className="hover:text-blue-700">Help Center</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="/events" className="hover:text-blue-700">Events</a></li>
              <li><a href="/community" className="hover:text-blue-700">Community</a></li>
              <li><a href="/social-media" className="hover:text-blue-700">Social Media</a></li>
              <li><a href="/newsletter" className="hover:text-blue-700">Newsletter</a></li>
              <li><a href="/subscribe" className="hover:text-blue-700">Subscribe</a></li>
            </ul>
          </div>
          {/* Subscribe Form */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-gray-900 mb-4">Subscribe</h4>
            <p className="text-gray-600 text-sm mb-4">Join our community to receive updates</p>
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
              By subscribing, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Bottom section: Copyright and Socials */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side: Brand, Copyright, and Legal Links */}
          <div className="text-center md:text-left">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Gonard Web
            </a>
            <p className="text-sm text-gray-500 mt-1">
              © {currentYear} Gonard Web. All rights reserved.
            </p>
             <div className="flex gap-4 text-sm text-gray-500 mt-2 justify-center md:justify-start">
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
                <a href="/cookie-policy" className="hover:underline">Cookie Policy</a>
            </div>
          </div>

          {/* Right side: Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map(({ href, label, iconPath }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-blue-700 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d={iconPath}></path>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;