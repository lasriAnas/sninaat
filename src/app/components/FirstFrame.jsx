"use client";
import React from "react";
import { color, delay, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FirstFrame() {
  return (
    <div className="bg-gray-100">
      <section className="cover bg-blue-teal-gradient relative bg-cyan-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen">
        <div className="h-full absolute top-0 left-0 z-0">
          <Image
            src="/images/cover-bg.jpg"
            alt=""
            className="w-screen h-full object-cover opacity-20"
            width="1000"
            height="1000"
          />
        </div>

        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Une Meilleur Vie Commence Avec Un Beau Sourire.
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
              Bienvenue au cabinet dentaire du Dr Jon Doe, où la confiance et le
              confort sont des priorités.
            </p>
            <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white hover:text-black rounded inline-block mt-8 font-semibold">
              <Link href="/rendez-vous">RENDEZ-VOUS</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
/*   <div className="bg-firstframeSM sm:bg-firstframe flex flex-col items-start justify-center bg-cover w-full h-[calc(100vh-4.1rem)] ">
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
    </div> */
