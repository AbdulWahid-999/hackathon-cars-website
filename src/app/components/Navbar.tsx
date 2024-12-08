import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import Wrap from "./Wrap";
import Image from "next/image";

export default function Navbar() {
  return (
    <Wrap>
      <header>
        <nav className="flex justify-between items-center mt-7 lg:py-5 lg:px-5 px-1 ">
          <div className="flex">
            <h1 className="text-[#3563E9] text-[24px] font-[600] lg:text-[35px] lg:font-bold lg:leading-10">
              MORENT
            </h1>
          </div>

          {/* Mobile Header */}
        
            <div className="flex   justify-between items-center    lg:flex-row lg:items-center lg:-translate-x-[220px] absolute left-[5px] top-[80px] xxxs:left-[35px] xxs:left-[55px] xs:left-[80px] xsm:relative xsm:left-[0px] xsm:top-1">
              <div className="flex items-center ">
                <Link href="/">
                  <CiSearch className="text-lg md:left-10 lg:left-12 md:text-2xl relative left-6" />
                </Link>
                <input
                  type="search"
                  name="search"
                  placeholder="Search something here"
                  className="md:py-3 md:px-12 rounded-md md:rounded-full border-[2px] focus:outline-none border-[#C3D4E966] lg:w-[500px] lg:px-16  text-xs sm:text-sm md:text-lg w-[230px] xxs:w-[290px] xs:w-[330px]  xsm:w-[300px]  py-2 pl-7 "
                />
              </div>
              <Link href="/">
                <VscSettings className=" md:relative md:right-14  md:text-3xl lg:border-[0px] lg:border-none lg:rounded-none lg:p-0  p-[2px]border-[1px] border-[#C3D4E966] rounded-md text-[34px] p-[2px] hover:scale-105 ml-2 mr-1 "  />
              </Link>
            </div>
          

          {/* Right Side Icons (Mobile & Desktop) */}
          <div className="flex md:gap-7">
            <IoIosHeart className="border-[1px] border-[#C3D4E966] rounded-full p-2 text-5xl text-gray-500 hover:scale-105 duration-300 hidden md:flex hover:text-[#3563E9]" />
            <IoIosNotifications className="hidden md:flex border-[1px] border-[#C3D4E966] rounded-full p-2 text-5xl text-gray-500 hover:scale-105 duration-300 hover:text-[#3563E9]" />
            <IoMdSettings className="hidden md:flex border-[1px] border-[#C3D4E966] rounded-full p-2 text-5xl text-gray-500 hover:scale-105 duration-300 hover:text-[#3563E9]" />
            <Link href="#">
              <Image
                src="/prof.png"
                alt=""
                width={40}
                height={40}
                className="md:w-[44px] md:h-[44px] w-[36px] h-[36px] hover:scale-105 duration-300 -translate-x-[0px] lg:-translate-x-0"
              />
            </Link>
          </div>
        </nav>
      </header>
    </Wrap>
  );
}
