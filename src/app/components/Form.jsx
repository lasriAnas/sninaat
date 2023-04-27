"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { basicSchema } from "../schema";
import DateTime from "./Datetime";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

/* const checkEmailExistence = async (email) => {
  try {
    const response = await axios.get("https://api.zerobounce.net/v2/validate", {
      params: {
        email,
        api_key: "your_api_key",
        ip_address: "your_ip_address",
      },
    });

    if (response.data.status === "valid") {
      console.log("Email exists");
      return true;
    } else if (response.data.status === "invalid") {
      console.log("Email does not exist");
      return false;
    } else {
      console.log("Unknown email status");
      return false;
    }
  } catch (error) {
    console.error("Error checking email existence:", error);
    return false;
  }
}; 
checkEmailExistence("example@email.com");
*/
const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const isWeekday = (date) => {
  const day = date.getDay();
  return day !== 0 && day !== 6;
};

const excludeDates = [
  new Date("2023-05-05"),
  new Date("2023-05-25"),
  new Date("2023-04-013"),
];
const isExcludedDate = (date) => {
  return excludeDates.some((excludeDate) => {
    return excludeDate.getTime() === date.getTime();
  });
};

const filterTime = (time) => {
  const hour = time.getHours();
  return hour >= 9 && hour <= 17;
};

export default function Forms() {
  const formik = useFormik({
    initialValues: {
      dateTime: new Date(),
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
      age: "",
      dateTime: new Date(),
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  console.log(errors);
  return (
    <section className="bg-cyan-400 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nom:
                </label>
                <input
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="lastName"
                  placeholder="Nom"
                  className="text-gray-200 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400"
                  required={true}
                ></input>
              </div>

              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Prenom:
                </label>
                <input
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="text"
                  id="firstName"
                  placeholder="Prenom"
                  className="text-gray-200 border border-gray-300  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400"
                  required={true}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Age:
                </label>
                <input
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  id="age"
                  placeholder="00"
                  className="text-gray-200 border border-gray-300  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400"
                  required={true}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Numero de Telephone:
                </label>
                <input
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  id="phone"
                  placeholder="0-123-456-789"
                  className="text-gray-200 border border-gray-300  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400"
                  required={true}
                ></input>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="email"
                  id="email"
                  className="text-gray-200 border border-gray-300  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400  "
                  placeholder="name@company.com"
                  required={true}
                ></input>
              </div>
              <DatePicker
                selected={values.dateTime}
                onChange={(value) => formik.setFieldValue("dateTime", value)}
                name="dateTime"
                className="block w-full p-2 rounded-md shadow-sm bg-gray-700 text-gray-400 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:ring-opacity-50"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                timeCaption="Time"
                dateFormat="yyyy/MM/dd HH:mm"
                /* filterDate={isWeekday} */
                filterTime={filterTime}
                excludeDates={excludeDates}
                filterDate={(date) => isWeekday(date) && !isExcludedDate(date)}
              />
              <button
                type="submit"
                className="w-full text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                disabled={isSubmitting}
              >
                Commencer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
