import React, { useState } from "react";
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/work", label: "Work" },
    { href: "/pricing", label: "Pricing" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];
  const contactInfo = {
    question: "Have Any Questions?",
    numbers: "(+91) 7827284932",
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">React</span>
          <span className="text-2xl font-bold text-gray-700">Web</span>
        </a>
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex flex-col text-right text-xs text-gray-600">
          <span className="text-sm">{contactInfo.question}</span>
          <span className="text-blue-900 font-bold">{contactInfo.numbers}</span>
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <div className="flex-col text-right text-xs text-gray-600">
            <span className="text-sm">{contactInfo.question}</span>
            <span className="text-blue-900 font-bold">
              {contactInfo.numbers}
            </span>
          </div>
          <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 px-6 text-base font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-red-600 transition py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="px-6 mt-8 text-sm text-gray-600 border-t pt-4">
          <p className="font-semibold">{contactInfo.question}</p>
          <p className="text-blue-900 font-bold">{contactInfo.numbers}</p>
        </div>
      </div>
    </header>
  );
};
export default Header;
