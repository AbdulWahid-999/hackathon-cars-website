import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import Wrap from '../../components/Wrap';
import Sidebar from '@/app/components/Sidebar';

async function getCarDetails(slug: string) {
  const query = `*[_type == "car" && slug.current == $slug][0]{
    _id,
    name,
    pricePerDay,
    fuelCapacity,
    seatingCapacity,
    transmission,
    type,
    "slug": slug.current,
    "imageUrl": image.asset->url
  }`;

  const params = { slug };
  const data = await client.fetch(query, params);
  return data;
}

export default async function CarDetailsPage({ params }: { params: { slug: string } }) {
  const car = await getCarDetails(params.slug);

  if (!car) {
    return <div className="text-center text-2xl font-semibold text-red-500 mt-10">Car not found!</div>;
  }

  return (
    <Wrap>
      {/* Wrapper */}
      <div className="w-full flex overflow-x-hidden mt-14 sm:mt-5">
        <div className="first hidden sm:flex w-[25%]">
          {/* Sidebar */}
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="sec w-full sm:w-[75%] bg-white p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
          {/* Car Details Section */}
          <section className="w-full flex flex-col lg:flex-row gap-6 items-center justify-center relative">
            {/* Image on the Left */}
            <div className="flex justify-center lg:w-[50%]">
              <Image src={car.imageUrl} alt="car image" width={492} height={360} className="rounded-lg" />
            </div>

            {/* Car Details on the Right */}
            <div className="flex flex-col lg:w-[50%] items-start gap-4 justify-between md:ml-14 md:mt-10 mt-3">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">{car.name}</h2>

              {/* Price below the Image */}
              <div className="text-xl font-bold text-gray-800 mb-4">
                <span className="text-gray-600">Price:</span> {car.pricePerDay}
              </div>

              {/* Car Specifications */}
              <ul className="text-xl font-medium  text-gray-700">
                <li className="mt-2">Fuel Capacity: {car.fuelCapacity}</li>
                <li className="mt-2">Seating Capacity: {car.seatingCapacity}</li>
                <li className="mt-2">Transmission: {car.transmission}</li>
                <li className="mt-2">Type: {car.type}</li>
              </ul>
            </div>
          </section>

          {/* Rent Now Button */}
          <div className="flex justify-center mt-3 md:ml-[250px]">
            <Link href={`/payment/${car.slug}`}>
              <button className="bg-[#3563e9] p-3 sm:p-4 px-6 sm:px-14 text-white rounded-lg duration-300 hover:scale-105 transition-all">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Wrap>
  );
}

