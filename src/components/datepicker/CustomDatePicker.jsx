import React, { forwardRef, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { format, getDay, subMonths, subWeeks } from "date-fns";
import { ko } from "date-fns/esm/locale";
import "../../assets/css/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";

const IconInput = forwardRef(({ value, onClick }, ref) => (
  /*    <button className="btn btn-success" onClick={onClick} ref={ref}>
    {value}
  </button>*/
  <div className="ml-2" onClick={onClick} ref={ref}>
    <FiCalendar size={40} />
  </div>
));

const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [holiday, setHoliday] = useState({});

  useEffect(() => {
    fetch("holiday.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((json) => {
        console.log("holiday", json);
        setHoliday(json);
      });
  }, []);

  const handleAddDays = (days) => {
    console.log("add days");
    if (days === "1w") {
      setStartDate(() => subWeeks(new Date(), 1));
      setEndDate(new Date());
    } else if (days === "1m") {
      setStartDate(() => subMonths(new Date(), 1));
      setEndDate(new Date());
    } else {
      setStartDate(() => subMonths(new Date(), 3)); // 3m
      setEndDate(new Date());
    }
  };

  const isWeekday = (date) => {
    const disableDay = format(date, "yyyy-MM-dd");
    console.log("filter disableDay", disableDay);
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  return (
    <>
      <div className="flex justify-center space-x-20">
        <div>
          <h1>프로젝트 시작일:</h1>
          <div className="flex justify-center">
            <input
              type="text"
              readOnly={true}
              value={format(startDate, "yyyy-MM-dd")}
              className="shadow appearance-none border rounded py-2 px-3 mb-4 text-grey-darker"
            />
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              locale={ko}
              onChange={(date) => setStartDate(date)}
              startDate={startDate}
              endDate={endDate}
              maxDate={new Date()}
              customInput={<IconInput />}
              disabledKeyboardNavigation
              filterDate={isWeekday}
            />
          </div>
        </div>
        <div>
          <h1>프로젝트 종료일:</h1>
          <div className="flex justify-center">
            <input
              type="text"
              readOnly={true}
              value={format(endDate, "yyyy-MM-dd")}
              className="shadow appearance-none border rounded py-2 px-3 mb-4 text-grey-darker"
            />
            <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={endDate}
              locale={ko}
              onChange={(date) => setEndDate(date)}
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              customInput={<IconInput />}
              disabledKeyboardNavigation
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary mr-4 mt-4"
        onClick={() => handleAddDays("1w")}
      >
        1주일
      </button>
      <button
        className="btn btn-primary mr-4 mt-4"
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
