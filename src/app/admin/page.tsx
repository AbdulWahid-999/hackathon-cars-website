import React from "react";
import { AiFillSignal } from "react-icons/ai";
import { FaBars, FaCar, FaEnvelope, FaMoon, FaRegCalendarAlt, FaSignOutAlt, FaSun } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHelp } from "react-icons/tb";
import { TiBriefcase } from "react-icons/ti";
import Image from "next/image";

export default function Dashboard() {
    return (
        <div className="max-w-[1440px] mx-auto p-4 flex flex-col lg:flex-row gap-6 bg-white">
            {/* Sidebar */}
            <div className="lg:w-[286px] w-full bg-white p-4 rounded-lg flex flex-col justify-between shadow-md">
                <div>
                    <h1 className="text-sm font-semibold my-4 text-[#94A7CB]">Main Menu</h1>
                    <ul className="space-y-3">
                        <li>
                            <div className="flex items-center gap-3 p-3 bg-[#3563E9] rounded-md">
                                <FaBars className="text-white text-xl" />
                                <span className="text-white font-medium">Dashboard</span>
                            </div>
                        </li>
                        {/* Additional Menu Items */}
                        {[{ icon: <FaCar />, label: "Car Rent" }, { icon: <AiFillSignal />, label: "Insight" }, { icon: <FaEnvelope />, label: "Reimburse" }, { icon: <FaRegCalendarAlt />, label: "Calendar" }].map((item, index) => (
                            <li key={index}>
                                <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100">
                                    {React.cloneElement(item.icon, { className: "text-[#90A3BF] text-xl" })}
                                    <span className="text-[#90A3BF] font-medium">{item.label}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h1 className="text-sm font-semibold my-4 text-[#94A7CB]">Preference</h1>
                    <ul className="space-y-3">

                        {[{ icon: <IoSettingsOutline />, label: "Settings" }, { icon: <TbHelp />, label: "Help & Center" }].map((item, index) => (
                            <li key={index}>
                                <div className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-100">
                                    {React.cloneElement(item.icon, { className: "text-[#90A3BF] text-xl" })}
                                    <span className="text-[#90A3BF] font-medium">{item.label}</span>
                                </div>
                            </li>
                        ))}

                        <li className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <TiBriefcase className="text-[#90A3BF] text-xl" />
                                <span className="text-[#90A3BF] font-medium">Dark Mode</span>
                            </div>
                            <div className="flex items-center bg-gray-100 p-1 rounded-full w-14">
                                <div className="bg-[#3563E9] w-6 h-6 rounded-full flex items-center justify-center">
                                    <FaSun className="text-white text-sm" />
                                </div>
                                <FaMoon className="text-gray-400 text-sm ml-2" />
                            </div>
                        </li>
                    </ul>
                </div>

                <button className="flex items-center gap-3 mt-6 text-gray-500">
                    <FaSignOutAlt className="text-xl" />
                    <span className="font-medium">Log Out</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row gap-6">
                {/* Details Car */}
                <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Details Rental</h2>
                    <Image src="/Maps.png" alt="Map" width={500} height={200} className="w-full h-48 object-cover rounded-lg" />
                    <div className="mt-4 flex items-center gap-4">
                        <Image src="/View 1.png" alt="Nissan" width={64} height={64} className="object-cover rounded-md" />
                        <div>
                            <h3 className="text-base font-semibold">Nissan GT-R</h3>
                            <p className="text-sm text-gray-500">Sport Car</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">#9761</p>

                    {/* Pickup and Drop-off */}
                    <div className="mt-6 space-y-4">
                        {["Pick-Up", "Drop-Off"].map((label, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-2">
                                    <input type="radio" name="trip" checked={index === 0} />
                                    <h3 className="text-sm font-semibold">{label}</h3>
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 mt-2 mb-9">
                                    {["Locations", "Date", "Time"].map((field, idx) => (
                                        <div key={idx} className="flex-1">
                                            <label className="block text-xs text-gray-500">{field}</label>
                                            <select className="w-full bg-white border rounded-md p-2 text-sm">
                                                <option>{field === "Locations" ? "Kota Semarang" : "20 July 2022"}</option>
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <Image src="/Total Rental Price.png" alt="Transactions" width={700} height={300} className="w-700px h-200px  object-cover" />
                    </div>
                </div>


                <div className="w-full lg:w-1/3 space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <Image src="/Top 5 Car Rental.png" alt="Rental Analysis" width={500} height={300} className="w-full h-auto object-cover" />
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-lg font-bold mb-4">Recent Transactions</h2>
                        <Image src="/Recent Transaction.png" alt="Transactions" width={500} height={300} className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
}