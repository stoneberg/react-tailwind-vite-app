import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import { format, addDays } from "date-fns";
import CustomDatePicker from "../components/datepicker/CustomDatePicker.jsx";

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [holiday, setHoliday] = useState([]);

  useEffect(() => {
    /*    fetch("holiday.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        console.log("holiday", json.holiday);
        setHoliday(json.holiday);
      });*/
  }, []);

  return (
    <>
      <h1 className="text-4xl mb-4">Schedule Content</h1>
      <div className="flex justify-center">
        <div className="container">
          <CustomDatePicker />
        </div>
      </div>
    </>
  );
};

export default Schedule;
