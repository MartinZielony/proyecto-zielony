// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs65zLcUVl1R08iWsWKctliCI-26kGVjY",
  authDomain: "proyecto-ch-zielony.firebaseapp.com",
  projectId: "proyecto-ch-zielony",
  storageBucket: "proyecto-ch-zielony.appspot.com",
  messagingSenderId: "673121591588",
  appId: "1:673121591588:web:066f9eda1322402aa013b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;