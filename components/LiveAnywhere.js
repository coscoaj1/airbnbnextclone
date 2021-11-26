import React, { useRef } from "react";
import Image from "next/image";
import LiveAnywhereCard from "./LiveAnywhereCard";
import OutdoorImg from "../public/images/OutdoorGetaways.jpg";
import UniqueImg from "../public/images/UniqueStays.jpg";
import EntireImg from "../public/images/EntireHomes.jpg";
import PetsImg from "../public/images/PetsAllowed.jpg";
import leftArrow from "../public/images/left-chevron.png";
import rightArrow from "../public/images/right-chevron.png";

const liveAnywhereList = [
  {
    img: OutdoorImg,
    title: "Outdoor getaways",
  },
  {
    img: UniqueImg,
    title: "Unique stays",
  },
  {
    img: EntireImg,
    title: "Entire homes",
  },
  {
    img: PetsImg,
    title: "Pets allowed",
  },
];

function LiveAnywhere() {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const scrollRight = () => {
    scroll(400);
    //showScrollLeft;
    //hideScrollRight;
  };
  const scrollLeft = () => {
    scroll(-400);
    //showScrollRight;
    //hideScrollLeft;
  };
  return (
    <div className="relative w-full h-auto my-4">
      {/* <div className="absolute right-0 z-10 hidden sm:block md:hidden top-36">
        <span className="top-1/2">
          <button
            onClick={() => scrollRight()}
            className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-200 rounded-full shadow-3xl"
          >
            <Image width={10} height={10} src={rightArrow} alt="" />
          </button>
        </span>
      </div> */}
      {/* <div className="absolute left-0 z-10 hidden sm:block md:hidden top-36">
        <span className="top-1/2">
          <button
            onClick={() => scrollLeft()}
            className="flex items-center justify-center w-6 h-6 bg-gray-100 border border-gray-200 rounded-full shadow-3xl"
          >
            <Image width={10} height={10} src={leftArrow} alt="" />
          </button>
        </span>
      </div> */}
      <h2 className="text-xl font-bold text-center sm:text-2xl md:text-4xl sm:text-left">
        Live anywhere
      </h2>
      <div
        ref={ref}
        id="liveAnywhereList"
        className="relative grid h-auto grid-rows-1 gap-4 mx-2 mt-4 overflow-x-scroll overflow-y-hidden md:overflow-x-hidden grid-col-4 "
      >
        {liveAnywhereList.map((item) => (
          <div key={item.title}>
            <LiveAnywhereCard card={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveAnywhere;
