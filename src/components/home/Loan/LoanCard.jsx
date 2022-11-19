import React from "react";

const LoanCard = ({ name, description }) => {
  return (
    <>
      <div className="loan-content grid5 mtop">
        <h4 style={{ margin: "5px" }}>{name}</h4>
        <p>{description}</p>
        <button className="btn2">see more</button>
      </div>
    </>
  );
};

export default LoanCard;
