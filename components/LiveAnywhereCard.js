import React from "react";
import Image from "next/image";

function LiveAnywhereCard({ card }) {
  return (
    <div
      id="card"
      className="h-auto col-auto font-bold  row-span-full"
      key={card.name}
    >
      <div>
        <Image
          className="w-full h-auto rounded md:h-auto md:w-full sm:h-48"
          src={card.img}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <p className="text-lg text-center sm:text-left">{card.title}</p>
    </div>
  );
}

export default LiveAnywhereCard;
