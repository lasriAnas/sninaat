"use client";
import React from "react";
import { Formik, Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  addBusinessDays,
  isWeekend,
  setHours,
  setMinutes,
  isAfter,
  isBefore,
} from "date-fns";

const MyForm = () => {
  const today = new Date();
  const nextBusinessDay = addBusinessDays(today, 1);

  const isBusinessDay = (date) => {
    return !isWeekend(date);
  };

  const isBusinessHour = (date) => {
    const businessStartTime = setHours(setMinutes(today, 0), 9);
    const businessEndTime = setHours(setMinutes(today, 0), 17);

    return isAfter(date, businessStartTime) && isBefore(date, businessEndTime);
  };

  const excludeDates = [];
  let currentDate = nextBusinessDay;
  while (excludeDates.length < 10) {
    if (isBusinessDay(currentDate) && isBusinessHour(currentDate)) {
      excludeDates.push(currentDate);
    }
    currentDate = addBusinessDays(currentDate, 1);
  }

  return (
    <Formik initialValues={{ date: nextBusinessDay }}>
      {({ values, setFieldValue }) => (
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="date"
            >
              Date and Time
            </label>
            <Field name="date">
              {({ field }) => (
                <DatePicker
                  {...field}
                  selected={values.date}
                  onChange={(date) => setFieldValue("date", date)}
                  excludeDates={excludeDates}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  minTime={setHours(setMinutes(today, 0), 9)}
                  maxTime={setHours(setMinutes(today, 0), 17)}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              )}
            </Field>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default MyForm;
