import React from "react";

export default function Cta() {
  return (
    <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
      <div className="md:flex md:items-center md:justify-center">
        <h2 className="text-xl font-bold text-white">
          Get in touch with us today! <br className="block md:hidden" />
          Call us on: +1 562-789-1935
        </h2>
        <a
          href="#"
          className="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0"
        >
          Book Appointment
        </a>
      </div>
    </section>
  );
}
