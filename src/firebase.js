

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIhqu2WGhtdg8rh2lE-QWXt-86Ty7ILSQ",
    authDomain: "crud-todo-63a52.firebaseapp.com",
    projectId: "crud-todo-63a52",
    storageBucket: "crud-todo-63a52.appspot.com",
    messagingSenderId: "77598738256",
    appId: "1:77598738256:web:f298dea76c95ed9a078e55",
    measurementId: "G-NYB26X0PLR"
  };


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };