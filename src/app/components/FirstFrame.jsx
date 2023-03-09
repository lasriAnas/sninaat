"use client";
import React from "react";
import { color, delay, motion } from "framer-motion";
import Image from "next/image";

export default function FirstFrame() {
  return (
    <div className="grid grid-cols-2 bg-orange-500 w-full h-[calc(100vh-4.1rem)]">
      <div className="justify-self-center self-center">
        <motion.div
          animate={{ fontSize: "70px", color: "brown", delay: "1ms" }}
          className="text-transparent"
        >
          Lorem ipsum dolor sit{" "}
        </motion.div>{" "}
      </div>
      <div className="justify-self-center self-center">image</div>
    </div>
  );
}
