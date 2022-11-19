import React from "react";
import "./Loan.css";
import Heading from "../../common/Heading";
import { LoanItems } from "../../data/Data";
import LoanCard from "./LoanCard";

const Loan = () => {
  return (
    <>
      <div className="loan">
        <Heading
          title={"Loan Programs for Prestonwood"}
          subtitle="Champions mortgage works with a wide variety of home loans that match anyone’s preferences!"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {LoanItems?.map((item) => (
            <LoanCard
              key={item.id}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Loan;
