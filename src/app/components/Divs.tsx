import React from "react";
import Wrap from "./Wrap";
import { RiArrowUpDownFill } from "react-icons/ri";
import Link from "next/link";

export default function Divs() {
  return (
    <Wrap>
    <section> 
        

      <div className="sm:flex sm:justify-evenly mx-auto py-8">
        <div className="shadow-lg md:px-5 md:py-3 rounded-md w-[450px] h-[90px] xs:w-[500px] xs:h-[100px] xsm:w-[550px] xsm:h-[100px] xsm:pl-10 sm:pl-2">

        <div className="relative bottom-1 left-5 -z-10 ">
          <label className="text-xl xs:text-base font-medium ml-1">
            <input type="radio" name="radio" /> Pick-up
          </label>
        </div>
        <div className="flex md:gap-8 ml-4 gap-4 items-center xsm:gap-11">

        <div >
          <h2 className="relative left-2 text-base ">Locations</h2>
          <select className="text-sm">
            <option>Select Your City</option>
            <option>Karachi</option>
            <option>Islamabad</option>
            <option>Lahore</option>
          </select>
        </div>
        <div >
          <h2 className="relative left-2 text-base">Date</h2>

          <select className="text-sm">
            <option>Select Your Date</option>
            <option>15</option>
            <option>17</option>
            <option>26</option>
            <option>20</option>
            <option>19</option>
          </select>
        </div>
        <div>
          <h2  className="relative left-2 text-base">Time</h2>

          <select className="text-sm">
            <option>Select Your Time</option>
            <option>2:30</option>
            <option>12:30</option>
            <option>4:00</option>
            <option>7:00</option>
            <option>10:30</option>
          </select>
        </div>
        </div>
       </div>
       <div><Link href="/"><RiArrowUpDownFill className="translate-x-48 -translate-y-2 xs:-translate-y-4 xsm:-translate-y-4 xsm:translate-x-60 sm:-translate-x-0 sm:translate-y-5 mx-2 md:translate-y-5 bg-blue-700 text-white  px-5 py-5 text-[65px] rounded-lg  " /></Link></div>
        <div className=" shadow-lg md:px-5 md:py-3 rounded-md w-[450px] h-[90px] xs:w-[500px] xs:h-[100px] xsm:w-[550px] xsm:h-[100px] xsm:pl-10 sm:pl-2">
        <div className="relative bottom-1 left-5 -z-10  ">
          <label className="text-xl xs:text-base font-medium ml-1">
            <input type="radio" name="radio" /> Drop-off
          </label>
        </div>
        <div className="flex md:gap-8 ml-4 gap-4 items-center xsm:gap-11">

        <div >
          <h2 className="relative left-2 text-base">Locations</h2>
          <select  className="text-sm">
            <option>Select Your City</option>
            <option>Karachi</option>
            <option>Islamabad</option>
            <option>Lahore</option>
          </select>
        </div>
        <div >
          <h2 className="relative left-2 text-base">Date</h2>

          <select  className="text-sm">
            <option>Select Your Date</option>
            <option>15</option>
            <option>17</option>
            <option>26</option>
            <option>20</option>
            <option>19</option>
          </select>
        </div>
        <div >
          <h2 className="relative left-2 text-base">Time</h2>

          <select className="text-sm">
            <option>Select Your Time</option>
            <option>2:30</option>
            <option>12:30</option>
            <option>4:00</option>
            <option>7:00</option>
            <option>10:30</option>
          </select>
        </div>
        </div>
        </div>
        </div>
    </section>
    </Wrap>
  );
}
