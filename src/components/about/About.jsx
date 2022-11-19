import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
        <div style={{gap:'20px'}} className=' flex mtop'>
          <div style={{width:'100%'}} className='left row'>
            <img src='./immio.jpg' alt='' />
          </div>
          <div style={{width:'100%'}} className='right row'>
            <Heading title='About Prestonwood Mortage Inc.' />

            <p>Welcome to AKAL Mortgages Inc. Mortgages Team with nearly two decades of mortgages industry experience under our belt. We’ll go above and beyond for you, helping you to secure the best mortgages rates and terms, complete a secure mortgages application and address each and every one of your questions and concerns.</p>

<p>We have a access to a large network of lenders, and our specialized mortgages solutions can meet your needs based on your personal financial situation.</p>
            <div style={{display:'flex',gap:'20px'}}>
            <button className='btn2'>Get the best Rate</button>
            <button style={{backgroundColor:"#567"}} className='btn2'>How Much Can You Quality For?</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
