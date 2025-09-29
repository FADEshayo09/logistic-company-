// src/pages/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";



export default function Contact() {
  return (
    <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Have a question, need a custom logistics solution, or want to speak with our team? We’re here to help—24/7.
        </p>
      </motion.section>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 bg-blue-50 p-8 rounded-2xl shadow-md"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Your Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-3 rounded font-medium hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="bg-gray-100 p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Contact Details</h2>
          <ul className="space-y-4 text-sm">
            <li>
              <strong>Email:</strong> support@logisticsinc.com
            </li>
            <li>
              <strong>Phone:</strong> +234 801 234 5678
            </li>
            <li>
              <strong>Address:</strong> 12 Ikoyi Crescent, Lagos, Nigeria
            </li>
            <li>
              <strong>Business Hours:</strong> Mon - Sat: 8am - 6pm
            </li>
            <li>
              <strong>Emergency Logistics Support:</strong> Available 24/7
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2 text-orange-500">Let’s Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:underline text-blue-700">LinkedIn</a>
              <a href="#" className="hover:underline text-blue-700">Facebook</a>
              <a href="#" className="hover:underline text-blue-700">Instagram</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Optional: Map */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
        className="my-5 rounded overflow-hidden shadow-lg"
      >
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.37684650883!2d3.4129!3d6.4483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c97b06dc5d3%3A0x7b652d8770dc3c6c!2sIkoyi%2C%20Lagos!5e0!3m2!1sen!2sng!4v1688322379372!5m2!1sen!2sng"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
      <Footer />
    </main>
  );
}
