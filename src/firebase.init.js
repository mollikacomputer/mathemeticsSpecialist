// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9_UIBIUagjQAt58VsexdiaX7r10po-hM",
  authDomain: "assignment-10-tutor.firebaseapp.com",
  projectId: "assignment-10-tutor",
  storageBucket: "assignment-10-tutor.appspot.com",
  messagingSenderId: "592580893570",
  appId: "1:592580893570:web:1c7c3549e3a8a5f78a4d9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;