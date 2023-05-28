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

export const crearUser = async (userId, nombre, correo) => {
  try {
    let res = await setDoc(doc(db, "users", userId), {
      id: userId,
      nombre: nombre,
      correo: correo,
      tipoUsuario: 'Estandar'
    })

  } catch (error) {

    return error

  }
};

export const setUser = async (userId, correo, tipoUsuario) => {

  await updateDoc(doc(db, "users", userId), {
    id: userId,
    correo: correo,
    tipoUsuario: tipoUsuario
  });
};

export const getUser = async (userId) => {
  const docRef = await getDoc(doc(db, "users", userId));
  const data = docRef.data();
  return data;
}