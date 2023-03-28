import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Calendar() {
  /* const [user, loading] = useAuthState(); */
  return (
    <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
      <div className="bg-white rounded-lg border border-gray-300 p-8">
        <Image
          src="images/periodontics.svg"
          alt=""
          className="h-20 mx-auto"
          width="100"
          height="100"
        />

        <h4 className="text-xl font-bold mt-4">Periodontics</h4>
        <p className="mt-1">Let us show you how our experience.</p>
        <a href="#" className="block mt-4">
          Read More
        </a>
      </div>
    </div>
  );
}
