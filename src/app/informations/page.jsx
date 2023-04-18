"use client";
import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Info() {
  /* --------------------------------data----------------------------- */
  let [categories] = useState({
    "Blanchissement dentaire": [
      {
        id: 1,
        fyi: "Le blanchiment des dents est une procédure cosmétique qui utilise des produits chimiques pour éliminer les taches et rendre les dents plus blanches. \n\n Avant de commencer un traitement de blanchiment des dents, il est recommandé de consulter un dentiste pour évaluer la santé de vos dents et déterminer si vous êtes un bon candidat pour la procédure. \n\n Il existe plusieurs options de blanchiment des dents, notamment le blanchiment à domicile avec des plateaux remplis de gel blanchissant, le blanchiment en cabinet avec des lampes LED, ou encore les traitements au peroxyde d'hydrogène. \n\n  Les résultats du blanchiment des dents peuvent varier en fonction de plusieurs facteurs, tels que la couleur initiale de vos dents, votre régime alimentaire et vos habitudes de consommation (tabac, café, thé, vin rouge, etc.), ainsi que la méthode de blanchiment utilisée. \n\n Il est important de suivre les instructions du dentiste ou du fabricant de produits de blanchiment pour éviter les effets secondaires tels que la sensibilité dentaire ou les irritations des gencives. \n\n Bien que le blanchiment des dents soit considéré comme sûr, il est recommandé de limiter la fréquence des traitements pour éviter d'endommager l'émail des dents.",
        image: "/images/teeth_whitening_900x500.jpg",
      },
    ],
    "Chirurgie buccale": [
      {
        id: 2,
        fyi: "La chirurgie orale est une branche de la médecine dentaire qui se concentre sur les interventions chirurgicales dans la bouche, y compris les dents, les gencives, la mâchoire et les tissus mous. \n\n Si vous envisagez une chirurgie orale, il est important de discuter avec votre chirurgien dentiste des avantages et des risques potentiels associés à l'intervention. \n\n Selon la nature de l'intervention, vous pouvez avoir besoin d'une anesthésie locale ou générale. Après l'intervention, vous devrez suivre les instructions de votre chirurgien dentiste pour assurer une guérison rapide et efficace. \n\n Cela peut inclure des changements temporaires à votre régime alimentaire et des soins supplémentaires pour éviter les complications postopératoires. Il est également important de prévoir du temps pour récupérer et de ne pas retourner au travail ou aux activités normales trop rapidement.",
        image: "/images/og_male_dds_female_asst_procedure-1.jpg",
      },
    ],
    "Dentisterie indolore": [
      {
        id: 3,
        fyi: " La dentisterie sans douleur est une approche de la dentisterie qui utilise des techniques et des technologies avancées pour minimiser la douleur et l'inconfort associés aux traitements dentaires. \n\n Si vous cherchez des traitements dentaires sans douleur, vous pouvez discuter avec votre dentiste de diverses options pour minimiser la douleur et l'inconfort pendant les traitements. \n\n  Certaines de ces options peuvent inclure l'utilisation d'anesthésiques locaux ou de sédation consciente pour vous aider à vous détendre pendant les traitements. \n\n De plus, les dentistes sans douleur peuvent utiliser des techniques avancées pour minimiser la douleur, telles que l'utilisation de lasers ou de technologies numériques pour rendre les traitements plus précis et plus efficaces. \n\n Il est important de discuter de vos préférences et de vos préoccupations avec votre dentiste pour trouver la meilleure approche pour vos besoins.  \n\n Il est également important de continuer à suivre une bonne hygiène bucco-dentaire et de visiter régulièrement votre dentiste pour prévenir les problèmes dentaires et éviter les traitements douloureux à l'avenir.",
        image: "/images/AdobeStock_415618291__2___1670285334_24585.jpg",
      },
    ],
    Parodontie: [
      {
        id: 3,
        fyi: " La prodontie est une branche de la dentisterie qui se concentre sur la reconstruction et la restauration complète de la bouche, y compris les dents, les gencives, les muscles et les articulations. \n\n Si vous envisagez une prodontie, il est important de discuter avec votre dentiste des options de traitement disponibles pour restaurer la fonction et l'apparence de votre bouche. \n\n Les traitements de prodontie peuvent inclure la pose de couronnes, de bridges, d'implants dentaires ou de prothèses dentaires complètes, selon les besoins de chaque patient. \n\n Votre dentiste peut également utiliser des techniques avancées telles que la planification numérique pour s'assurer que les traitements sont précis et efficaces. \n\n Avant de commencer les traitements, votre dentiste évaluera l'état de votre bouche et créera un plan de traitement personnalisé en fonction de vos besoins. \n\n Il est important de suivre les instructions de votre dentiste pour assurer une guérison rapide et efficace après les traitements de prodontie. Cela peut inclure des soins supplémentaires à domicile et des visites régulières chez le dentiste pour assurer la santé à long terme de votre bouche.",
        image: "/images/45065060-36559967.png",
      },
    ],
  });
  /* ---------<Navbar />-----------------------end data----------------------------- */

  return (
    <div className="flex-col bg-cyan-600 pt-32">
      <Navbar />
      <section className="flex justify-center items-center min-h-screen">
        <div className="w-11/12 md:w-5/6 px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-black",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-white hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <div
                        key={post.id}
                        className="relative rounded-md p-3 grid grid-cols-1" /* flex flex-col justify-center items-center */
                      >
                        <div className="flex justify-center items-center">
                          <Image
                            className="rounded mb-6 self-center"
                            src={post.image}
                            width="500"
                            height="350"
                            alt="logo"
                          />
                        </div>

                        <br />

                        <p className="text-base text-gray-700 font-medium leading-5">
                          {post.fyi.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  );
}
