import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4U_7YkBLnhxldT9IZirKd24PHzmlHh84",
  authDomain: "synctask-73db9.firebaseapp.com",
  projectId: "synctask-73db9",
  storageBucket: "synctask-73db9.firebasestorage.app",
  messagingSenderId: "110576617281",
  appId: "1:110576617281:web:7647c06ecda9fadfbd43c0",
  measurementId: "G-CQFDLFGZCF"
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };