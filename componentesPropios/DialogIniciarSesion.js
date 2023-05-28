/*eslint-disable*/
import React, { useState, useContext } from "react";
// sections for this page
import DialogPersonalizado from "../componentesPropios/DialogPersonalizado.js"

export default function CatalogoPage() {
    /* console.log(user) */

    //Control de Dialog errores

    const [tituloBotonAceptar, setTituloBotonAceptar] = ('Iniciar Sesión')
    const [mostrarDialog, setMostrarDialog] = useState(false)
    const [mensajeDialog, setMensajeDialog] = useState("Inicia sesión para poder agregar productos al carrito")

    return (

            <DialogPersonalizado
                tituloBotonAceptar={"Iniciar Sesión"}
                accionBotonAceptar={() => console.log("me voy pa otro lado")}
                mensaje={mensajeDialog}
                mostrarDialog={mostrarDialog}
                setMostrarDialog={setMostrarDialog}
                />

    );
}
