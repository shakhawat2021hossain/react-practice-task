// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB56pJ_0Rm-wslP6cdkolkTD1cmk4llNkg",
  authDomain: "react-practice-task-bb322.firebaseapp.com",
  projectId: "react-practice-task-bb322",
  storageBucket: "react-practice-task-bb322.appspot.com",
  messagingSenderId: "217589954568",
  appId: "1:217589954568:web:089a7f84aa70ea9e1b79bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;