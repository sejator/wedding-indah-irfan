// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl46YYRExD4-pk9g1NGwIjCcXEvzeGNXw",
  authDomain: "wedding-indah-irfan.firebaseapp.com",
  projectId: "wedding-indah-irfan",
  storageBucket: "wedding-indah-irfan.firebasestorage.app",
  messagingSenderId: "187299044404",
  appId: "1:187299044404:web:7a8ece6f631c0244d5be61",
  measurementId: "G-LSDF9NPZQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;