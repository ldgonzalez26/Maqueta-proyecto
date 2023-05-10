import { db } from "./firebaseConfig"
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc,
    query
} from "firebase/firestore"

export const crearCarrito = async (userId) => {
    await setDoc(doc(db, "carrito", userId), {
        id: userId,
        productos: [],
        totalProductos: 0
    })
}

export const agregarAlCarrito = async (userId, producto) => {
    /*     await setDoc(doc(db, "carrito", userId), producto, 
        {merge: true}); */

    const docRef = await getDoc(doc(db, "carrito", userId))
    const data = docRef.data()
    let productosEnCarrito = data.productos
    let productoEncontrado = false
    producto.precioTotal = producto.precio

    for (let i = 0; i < productosEnCarrito.length; i++) {

        if (productosEnCarrito[i].categoria == producto.categoria &&
            productosEnCarrito[i].duracion == producto.duracion &&
            productosEnCarrito[i].nombre == producto.nombre &&
            productosEnCarrito[i].precio == producto.precio) {

            productoEncontrado = true
            productosEnCarrito[i].cantidad = productosEnCarrito[i].cantidad + 1
            productosEnCarrito[i].precioTotal = productosEnCarrito[i].precioTotal + producto.precio
            break;

        }
    }

    if (!productoEncontrado) {
        producto.cantidad = 1
        productosEnCarrito.push(producto)
    }


    await updateDoc(doc(db, "carrito", userId), {
        id: userId,
        productos: productosEnCarrito,
        totalProductos: data.totalProductos + 1
    })

}

export const getProductosEnCarrito = async (userId) => {
    const docRef = await getDoc(doc(db, "carrito", userId))
    const data = docRef.data()
    return data.productos
}

export const limpiarCarrito = async (userId) =>{

    await updateDoc(doc(db, "carrito", userId), {
        id: userId,
        productos: [],
        totalProductos: 0
    })

}