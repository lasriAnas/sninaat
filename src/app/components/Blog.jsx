"use client";
import Link from "next/link";
import React from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db } from "utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Firebase from "firebase/app";
import "firebase/firestore";

export default function Blog() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  const reviewsCollectionRef = collection(db, "reviews");

  function SignIn() {
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>
          Se connecter avec google Google
        </button>
      </>
    );
  }

  const ReviewForm = () => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const GoogleLogin = async () => {
        try {
          const result = await signInWithPopup(auth, googleProvider);
          await addDoc(reviewsCollectionRef, {
            comment: comment,
            name: name,
            date: serverTimestamp(),
            email: auth.currentUser.email,
          });
          setName("");
          setComment("");
          console.log(result.user);
        } catch (error) {
          console.log(error);
        }
      };
      if (!user) {
        GoogleLogin();
      } else {
        await addDoc(reviewsCollectionRef, {
          name: name,
          text: comment,
          date: serverTimestamp(),
          email: auth.currentUser.email,
        });
        setName("");
        setComment("");
      }
    };
    return (
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-black font-bold mb-2">
            Nom :
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-black font-bold mb-2">
            Commentaire :
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={150}
            className="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Envoyer
        </button>
      </form>
    );
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs);
    };
    getUsers();
  }, []);
  /*  https://www.lecourrierdudentiste.com/lepatient/category/blog */
  return (
    <section
      id="blog"
      className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32"
    >
      <h1 className="text-3xl leading-tight font-bold">
        Commentaire &nbsp;
        <Link
          href="/reviews"
          title=""
          className="inline-block text-xs text-teal-500 font-semibold mt-6 mt:md-0"
        >
          plus...
        </Link>
      </h1>

      <div className="md:flex mt-12 md:-mx-4">
        {reviews.slice(0, 3).map((review) => {
          return (
            <div key={review.id} className="md:px-4 md:w-1/2 xl:w-1/3">
              <div className="bg-white rounded border border-gray-300">
                <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
                <div className="p-4">
                  <span className=" text-gray-600">
                    {review.date.toDate().toLocaleDateString()}
                  </span>

                  <p className="text-gray-600 mt-1">{review.text}</p>
                  <div className="flex items-center mt-4">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                    <div className="ml-4">
                      <p className="text-gray-600">
                        Par&nbsp;
                        <span className="text-gray-900 font-semibold">
                          {review.name}
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
      <h1 className="text-3xl leading-tight font-bold mt-10">
        Lesser un commentaire:
      </h1>
      <ReviewForm />
    </section>
  );
}

{
  /* <div className="md:px-4 md:w-1/2 xl:w-1/3">
          <div className="bg-white rounded border border-gray-300">
            <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
            <div className="p-4">
              <span className=" text-gray-600">29 Nov, 2022</span>

              <p className="text-lg font-semibold leading-tight mt-4">
                Card Title
              </p>
              <p className="text-gray-600 mt-1">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                <div className="ml-4">
                  <p className="text-gray-600">
                    Par&nbsp;
                    <span className="text-gray-900 font-semibold">Ali</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="md:px-4 md:w-1/2 xl:w-1/3">
          <div className="bg-white rounded border border-gray-300">
            <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
            <div className="p-4">
              <span className=" text-gray-600">29 Mars, 2023</span>

              <p className="text-lg font-semibold leading-tight mt-4">
                Card Title
              </p>
              <p className="text-gray-600 mt-1">
                This card has supporting text below as a natural lead-in to
                additional content. This card has supporting text below as a
                natural lead-in to additional content. This card has supporting
                text below as a natural lead-in to additional content.
              </p>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                <div className="ml-4">
                  <p className="text-gray-600">
                    Par&nbsp;
                    <span className="text-gray-900 font-semibold">Khadija</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="md:px-4 md:w-1/2 xl:w-1/3 mt-4 md:mt-0">
          <div className="bg-white rounded border border-gray-300">
            <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
            <div className="p-4">
              <span className=" text-gray-600">29 Jan, 2023</span>

              <p className="text-lg font-semibold leading-tight mt-4">
                Card Title
              </p>
              <p className="text-gray-600 mt-1">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                <div className="ml-4">
                  <p className="text-gray-600">
                    Par&nbsp;
                    <span className="text-gray-900 font-semibold">
                      Mohammed
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */
}
