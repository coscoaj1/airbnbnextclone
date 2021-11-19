import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/airbnb-48.ico";
import redLogo from "../public/images/airbnb-red-icon.png";
import searchIcon from "../public/images/search-12-32.png";
import globe from "../public/images/icons8-globe-50.png";
import blackGlobe from "../public/images/icons8-globe-24.png";
import UserDropDown from "./UserDropDown";
import Link from "next/link";

function LogoHeader({ navbar }) {
  return (
    <div className="relative flex flex-row mx-24">
      <button className="flex flex-row items-center flex-5">
        <div className={navbar ? "mt-2" : "flex "}>
          <Image
            src={navbar ? redLogo : logo}
            width={32}
            height={32}
            alt="logo"
          />
        </div>
        <div
          className={
            navbar
              ? "text-airbnb hidden md:block font-medium tracking-tight text-2xl pl-1"
              : "hidden md:block font-medium tracking-tight text-2xl pl-1"
          }
        >
          airbnb
        </div>
      </button>
      <div className="flex-6 w-84">
        <button
          className={
            navbar
              ? "flex justify-between items-center my-3 py-2 px-2 rounded-full border border-gray-300 shadow-sm text-sm font-normal hover:shadow-md"
              : "hidden"
          }
        >
          <span className="pl-2 font-medium">Start your search</span>
          <span className="relative ml-20 rounded-full bg-airbnb w-7 h-7">
            <div className="relative w-3 top-1 left-2">
              <Image src={searchIcon} alt="search icon" />
            </div>
          </span>
        </button>
      </div>
      <div className="flex items-center justify-end flex-5">
        <Link to="/fileUpload" href="/fileUpload">
          <button
            className={
              navbar
                ? "py-2 px-3 text-sm font-medium hover:bg-gray-100 rounded-2xl"
                : "py-2 px-3 text-sm font-medium hover:bg-gray-50 hover:bg-opacity-20  rounded-2xl"
            }
          >
            Become a host
          </button>
        </Link>
        <button>
          <div
            className={
              navbar
                ? "ml-1 mr-4 px-3 pt-2.5 pb-1 hover:bg-gray-100 rounded-full"
                : "ml-1 mr-4 px-3 pt-2.5 pb-1 hover:bg-gray-50 hover:bg-opacity-20 rounded-full"
            }
          >
            <Image
              src={navbar ? blackGlobe : globe}
              alt="globe icon"
              width={20}
              height={20}
            />
          </div>
        </button>
        <UserDropDown navbar={navbar} />
      </div>
    </div>
  );
}

export default LogoHeader;
