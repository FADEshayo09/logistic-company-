import React from "react";

const progress = [
  { label: "Fleet Utilization", value: 75 },
  { label: "Warehouse Occupancy", value: 60 },
  { label: "Order Fulfillment", value: 90 },
];

export default function ProgressSection() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance Metrics</h3>
      <div className="space-y-6">
        {progress.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-1">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="bg-green-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
