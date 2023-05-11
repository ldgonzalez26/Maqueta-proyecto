import { db } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
} from "firebase/firestore";

import { Plan } from "../clasesTS/Plan.ts";

export const getPlanes = async () => {
  const querySnapshot = await getDocs(query(collection(db, "Planes")));
  let arregloPlanes = [];
  querySnapshot.forEach((doc) => {
    let id = doc.id;
    let { Categoria, Descripcion, Duracion, Nombre, Precio, Tipo } = doc.data();
    let plan = new Plan(Nombre, Tipo, Categoria, Duracion, Precio, Descripcion);
    arregloPlanes.push(plan);
  });
  return arregloPlanes;
};

export const agregarPlan = async (plan) => {
  console.log("agregando plan");
};

export const removerPlan = async (id) => {
  console.log("removiendo plan");
};

export const modificarPlan = async (plan) => {
  console.log("modificando plan");
};
