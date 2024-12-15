import { LuArrowDownUp } from 'react-icons/lu';
import React from 'react'
import Wrap from './Wrap'

    
  

const PickDrop = () => {
  return (
    <Wrap>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-6">
      {/* Pick-Up  */}
      <div className="flex flex-col w-full max-w-md md:max-w-[582px] bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <input type="radio" name="location" id="pickup" defaultChecked />
          <label htmlFor="pickup" className="text-lg font-semibold">
            Pick-Up
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Locations

            </label>

            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Pick-up location"
            >
              <option>Select your city</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Peshawar</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Date
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Pick-up date"
            >
              <option>1 jan - 30 jan</option>
              <option>1 feb - 20 feb</option>
              <option>1 march - 30 april</option>
              <option>1 june - 30 july</option>
            </select>


          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Time
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Pick-up time"
            >

              <option>Select your date</option>
              <option>12:00 - 3:00</option>
              <option>4:00 - 6:30</option>
              <option>7:30 - 8:40</option>
              <option>10:00 - 11:30</option>
            </select>
          </div>
        </div>
      </div>


      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-md shadow-md">
        <LuArrowDownUp size={24} />
      </div>

      {/* Drop-Off */}
      <div className="flex flex-col w-full max-w-md md:max-w-[582px] bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <input type="radio" name="location" id="dropoff" />
          <label htmlFor="dropoff" className="text-lg font-semibold">
            Drop-Off
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Locations
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Drop-off location"
            >
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Peshawar</option>
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Date
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Drop-off date"
            >

              <option>Select your date</option>
              <option>1 jan - 30 jan</option>
              <option>1 feb - 20 feb</option>
              <option>1 march - 30 april</option>
              <option>1 june - 30 july</option>
            </select>

          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">
              Time
            </label>
            <select
              className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Drop-off time"
            >
              <option>Select your time</option>
              <option>12:00 - 3:00</option>
              <option>4:00 - 6:30</option>
              <option>7:30 - 8:40</option>
              <option>10:00 - 11:30</option>
            </select>
          </div>
        </div>
      </div>
    </div>

</Wrap>
);
};

export default PickDrop;