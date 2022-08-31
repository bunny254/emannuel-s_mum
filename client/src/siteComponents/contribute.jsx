import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["", "", "", "", ""];

const Contribute = () => {
  const [fName, setfName] = useState("");
  const [sName, setsName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [mpesaMess, setMpesaMsg] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [checkSheet, setCheckSheet]=useState(false);
  const {reset,register,handleSubmit}=useForm()
/*
  const handleSheet=()=>{
    setCheckSheet(!checkSheet)
  } */

  const handleCotribution = () => {
    //e.preventDefault();
    const data = {
      FirstName: fName,
      SecondName: sName,
      PhoneNumber: phoneNumber,
      AmountPaid: amount,
      MpesaMessage: mpesaMess,
      Date: dateTime,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/6fdbda29-aab8-48ce-b7c4-d769eff909b0",
        data
      )
      .then((response) => {
        console.log(response);
        reset(data);
      });
  };

  return (
    <div>
      <div className="xl:hidden">
        <div className="mt-4 grid justify-center">
          <h1 className="ml-14 text-2xl font-bold">Dear Friends & Family</h1>
          <h1 className="text-xl font-bold">
            Your Contribution is Much Appreciated.
          </h1>
        </div>
        <div className="grid justify-center">
          <div className="mt-2 ml-1">
            <p>Make Your Contribution & Fill the Form Below</p>
          </div>
          <div className="grid grid-cols-3 ml-24">
            <div className="mr-3 w-[80px] h-[80px] col-span-1">
                <img src="data:image/png;base64,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" alt="M-pesa" />
            </div>
            <div className="col-span-2">
              <p className="text-green-500">Go to M-Pesa</p>
              <div className="flex flex-row"><p>Paybill:</p><p className="font-bold">522522</p></div>
              <div className="flex flex-row"><p>AccNo:</p><p className="font-bold">1226041175</p></div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex flex-col">
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <div className="grid mt-5 justify-center">
            <form action="post" onSubmit={handleSubmit(handleCotribution)}>
              <div className="grid w-[250px]">
                <label>Enter Your First Name:</label>
                <input
                  type="text"
                  id="fName"
                  className="mb-3 p-2 rounded-2xl bg-green-300"
                  onChange={(e) => setfName(e.target.value)}
                  value={fName}
                  required
                />
                <label>Enter Your Second Name:</label>
                <input
                  type="text"
                  id="sName"
                  className="mb-3  p-2 rounded-2xl bg-green-300"
                  onChange={(e) => setsName(e.target.value)}
                  value={sName}
                  required
                />
                <label>Enter Your PhoneNumber:</label>
                <input
                  type="text"
                  id="sName"
                  className="mb-3  p-2 rounded-2xl bg-green-300"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  required
                />
                <label>Enter Amount Paid:</label>
                <input
                  type="text"
                  id="phoneNo"
                  className="mb-3  p-2 rounded-2xl bg-green-300"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  required
                />
                <label>Enter the M-Pesa Confirmation Message:</label>
                <input
                  type="text"
                  id="mpesaMessage"
                  className="mb-3 p-2 rounded-2xl bg-green-300"
                  onChange={(e) => setMpesaMsg(e.target.value)}
                  value={mpesaMess}
                  required
                />
                <label>Date & Time:</label>
                <input
                  type="datetime-local"
                  id="dateTime"
                  className="mb-3 p-2 rounded-2xl bg-green-300"
                  onChange={(e) => setDateTime(e.target.value)}
                  value={dateTime}
                  required
                />
                <button
                  type="submit"
                  className="mt-4 p-1 bg-black text-white rounded-2xl"
                >
                  SUBMIT
                </button>
                {(checkSheet?<div className="mt-5">
                <p>Thank You for Making Contribution</p>
                <a href="https://docs.google.com/spreadsheets/d/1fmpABWjRLmVGwKQW-lqbaT6B4Aq3u05QihHUXym2mYo/edit?usp=sharing" className="ml-9 underline">Click to See Full List</a>
                </div>:null)}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
