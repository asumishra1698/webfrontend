import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/home";
import About from "../components/pages/about";
import Contact from "../components/pages/contactus";
import AllBlogs from "../components/posts/allBlogs";
import BlogDetails from "../components/posts/blogDetails";
import ProductGrid from "../components/products/productgrid";
import CustomerLogin from "../components/auth/CustomerLogin";
import CustomerDashboard from "../components/auth/CustomerDashboard";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/products" element={<ProductGrid />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/blog" element={<AllBlogs />} />
    <Route path="/blog/:slug" element={<BlogDetails />} />
    <Route path="/customer/login" element={<CustomerLogin />} />
    <Route path="/customer/dashboard" element={<CustomerDashboard />} />
  </Routes>
);

export default AppRoutes;
