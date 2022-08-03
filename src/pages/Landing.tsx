import React from "react";
import BestOffers from "@/components/Landing/BestOffers";
import WelcomeScreen from "@/components/Landing/WelcomeScreen";
import Map from "@/components/Landing/Map";
import Footer from "@/components/Landing/Footer";

const Landing = () => {
  return (
    <>
      <WelcomeScreen />
      <Map />
      <BestOffers />
      <Footer />
    </>
  );
};

export default Landing;
