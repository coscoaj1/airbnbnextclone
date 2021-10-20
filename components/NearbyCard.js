import React from "react";
import Image from "next/image";

export default function NearbyCard({ card }) {
  return (
    <div className=" flex flex-row my-5" key={card.name}>
      <Image
        className="rounded-md"
        src={card.img}
        alt=""
        width={65}
        height={65}
      />
      <div className="flex items-center text-base ml-3">
        <ul>
          <li className="font-medium">{card.name}</li>
          <li>{card.drive}</li>
        </ul>
      </div>
    </div>
  );
}
