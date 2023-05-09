// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDmWnf3CHvuCpXv-jNFORdAI6XehTb_zAw",
    authDomain: "home-cost-estimation-bceb2.firebaseapp.com",
    projectId: "home-cost-estimation-bceb2",
    storageBucket: "home-cost-estimation-bceb2.appspot.com",
    messagingSenderId: "893167803654",
    appId: "1:893167803654:web:e050fe97a3ec5e5bde5287",
    measurementId: "G-BB1C27PRSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export { auth, provider };