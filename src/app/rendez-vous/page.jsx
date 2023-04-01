"use client";

import React from "react";
import Forms from "../components/Form";

export default function redndezVous() {
  return (
    <div className="bg-cyan-400 grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-start justify-center mx-24">
        <h1 className="text-5xl">PRENEZ VOTRE RENDEZ-VOUS MAINTENANT</h1>
        <p className="text-2xl">Chez clinique dentaire Sninaat a Rabat</p>
      </div>
      <Forms />
    </div>
  );
}
