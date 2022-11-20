import React, { useState } from "react";
import "./Calculator.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Heading from "../common/Heading";
const Calculator = () => {
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
      <div className="heroCalculator">
        <Heading title={"Calculators"} />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="calculatorWrapper">
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
          <div className="calculatorWrapper">
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
          <div className="calculatorWrapper calculatorbtn">
            <Button
              size="large"
              sx={{ my: 2, fontSize: "18px", textTransform: "capitalize" }}
              color="success"
              variant="contained"
              onClick={calculateMortage}
            >
              Calculate Mortage
            </Button>
          </div>
          {principleAmount && (
            <TableContainer
              className="calculatorOutput"
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
    </>
  );
};

export default Calculator;
