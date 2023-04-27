import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 h-screen"
    >
      <div className="flex flex-col lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-3xl leading-tight font-bold mt-4">
            Pourquoi nous?
          </h2>
          <p className="mt-2 leading-relaxed">
            Nous avons une équipe de professionnels hautement qualifiés et
            expérimentés qui offrent des soins de santé de qualité supérieure.
            De plus, nous sommes équipés des technologies les plus avancées pour
            garantir des diagnostics précis et des traitements efficaces. Enfin,
            nous nous engageons à offrir un service personnalisé et attentionné
            pour répondre aux besoins uniques de chaque patient.
          </p>
        </div>

        <div className="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div className=" w-full h-72 rounded-lg">
            <Image
              alt="img"
              src="/images/istockphoto-171573917-612x612.jpg"
              width="600"
              height="288"
              className="rounded-lg"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
