// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWxCt4MEdJt11gyqa5B2CfTfZFB42ZKZ4",
  authDomain: "portfolio-4444.firebaseapp.com",
  projectId: "portfolio-4444",
  storageBucket: "portfolio-4444.firebasestorage.app",
  messagingSenderId: "609984299959",
  appId: "1:609984299959:web:6d413edbad2d0278cf5e32",
  measurementId: "G-8ZZ3K3PQ8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);