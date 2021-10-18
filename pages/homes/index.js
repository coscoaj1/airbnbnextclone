import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { format, differenceInDays } from "date-fns";
import SearchHeader from "../../components/SearchHeader";
import HomeDetail from "../../components/HomeDetail";
import SearchButton from "../../components/Buttons/SearchButton";
import GoogleMap from "../../components/GoogleMap";
import Geocode from "react-geocode";

function HomeListings({ data }) {
  const [geoLocation, setGeoLocation] = useState(null);

  const router = useRouter();
  const { startDate, endDate, location, totalGuests } = router.query;

  const formattedLocation = location.split(",")[0];
  const headerStart = new Date(startDate);
  const start = format(headerStart, "MMM d");
  const headerEnd = new Date(endDate);
  const sameEnd = format(headerEnd, "MMM d");

  const dayCount = differenceInDays(headerEnd, headerStart);

  const end =
    start.split(" ")[0] == sameEnd.split(" ")[0]
      ? format(headerEnd, "d")
      : format(headerEnd, "MMM d");

  const actionList = [
    "Free cancellation",
    "Type of Place",
    "Price",
    "Instant Book",
    "More filters",
  ];

  const zoom = 14;
  console.log(location);
  useEffect(() => {
    function GeoCoder() {
      Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

      Geocode.setLocationType("ROOFTOP");

      Geocode.fromAddress(location).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setGeoLocation({ lat: +lat, lng: +lng });
          console.log(location);
        },
        (error) => {
          console.error(error);
        }
      );
    }
    GeoCoder();
  }, [location]);
  console.log(geoLocation);

  return (
    <div className="box-border">
      <SearchHeader
        formattedLocation={formattedLocation}
        start={start}
        end={end}
        guestCount={totalGuests}
      />
      <div className="flex flex-row">
        <div className="w-7/12">
          <div className="mx-6 my-24">
            <section>
              <div className="text-sm text-gray-900">
                18 stays · {start}-{end} · {totalGuests}{" "}
                {totalGuests == 1 ? <span>guest</span> : <span>guests</span>}
              </div>
              <div className="text-3xl font-bold">
                Stays in {formattedLocation}
              </div>
              <div className="flex my-4">
                {actionList.map((item) => (
                  <SearchButton key={item} action={item} />
                ))}
              </div>
            </section>
            <main>
              {data.map((item) => {
                return (
                  <div key={item.id}>
                    <HomeDetail item={item} dayCount={dayCount} />
                  </div>
                );
              })}
            </main>
          </div>
        </div>
        <div className="sticky top-16 w-5/12 h-72">
          {geoLocation && <GoogleMap center={geoLocation} zoom={zoom} />}
        </div>
      </div>
    </div>
  );
}

export default HomeListings;
export async function getServerSideProps(context) {
  const response = await fetch("http://localhost:3001/api/homes");
  const data = await response.json();
  return {
    props: { data },
  };
}
