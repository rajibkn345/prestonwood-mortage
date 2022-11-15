import React from "react"
// import { footer } from "../../data/Data"
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
          <div className="about-us">
            <h4>About Us</h4>
            <p>We've been helping customers afford the home of their dreams for many years and we love what we do.</p>
          </div>          
          <div className="contact-us">
            <h4>Contact Us</h4>
            <p>15150 Preston Road, Suite 300 Dallas, TX75248 <br/>Phone:(800) 530-5457<br/>john@prestonwoodmortage.com</p>
          </div>          
          <div className="Disclaimers">
            <h4 style={{marginBottom:'10px'}}>Disclaimers</h4>
            <ul>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>Legal</li>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>Privacy Policy</li>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>Accessibility Statement</li>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>Site Map</li>
            </ul>
          </div>          
          <div className="Resources">
          <h4 style={{marginBottom:'10px'}}>Resources</h4>
            <ul>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>Loan Programs</li>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>Loan Process</li>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>Mortage Basics</li>
              <li style={{paddingBottom:'10px',borderBottom: "1px dashed currentColor"}}>FAQ</li>
            </ul>  
          </div>          
        </div>
      </footer>
      <div className='legal'>
        <span>© 2022 KERRYG</span>
      </div>
    </>
  )
}

export default Footer
