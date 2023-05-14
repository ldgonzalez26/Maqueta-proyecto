/*eslint-disable*/
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Timeline from "@mui/icons-material/Timeline";
import Email from "@mui/icons-material/Email";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
//firebase
import { agregarSoporte } from "../firebaseConexion/tickets.js";
//context
import { useAuthContext } from "../context/authContext.js";

import signupPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";
import { Prdocuto } from "../clasesTS/Producto.ts"
import { TicketSoporte } from "../clasesTS/TicketSoporte.ts";

const useStyles = makeStyles(signupPageStyle);

export default function InicioSesion({ ...rest }) {
  const router = useRouter();
  const { user } = useAuthContext();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const [inputTitulo, setInputTitulo] = useState("");
  const [inputDescripcion, setInputDescripcion] = useState("");

  const crearTicketSoporte = async () => {

    const fechaActual = new Date();
    const mes = fechaActual.getMonth() + 1; // sumamos 1 porque enero es 0
    const dia = fechaActual.getDate();
    const anio = fechaActual.getFullYear();

    // Formateamos la fecha en el formato "MM/DD/YYYY"
    const fechaFormateada = `${mes.toString().padStart(2, '0')}/${dia.toString().padStart(2, '0')}/${anio.toString()}`;

    let ticketSoporte = new TicketSoporte(inputTitulo, inputDescripcion, fechaFormateada, fechaFormateada)
    agregarSoporte(user.uid, transformToJavascriptObject(ticketSoporte)).then(res => {
      console.log("Creando ticket", res)
      goToVerTickets()
    }).catch(error => {
      console.log("Creando ticket", error)
    })
  };

  const transformToJavascriptObject = (obj) => {
    return JSON.parse(JSON.stringify(obj))
  }

  const goToVerTickets = () => {
    router.push("tickets");
  };
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justifyContent='center'>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Reportar un problema</h2>
                <CardBody>
                  <GridContainer justifyContent='center'>
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title='Recuerda registrar tu email y número de tlfn correctos'
                        description='para poder contactarte por esa vía (Puedes editarlos en tu perfil)'
                        icon={Timeline}
                        iconColor='rose'
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                      <form className={classes.form}>
                        <CustomInput
                          value={inputTitulo}
                          setText={setInputTitulo}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            placeholder: "Titulo"
                          }}
                        />
                        <CustomInput
                          value={inputDescripcion}
                          setText={setInputDescripcion}
                          id='login-modal-descripcion'
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            placeholder: "Descripción del problema",
                            multiline: true,
                            rows: 5,
                          }}
                        />
                        <br />
                        <div className={classes.textCenter}>
                          <Button onClick={crearTicketSoporte} round color='primary'>
                            Crear Ticket Soporte
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Footer
          content={
            <div>
              <div className={classes.right}>
                &copy; {1900 + new Date().getYear()}
                <a href='' target='_blank'>
                  , Hivek
                </a>{" "}
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
