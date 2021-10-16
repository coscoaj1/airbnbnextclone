import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/images/airbnb-48.ico";
import redLogo from "../public/images/airbnb-red-icon.png";
import searchIcon from "../public/images/search-12-32.png";
import globe from "../public/images/icons8-globe-50.png";
import blackGlobe from "../public/images/icons8-globe-24.png";
import UserDropDown from "./UserDropDown";

function SearchHeader() {
  return (
    <header className="ml-14 flex w-full h-30">
      <button className="flex-5 flex flex-row items-center">
        <div className="flex ">
          <Image src={redLogo} width={32} height={32} alt="logo" />
        </div>
        <div className="hidden md:block font-medium text-2xl pl-1">airbnb</div>
      </button>
    </header>
  );
}

export default SearchHeader;
