// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB02V8mOM-i1q10bjeeCF_2x1EzTZueK4",
  authDomain: "inventory-management-40c37.firebaseapp.com",
  projectId: "inventory-management-40c37",
  storageBucket: "inventory-management-40c37.appspot.com",
  messagingSenderId: "215056924125",
  appId: "1:215056924125:web:35312b40f26a8af1fd0a34",
  measurementId: "G-X7R5PLE9Y0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export{firestore}