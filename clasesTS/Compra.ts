export class Compra {
    codigo: String;
    nombre: String;
    status: String;
    monto: String;
    fecha: String;
    metodo: String;
    descripcion: String;

    constructor(codigo: String,
        nombre: String,
        status: String,
        monto: String,
        fecha: String,
        metodo: String,
        descripcion: String) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.status = status;
        this.monto = monto;
        this.fecha = fecha;
        this.metodo = metodo;
        this.descripcion = descripcion;

    }
}