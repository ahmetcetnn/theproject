import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





const firebaseConfig = {
    apiKey: "AIzaSyCxS-d3SQADZEfIQNLArq5M5O-92jmobSA",
    authDomain: "movieproject-c5c2a.firebaseapp.com",
    projectId: "movieproject-c5c2a",
    storageBucket: "movieproject-c5c2a.appspot.com",
    messagingSenderId: "988002082733",
    appId: "1:988002082733:web:2666119910479979944b24",
    measurementId: "G-K4LXKF7H0J"
  };



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
