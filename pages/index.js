import React, { useState, useEffect } from "react";
import homeService from "../services/homes";
import Discover from "../components/Discover";
import Bottombar from "../components/Bottombar";
import LiveAnywhere from "../components/LiveAnywhere";
import NearbyCardList from "../components/NearbyCardList";
import Hero from "../components/Hero";
import Header from "../components/Header";
import TryHosting from "../components/TryHosting";
import TabsList from "../components/TabsList";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import { useAuth } from "../firebase/auth";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="font-circular box-border">
      {/* <LoginModal /> */}
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
      <Footer />
    </div>
  );
}
// useEffect(() => {
// 	homeService.getAll().then((homes) => setHomes(homes));
// }, []);

// console.log(homes);
