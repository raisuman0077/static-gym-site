"use client";
import Image from "next/image";
import React, { useState } from "react";

const facilities: { title: string; options: string[]; imgSrc: string }[] = [
  {
    title: "Strength Training Area",
    options: ["Dumbbells", "Barbells", "Squat Racks", "Benches"],
    imgSrc: "images/training.jpg",
  },
  {
    title: "Cardio Section",
    options: ["Treadmills", "Ellipticals", "Cycling Machines", "Rowing Machines"],
    imgSrc: "images/cardio.jpg",
  },
  {
    title: "Functional Training Zone",
    options: ["Kettlebells", "Resistance Bands", "Medicine Balls"],
    imgSrc: "images/functional.jpg",
  },
  {
    title: "Group Fitness Studio",
    options: ["Yoga", "Zumba", "HIIT", "Aerobics"],
    imgSrc: "images/group.jpg",
  },
  {
    title: "Locker Rooms & Showers",
    options: ["Clean", "Spacious", "Secure Storage"],
    imgSrc: "images/locker.jpg",
  },
  {
    title: "Parking Area",
    options: ["Secure", "Spacious Area"],
    imgSrc: "images/parking.jpg",
  },
];

export default function Page() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen pt-25 pb-10 border-b-2">
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-30"></div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-4xl font-semibold text-white mb-8">Our Facilities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0 relative">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center text-white text-xl font-light border border-white rounded-lg p-4 shadow-lg transition-all duration-500 cursor-pointer ${
                hoverIndex === index
                  ? "h-84 z-50 scale-105 -mt-6 -mb-15 bg-[rgba(0,0,0,1)]"
                  : "h-64"
              }`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Title at the top */}
              <h3
                className={`text-2xl font-semibold z-20 ${
                  hoverIndex === index && "bg-black/60"
                } px-3 py-1 rounded`}
              >
                {facility.title}
              </h3>

              <Image
                src={facility.imgSrc}
                alt={facility.title}
                className="absolute bg-cover h-full w-auto"
              />
              {hoverIndex === index && (
                <ul className="text-left mt-2 text-sm font-normal text-gray-200 space-y-1  px-4 py-2 rounded w-full z-999">
                  {facility.options.map((option, i) => (
                    <li key={i} className="list-disc">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
