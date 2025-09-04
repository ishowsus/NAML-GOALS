// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW98WyxqrqrRgxHu9cTO_ZGxfosrMMgT8",
  authDomain: "naml-mobile-app---tracker.firebaseapp.com",
  projectId: "naml-mobile-app---tracker",
  storageBucket: "naml-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "821155748360",
  appId: "1:821155748360:web:2c51635d4a75f2478e0fbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);