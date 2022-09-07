import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styled, { css } from "styled-components";
import { subDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div>
      <h1>프로젝트 시작일:</h1>
      <DatePickerWrapper
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        locale={ko}
        onChange={(date) => setStartDate(date)}
        selectStart
        startDate={startDate}
        endDate={endDate}
        /*minDate={subDays(new Date(), 5)}*/
        minDate={new Date()}
      />
      <h1>프로젝트 종료일:</h1>
      <DatePickerWrapper
        dateFormat="yyyy-MM-dd"
        selected={endDate}
        locale={ko}
        onChange={(date) => setEndDate(date)}
        selectEnd
        endDate={endDate}
        minDate={startDate}
      />
    </div>
  );
};

const DatePickerWrapper = styled(DatePicker)`
  maring-top: 0.5rem;
  width: 300px;
  height: 42px;
  box-sizing: border-box;
  padding: 8px 20px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  font-size: 12px;
`;

export default CustomDatePicker;
