import React from "react"
// import Heading from "../../common/Heading"
import "./hero.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import heroRight from'../../images/about.jpg'
import banner1 from '../../images/banner-shape1-1.png'
import banner2 from '../../images/banner-shape2-1.png'
import { Button } from "@mui/material";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='flexLeft'>
          <div className="hero-item">
             <div style={{width:'100%',height:'100%',position:'relative'}} className="hero-bgImg">
               <img src={banner1} className='circleLeft'  alt="banner-1"/>
               <img src={banner2} className={'circleRight'} style={{right:'0',width:'350px',position:'absolute',height:'auto'}} alt='banner-2'/>
             </div>
             <h2 className="heroTitle">Find the right mortage for you!</h2>
            <div style={{backgroundColor:"#eee",marginTop:'-60px'}} className="heroCalculator">
              <span style={{padding:'10px 30px',fontSize:'20px',color:'#fff', backgroundColor:'green',marginLeft:"30px"}}>Calculators</span>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },backgroundColor:"#eee"
              }}
              noValidate
              autoComplete="off"
            >
            <div>
              <TextField label="Total Amount" id="outlined-size-normal" defaultValue="$30,000" />
              <TextField label="Down Payment" id="outlined-size-normal" defaultValue="$6,000" />
            </div>
            <div>
              <TextField label="Interest Rate" id="outlined-size-normal" defaultValue="4%" />
              <TextField label="Mortage Period" id="outlined-size-normal" defaultValue="30" />
            </div>
            
            <Button size='large' sx={{mx:1,fontSize:'18px',textTransform:'capitalize'}} color='success' variant='contained'>Calculate Mortage</Button>
            <Button size='large' sx={{mx:1,fontSize:'18px',textTransform:'capitalize',backgroundColor:'#1d2636'}} variant='contained'>Call Us: (800) 530-5457</Button>
            
           </Box>
            </div>
          </div>
          <div className="hero-item heroImgRight"></div>
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