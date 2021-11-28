import React, { useState, useEffect } from "react";
import Image from "next/image";
import searchIcon from "../public/images/magnifying-glass.png";
import { Transition } from "@headlessui/react";
import { Popover } from "@headlessui/react";
export default function MobileHeader() {
  const [mobileNav, setMobileNav] = useState(false);
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", changeHeader);
    return () => window.removeEventListener("scroll", changeHeader);
  });
  const handleClick = () => {
    console.log("clicked");
  };

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setMobileNav(true);
    } else {
      setMobileNav(false);
    }
  };

  return (
    <div className={mobileNav ? "mobileNav-active" : "mobileNav"}>
      <Popover as="div" className="fixed top-0 z-50 w-screen h-full sm:hidden">
        <Popover.Button
          onClick={handleClick}
          className={mobileNav ? "mobileNavButton-active" : "mobileNavButton"}
          aria-label="mobile dropdown menu"
        >
          <Image width={18} height={18} src={searchIcon} alt="" /> Where are you
          going?
        </Popover.Button>
        <Transition
          className="absolute left-0 z-50 w-screen"
          enter="transition ease-in-out duration-300 transform"
          enterFrom="translate-y-full"
          enterTo="translate-y-10"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
        >
          <Popover.Panel className="z-50 flex flex-col items-center w-full h-screen gap-4 text-3xl font-bold text-black bg-white border border-purple-500">
            <div className="cursor">
              <input className="outline-none" type="text" autofocus />
              <i></i>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
