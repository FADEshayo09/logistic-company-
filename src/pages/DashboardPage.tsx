import React from "react";
import { motion } from "framer-motion";
// Make sure the file exists at the specified path, or update the path if needed
import StatsGrid from "../components/dashboard/StatsGrid";
import WaveChart from "../components/dashboard/WaveChart";
import ProgressSection from "../components/dashboard/ProgressSection";
import ActivityLog from "../components/dashboard/ActivityLog";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <motion.h1
        className="text-3xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Logistics Dashboard
      </motion.h1>

      <StatsGrid />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <WaveChart />
        <ProgressSection />
      </div>

      <div className="mt-12">
        <ActivityLog />
      </div>
    </main>
  );
}
