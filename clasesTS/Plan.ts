export class Plan {
    nombre: String;
    tipo: String;
    categoria: String;
    duracion: String;
    precio: Number;
    descripcion: String;
    img: String;

    constructor(nombre: String,
        tipo: String,
        categoria: String,
        duracion: String,
        precio: Number,
        descripcion: String,
        img: String) {

            this.nombre = nombre;
            this.tipo = tipo;
            this.categoria = categoria;
            this.duracion = duracion;
            this.precio = precio;
            this.descripcion = descripcion;
            this.img = img;

    }
}