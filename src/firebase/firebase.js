



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyt9X7I10l4bQweCqLuPBHerO8XM7eerw",
  authDomain: "wenotes-1a60c.firebaseapp.com",
  projectId: "wenotes-1a60c",
  storageBucket: "wenotes-1a60c.appspot.com",
  messagingSenderId: "368037036150",
  appId: "1:368037036150:web:0c381fdd1bb43a27b2df57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);


