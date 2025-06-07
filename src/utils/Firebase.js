// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdtmz1Ap2e_Vzv4BTZGjHw0NMczvyN4Qw",
  authDomain: "netflix-gpt-db6fd.firebaseapp.com",
  projectId: "netflix-gpt-db6fd",
  storageBucket: "netflix-gpt-db6fd.firebasestorage.app",
  messagingSenderId: "537940248503",
  appId: "1:537940248503:web:c7d5316dfd23680e18ca32",
  measurementId: "G-PPJTRXQW25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();