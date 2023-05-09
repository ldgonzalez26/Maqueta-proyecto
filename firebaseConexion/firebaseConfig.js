// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection as c,
  addDoc as a,
  setDoc as sd, 
  doc as d,
  getDocs as gd,
  query as q
} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsW17_1im46RP_xr7so8_SKkcty-T4SU",
  authDomain: "latinovenext.firebaseapp.com",
  projectId: "latinovenext",
  storageBucket: "latinovenext.appspot.com",
  messagingSenderId: "474253415470",
  appId: "1:474253415470:web:ae5f6d957fd7b13227bbbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collection = c;
export const setDoc = sd;
export const getDocs = gd;
export const doc = d;
export const addDoc = a;
export const query = q;