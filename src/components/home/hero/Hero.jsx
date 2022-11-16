import React from "react"
// import Heading from "../../common/Heading"
import "./hero.css"
import heroRight from'../../images/about.jpg'
import banner1 from '../../images/banner-shape1-1.png'
import banner2 from '../../images/banner-shape2-1.png'

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='flexLeft'>
          <div className="hero-item">
          <div style={{position:'relative'}} className="hero-bgImg">
            <img src={banner1} className='circleLeft'  alt="banner-1"/>
            <img src={banner2} className={'circleRight'} style={{right:'0',width:'350px',position:'absolute',height:'auto'}} alt='banner-2'/>
          </div>
            <h2>Find the right mortage for you!</h2>
          </div>
          <div className="hero-item"><img src={heroRight} alt="img"/></div>
          {/* <Heading title='Search Your Next Home ' subtitle='Find new & featured property located in your local city.' /> */}
          {/* <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Location' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Property Type' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Price Range' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form> */}
        </div>
      </section>
    </>
  )
}

export default Hero;