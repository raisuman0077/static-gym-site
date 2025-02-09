"use client";
import React from "react";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white pt-20 pb-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div>
          <h2 className="text-4xl font-semibold text-black mb-8">Our Facilities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
          {[
            "Strength Training Area",
            "Cardio Section",
            "Functional Training Zone",
            "Group Fitness Studio",
            "Locker Rooms & Showers",
            "Parking Area",
          ].map((facility, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-48 text-white text-xl font-light border border-white rounded-lg p-4 shadow-lg bg-gray-900 bg-opacity-70 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {facility}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
