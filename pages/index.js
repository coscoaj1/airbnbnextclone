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

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  console.log({ session, loading });
  return (
    <div className="font-circular">
      <Header />
      <Hero />
      <Bottombar />
      <div className="px-14">
        <NearbyCardList />
        <LiveAnywhere />
        <TryHosting />
        <Discover />
        <TabsList />
      </div>
    </div>
  );
}
