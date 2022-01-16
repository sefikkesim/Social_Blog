// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEUPr5rcFgfMb79cSluokBNGo2Oxpg_ws",
  authDomain: "social-blog-dcfca.firebaseapp.com",
  projectId: "social-blog-dcfca",
  storageBucket: "social-blog-dcfca.appspot.com",
  messagingSenderId: "670493263133",
  appId: "1:670493263133:web:a00fb5eacb0696587d8df4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
