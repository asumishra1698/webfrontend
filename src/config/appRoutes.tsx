import { Routes, Route } from "react-router-dom";

import Home from "../website/pages/home";
import About from "../website/pages/about";
import Contact from "../website/pages/contactus";
import AllBlogs from "../website/posts/allBlogs";
import BlogDetails from "../website/posts/blogDetails";
import ProductGrid from "../website/pages/productgrid";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/products" element={<ProductGrid />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/blog" element={<AllBlogs />} />
    <Route path="/blog/:slug" element={<BlogDetails />} />
  </Routes>
);

export default AppRoutes;
