/*eslint-disable*/
import React, { useState } from "react";
import { useRouter } from "next/router";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
import Close from "@mui/icons-material/Close";
import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Footer from "/components/Footer/Footer.js";
import Table from "/components/Table/Table.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import { getTickets } from "../firebaseConexion/tickets";

import shoppingCartStyle from "/styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js";

import { useAuthContext } from "../context/authContext.js";

const useStyles = makeStyles(shoppingCartStyle);

export default function tickets() {
  const router = useRouter();
  const { user, cart } = useAuthContext();
  const [tableDataSoporte, setTableDataSoporte] = useState([])
  const [tableDataCompra, setTableDataCompra] = useState([])
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  React.useEffect(() => {
    if (user) {
      getTickets(user.uid).then((res) => {

        let arreglo = []
        res.soportes.map((soporte, index) => {
          arreglo.push(
            [
              <span key={"ticket-titulo-" + index}>
                <a>
                  {soporte.titulo}
                </a>
              </span>,
              <span key={"ticket-descripcion-" + index}>
                <a>
                  {soporte.descripcion}
                </a>
              </span>,
              <span key={"ticket-fecha-" + index}>
                <a>
                  {soporte.fechaActualizacion}
                </a>
              </span>,
              <span key={"ticket-soporte-" + index}>
                <a>
                  {soporte.status}
                </a>
              </span>
            ]
          )
        })

        setTableDataSoporte(arreglo)

      })
    } else {
      console.log("NO HAY USUARIO")
    }

    //obtener data de los tickets



  }, []);

  const goToCrearTicket = () =>{
    router.push("crearTicket");
  }
  const classes = useStyles();
  return (
    <div>


      <Parallax image="/img/examples/bg2.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h2 className={classes.title}>Pagina de soporte</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          <Card plain>
            <CardBody plain>

              <div style={{ display: 'flex', marginBottom: "3rem" }}>
                <h3 style={{ display: 'inline-block' }} className={classes.cardTitle}>Tickets de soporte</h3>
                <Tooltip
                  id="add-ticket"
                  title="Nueva solicitud"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button onClick={goToCrearTicket} style={{ marginLeft: 'auto' }} justIcon round color="primary"><Add style={{ color: "#FFFFFF" }} />
                  </Button>
                </Tooltip>
              </div>

              <Table
                tableHead={[
                  "Titulo",
                  "Descripción",
                  "Ultima Actualizacion",
                  "Estado"
                ]}
                tableData={tableDataSoporte}
                tableShopping
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.description,
                  classes.description,
                  classes.textRight,
                  classes.textRight,
                  classes.textRight
                ]}
                customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                customCellClasses={[
                  classes.tdName,
                  classes.customFont,
                  classes.customFont,
                  classes.tdNumber,
                  classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                  classes.tdNumber + " " + classes.textCenter
                ]}
                customClassesForCells={[1, 2, 3, 4, 5, 6]}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
