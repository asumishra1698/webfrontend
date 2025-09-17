import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createContactRequest } from "../../redux/actions/contactActions";
import { RootState } from "../../redux/store";
import Layout from "../../reuseable/layout";
import { useDocumentMeta } from "../../reuseable/useDocumentMeta";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const dispatch = useDispatch();
  useDocumentMeta({
    title: "Contact Us | ReactWeb",
    description: "Get in touch with ReactWeb for inquiries and support.",
    canonicalUrl: "https://gonardweb.com/contact-us",
  });

  const { loading, error, success } = useSelector(
    (state: RootState) => state.contact
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createContactRequest(formData));
  };

  useEffect(() => {
    if (success) {
      setFormData({
        name: "",
        email: "",
        number: "",
        city: "",
        message: "",
      });
    }
  }, [success]);

  return (
    <Layout>
      <div className="bg-gray-50 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question about our
              services, pricing, or anything else, our team is ready to answer
              all your questions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
            {/* Left Side: Contact Details */}
            <div className="bg-blue-600 text-white p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 mb-8">
                Fill up the form and our team will get back to you within 24
                hours.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-2xl text-blue-200">&#9742;</span>
                  <span className="ml-4">+1 (123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl text-blue-200">&#9993;</span>
                  <span className="ml-4">hello@example.com</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl text-blue-200">&#127968;</span>
                  <span className="ml-4">123 Street, New York, USA</span>
                </li>
              </ul>
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="number" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="number"
                      id="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="sr-only">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 disabled:bg-gray-400"
                  >
                    {loading ? "Submitting..." : "Send Message"}
                  </button>
                </div>
                {success && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}
                {error && <p className="text-red-600 text-center">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
