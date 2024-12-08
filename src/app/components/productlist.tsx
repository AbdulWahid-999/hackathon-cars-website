"use client";

import React, { useState } from "react";

import Wrap from "./Wrap";
import Link from "next/link";

const ProductList: React.FC = () => {
  // Full list of cars
  const allCars = [
    { id: 1,  image: "/koen.png", price: 50 },
    { id: 2,  image: "/gtr.png", price: 40 },
    { id: 3,  image: "/rolls.png", price: 45 },
    { id: 4,  image: "/gtr.png", price: 70 },
    { id: 5,  image: "/crv.png", price: 55 },
    { id: 6,  image: "/newrush.png", price: 80 },
    { id: 7, image: "/crv.png", price: 90 },
    { id: 8, image: "/terios.png", price: 85 },
    { id: 9, image: "/crv.png",price: 100 },
    { id: 10, image: "/koen.png", price: 60 },
    { id: 11, image: "/gtr.png", price: 65 },
    { id: 12, image: "/terios.png", price: 120 },
    { id: 7, image: "/crv.png", price: 90 },
  ];

  // State to handle visible cars
  const [visibleCars, setVisibleCars] = useState(8);

  const handleShowMore = () => {
    setVisibleCars(allCars.length); // Show all cars
  };

  return (
    <Wrap>
      <div className="bg-gray-50 lg:px-2 overflow-x-hidden">
        {/* Product Grid */}
        <div className="py-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Cars</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allCars.slice(0, visibleCars).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
              >
               

                {/* Car Image */}
                
                <img
                  src={car.image}
                  
                  className="w-full object-cover rounded-lg mb-4"
                />

                {/* Car Price */}
                <p className="text-xl font-semibold text-gray-500 mb-4">${car.price}/Day</p>

                {/* Rent Button aligned to the left */}
                <div className="flex justify-start">
                 <Link href="/products"> <button className="bg-blue-600 text-white py-2 px-7 ml-40  md:px-5 md:ml-24 lg:ml-40 -translate-y-11 rounded-lg hover:bg-blue-400  duration-300 hover:scale-105 transition">
                    Rent Now
                  </button></Link>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCars < allCars.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-400 duration-300 hover:scale-105"
              >
                Show More Cars
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrap>
  );
};

export default ProductList;