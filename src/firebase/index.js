// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfId3UU1JRb9znShX0r1Kejy8DeI3-_pU",
  authDomain: "productinventoryapp-4019a.firebaseapp.com",
  projectId: "productinventoryapp-4019a",
  storageBucket: "productinventoryapp-4019a.appspot.com",
  messagingSenderId: "620610806070",
  appId: "1:620610806070:web:0828c8a73075379732d397"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{
    db
}