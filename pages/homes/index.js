import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomeListings() {
  const router = useRouter();
  const { startDate, endDate, location, totalGuests } = router.query;

  const formattedStartDate = startDate.split(",")[0];
  const formattedEndDate = endDate.split(",")[0];

  return (
    <div className="ml-14">
      <div className="text-sm text-gray-900">
        18 stays · {formattedStartDate} - {formattedEndDate} · {totalGuests}{" "}
        guests
      </div>

      <div className="text-3xl font-bold">Stays in {location}</div>
      <div>home3</div>
      <Footer />
    </div>
  );
}

export default HomeListings;
