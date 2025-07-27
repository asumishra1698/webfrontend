import React, { useState } from "react";
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">Gonard</span>
          <span className="text-2xl font-bold text-gray-700">Web</span>
        </div>
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/">Products</a>
          <a href="/">Solutions</a>
          <a href="/">Work</a>
          <a href="/">Pricing</a>
          <a href="/">Human Resources</a>
          <a href="/">Blog</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
        <div className="hidden lg:flex flex-col text-right text-xs text-gray-600">
          <span className="text-sm">Have Any Questions?</span>
          <span className="text-blue-900 font-bold">
            (+91) 7827284932 / (+91) 7827284932
          </span>
        </div>
        <button onClick={() => setMenuOpen(true)} className="lg:hidden">
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
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
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
        <nav className="flex flex-col space-y-4 px-6 text-sm font-medium text-gray-700">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/">Products</a>
          <a href="/">Solutions</a>
          <a href="/">Work</a>
          <a href="/pricing">Pricing</a>
          <a href="/">Human Resources</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <div className="px-6 mt-6 text-xs text-gray-600">
          <p className="font-semibold">Have Any Questions?</p>
          <p className="text-blue-900 font-bold">
            (+91) 8929406040 / (+44) 7990271147
          </p>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};
export default Header;
