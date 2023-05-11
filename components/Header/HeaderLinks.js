/* eslint-disable */
import React, { useEffect, useState } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// @mui/icons-material
import LogOut from "@mui/icons-material/Logout.js";
import Login from "@mui/icons-material/Login.js";
import Face from "@mui/icons-material/Face.js";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";

// core components
import Button from "/components/CustomButtons/Button.js";

//firebase auth
import { useAuthContext } from "../../context/authContext.js";

import styles from "/styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";
import { useRouter } from "next/router";
import { signOutFirebase } from "../../firebaseConexion/signout.js";
import { Tooltip } from "@mui/material";
import { carritoExist, crearCarrito } from "../../firebaseConexion/carrito.js";
import {
  comprasExist,
  crearTicketCompra,
} from "../../firebaseConexion/ticketCompra.js";
const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const router = useRouter();
  const { user, cart } = useAuthContext();

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const navegar = (ruta) => {
    router.push(ruta);
  };
  const classes = useStyles();

  const signOut = () => {
    signOutFirebase();
  };
  useEffect(() => {
    if (user) {
      //crear carrito si no existe
      carritoExist(user.uid)
        .then((exist) => {
          if (!exist) {
            crearCarrito(user.uid);
          }
        })
        .catch((err) => {
          console.log("something went wrong", err);
        });
      //crear orden de compra si no existe
      comprasExist(user.uid)
        .then((exist) => {
          if (!exist) {
            crearTicketCompra(user.uid);
          }
        })
        .catch((err) => {
          console.log("something went wrong", err);
        });
    }
  }, []);
  return (
    <div className={classes.collapse}>
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            onClick={() => navegar("home")}
            color='transparent'
          >
            Home
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            onClick={(e) => e.preventDefault()}
            color='transparent'
          >
            About us
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            onClick={(e) => e.preventDefault()}
            color='transparent'
          >
            Products
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            onClick={(e) => e.preventDefault()}
            color='transparent'
          >
            Contact us
          </Button>
        </ListItem>
      </List>
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <Tooltip
            id='tooltip-perfil'
            title='perfil'
            placement='top'
            classes={{ tooltip: classes.tooltip }}
            onClick={() => navegar("perfil")}
          >
            <Button
              color='transparent'
              className={classes.navLink + " " + classes.navLinkJustIcon}
            >
              <Face />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id='tooltip-carrito'
            title='carrito'
            placement='top'
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color='transparent'
              justIcon
              className={classes.navLink + " " + classes.navLinkJustIcon}
              onClick={() => navegar("carrito")}
            >
              <ShoppingBasket />
              <div
                style={{
                  fontSize: "12px",
                  color: "#fff",
                  background: "red",
                  borderRadius: "50%",
                  padding: "0 5px",
                  position: "relative",
                  left: "-8px",
                  top: "-10px",
                  opacity: "0.9",
                }}
              >
                {cart && cart.totalProductos > 0 ? cart.totalProductos : ""}
              </div>
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id='tooltip-loginOut'
            title={user ? "deslogearse" : "iniciar sesion"}
            placement='top'
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color='transparent'
              justIcon
              onClick={() => (user ? signOut() : navegar("inicioSesion"))}
              className={classes.navLink + " " + classes.navLinkJustIcon}
            >
              {user ? <LogOut /> : <Login />}
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    </div>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
