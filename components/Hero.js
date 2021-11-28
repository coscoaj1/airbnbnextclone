import React from "react";
import Image from "next/image";
import Hero1440 from "../public/images/bnb2560.webp";
import Hero960 from "../public/images/bnb960.webp";
import mobileHero from "../public/images/bnbheromobile.webp";
import FlexibleButton from "./Buttons/FlexibleButton";
import MobileHeader from "./MobileHeader";

function Hero() {
  return (
    <div className=" w-full h-auto ">
      <div className="relative w-full h-auto">
        <div className="hidden lg:block ">
          <Image
            alt="hero"
            className="h-full w-full"
            src={Hero1440}
            width={2560}
            height={1440}
          />
        </div>
        <div className="relative hidden lg:hidden sm:block">
          <Image
            alt="hero"
            className="center relative"
            layout="responsive"
            src={Hero960}
            width={960}
            height={720}
          />
        </div>
        <div className="sm:hidden block relative w-full">
          <Image
            alt="hero"
            className="object-cover"
            layout="fixed"
            src={mobileHero}
            width={960}
            height={720}
          />
        </div>

        <MobileHeader />
        <div className="absolute top-1/2 w-screen text-center">
          <p className="text-lg font-medium">
            Not sure where to go?{" "}
            <span className="block sm:inline">Perfect.</span>
          </p>
          <FlexibleButton />
        </div>
      </div>
    </div>
  );
}

export default Hero;
