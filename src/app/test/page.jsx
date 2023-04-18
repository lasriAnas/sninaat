"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const excludeDates = [
    new Date("2023-07-05"),
    new Date("2023-12-25"),
    new Date("2024-01-01"),
  ];

  const disabledTimes = [
    new Date(0, 0, 0, 10, 0, 0), // 10:00 AM
    new Date(0, 0, 0, 13, 0, 0), // 1:00 PM
    new Date(0, 0, 0, 16, 0, 0), // 4:00 PM
  ];

  const isTimeDisabled = (date) => {
    // Check if the date's time is in the disabledTimes array
    return disabledTimes.some((disabledTime) => {
      return (
        date.getHours() === disabledTime.getHours() &&
        date.getMinutes() === disabledTime.getMinutes()
      );
    });
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // 0 = Sunday, 6 = Saturday
  };

  const isExcludedDate = (date) => {
    return excludeDates.some((excludeDate) => {
      return excludeDate.getTime() === date.getTime();
    });
  };

  return (
    <div className="container">
      <DatePicker
        selected={selectedDate}
        timeIntervals={60}
        minTime={new Date(0, 0, 0, 9, 0, 0)}
        maxTime={new Date(0, 0, 0, 18, 0, 0)}
        timeFormat="HH:mm"
        onChange={(date) => setSelectedDate(date)}
        filterDate={(date) => isWeekday(date) && !isExcludedDate(date)}
        excludeTime={isTimeDisabled}
        excludeDates={excludeDates}
        showTimeSelect
        placeholderText="Select a date"
      />
    </div>
  );
};

export default App;
