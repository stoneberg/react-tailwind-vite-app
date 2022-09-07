import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled, { css } from "styled-components";
import { addDays, addMonths, format, subDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleAddDays = (days) => {
    console.log("add days");
    if (days === "1w") {
      setStartDate((preDate) => addDays(preDate, 6));
      setEndDate((preDate) => addDays(preDate, 6));
    } else if (days === "1m") {
      setStartDate((preDate) => addMonths(preDate, 1));
      setEndDate((preDate) => addMonths(preDate, 1));
    } else {
      setStartDate((preDate) => addMonths(preDate, 3)); // 3m
      setEndDate((preDate) => addMonths(preDate, 3));
    }
  };

  return (
    <>
      <div>
        <h1>프로젝트 시작일:</h1>
        <input
          type="text"
          readOnly={true}
          value={format(startDate, "yyyy-MM-dd")}
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        />
        <DatePickerWrapper
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          locale={ko}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          endDate={endDate}
          /*minDate={subDays(new Date(), 5)}*/
          minDate={new Date()}
        />
        <h1>프로젝트 종료일:</h1>
        <input
          type="text"
          readOnly={true}
          value={format(endDate, "yyyy-MM-dd")}
          className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
        />
        <DatePickerWrapper
          dateFormat="yyyy-MM-dd"
          selected={endDate}
          locale={ko}
          onChange={(date) => setEndDate(date)}
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <button
        className="btn btn-primary mr-2"
        onClick={() => handleAddDays("1w")}
      >
        1주일
      </button>
      <button
        className="btn btn-primary mr-2"
        onClick={() => handleAddDays("1m")}
      >
        1개월
      </button>
      <button className="btn btn-primary" onClick={() => handleAddDays("3m")}>
        3개월
      </button>
    </>
  );
};

const DatePickerWrapper = styled(DatePicker)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 300px;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  font-size: 12px;
`;

export default CustomDatePicker;
