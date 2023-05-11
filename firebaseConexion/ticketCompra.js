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

export const crearTicketCompra = async (userId) => {
  await setDoc(doc(db, "ticketsCompra", userId), {
    id: userId,
    compras: [],
    totalCompras: 0,
  });
};

export const agregarCompra = async (userId, compra) => {
  const docRef = await getDoc(doc(db, "ticketsCompra", userId));
  const data = docRef.data();
  let compras = data.compras;
  compra.status = "En proceso";
  let totalCompras = data.totalCompras ? data.totalCompras : 0;
  compras.push(compra);

  await updateDoc(doc(db, "ticketsCompra", userId), {
    id: userId,
    compras: compras,
    totalCompras: totalCompras + 1,
  });
};

export const getCompras = async (userId) => {
  const docRef = await getDoc(doc(db, "ticketsCompra", userId));
  const data = docRef.data();
  return data.compras;
};

export const limpiarCompras = async (userId) => {
  await updateDoc(doc(db, "ticketsCompra", userId), {
    id: userId,
    compras: [],
    totalCompras: 0,
  });
};

export const comprasExist = async (userId) => {
  const docRef = doc(db, "ticketsCompra", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
};
