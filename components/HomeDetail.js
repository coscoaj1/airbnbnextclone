import React from "react";
import Image from "next/image";

function HomeDetail({ item }) {
  return (
    <div>
      <div className="border-t border-gray-300 my-5"></div>
      <div className="flex">
        <Image
          className="rounded-xl"
          src={item.pictureUrl}
          height={200}
          width={300}
        />
        <div>{item.description}</div>
      </div>
    </div>
  );
}

export default HomeDetail;
