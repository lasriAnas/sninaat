// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_socLHjhNzUNZt1-Wjplbcf8duNBC_o",
  authDomain: "sninaat-dev.firebaseapp.com",
  projectId: "sninaat-dev",
  storageBucket: "sninaat-dev.appspot.com",
  messagingSenderId: "288951291574",
  appId: "1:288951291574:web:276b8a84db74bf950be017",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
