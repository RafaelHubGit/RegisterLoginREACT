import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBaC5qMED2qPThvDSpQWCZfE29-h1AcS9g",
    authDomain: "react-app-curso-dce29.firebaseapp.com",
    projectId: "react-app-curso-dce29",
    storageBucket: "react-app-curso-dce29.appspot.com",
    messagingSenderId: "111390471348",
    appId: "1:111390471348:web:ba16e0d199b17c98b8d3e1"
  };
  
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider,
    app
}
