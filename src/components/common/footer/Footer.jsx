import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className="about-us">About Us</div>          
          <div className="contact-us">Contact Us</div>          
          <div className="Disclaimers">Disclaimers</div>          
          <div className="Resources">Resources</div>          
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 KERRYG</span>
      </div>
    </>
  )
}

export default Footer
