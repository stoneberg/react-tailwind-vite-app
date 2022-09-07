import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import styled from "styled-components";
import "./DatePicker.css";

// DateFilterData(Mock 데이터)
const DateFilter = [
  {
    id: 1,
    value: "전체",
  },
  {
    id: 2,
    value: "오늘",
  },
  {
    id: 3,
    value: "3일",
  },
  {
    id: 4,
    value: "1주일",
  },
  {
    id: 5,
    value: "1개월",
  },
  {
    id: 6,
    value: "3개월",
  },
];

const FilterArea = () => {
  const [btnClicked, setBtnClicked] = useState("3일");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000)
  );

  // 날짜 버튼 클릭, 기간 변경 기능
  const handleBtnClicked = (e) => {
    const { value } = e.target;
    setBtnClicked(value);
    const currentDate = new Date();
    // 기본값: placeholder 내용
    if (value === "전체") {
      setStartDate();
      setEndDate();
    }
    // 오늘 날짜
    if (value === "오늘") {
      setStartDate(new Date());
      setEndDate(new Date());
    }
    // 3일 전부터 오늘까지의 기간
    if (value === "3일") {
      let threeDaysAgo = new Date(
        currentDate.getTime() - 3 * 24 * 60 * 60 * 1000
      );
      setStartDate(threeDaysAgo);
      setEndDate(new Date());
    }
    // 1주일 전부터 오늘까지의 기간
    if (value === "1주일") {
      let weekAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
      setStartDate(weekAgo);
      setEndDate(new Date());
    }
    // 1개월 전부터 오늘까지의 기간
    if (value === "1개월") {
      let oneMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
      );
      setStartDate(oneMonthAgo);
      setEndDate(new Date());
    }
    // 3개월 전부터 오늘까지의 기간
    if (value === "3개월") {
      let threeMonthAgo = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 3,
        new Date().getDate()
      );
      setStartDate(threeMonthAgo);
      setEndDate(new Date());
    }
  };

  return (
    <>
      <SimpleDateBtn>
        {DateFilter.map((el, idx) => (
          <DateInput
            onClick={handleBtnClicked}
            key={idx}
            backgroundColor={btnClicked === el.value}
            type="button"
            value={el.value}
          />
        ))}
      </SimpleDateBtn>
      <SelectDate
        selected={startDate}
        dateFormat="yyyy-MM-dd"
        onChange={(date) => setStartDate(date)}
        placeholderText="클릭해주세요."
      />
      <BetweenDate> ~ </BetweenDate>
      <SelectDate
        selected={endDate}
        dateFormat="yyyy-MM-dd"
        onChange={(date) => setEndDate(date)}
        placeholderText="클릭해주세요."
      />
    </>
  );
};

export default FilterArea;

// styled.component 부분
const SimpleDateBtn = styled.div`
  width: auto;
  margin-right: 15px;
`;

const SelectDate = styled(DatePicker)`
  height: 22px;
  padding: 6px 12px;
  font-size: 14px;
  text-align: center;
  border: 1px solid #e5e5e5;
  outline: none;
  cursor: pointer;
`;

const BetweenDate = styled.span`
  display: table;
  padding: 8px 12px;
  background-color: #e5e5e5;
  border: 1px solid #e5e5e5;
  font-size: 14px;
  cursor: pointer;
`;
