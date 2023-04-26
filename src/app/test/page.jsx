"use client";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker() {
  const disabledTime = new Date("2023-05-01T14:00:00");

  // Filter function to disable the specific time
  const filterTime = (time) => {
    return time.getTime() !== disabledTime.getTime();
  };

  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8959.424367359617!2d-6.849695552970757!3d33.99566978430847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c8f7837968b%3A0x6eb7a868063bb38b!2sAgdal-Ryad%2C%20Rabat!5e0!3m2!1sen!2sma!4v1682001699266!5m2!1sen!2sma"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <DatePicker
        excludeTimes={[disabledTime]}
        showTimeSelect
        filterTime={filterTime}
      />
    </>
  );
}

/* import React, { useState } from "react";
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
 */
