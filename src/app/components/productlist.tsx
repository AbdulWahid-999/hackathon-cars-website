"use client";

import React, { useState, useEffect } from "react";
import Wrap from "./Wrap";
import Link from "next/link";
import Image from "next/image"; // Correct import for next/image
import { Car } from "../interface"; // Assuming you have a Car interface
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const ProductList = () => {
  // State to handle visible cars and fetching state
  const [visibleCars, setVisibleCars] = useState(8);
  const [isShowMoreClicked, setIsShowMoreClicked] = useState(false); // Track if Show More was clicked
  const [cars, setCars] = useState<Car[]>([]); // State to store fetched cars
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch data from Sanity
  const getData = async () => {
    const query = `*[_type == "car"][0..17]{
      _id,
      name,
      pricePerDay,
      "imageUrl": image.asset->url
    }`;

    try {
      const data = await client.fetch(query);
      setCars(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching cars data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Fetch the data when the component mounts
  useEffect(() => {
    getData();
  }, []);

  const handleShowMore = () => {
    setVisibleCars(cars.length); // Show all cars
    setIsShowMoreClicked(true); // Mark Show More as clicked
  };

  const handleShowLess = () => {
    setVisibleCars(8); // Reset to initial visible cars
    setIsShowMoreClicked(false); // Mark Show More as not clicked
  };

  if (loading) {
    return <div className="text-center text-2xl font-semibold">Loading Please Wait...</div>; // Show loading state while fetching data
  }

  return (
    
      <div className="bg-gray-50 lg:px-2 overflow-x-hidden">
        <Wrap>
        {/* Product Grid */}
        <div className="py-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 ml-2">
            Explore Our Cars
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {cars.slice(0, visibleCars).map((car) => {
              return (
                <div
                  key={car._id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition translate-y-4 flex flex-col h-full"
                >
                  {/* Car Name */}
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {car.name}
                  </h2>

                  {/* Car Image */}
                  <Image
                    src={urlFor(car.imageUrl).url() || '/default-image.jpg'} // Fallback image if URL is not available
                    alt={car.name}
                    className="w-full object-cover rounded-lg mb-7"
                    width={200}
                    height={200}
                  />

                  {/* Car Price */}
                  <p className="text-xl font-semibold text-gray-500 mb-4 flex-grow relative top-1">
                    {car.pricePerDay}
                  </p>

                  {/* Rent Button */}
                  <div className="flex justify-start mt-auto">
                    <Link href="/products">
                      <button className="bg-blue-600 text-white py-2 px-7 ml-40 md:px-5 md:ml-24 lg:ml-40 -translate-y-11 rounded-lg hover:bg-blue-400 duration-300 hover:scale-105 transition">
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show More Button */}
          {visibleCars < cars.length && !isShowMoreClicked && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowMore}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-400 duration-300 hover:scale-105"
              >
                Show More Cars
              </button>
            </div>
          )}

          {/* Show Less Button - Only show if Show More was clicked */}
          {isShowMoreClicked && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleShowLess}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-400 duration-300 hover:scale-105"
              >
                Show Less Cars
              </button>
            </div>
          )}
        </div>
        </Wrap>
      </div>
    
  );
};

export default ProductList;
