import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Shipments Today", value: 124 },
  { label: "In Transit", value: 87 },
  { label: "Delivered", value: 300 },
  { label: "Pending Issues", value: 7 },
];

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-md text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <h3 className="text-3xl font-bold text-blue-600">
            <motion.span
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.5 }}
            >
              {stat.value}
            </motion.span>
          </h3>
          <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
