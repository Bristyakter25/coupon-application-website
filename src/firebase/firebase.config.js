// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Ecgttq_sDn-pFfVM8bHjFcATWGU_vlU",
  authDomain: "coupon-application-website.firebaseapp.com",
  projectId: "coupon-application-website",
  storageBucket: "coupon-application-website.firebasestorage.app",
  messagingSenderId: "529118162650",
  appId: "1:529118162650:web:fd1b01aeb4b04c98193fe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;