"use client";
import React from "react";
import { color, delay, motion } from "framer-motion";
import Link from "next/link";

export default function FirstFrame() {
  return (
    <div className="bg-firstframeSM sm:bg-firstframe flex flex-col items-start justify-center bg-cover w-full h-[calc(100vh-4.1rem)] ">
      <motion.aside
        animate={{ fontSize: "50px", color: "rgb(8, 145, 178)" }}
        transition={{ delay: 1.5 }}
        className="ml-8 text-transparent text-center"
      >
        POLYCLINIQUE <br /> DENTAIRE{" "}
      </motion.aside>{" "}
      <div className="space-x-5">
        <motion.button
          className="my-20 bg-cyan-600 rounded px-2"
          initial={{ x: -5000 }}
          animate={{ x: 60 }}
          transition={{
            type: "tween",
            delay: 1.5,
          }}
        >
          <Link href="/rendez-vous">RENDEZ-VOUS</Link>
        </motion.button>
        <motion.button
          className="my-20 bg-cyan-600 rounded px-2"
          initial={{ x: -5000 }}
          animate={{ x: 60 }}
          transition={{
            type: "tween",
            delay: 1.7,
          }}
        >
          <Link href="/rendez-vous">NOS SERVICES</Link>
        </motion.button>
      </div>
    </div>
  );
}
