// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqI-RTx5ZUP87vpXDl8ccNTQH1JOWaFbw",
  authDomain: "mingle-85290.firebaseapp.com",
  projectId: "mingle-85290",
  storageBucket: "mingle-85290.appspot.com",
  messagingSenderId: "797376239984",
  appId: "1:797376239984:web:d047c340ee0a4e539357b5",
  measurementId: "G-K9TM8WRLE7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
