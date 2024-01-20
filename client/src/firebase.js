// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lightnin-estate.firebaseapp.com",
  projectId: "lightnin-estate",
  storageBucket: "lightnin-estate.appspot.com",
  messagingSenderId: "777621099235",
  appId: "1:777621099235:web:4e6da886ff8035f02e2bd6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
