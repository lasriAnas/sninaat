"use client";
import Image from "next/image";
import { delay, motion } from "framer-motion";

export default function About() {
  const atrributes = {
    whileHover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };
  return (
    <div id="info">
      {" "}
      <section className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:-mx-8">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-3xl leading-tight font-bold mt-4">
              Bienvenue au cabinet dentaire du <br />
              Dr Jon Doe
            </h2>
            <p className="text-lg mt-4 font-semibold">
              Excellence en dentisterie au cœur de Rabat
            </p>
            <p className="mt-2 leading-relaxed">
              Découvrez notre cabinet dentaire hautement qualifié. Nos dentistes
              expérimentés utilisent les dernières technologies pour vous offrir
              un traitement efficace et confortable. Avec notre équipe
              accueillante, vous serez mis à l&apos;aise dès votre arrivée.
              Prenez rendez-vous dès aujourd&apos;hui pour une consultation et
              assurez une bonne santé bucco-dentaire.
            </p>
          </div>

          <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
            <div className="md:flex">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              </div>
              <div className="md:ml-8 mt-4 md:mt-0">
                <h4 className="text-xl font-bold leading-tight">
                  Tout ce dont vous avez besoin sous un même toit
                </h4>
                <p className="mt-2 leading-relaxed">
                  Nos services complets vous permettent de recevoir tout ce dont
                  vous avez besoin de soins dentaires ici même dans notre
                  cabinet ultramoderne - de nettoyages dentaires et obturations
                  aux implants dentaires et extractions.
                </p>
              </div>
            </div>

            <div className="md:flex mt-8">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              </div>
              <div className="md:ml-8 mt-4 md:mt-0">
                <h4 className="text-xl font-bold leading-tight">
                  Notre approche centrée sur le patient
                </h4>
                <p className="mt-2 leading-relaxed">
                  Votre plan de traitement correspondra parfaitement à vos
                  besoins, mode de vie et objectifs. Même si ça fait des années
                  que tu n&apos;as pas duré visité le dentiste, nous pouvons
                  vous aider. Notre bureau confortable, équipe compatissante et
                  des traitements mini-invasifs vous aider à vous sentir
                  complètement à l&apos;aise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
          <motion.div {...atrributes} className="md:w-1/2 md:px-4 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="images/teeth-whitening.svg"
                alt=""
                className="h-20 mx-auto"
                width="100"
                height="100"
              />

              <h4 className="text-lg font-bold mt-4">Teeth Whitening</h4>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </motion.div>

          <motion.div
            {...atrributes}
            className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4"
          >
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="images/oral-surgery.svg"
                alt=""
                className="h-20 mx-auto"
                width="100"
                height="100"
              />

              <h4 className="text-xl font-bold mt-4">Oral Surgery</h4>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </motion.div>

          <motion.div
            {...atrributes}
            className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4"
          >
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="images/painless-dentistry.svg"
                alt=""
                className="h-20 mx-auto"
                width="100"
                height="100"
              />

              <h4 className="text-xl font-bold mt-4 w-44">
                Painless Dentistry
              </h4>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </motion.div>

          <motion.div
            {...atrributes}
            className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4"
          >
            <div className="bg-white rounded-lg border border-gray-300 p-8">
              <Image
                src="images/periodontics.svg"
                alt=""
                className="h-20 mx-auto"
                width="100"
                height="100"
              />

              <h4 className="text-xl font-bold mt-4">Periodontics</h4>
              <a href="#" className="block mt-4">
                Read More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
