import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { FaTruck, FaUsers, FaGlobe } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar"; // ✅ Import the reusable Navbar
import { Footer } from "../components/Footer";

export default function HeroSection() {
  return (
    <>
      {/* ✅ Reusable Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-white pt-24 md:pt-32"
      style={{ backgroundImage: "url('/vehicle-move.jpg')" }}
       >
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 max-w-7xl px-6 py-20 text-center space-y-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          >
            WE KEEP YOUR SUPPLY CHAIN MOVING
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, x: -900 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 3.5 }}
          >
            From local to global shipments, our seamless logistics solutions ensure on-time, secure, and hassle-free delivery.
          </motion.p>

          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 3 }}
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Learn More</Button>
            <Button variant="outline" className="border-white text-white hover:text-orange-500">Get Started Now</Button>
          </motion.div>

          <motion.div
            className="mt-10 bg-white/90 p-6 rounded-lg shadow-lg max-w-md mx-auto"
            initial={{ opacity: 0, y: 700 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <h3 className="text-gray-800 font-semibold mb-2">Tracking Order</h3>
            <input
              type="text"
              placeholder="Enter your tracking number"
              className="w-full px-4 py-2 rounded-md border border-gray-300 mb-3"
            />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Track Now</Button>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <div><p className="text-2xl font-bold">2000+</p><p className="text-sm">Satisfied Clients</p></div>
            <div><p className="text-2xl font-bold">2.98%</p><p className="text-sm">On-Time Delivery Rate</p></div>
            <div><p className="text-2xl font-bold">150+</p><p className="text-sm">Countries Served</p></div>
            <div><p className="text-2xl font-bold">24/7</p><p className="text-sm">Customer Support</p></div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaTruck />,
            title: "Real-Time Tracking",
            text: "Know exactly where your package is, every step of the way with live tracking and updates.",
          },
          {
            icon: <FaUsers />,
            title: "Order Management",
            text: "Easily manage all deliveries and logistics activities from a single intuitive dashboard.",
          },
          {
            icon: <FaGlobe />,
            title: "Smart Analytics",
            text: "Get insights on delivery speed, order status, and optimize your logistics with actionable data.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-100 p-6 rounded-2xl shadow-xl text-center"
          >
            <div className="text-3xl text-orange-500 mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p>{feature.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Trusted Brands Carousel */}
      

      {/* Call to Action Section */}
      <section className="py-16 px-6 text-center bg-orange-100">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Logistics?
        </motion.h2>
        <p className="mb-6 text-gray-700">
          Partner with us to streamline your supply chain and drive efficiency.
        </p>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get a Free Quote</Button>
      </section>

      <Footer />
    </>
  );
}
