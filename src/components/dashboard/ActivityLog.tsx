import React from "react";

const activities = [
  "Package #12843 shipped to Abuja",
  "Fleet truck #4 reached checkpoint",
  "New delivery request from Ikeja",
  "Client feedback received for Order #235",
];

export default function ActivityLog() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activities</h3>
      <ul className="space-y-3 text-sm text-gray-600">
        {activities.map((activity, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>{activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
