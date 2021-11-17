import React from "react";
import Link from "next/link";
import Image from "next/image";
import redLogo from "../public/images/airbnb-red-icon.png";
import searchIcon from "../public/images/search-12-32.png";
import blackGlobe from "../public/images/icons8-globe-24.png";
import UserDropDown from "./UserDropDown";

function SearchHeader({ formattedLocation, start, end, guestCount }) {
  return (
    <header className="fixed top-0 z-20 flex w-full bg-white shadow-md px-14">
      <Link href="/" passHref>
        <button className="flex flex-row items-center my-4 flex-3">
          <div className="flex">
            <Image src={redLogo} width={32} height={32} alt="logo" />
          </div>
          <div className="hidden pl-2 ml-1 text-2xl font-medium md:block text-airbnb">
            airbnb
          </div>
        </button>
      </Link>
      <div className="pl-8 flex-3 w-96">
        <button className="flex items-center justify-between px-2 py-2 my-3 text-sm font-normal border border-gray-300 rounded-full shadow-sm w-96 hover:shadow-md">
          <span className="pl-2 font-medium">{formattedLocation}</span>
          <div className="h-2 py-3 pl-2 border-r border-gray-300"></div>
          <span className="inline-block px-3 font-medium">
            {start}-{end}
          </span>
          <div className="h-2 py-3 pl-2 border-r border-gray-300"></div>
          <span className="inline-block px-3 font-medium">
            {guestCount} {guestCount == 1 ? "guest" : "guests"}
          </span>
          <span className="ml-2 rounded-full bg-airbnb w-7 h-7">
            <div className="relative w-3 top-1 left-2">
              <Image src={searchIcon} width={10} height={10} alt="" />
            </div>
          </span>
        </button>
      </div>
      <div className="flex items-center flex-3 pl-14">
        <button className="px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-2xl">
          Become a host
        </button>
        <button>
          <div className="px-3 pt-2 ml-1 mr-4 rounded-full hover:bg-gray-100">
            <Image src={blackGlobe} alt="globe icon" width={20} height={20} />
          </div>
        </button>
        <UserDropDown />
      </div>
    </header>
  );
}

export default SearchHeader;
