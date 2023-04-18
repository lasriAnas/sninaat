"use client";
import React from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "utils/firebase";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const reviewsCollectionRef = collection(db, "reviews");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs);
      console.log(reviews);
      const projectId = db.app.name;
    };
    getUsers();
  }, []);

  return (
    <section className="bg-cyan-600">
      <Navbar />
      <section className="pt-52">
        <div className="bg-white py-24 ">
          <h1 className="w-full text-center text-xl">Commentaires: </h1>
          <div className=" grid grid-cols-3 ">
            {reviews.map((review) => {
              return (
                <div
                  key={review.id}
                  className="md:px-4 md:w-1/2 xl:w-full gap-3 mt-12"
                >
                  <div className="bg-white rounded border border-gray-300">
                    <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
                    <div className="p-4">
                      <span className=" text-gray-600">29 Nov, 2022</span>
                      <p className="text-lg font-semibold leading-tight mt-4">
                        Card Title
                      </p>
                      <p className="text-gray-600 mt-1">{review.msg}</p>
                      <div className="flex items-center mt-4">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                        <div className="ml-4">
                          <p className="text-gray-600">
                            Par&nbsp;
                            <span className="text-gray-900 font-semibold">
                              {review.user}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
}
