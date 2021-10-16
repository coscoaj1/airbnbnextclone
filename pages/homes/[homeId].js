import React from "react";
import { useRouter } from "next/router";

function homeDetail() {
  const router = useRouter();
  const homeId = router.query.homeId;
  return (
    <div className="w-screen h-screen bg-black">
      <h1 className="text-4xl text-purple-700 font-medium">
        Details about home {homeId}
      </h1>
    </div>
  );
}

export default homeDetail;
