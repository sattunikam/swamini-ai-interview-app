// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCryPEqjo9eP3YICkBc2jcduXcfiMwwzpo",
  authDomain: "swamini-7f302.firebaseapp.com",
  projectId: "swamini-7f302",
  storageBucket: "swamini-7f302.firebasestorage.app",
  messagingSenderId: "423264549509",
  appId: "1:423264549509:web:d5af92369846b30e4107ec",
  measurementId: "G-C7GQSM3YC6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);