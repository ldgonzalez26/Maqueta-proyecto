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

export const crearTickets = async (userId) => {
  await setDoc(doc(db, "tickets", userId), {
    id: userId,
    soportes: [],
    totalSoportes: 0,
    compras: [],
    totalCompras: 0,
  });
};

export const agregarCompra = async (userId, compra) => {
  const docRef = await getDoc(doc(db, "tickets", userId));
  const data = docRef.data();
  let compras = data.compras;
  compra.status = "En proceso";
  let totalCompras = data.totalCompras ? data.totalCompras : 0;
  compras.push(compra);

  await updateDoc(doc(db, "tickets", userId), {
    id: userId,
    compras: compras,
    totalCompras: totalCompras + 1,
  });
};

export const agregarSoporte = async (userId, soporte) => {
  const docRef = await getDoc(doc(db, "tickets", userId));
  const data = docRef.data();
  let soportes = data.soportes;
  soporte.status = "En proceso";
  let totalSoportes = data.totalSoportes ? data.totalSoportes : 0;
  soportes.push(soporte);

  await updateDoc(doc(db, "tickets", userId), {
    id: userId,
    soportes: soportes,
    totalSoportes: totalSoportes + 1,
  });
};

export const getTickets = async(userId) => {
  const docRef = await getDoc(doc(db, "tickets", userId));
  const data = docRef.data();
  return data;
}

export const getCompras = async (userId) => {
  const docRef = await getDoc(doc(db, "tickets", userId));
  const data = docRef.data();
  return data.compras;
};

export const getSoportes = async (userId) => {
  const docRef = await getDoc(doc(db, "tickets", userId));
  const data = docRef.data();
  return data.soportes;
};

export const limpiarCompras = async (userId) => {
  await updateDoc(doc(db, "tickets", userId), {
    id: userId,
    compras: [],
    totalCompras: 0,
  });
};

export const comprasExist = async (userId) => {
  const docRef = doc(db, "tickets", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
};
