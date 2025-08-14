
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

import Login from "../admin/auth/login";
import Dashboard from "../admin/dashboard";

import Home from "../website/pages/home";
import About from "../website/pages/about";
import Contact from "../website/pages/contactus";

import AllBlogs from "../website/posts/allBlogs";

const AppRoutes = () => (
  <Routes>
    <Route element={<PublicRoute />}>
      <Route path="/login" element={<Login />} />
    </Route>

    <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>

    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/contact-us" element={<Contact />} />
    <Route path="/blog" element={<AllBlogs />} />
  </Routes>
);

export default AppRoutes;
