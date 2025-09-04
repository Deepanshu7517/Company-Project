import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQktkO8R1m1By2hfEue8a-c1WsD8aNvlo",
  authDomain: "mysql-sync-project.firebaseapp.com",
  projectId: "mysql-sync-project",
  storageBucket: "mysql-sync-project.firebasestorage.app",
  messagingSenderId: "510577778702",
  appId: "1:510577778702:web:1312db2779e8b0e75f5c5f",
  measurementId: "G-P6LEMJ44ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);