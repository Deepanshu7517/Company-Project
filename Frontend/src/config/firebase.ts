import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFOBqf8hyd3aMi6iENM6RYMpl7SA-jT_U",
  authDomain: "database-99996.firebaseapp.com",
  projectId: "database-99996",
  storageBucket: "database-99996.firebasestorage.app",
  messagingSenderId: "114068892226",
  appId: "1:114068892226:web:04bff3a786380f48e3dbdb",
  measurementId: "G-1HQS26V8V6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);