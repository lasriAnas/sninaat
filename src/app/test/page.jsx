"use client";
import React from "react";
import DatePicker from "react-datepicker";
import { useFormik } from "formik";
import "react-datepicker/dist/react-datepicker.css";

const DateTime = () => {
  const formik = useFormik({
    initialValues: {
      dateTime: new Date(),
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  const filterTime = (time) => {
    const hour = time.getHours();
    return hour >= 9 && hour <= 17;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <DatePicker
        selected={formik.values.dateTime}
        onChange={(value) => formik.setFieldValue("dateTime", value)}
        name="dateTime"
        className="block w-full p-2 rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="Time"
        dateFormat="yyyy/MM/dd HH:mm"
        filterDate={isWeekday}
        filterTime={filterTime}
      />
      <button
        type="submit"
        className="px-4 py-2 mt-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
};

export default DateTime;
