"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Grid() {
  const atrributes = {
    className: "my-6 w-80 h-52 bg-violet-500",
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };
  return (
    <div
      id="grid"
      className=" mt-6 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-items-center"
    >
      <h1 className="sm:col-span-4 col-span-1">title</h1>
      <motion.div {...atrributes}></motion.div>
      <motion.div {...atrributes}></motion.div>
      <motion.div {...atrributes}></motion.div>
      <motion.div {...atrributes}></motion.div>
      <motion.div {...atrributes}></motion.div>
      <motion.div {...atrributes}></motion.div>
      <motion.div {...atrributes}></motion.div>
      <motion.div {...atrributes}></motion.div>
    </div>
  );
}
