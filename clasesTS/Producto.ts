export class Producto {
    nombre: String;
    tipo: String;
    categoria: String;
    duracion: String;
    precio: Number;
    descripcion: String;
    cantidad: Number;
    precioTotal: Number;

    constructor(nombre: String,
        tipo: String,
        categoria: String,
        duracion: String,
        precio: Number,
        descripcion: String,
        cantidad: Number,
        precioTotal: Number) {

        this.nombre = nombre;
        this.tipo = tipo;
        this.categoria = categoria;
        this.duracion = duracion;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precioTotal = precioTotal;

    }
}