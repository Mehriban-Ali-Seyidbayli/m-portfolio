
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA1nyoNleDb_PYeIbVTPYjxUZTGAcxJakE",
    authDomain: "portfolio-dashboard-98b65.firebaseapp.com",
    projectId: "portfolio-dashboard-98b65",
    storageBucket: "portfolio-dashboard-98b65.appspot.com",
    messagingSenderId: "1034223959089",
    appId: "1:1034223959089:web:09e8ec97d37e643ce8a910"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const singInWithGoogle = () => signInWithPopup(auth, provider);