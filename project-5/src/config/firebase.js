// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCofy9e7Hm6_FiRF5zVRpzTm1V1O0bq1wk",
  authDomain: "vite-contact-bf611.firebaseapp.com",
  projectId: "vite-contact-bf611",
  storageBucket: "vite-contact-bf611.firebasestorage.app",
  messagingSenderId: "337715472966",
  appId: "1:337715472966:web:60072d55ac0f63ef767847"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);