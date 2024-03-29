"use client";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "utils/firebase";

export default function SignIn() {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
        route.push("/admin/dashboard");
      })
      .catch((error) => {
        alert("email ou mot de pass incorrect");
        console.log(error);
      });
    setEmail("");
    setPassword("");
  };

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

  return (
    <section className="bg-cyan-600">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Bienvenue
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={signIn}
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Votre email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-gray-200 border border-gray-300  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400  "
                  placeholder="name@company.com"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Mot de Passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="text-gray-200 border border-gray-300  sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700  placeholder-gray-400"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Se Connecter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
