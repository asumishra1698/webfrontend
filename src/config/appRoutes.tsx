import { Routes, Route } from "react-router-dom";

import Home from "../components/pages/home";
import About from "../components/pages/about";
import Contact from "../components/pages/contactus";
import AllBlogs from "../components/posts/allBlogs";
import BlogDetails from "../components/posts/blogDetails";
import ProductGrid from "../components/products/productgrid";
import CustomerDashboard from "../components/auth/CustomerDashboard";
import ProductPage from "../components/products/ProductPage";
import Checkout from "../components/products/checkout";
import OrderDetails from "../components/products/orderDetails";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/products" element={<ProductGrid />} />
    <Route path="/products/:id" element={<ProductPage />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/blog" element={<AllBlogs />} />
    <Route path="/blog/:slug" element={<BlogDetails />} />
    <Route path="/customer/dashboard" element={<CustomerDashboard />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order-details/:orderId" element={<OrderDetails />} />
  </Routes>
);

export default AppRoutes;
