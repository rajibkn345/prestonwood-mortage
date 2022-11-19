import React from "react"
import About from "../about/About"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Featured />
      {/* <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price /> */}
    </>
  )
}

export default Home
