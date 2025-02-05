import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import { Car } from "../interface";
import Wrap from "../components/Wrap";
import Sidebar from "../components/Sidebar";

// Fetching the car data
async function getData() {
  const query = `*[_type == "car"][0..14]{
    _id,
    name,
    pricePerDay,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function products() {
  const data: Car[] = await getData();

  return (
   
      <Wrap> <div className=" lg:px-2 overflow-x-hidden">
        <div className="w-full flex overflow-x-hidden mt-14 sm:mt-5">
          {/* Sidebar: Visible on larger screens */}
          <div className="hidden sm:block lg:w-[20%]">
            <Sidebar />
          </div>

          {/* Main Content: Products Grid */}
          <div className="w-full sm:w-full lg:w-[75%] px-4 py-5 sm:px-6 sm:py-6 lg:px-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-800 mb-6 ml-2">
              Our Newest Cars
            </h2>

            {/* Grid Layout for Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.map((car: Car) => (
                <div
                  key={car._id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition translate-y-4 flex flex-col h-full"
                >
                  {/* Car Name */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    <Link href={`/details/${car.slug}`}>{car.name}</Link>
                  </h3>

                  {/* Car Image */}
                  <div className="w-full aspect-video mb-4 overflow-hidden rounded-md bg-white">
                    <Image
                      src={car.imageUrl}
                      alt={car.name}
                      width={500}
                      height={300}
                      layout="responsive"
                      objectFit="cover" // Ensures image covers the area without stretching
                    />
                  </div>

                  {/* Car Price */}
                  <p className="text-xl font-semibold text-gray-500 mb-4 flex-grow">
                    {car.pricePerDay}
                  </p>

                  {/* Rent Button */}
                  <div className="flex justify-start mt-auto">
                    <Link href={`/details/${car.slug}`}>
                      <button className="bg-blue-600 text-white py-2 px-7 rounded-lg hover:bg-blue-400 duration-300 hover:scale-105 transition">
                        Rent Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    </div></Wrap>
  );
}
