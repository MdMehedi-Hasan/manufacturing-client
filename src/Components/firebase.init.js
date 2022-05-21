// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyADuT-zSCiNVlNLFV53LloqaYEUn8kCtnM",
  // authDomain: "full-stack-project-f685e.firebaseapp.com",
  // projectId: "full-stack-project-f685e",
  // storageBucket: "full-stack-project-f685e.appspot.com",
  // messagingSenderId: "842144719177",
  // appId: "1:842144719177:web:c1e1cdda298e451b7afa98",
  // ========================================================
  apiKey:process.env.REACT_APP_FIREBASE_apiKey,
  authDomain:process.env.REACT_APP_FIREBASE_authDomain,
  projectId:process.env.REACT_APP_FIREBASE_projectId,
  storageBucket:process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId:process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId:process.env.REACT_APP_FIREBASE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;