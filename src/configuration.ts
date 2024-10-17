import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA10z2r-TSZtgpnjInyQ9q5XRB9gtTnGyw",
  authDomain: "cgl-game-90c7e.firebaseapp.com",
  projectId: "cgl-game-90c7e",
  storageBucket: "cgl-game-90c7e.appspot.com",
  messagingSenderId: "340005492415",
  appId: "1:340005492415:web:cb807bb55c5a85c418580a",
  measurementId: "G-EB2GWYFLS4"
};

export const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const db = getFirestore(config);
export const analytics = getAnalytics(config);