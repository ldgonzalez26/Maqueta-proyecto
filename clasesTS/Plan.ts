export class Plan {
    nombre: String;
    tipo: String;
    categoria: String;
    duracion: String;
    precio: Number;
    descripcion: String;

    constructor(nombre: String,
        tipo: String,
        categoria: String,
        duracion: String,
        precio: Number,
        descripcion: String) {

            this.nombre = nombre;
            this.tipo = tipo;
            this.categoria = categoria;
            this.duracion = duracion;
            this.precio = precio;
            this.descripcion = descripcion;

    }
}