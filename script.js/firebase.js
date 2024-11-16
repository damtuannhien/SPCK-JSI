import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyBeMZMn56bOVFZa4gbatcUgbdqeDxEgdxM",
    authDomain: "login-ex-2a668.firebaseapp.com",
    projectId: "login-ex-2a668",
    storageBucket: "login-ex-2a668.appspot.com",
    messagingSenderId: "697946515839",
    appId: "1:697946515839:web:9a75b35721f489d469124a",
    measurementId: "G-FQMZWBZGRV"
  };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);