// src/pages/About.tsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="py-20 px-6 max-w-6xl mx-auto text-gray-700">
      {/* Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
          About Us
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          At Logistics Inc., we are more than just a transportation company—we are your strategic logistics partner. With a strong network, cutting-edge technology, and a deep commitment to efficiency, we deliver seamless supply chain solutions tailored to businesses of all sizes.
        </p>
      </motion.section>

      {/* Mission and Vision */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mb-20"
      >
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Our Mission</h2>
          <p>
            To empower global trade through reliable, innovative, and customer-centric logistics services—delivering goods efficiently, safely, and on time.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-blue-800 mb-3">Our Vision</h2>
          <p>
            To become the most trusted and technologically advanced logistics partner, driving growth for businesses and simplifying supply chain complexities worldwide.
          </p>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">Our Core Values</h2>
        <ul className="grid md:grid-cols-3 gap-8 text-center">
          <li className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Reliability</h3>
            <p>We deliver on our promises with precision and accountability.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Innovation</h3>
            <p>We embrace technology and creativity to stay ahead in logistics.</p>
          </li>
          <li className="bg-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Customer First</h3>
            <p>We build lasting relationships by exceeding client expectations.</p>
          </li>
        </ul>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Why Choose Logistics Inc.?</h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our team of experts, modern fleet, and real-time tracking tools ensure your goods move faster, smarter, and more efficiently. Whether it’s freight, warehousing, last-mile delivery, or supply chain strategy—we’ve got you covered.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">24/7 Support</span>
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">Global Coverage</span>
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">Smart Analytics</span>
          <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full font-medium">End-to-End Solutions</span>
        </div>
      </motion.section>
    </main>
  );
}
