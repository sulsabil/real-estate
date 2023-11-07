// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c0fbb.firebaseapp.com",
  projectId: "mern-estate-c0fbb",
  storageBucket: "mern-estate-c0fbb.appspot.com",
  messagingSenderId: "293367500287",
  appId: "1:293367500287:web:ae6a8b0f49ee81a46e6bca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);