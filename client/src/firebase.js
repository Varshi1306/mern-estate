// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-be2a5.firebaseapp.com",
  projectId: "mern-estate-be2a5",
  storageBucket: "mern-estate-be2a5.appspot.com",
  messagingSenderId: "1054997645221",
  appId: "1:1054997645221:web:8b283ee6f375cc40704a4c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 