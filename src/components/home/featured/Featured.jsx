import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Our core services' subtitle='A perfect loan that suits you is just around the corner – affordable monthly payments and simplified purchasing & refinancing that come along with the lowest interest rates.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
