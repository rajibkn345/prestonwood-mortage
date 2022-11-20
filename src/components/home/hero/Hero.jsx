import React, { useState } from "react";
// import Heading from "../../common/Heading"
import "./hero.css";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";

import TextField from "@mui/material/TextField";
import banner1 from "../../images/banner-shape1-1.png";
import banner2 from "../../images/banner-shape2-1.png";
import { Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interest, setInterest] = useState("");
  const [period, setPeriod] = useState("");
  const [principleAmount, setPrincipleAmount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [balancePayable, setBalancePayable] = useState("");
  const [totalwithDown, setTotalwithDown] = useState("");
  const [years, setYears] = useState("");
  const monthlyMortage = (startingLoanAmount, totalPayments, interestRate) => {
    let interestRatePerMonth = interestRate / 1200;
    return (
      (startingLoanAmount *
        interestRatePerMonth *
        Math.pow(1 + interestRatePerMonth, totalPayments)) /
      (Math.pow(1 + interestRatePerMonth, totalPayments) - 1)
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
  };

  const calculateMortage = () => {
    const numberMonths = period * 12;
    // const iRate = interest/100;
    const remainPayment = totalAmount - downPayment;
    console.log(
      "rem==",
      +remainPayment,
      "numMon===",
      +numberMonths,
      "interest===",
      +interest
    );
    const monthlyPay = monthlyMortage(
      +remainPayment,
      +numberMonths,
      +interest
    ).toFixed(2);
    console.log("pay===", monthlyPay);
    const finalAmount = (monthlyPay * numberMonths + +downPayment).toFixed(2);
    setPrincipleAmount(remainPayment);
    setMonthlyPayment(monthlyPay);
    setBalancePayable((monthlyPay * numberMonths).toFixed(2));
    setTotalwithDown(finalAmount);
    setTotalAmount("");
    setDownPayment("");
    setInterest("");
    setPeriod("");
  };

  const inputChangeHandler = (e) => {
    e.preventDefault();
    if (e.target.name === "totalAmount") {
      setTotalAmount(+e.target.value);
      console.log(totalAmount);
    } else if (e.target.name === "downPayment") {
      setDownPayment(+e.target.value);
      console.log(downPayment);
    } else if (e.target.name === "interest") {
      setInterest(+e.target.value);
      console.log(interest);
    } else if (e.target.name === "period") {
      setPeriod(+e.target.value);
      setYears(+e.target.value);
      console.log(period);
    }
  };

  return (
    <>
      <section className="hero">
        <div className="flexLeft">
          <div className="hero-item">
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
              className="hero-bgImg"
            >
              <img src={banner1} className="circleLeft" alt="banner-1" />
              <img
                src={banner2}
                className={"circleRight"}
                style={{
                  right: "0",
                  width: "350px",
                  position: "absolute",
                  height: "auto",
                }}
                alt="banner-2"
              />
            </div>
            <h2 className="heroTitle">Find the right mortage for you!</h2>
            <div
              style={{ backgroundColor: "#eee", marginTop: "-200px" }}
              className="heroCalculator"
            >
              <span
                style={{
                  padding: "10px 30px",
                  fontSize: "20px",
                  color: "#fff",
                  backgroundColor: "green",
                  marginLeft: "30px",
                }}
              >
                Calculators
              </span>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                  backgroundColor: "#eee",
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    onChange={inputChangeHandler}
                    label="Total Amount"
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    name="totalAmount"
                    value={totalAmount}
                    placeholder="$30,000"
                  />
                  <TextField
                    onChange={inputChangeHandler}
                    label="Down Payment"
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    name="downPayment"
                    value={downPayment}
                    placeholder="$6,000"
                  />
                </div>
                <div>
                  <TextField
                    onChange={inputChangeHandler}
                    label="Interest Rate"
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    name="interest"
                    value={interest}
                    placeholder="4%"
                  />
                  <TextField
                    onChange={inputChangeHandler}
                    label="Mortage Period"
                    id="outlined-number"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    name="period"
                    value={period}
                    placeholder="30"
                  />
                </div>

                <Button
                  size="large"
                  sx={{ mx: 1, fontSize: "18px", textTransform: "capitalize" }}
                  color="success"
                  variant="contained"
                  onClick={calculateMortage}
                >
                  Calculate Mortage
                </Button>
                <Button
                  size="large"
                  sx={{
                    mx: 1,
                    fontSize: "18px",
                    textTransform: "capitalize",
                    backgroundColor: "#1d2636",
                  }}
                  variant="contained"
                >
                  Call Us: (800) 530-5457
                </Button>
                {principleAmount && (
                  <TableContainer
                    sx={{ width: "50ch", m: 2 }}
                    component={Paper}
                  >
                    <Table size="small" aria-label="a dense table">
                      <TableBody>
                        <TableRow>
                          <TableCell>Principle Amount</TableCell>
                          <TableCell align="right">{principleAmount}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Years</TableCell>
                          <TableCell align="right">{years}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Monthly Payment</TableCell>
                          <TableCell align="right">{monthlyPayment}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Balance Payable with Interest</TableCell>
                          <TableCell align="right">{balancePayable}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Total with Down Payment</TableCell>
                          <TableCell align="right">{totalwithDown}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </Box>
            </div>
          </div>
          <div className="hero-item">
            <Slider {...settings}>
              <div>
                <img src="../images/hr1.jpg" alt="hr1" />
              </div>
              <div>
                <img src="../images/hr3.jpg" alt="hr3" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
