import Wrap from "@/app/components/Wrap";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

async function getDataPayment(slug: string) {
    const query = `*[_type == "car" && slug.current == $slug][0]{
        _id,
        name,
        pricePerDay,
        "imageUrl": image.asset->url
    }`;
    const params = { slug };
    const data = await client.fetch(query, params);
    return data;
}

const Payment = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const data = await getDataPayment((await params).slug); // Fetch car data based on the slug

    if (!data) {
        return <div>Loading...</div>; // Handle loading or no data found
    }

    return (
        <Wrap>
        <div className="min-h-s-3 gap-6">
            <div className="lg:col-span-2 space-y-8">
                {/* Billing Information */}
                <section className="p-4 border rounded-lg">
                    <h2 className="text-xl font-bold">Billing Info</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500">Please enter your billing info</p>
                        <p className="text-gray-500">Step 1 of 4</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {["Name", "Phone number", "Address", "Town / City"].map(
                            (field, index) => (
                                <div key={index}>
                                    <label
                                        htmlFor={field.toLowerCase().replace(" ", "")}
                                        className="block text-base font-semibold mb-2"
                                    >
                                        {field}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={field}
                                        className="w-full p-3 rounded-md bg-gray-100"
                                    />
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* Rental Information */}
                <section className="p-4 border rounded-lg">
                    <h2 className="text-xl font-bold">Rental Info</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500">Please select your rental info</p>
                        <p className="text-gray-500">Step 2 of 4</p>
                    </div>
                    <div className="space-y-6">
                        {["Pick-Up", "Drop-Off"].map((type, idx) => (
                            <div key={idx} className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="rentalType"
                                        id={type.toLowerCase()}
                                        defaultChecked={idx === 0}
                                    />
                                    <label htmlFor={type.toLowerCase()}>{type}</label>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {["Location", "Date", "Time"].map((field, i) => (
                                        <div key={i}>
                                            <label
                                                htmlFor={`${type.toLowerCase()}-${field.toLowerCase()}`}
                                                className="block text-base font-semibold mb-2"
                                            >
                                                {field}
                                            </label>
                                            <input
                                                type={
                                                    field === "Date"
                                                        ? "date"
                                                        : field === "Time"
                                                        ? "text"
                                                        : "text"
                                                }
                                                placeholder={field}
                                                className="w-full p-3 rounded-md bg-gray-100"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Payment Method */}
                <section className="py-4 px-5 border rounded-lg bg-white">
                    <h2 className="text-xl font-bold tracking-tight mt-4">
                        Payment Method
                    </h2>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500 mb-4">
                            Please enter your payment method
                        </p>
                        <p className="text-gray-500 mb-4">Step 3 of 4</p>
                    </div>
                    <div className="space-y-4 border rounded-lg bg-[#F6F7F9] p-4">
                        <div className="my-4 flex justify-between items-center">
                            <div>
                                <input
                                    type="radio"
                                    name="paymentType"
                                    id="credit-card"
                                    defaultChecked
                                />
                                <label htmlFor="credit-card" className="ml-2 font-semibold">
                                    Credit Card
                                </label>
                            </div>
                            <Image
                                src="/Visa.png"
                                alt="Visa Card"
                                width={92}
                                height={20}
                                className="w-[92px] h-[20px]"
                            />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="cardNumber"
                                    className="block text-base font-semibold mb-2"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    placeholder="Card number"
                                    className="p-3 rounded-lg bg-white w-full h-[56px]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="expiryDate"
                                    className="block text-base font-semibold mb-2"
                                >
                                    Expiry Date
                                </label>
                                <input
                                    type="date"
                                    className="p-3 rounded-lg bg-white w-full h-[56px]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="cardHolder"
                                    className="block text-base font-semibold mb-2"
                                >
                                    Card Holder
                                </label>
                                <input
                                    type="text"
                                    placeholder="Card holder"
                                    className="p-3 rounded-lg bg-white w-full h-[56px]"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="cvc"
                                    className="block text-base font-semibold mb-2"
                                >
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    className="p-3 rounded-lg bg-white w-full h-[56px]"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="p-4 border rounded-lg">
                    <h2 className="text-xl font-bold">Confirmation</h2>
                    <p className="text-gray-500">
                        We are getting to the end. Just a few clicks and your rental is
                        ready!
                    </p>
                    <div className="space-y-4 mt-9">
                        {[ 
                            "I agree with sending marketing emails.", 
                            "I agree with terms and conditions.",
                        ].map((text, idx) => (
                            <label
                                key={idx}
                                className="flex items-center gap-2 p-3 border rounded-md bg-gray-100"
                            >
                                <input type="checkbox" />
                                {text}
                            </label>
                        ))}
                    </div>
                    <Link href="/admin">
                        <button className="w-[140px] p-3 mt-4 bg-blue-500 text-white rounded-md">
                            Rent Now
                        </button>
                    </Link>

                    <Image
                        src="/Safe Data.png"
                        alt="safe"
                        width={700}
                        height={400}
                        className="w-[700px] h-[100px] mt-9"
                    />
                </section>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
                {/* Rental Summary Section */}
                <section className="p-4 border rounded-lg bg-gray-50 ">
                    <h2 className="text-xl font-bold mb-4">Rental Summary</h2>
                    <p className="text-gray-500 mb-8">
                        Prices may change depending on the length of the rental and the
                        price of your rental car.
                    </p>
                    <div className="flex items-center space-x-4">
                        <Image
                            src={data?.imageUrl || "/default-image.png"}  // fallback image if data.imageUrl is undefined
                            alt={data?.name || "Car Image"}
                            width={100}
                            height={100}
                            className="w-[150px] h-[80px] md:w-[250px] md:h-[100px] rounded-lg object-cover"
                        />
                        <div>
                            <h3 className="text-3xl font-bold">{data?.name}</h3>  {/* Display car name */}
                            <div className="flex items-center gap-[4px]">
                                <p className="text-yellow-500 flex items-center gap-[2px]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <CiStar />
                                </p>
                                <p className="text-gray-500">440+ Reviews</p>
                            </div>
                        </div>
                    </div>
                    <hr className="text-gray-500 mt-10" />
                    <div className="mt-4 space-y-2">
                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium text-base text-[#90A3BF]">
                                Subtotal
                            </span>
                            <span className="font-semibold text-base">${data?.pricePerDay}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span className="font-medium text-base text-[#90A3BF]">
                                Tax
                            </span>
                            <span className="font-semibold text-base">$2</span>
                        </div>
                    </div>
                    <div className="my-5 flex justify-between items-center p-3 border rounded-lg w-full h-[56px]">
                        <span className="font-medium text-base text-[#90A3BF]">
                            Apply promo code
                        </span>
                        <span className="font-semibold mx-4 text-base">Apply code</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center font-bold text-lg gap-1">
                        <div className="flex flex-col">
                            <span>Total Rental Price</span>
                            <span className="font-medium text-sm text-[#90A3BF] px-1">
                                Overall price and includes rental discount
                            </span>
                        </div>
                        <span className="text-3xl font-bold">{data?.pricePerDay}</span>
                    </div>
                </section>
            </div>
        </div>
        </Wrap>
    );
};

export default Payment;
