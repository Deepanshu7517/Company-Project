// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOlnLmjRX_zkF5dbek8FVhqyGhzyD3kSE",
  authDomain: "syncing-data-38ff6.firebaseapp.com",
  projectId: "syncing-data-38ff6",
  storageBucket: "syncing-data-38ff6.firebasestorage.app",
  messagingSenderId: "153209805665",
  appId: "1:153209805665:web:faa5a2ed63eee039ca8320",
  measurementId: "G-RBB87NQFCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);