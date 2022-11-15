import React, { useState } from "react"
import "./header.css"
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  };



  return (
    <>
      <header>
        <div className='container flexHeader'>
          <div className='logo'>
           <Button color="success">KerryG</Button>
          </div>
          <div className='nav flexGrow'>
          <Button
          sx={{textTransform:'capitalize',color:"#555"}}
          size='large' 
          >
           Home
          </Button>
          <Button
          sx={{textTransform:'capitalize',color:"#555"}}
          size='large'
          >
           Purhcase
          </Button>
          <Button
          sx={{textTransform:'capitalize',color:"#555"}}
          size='large'
          >
           Refinance
          </Button>
          <Button
          sx={{textTransform:'capitalize',color:"#555"}}
          size='large'
          >
           Apply Now
          </Button>

          <Button
          className="dropDownMenu"
          sx={{textTransform:'capitalize',color:"#555"}}
          size='large'
           id="fade-button"
           aria-controls={open ? 'fade-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
           
          >
           Resources
          </Button>
             <Menu
             sx={{position:'absolute'}}
              className="menuitems"
               id="fade-menu"
               MenuListProps={{
                 'aria-labelledby': 'fade-button',
               }}
               open={open}
               TransitionComponent={Fade}
             >
               <MenuItem>Blog Page</MenuItem>
               <MenuItem>Policy</MenuItem>
               <MenuItem>Site Map</MenuItem>
               <MenuItem>FAQ</MenuItem>
               <MenuItem>Legal</MenuItem>
               <MenuItem>Accessibility Statement</MenuItem>
             </Menu>
             <Button
          sx={{textTransform:'capitalize',color:"#555"}}
          size='large' 
          >
           About Us
          </Button>
          <Button
          sx={{textTransform:'capitalize',color:"#555"}}
           size='large'
          >
           Contact Us
          </Button>

          </div>
          <Button sx={{textTransform:'capitalize'}} variant="contained" color="success">Calculator</Button>

          <div className='toggle'>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
