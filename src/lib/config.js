// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5hzhQfBWu3Tkw7GjI1P3mPa7sps1aJSE",
  authDomain: "hardsolutions-aa9ed.firebaseapp.com",
  projectId: "hardsolutions-aa9ed",
  storageBucket: "hardsolutions-aa9ed.appspot.com",
  messagingSenderId: "677655115650",
  appId: "1:677655115650:web:a1435efe4afded37e9c19b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);