// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbEwcY2-zFJxzSNcQpzBSNJssH-PXGwjo",
  authDomain: "online-job-portal-54b47.firebaseapp.com",
  projectId: "online-job-portal-54b47",
  storageBucket: "online-job-portal-54b47.appspot.com",
  messagingSenderId: "54227498731",
  appId: "1:54227498731:web:db66dad92982507cdbb0ae",
  measurementId: "G-44JPL7548B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};