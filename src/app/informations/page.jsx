"use client";
/* 
import React from "react";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="h-screen">
      <div>bingus</div>
      <motion.div
        className="w-10 h-10 bg-red-600"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ rotate: 180, scale: 1, opacity: 1 }}
        transition={{
          duration: 5,
          type: "spring",
          stiffness: 260,
          damping: 200,
        }}
      />
    </div>
  );
}
 */
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function App() {
  return (
    <div className="content-center min-h-screen w-full pt-16 bg-sky-300">
      <div className="content-center mx-auto my- w-full max-w-6xl rounded-2xl bg-white p-2">
        <h1 className="flex justify-center my-auto text-purple-900 text-3xl">
          INFORMATIONS
        </h1>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-2 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Prothèse dentaire</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 max-h-60 sm:max-h-[1000px] overflow-scroll sm:overflow-auto">
                <div>
                  <p className="text-lg ">
                    nous réalisons tout types de prothèses dentaires. L’implant
                    dentaire est la solution idéale pour remplacer une ou
                    plusieurs dents manquantes. Nous pouvons vous offrir un
                    remplacement dentaire permanent et esthétique qui vous
                    donnera l’impression d’avoir à nouveau votre propre dent.
                    <br />
                    <br />
                    {/*  */}
                    Notre chirurgien dentiste possède un double diplôme en
                    médecine et en dentisterie, ainsi qu’une formation
                    supplémentaire en chirurgie maxillo-faciale, ce qui fait de
                    lui la personne à consulter pour votre chirurgie. Il utilise
                    des techniques chirurgicales avancées et des matériaux de la
                    plus haute qualité, ce qui lui permet d’obtenir des implants
                    dentaires d’apparence naturelle et durables à long terme.
                    <br />
                    <br />
                    {/*  */}
                    Le blanchiment est un processus par de décoloration des
                    dents vers une teinte plus claire. Il élimine l’agent
                    colorant par des moyens chimiques. Il s’agit d’une procédure
                    sûre lorsqu’elle est effectuée sous la supervision d’un
                    professionnel. Les résultats du traitement dépendent
                    généralement de la gravité de la décoloration. Les dents
                    vivantes et dévitalisées (p. ex. les dents dont la racine a
                    été enlevée) peuvent être toutes deux blanchies en une ou
                    plusieurs visites à la clinique. En revanche, le blanchiment
                    dentaire n’est pas efficace sur les restaurations dentaires
                    telles que les couronnes en métal ou en céramique.
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-2 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Blanchiment des dents</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 max-h-60 sm:max-h-[1000px] overflow-scroll sm:overflow-auto">
                <div>
                  <p className="text-lg max-h-60 sm:max-h-[1000px]">
                    Les dents peuvent se décolorer pour diverses raisons. Le
                    dentiste vous recommandera la méthode la plus idéale en
                    fonction de votre condition bucco-dentaire après un examen
                    afin de déterminer la cause et la nature de la décoloration
                    de vos dents, et vous fournira plus d’informations sur les
                    différents types de procédures de blanchiment disponibles,
                    la durée et la fréquence du traitement.
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-2 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Implant dentaire</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 sm:overflow-auto">
                <div>
                  <p className="text-lg max-h-60 sm:max-h-[1000px] overflow-scroll">
                    L’implantologie est une procédure qui remplace les racines
                    des dents par des tenons métalliques vissés et remplace les
                    dents endommagées ou manquantes par des dents artificielles
                    qui ressemblent à de vraies dents et qui fonctionnent comme
                    des dents réelles. Les implants dentaires peuvent offrir une
                    alternative aux prothèses dentaires ou aux bridges. La façon
                    dont la chirurgie implantaire dentaire est pratiquée dépend
                    du type d’implant et de l’état de l’os de votre mâchoire. La
                    chirurgie d’implant dentaire peut impliquer plusieurs
                    procédures. Le principal avantage des implants est un
                    support solide pour vos nouvelles dents – un processus qui
                    exige que l’os cicatrise bien autour de l’implant. Parce que
                    cette guérison exige du temps, le processus peut prendre
                    plusieurs mois.
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-2 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Chirurgie parodontale</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 max-h-60 sm:max-h-[1000px] overflow-scroll sm:overflow-auto">
                <div>
                  <p className="text-lg max-h-60 sm:max-h-[1000px]">
                    LES SOINS DE GENCIVES, DÉTARTRAGES, CURETAGES, SURFACAGES
                    RADICULAIRES, PLASTIE GINGIVALE PEUVENT ÊTRE RÉALISÉS AU
                    COURS DE LA MÊME SÉANCE
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-2 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Orthodontie</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 max-h-60 sm:max-h-[1000px] overflow-scroll sm:overflow-auto">
                <div>
                  <p className="text-lg max-h-60 sm:max-h-[1000px]">
                    L’objectif du traitement est de corriger les dysmorphoses
                    Dento-Maxillo-Faciales, c’est à dire des dents en
                    mal-position, les déformations des maxillaires. Il n’y a pas
                    que l’aspect esthétique à améliorer, d’autres fonctions
                    comme la respiration, la phonation, la mastication, la
                    déglutition permettront de rétablir la beauté d’un sourire.{" "}
                    <br />
                    <b>
                      <i>
                        Un bilan est nécessaire avant chaque type de traitement
                      </i>
                    </b>
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>{" "}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="my-2 flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-lg font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Blanchiment dentaire</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 max-h-60 sm:max-h-[1000px] overflow-scroll sm:overflow-auto">
                <div>
                  <p className="text-lg max-h-60 sm:max-h-[1000px]">
                    LES SOINS DE GENCIVES, DÉTARTRAGES, CURETAGES, SURFACAGES
                    RADICULAIRES, PLASTIE GINGIVALE PEUVENT ÊTRE RÉALISÉS AU
                    COURS DE LA MÊME SÉANCE
                  </p>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
