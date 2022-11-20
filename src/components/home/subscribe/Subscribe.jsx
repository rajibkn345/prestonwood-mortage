import React from "react";
import Heading from "../../common/Heading";
import "./Subscribe.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe">
        <Heading title={"Do You Want to Get Update What’s Upcoming?"} />
        <Box
          sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
        >
          <input className="searchInput" placeholder="Enter your email" />
          <butto className="searchBtn">Subscribe</butto>
        </Box>
      </div>
    </>
  );
};

export default Subscribe;
