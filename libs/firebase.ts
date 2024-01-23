// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC341-jrV-xaAZhIggdqfxFxazw7LlcHAY",
  authDomain: "next-eshop-b1c90.firebaseapp.com",
  projectId: "next-eshop-b1c90",
  storageBucket: "next-eshop-b1c90.appspot.com",
  messagingSenderId: "249744406679",
  appId: "1:249744406679:web:bbbb02fa5778a66656d1d2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp