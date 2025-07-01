// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjK_FeDvBBRj1xJJlBBMM-fukxx0ccsfU",
  authDomain: "bmi-calculator-eb9ad.firebaseapp.com",
  projectId: "bmi-calculator-eb9ad",
  storageBucket: "bmi-calculator-eb9ad.firebasestorage.app",
  messagingSenderId: "826530929217",
  appId: "1:826530929217:web:cdd2e534dfc5fa3c5984c0",
  measurementId: "G-XWSKVR0P4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);