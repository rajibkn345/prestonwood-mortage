import React from "react";
import About from "../about/About";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Buying from "./Buying/Buying";
import Location from "./location/Location";
import Price from "./price/Price";
import Recent from "./recent/Recent";
import Team from "./team/Team";
import Loan from "./Loan/Loan";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <Buying />
      <Loan />
      {/* <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price /> */}
    </>
  );
};

export default Home;
