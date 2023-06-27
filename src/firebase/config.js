import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyAAPP4DvXyeihE3jmkbdAe14L4v1jPlHro",
    authDomain: "react-curso-fernando-556f6.firebaseapp.com",
    projectId: "react-curso-fernando-556f6",
    storageBucket: "react-curso-fernando-556f6.appspot.com",
    messagingSenderId: "828371355397",
    appId: "1:828371355397:web:6d304dcb57fa9185d5996c"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)