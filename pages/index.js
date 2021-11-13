import React from "react";
import Discover from "../components/Discover";
import Bottombar from "../components/Bottombar";
import LiveAnywhere from "../components/LiveAnywhere";
import NearbyCardList from "../components/NearbyCardList";
import Hero from "../components/Hero";
import Header from "../components/Header";
import TryHosting from "../components/TryHosting";
import TabsList from "../components/TabsList";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    axios
      .get("https://airbnbclone-backend.herokuapp.com/api/homes")
      .then((res) => console.log(res.data));
  });
  console.log({ session, loading });
  return (
    <div className="overflow-hidden font-circular">
      <Header />
      <Hero />
      <Bottombar />
      <div className="flex flex-col items-center justify-center max-w-lg mx-auto sm:max-w-screen-lg">
        <NearbyCardList />
        <LiveAnywhere />
        <TryHosting />
        <Discover />
        <TabsList />
      </div>
    </div>
  );
}
