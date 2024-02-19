import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_y98ueE2b0C4sfSSO8G5PCyTnzpbRMRw",
  authDomain: "rn-login-64e9b.firebaseapp.com",
  projectId: "rn-login-64e9b",
  storageBucket: "rn-login-64e9b.appspot.com",
  messagingSenderId: "724847257220",
  appId: "1:724847257220:web:b861234421f6479a0f44d1"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)