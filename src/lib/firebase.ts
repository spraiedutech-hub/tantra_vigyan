// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "studio-6923371604-e727b",
  "appId": "1:235927328846:web:8410c87a0f4a8ff41e8b1f",
  "apiKey": "AIzaSyC08nF-rby9-8pMQGjsC3rsbsboriu_73E",
  "authDomain": "studio-6923371604-e727b.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "235927328846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
