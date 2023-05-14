export class TicketSoporte {
    titulo: String;
    descripcion: String;
    fecha: String;
    fechaActualizacion: String;

    constructor(titulo: String,
        descripcion: String,
        fecha: String,
        fechaActualizacion: String){

            this.titulo = titulo;
            this.descripcion = descripcion;
            this.fecha = fecha;
            this.fechaActualizacion = fechaActualizacion;

    }
}