/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Camera from "@mui/icons-material/Camera";
import Palette from "@mui/icons-material/Palette";
import People from "@mui/icons-material/People";
import Add from "@mui/icons-material/Add";
import Favorite from "@mui/icons-material/Favorite";
import FormControlLabel from "@mui/material/FormControlLabel";
import HttpsIcon from '@mui/icons-material/Https';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Badge from "/components/Badge/Badge.js";
import Muted from "/components/Typography/Muted.js";
import Parallax from "/components/Parallax/Parallax.js";
import Clearfix from "/components/Clearfix/Clearfix.js";
import Button from "/components/CustomButtons/Button.js";
//context
import { useAuthContext } from "../context/authContext.js";

import profilePageStyle from "/styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";
import parallaxStyle from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js";

const useStyleParralax = makeStyles(parallaxStyle)
const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {

  const { user, cart } = useAuthContext();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const classesParallax = useStyleParralax();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  const goToCarrito = () => {
    router.push("carrito");
  };

  return (
    <div>
      <Parallax image='/img/fondo/Background.png' filter='dark' small>
        <div className={classesParallax.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classesParallax.mlAuto,
                classesParallax.mrAuto,
                classesParallax.textCenter
              )}
            >
              <div className={classesParallax.brand}>
                <h1 className={classesParallax.title}>Perfil de usuario</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classNames(classes.description, classes.textCenter)}>
            <br />
            <div>
              <h3 className={classes.title}>{user != null ? user.nombre : 'N/A'}</h3>
              <h5 className={classes.title}>{user != null ? 'Tipo de usuario: ' + user.tipoUsuario : 'N/A'}</h5>
              {/* <h5 className={classes.title}>{user != null ? 'Email: ' + user.email : 'N/A'}</h5> */}
              <HttpsIcon className={classes.inputAdornmentIcon} />
              <a 
                className={classNames(classes.description, classes.textCenter)}
                onClick={() => console.log("orale")}> Cambiar clave</a>
              <br />
              <ShoppingCartIcon className={classes.inputAdornmentIcon} />
              <a 
                className={classNames(classes.description, classes.textCenter)}
                onClick={goToCarrito}
              > Ir a tu carrito</a>
              <br />
              <br />
              {/*               <div className={classes.profileTabs}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Apartado de Opciones",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justifyContent="center">
                          <GridItem xs={12} sm={12} md={3}>
                            <div className={classNames(classes.description, classes.textCenter)}>
                              <p>
                                Cambiar clave
                              </p>
                            </div>
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </div>
             */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
