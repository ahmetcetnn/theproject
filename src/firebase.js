import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyCtA87mh_BGIUN2kgUrc3QSIKmeApR2w34",
  authDomain: "thproject-movie.firebaseapp.com",
  projectId: "thproject-movie",
  storageBucket: "thproject-movie.appspot.com",
  messagingSenderId: "547531881629",
  appId: "1:547531881629:web:3be7e3cc6d5823e551e874",
  measurementId: "G-H60D3L5LWC"
};

export const auth= getAuth(app)

const app = initializeApp(firebaseConfig);
