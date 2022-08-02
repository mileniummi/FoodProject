import React from "react";
import WelcomeScreen from "./WelcomeScreen";
import Map from "./Map";
import Footer from "./Footer";
import BestOffers from "@/components/Landing/BestOffers";

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
