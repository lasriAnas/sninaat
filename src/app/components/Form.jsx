"use client";
import Image from "next/image";
import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { basicSchema } from "../schema";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export default function Forms() {
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
  });
  console.log(errors);
  return (
    <section className="bg-cyan-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Bienvenue
            </h1>
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
