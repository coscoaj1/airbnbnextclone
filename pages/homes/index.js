import React, { useState, useEffect } from "react";

function getStoredData() {
  const homesList = localStorage.getItem("searchParams");
  return JSON.parse(homesList);
}
function HomeListings() {
  const [homes, setHomes] = useState(localStorage.getItem("searchParams"));
  console.log(homes);
  useEffect(() => {
    localStorage.setItem("searchParams", JSON.stringify(homes));
  }, [homes]);
  return (
    <div>
      <div>
        Homes available in {homes.location} for {homes.guestCount} guest between{" "}
        {homes.selectedDates[0].toLocaleString().split("T")[0]} and{" "}
        {homes.selectedDates[1].toLocaleString().split("T")[0]}
      </div>
      <div>home2</div>
      <div>home3</div>
    </div>
  );
}

export default HomeListings;
