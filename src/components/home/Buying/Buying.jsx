import React from "react";
import "./Buying.css";
const Buying = () => {
  return (
    <>
      <div className="buying">
        <div className="left">
          <h4>
            Get the best loan for yourself and your family with Prestonwood
            Mortgage
          </h4>
          <p>
            Prestonwood Mortgage is all about transparency. Our team will
            provide you with insights on:
          </p>
          <ul>
            <li>
              how to compare the loan estimate forms that come from lenders,
            </li>
            <li>how to find where the savings are,</li>
            <li>how to get rid of countless unnecessary fees,</li>
            <li>how to shop properly for the settlement and title services,</li>
            <li>how to ask the seller to contribute,</li>
            <li>how to sign loan papers at the perfect moment,</li>
            <li>even how to get the best rebates and discounts from</li>
          </ul>
        </div>
        <div className="right">
          <img src="../images/buying.jpg" />
        </div>
      </div>
    </>
  );
};

export default Buying;
