// // Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"
// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF7nLdHuKQYumxLFk92V2qogTwkJaTiqM",
  authDomain: "clone-b7179.firebaseapp.com",
  projectId: "clone-b7179",
  storageBucket: "clone-b7179.appspot.com",
  messagingSenderId: "711891836899",
  appId: "1:711891836899:web:82ea99e74860a807638ad6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=app.firestore();