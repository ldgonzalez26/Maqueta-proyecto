// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection as c,
  addDoc as a,
  setDoc as sd,
  doc as d,
  getDocs as gd,
  query as q,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBh_3PioM_HcIkoVUwevCMYQNjz0GQ7BvQ',
  authDomain: 'carib-ecommerce.firebaseapp.com',
  projectId: 'carib-ecommerce',
  storageBucket: 'carib-ecommerce.appspot.com',
  messagingSenderId: '658660795007',
  appId: '1:658660795007:web:6cc3be1e0307cf2355d54a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collection = c;
export const setDoc = sd;
export const getDocs = gd;
export const doc = d;
export const addDoc = a;
export const query = q;
