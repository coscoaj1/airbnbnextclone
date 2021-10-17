import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const { format } = require("date-fns");
import Footer from "../../components/Footer";
import SearchHeader from "../../components/SearchHeader";
import HomeDetail from "../../components/HomeDetail";

function HomeListings({ data }) {
  const router = useRouter();
  const { startDate, endDate, location, totalGuests } = router.query;

  //   const formattedStartDate = startDate.split(",")[0];
  //   const formattedEndDate = endDate.split(",")[0];
  const formattedLocation = location.split(",")[0];
  const headerStart = new Date(startDate);
  const start = format(headerStart, "MMM d");
  const headerEnd = new Date(endDate);
  const sameEnd = format(headerEnd, "MMM d");
  //   let end = format(headerEnd, "d");

  const end =
    start.split(" ")[0] == sameEnd.split(" ")[0]
      ? format(headerEnd, "d")
      : format(headerEnd, "MMM d");

  console.log(start.split(" ")[0]);
  console.log(end.split(" ")[0]);

  return (
    <div className="box-border">
      <SearchHeader
        formattedLocation={formattedLocation}
        start={start}
        end={end}
        guestCount={totalGuests}
      />
      <div className="mx-6 my-24">
        <section>
          <div className="text-sm text-gray-900">
            18 stays · {start}-{end} · {totalGuests}{" "}
            {totalGuests == 1 ? <span>guest</span> : <span>guests</span>}
          </div>
          <div className="text-3xl font-bold">Stays in {formattedLocation}</div>
          <div>
            {data.map((item) => {
              return (
                <div key={item.id}>
                  <HomeDetail item={item} />
                </div>
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default HomeListings;
export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3001/api/homes");
  const data = await response.json();
  console.log(data);
  return {
    props: { data },
  };
}

// export async function getStaticProps() {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// 	const data = await response.json();
// 	console.log(data);
// 	if (!data) {
// 		return {
// 			notFound: true,
// 		};
// 	}
// 	return {
// 		props: { data }, // will be passed to the page component as props
// 	};
// }
