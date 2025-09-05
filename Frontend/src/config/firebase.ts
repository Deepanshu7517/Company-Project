import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjwdrcK-lcHKl8MxFQDU9YwTn-erHEQaw",
  authDomain: "company-data-a56e9.firebaseapp.com",
  projectId: "company-data-a56e9",
  storageBucket: "company-data-a56e9.firebasestorage.app",
  messagingSenderId: "595692259036",
  appId: "1:595692259036:web:fab19d9497bf3d025d1619",
  measurementId: "G-7DR3RPFSRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);