import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h4 className="font-semibold text-lg mb-4">About Us</h4>
          <p className="text-sm text-gray-300">
            LogiTech is a forward-thinking logistics company dedicated to streamlining your supply chain.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#tracking">Tracking</a></li>
            <li><a href="#brands">Brands</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <p className="text-sm text-gray-300">123 Logistics Ave, Lagos, NG</p>
          <p className="text-sm text-gray-300">+234 801 234 5678</p>
          <p className="text-sm text-gray-300">support@logitech.com</p>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-2 rounded-md text-black"
          />
          <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>
      </div>
      <p className="text-center text-sm mt-12 text-gray-500">
        © {new Date().getFullYear()} LogiTech. All rights reserved.
      </p>
    </footer>
  );
};
