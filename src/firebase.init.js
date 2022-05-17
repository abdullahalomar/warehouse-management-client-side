// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsQiRqfrxxc4xueHgq9qU61Pw7krazPgc",
  authDomain: "laptop-warehouse-553b4.firebaseapp.com",
  projectId: "laptop-warehouse-553b4",
  storageBucket: "laptop-warehouse-553b4.appspot.com",
  messagingSenderId: "316556370406",
  appId: "1:316556370406:web:29348d4b7d6d30fbde3627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;