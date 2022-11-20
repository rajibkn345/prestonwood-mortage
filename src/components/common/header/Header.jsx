import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header>
        <div className=" flexHeader">
          <div className="logo">
            <Button color="success">Prestonwood Mortage</Button>
          </div>
          <div className="nav flexGrow">
            <Link to="/">
              <Button
                sx={{ textTransform: "capitalize", color: "#555" }}
                size="large"
              >
                Home
              </Button>
            </Link>
            <Button
              sx={{ textTransform: "capitalize", color: "#555" }}
              size="large"
            >
              Purhcase
            </Button>
            <Button
              sx={{ textTransform: "capitalize", color: "#555" }}
              size="large"
            >
              Refinance
            </Button>
            <Link to={"/loan"}>
              <Button
                sx={{ textTransform: "capitalize", color: "#555" }}
                size="large"
              >
                Loan
              </Button>
            </Link>
            <Button
              className="dropDownMenu"
              sx={{
                textTransform: "capitalize",
                color: "#555",
                display: "flex",
                alignItems: "center",
              }}
              size="large"
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Resources{" "}
              <span style={{ display: "flex", alignItems: "center" }}>
                <ArrowDropDownIcon sx={{ color: "#777" }} />
              </span>
            </Button>
            <Menu
              sx={{ position: "absolute" }}
              className="menuitems"
              id="fade-menu"
              anchorEl={anchorEl}
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              open={open}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Policy</MenuItem>
              <MenuItem onClick={handleClose}>Site Map</MenuItem>
              <MenuItem onClick={handleClose}>FAQ</MenuItem>
              <MenuItem onClick={handleClose}>Legal</MenuItem>
              <MenuItem onClick={handleClose}>Accessibility Statement</MenuItem>
            </Menu>
            <Link to={"/about"}>
              <Button
                sx={{ textTransform: "capitalize", color: "#555" }}
                size="large"
              >
                About
              </Button>
            </Link>
            <Button
              sx={{ textTransform: "capitalize", color: "#555" }}
              size="large"
            >
              Contact
            </Button>
            <Button
              sx={{ textTransform: "capitalize", color: "#555" }}
              size="large"
            >
              Blog
            </Button>
          </div>
          <Link to={"/calculator"}>
            <Button
              sx={{ textTransform: "capitalize" }}
              variant="contained"
              color="success"
            >
              Calculator
            </Button>
          </Link>
          <div className="toggle"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
