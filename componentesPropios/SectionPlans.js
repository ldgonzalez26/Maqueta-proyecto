import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import CardHeader from "/components/Card/CardHeader.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";
import Button from "/components/CustomButtons/Button.js";
import makeStyles from "@mui/styles/makeStyles";
import Tooltip from "@mui/material/Tooltip";
// @material-ui icons
import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/latestOffersStyle.js";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

import { useAuthContext } from "../context/authContext.js";
import { agregarAlCarrito as addProducto } from "../firebaseConexion/carrito";

const useStyles = makeStyles(styles);

export default function SectionLatestOffers(props) {
  const { planes, mostrarDialog, setMostrarDialog } = props;
  const { user } = useAuthContext();
  const classes = useStyles();
  const [simpleSelect, setSimpleSelect] = useState("");

  const handleSimple = (event) => {
    setSimpleSelect(event.target.value);
  };

  const comprobarInicioSesion = () => {
    if(user != null) return true
  }

  const agregarAlCarrito = (producto) => {
    if(comprobarInicioSesion()){
      /* console.log(user.uid, producto); */
      addProducto(user.uid, JSON.parse(JSON.stringify(producto)))
        .then((res) => {
          /* console.log("añadido: ", res); */
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      setMostrarDialog(true)
    }
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Planes y Servicios disponibles</h2>
{/*         <Select
          MenuProps={{
            className: classes.selectMenu,
          }}
          classes={{
            select: classes.select,
          }}
          value={simpleSelect}
          onChange={handleSimple}
          inputProps={{
            name: "simpleSelect",
            id: "simple-select",
          }}
        >
          <MenuItem
            disabled
            classes={{
              root: classes.selectMenuItem,
            }}
          >
            Single Select
          </MenuItem>
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected,
            }}
            value='2'
          >
            Paris
          </MenuItem>
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected,
            }}
            value='3'
          >
            Bucharest
          </MenuItem>
          <MenuItem
            classes={{
              root: classes.selectMenuItem,
              selected: classes.selectMenuItemSelected,
            }}
            value='4'
          >
            Rome
          </MenuItem>
        </Select> */}
        <GridContainer>
          {planes.map((plan) => (
            <GridItem md={4} sm={4}>
              <Card product plain>
                <CardHeader image plain>
                  <a>
                    <img src={plan.img} alt='...' />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: "url('/img/examples/gucci.jpg')",
                      opacity: 1,
                    }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <h4 className={classes.cardTitle}>{plan.nombre}</h4>
                  <p className={classes.cardDescription}>{plan.descripcion}</p>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    {/*                     <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                      €1,430
                  </span> */}
                    <span
                      className={classNames(classes.price, classes.priceNew)}
                    >
                      {plan.precio + " $"}
                    </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                    <Tooltip
                      id='tooltip-top'
                      title='Añadir al carrito'
                      placement='top'
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button
                        onClick={() => agregarAlCarrito(plan)}
                        justIcon
                        simple
                        color='rose'
                      >
                        + <ShoppingCart />
                      </Button>
                    </Tooltip>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
