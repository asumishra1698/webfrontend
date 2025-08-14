import { Routes, Route } from "react-router-dom";

import Home from "../website/pages/home";
import About from "../website/pages/about";
import Contact from "../website/pages/contactus";
import AllBlogs from "../website/posts/allBlogs";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/blog" element={<AllBlogs />} />
  </Routes>
);

export default AppRoutes;
