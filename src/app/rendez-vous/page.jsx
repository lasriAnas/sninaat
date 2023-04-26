"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

import { db } from "utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import "firebase/firestore";

import { basicSchema } from "../schema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const excludeDates = [
  new Date("2023-05-16"),
  new Date("2023-06-23"),
  new Date("2023-05-18"),
];
const isExcludedDate = (date) => {
  return excludeDates.some((excludeDate) => {
    return excludeDate.getTime() === date.getTime();
  });
};
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
  return day !== 0 && day !== 6;
};

export default function Forms() {
  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      phone: "",
      email: "",
      age: "",
      dateTime: new Date(),
    },
    validationSchema: basicSchema,
    onSubmit: async (values, actions) => {
      try {
        const appointmentsCollectionRef = collection(db, "appointments");
        await addDoc(appointmentsCollectionRef, values);
        actions.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;
  console.log(errors);
  return (
    <section className="bg-cyan-400 min-h-screen grid grid-cols-1">
      <div className="flex flex-col justify-center items-start px-16">
        <h1 className="text-gray-800 text-7xl">Bienvenue</h1>
        <br />
        <h2 className="text-gray-800 text-3xl">
          Prenez votre rendez-vous maintenant!!!
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen min-w-full lg:py-0">
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
                  type="text"
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
              <label htmlFor="dateTime">Date et heur</label>
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
                minTime={new Date(0, 0, 0, 9, 0, 0)}
                maxTime={new Date(0, 0, 0, 18, 0, 0)}
                /* filterDate={isWeekday} */
                filterDate={(date) => isWeekday(date) && !isExcludedDate(date)}
                excludeDates={excludeDates}
                /* filterTime={filterTime} */
                minDate={new Date()}
                /* filterTime={isTimeDisabled} */
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
/* const formik = useFormik({
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
    },
    validationSchema: basicSchema,
    onSubmit,
  }); */
