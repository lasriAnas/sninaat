"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, db } from "utils/firebase";
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { Tab } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import React from "react";
import {
  Firestore,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import Image from "next/image";
import Calendar from "./Calendar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="bg-cyan-500 rounded-md h-1/2 col-start-11 col-span-1 "
        onClick={() => auth.signOut()}
      >
        Sign Out
      </button>
    )
  );
}

export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  function Chatroom() {
    const dummy = useRef();
    const messagesCollectionRef = collection(db, "messages");
    const q = query(messagesCollectionRef, orderBy("createdAt"), limit(25));

    const [messages] = useCollectionData(q, { idField: "id" });
    const [formValue, setFormValue] = useState("");

    const SendMessage = async (e) => {
      e.preventDefault();
      const uid = auth.currentUser.uid;
      const email = auth.currentUser.email;

      await addDoc(messagesCollectionRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        email,
      });
      setFormValue("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <>
        <div className="h-[500px] overflow-y-scroll ">
          {messages &&
            messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
          <div ref={dummy}></div>
        </div>
        <form onSubmit={SendMessage}>
          <input
            className="bg-slate-600 text-white rounded-l-md w-11/12 "
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            key="1"
          />
          <button
            className="w-1/12 bg-slate-400 text-slate-800 hover:text-white rounded-r-md px-3 hover:bg-slate-800"
            type="submit"
          >
            send
          </button>
        </form>
      </>
    );
  }

  function ChatMessage(props) {
    const { text, uid, email, createdAt } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    const date =
      createdAt &&
      (createdAt.toDate ? createdAt.toDate().toLocaleString() : "");

    return (
      <div key={uid} className={`message ${messageClass}`}>
        <p>{text}</p>
        <h6 className="text-xs">
          {email} | {date}
        </h6>
      </div>
    );
  }
  console.log(user);

  /* --------------------------------loading------------------------------ */
  if (loading)
    return (
      <div
        className="min-h-screen bg-cyan-600 flex items-center justify-center"
        role="status"
      >
        <svg
          aria-hidden="true"
          className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  /* --------------------------------loading------------------------------ */

  if (!user) route.push("/admin");

  if (user)
    return (
      <div className="flex-col min-h-screen bg-cyan-600 ">
        <nav className="pl-6 h-16 bg-cyan-700 grid grid-cols-12 items-center">
          <motion.div className="w-1/2 md:w-auto">
            <a href="/" className="flex text-white font-bold text-2xl">
              Sninaat
              <Image
                className="h-10 w-11 sm:h-10 "
                src="/icons8-dental-crown-office-96.png"
                width="40"
                height="40"
                alt="logo"
              />
            </a>
          </motion.div>

          <SignOut />
        </nav>
        <section className="flex  justify-center items-center ">
          <div className="w-11/12 md:w-5/6 px-2 py-16 sm:px-0">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                <Tab
                  key="1"
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-black",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Calendrier
                </Tab>
                <Tab
                  key="2"
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-lg font-medium leading-5 text-black",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  Chat
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel
                  key="1"
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <Calendar />
                </Tab.Panel>
                <Tab.Panel
                  key="2"
                  className={classNames(
                    "rounded-xl bg-slate-700 p-3",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <Chatroom />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>
      </div>
    );
}
{
  /* <div className="w-11/12 max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(func).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                      "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel
                key="1"
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                bruh
              </Tab.Panel>
              <Tab.Panel
                key="1"
                className={classNames(
                  "rounded-xl bg-white p-3",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                bingus
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div> */
}
