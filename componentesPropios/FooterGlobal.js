/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InputAdornment from "@mui/material/InputAdornment";
// @material-ui icons
import Mail from "@mui/icons-material/Mail";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Parallax from "/components/Parallax/Parallax.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import Footer from "/components/Footer/Footer.js";
// sections for this page

import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js";

import { db, query, collection, doc, addDoc, setDoc, getDocs } from "../firebaseConexion/firebaseConfig.js"
import { Plan } from "../clasesTS/Plan.ts";

const useStyles = makeStyles(styles);

export default function CatalogoPage() {

    const classes = useStyles();

    return (

        <Footer
            theme="dark"
            content={
                <div>
                    <div className={classes.left}>
                        {/*                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="http://blog.creative-tim.com/?ref=njsmkp-e-ecommerce"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    Blog
                        </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://www.creative-tim.com/presentation?ref=njsmkp-e-ecommerce"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    Presentation
                  </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="#pablito"
                                    onClick={(e) => e.preventDefault()}
                                    className={classes.block}
                                >
                                    Discover
                  </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="#pablito"
                                    onClick={(e) => e.preventDefault()}
                                    className={classes.block}
                                >
                                    Payment
                  </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://www.creative-tim.com/contact-us?ref=njsmkp-e-ecommerce"
                                    target="_blank"
                                    className={classes.block}
                                >
                                    Contact us
                  </a>
                            </ListItem>
                        </List> */}
                    </div>
{/*                     <div className={classes.right}>
                        Latinove &copy; {1900 + new Date().getYear()}{" "}
                        <a
                            href="https://www.creative-tim.com?ref=njsmkp-e-ecommerce"
                            target="_blank"
                            className={classes.aClasses}
                        >

                        </a>{" "}
                        Todos los derechos reservados.
                    </div> */}
                </div>
            }
        >
            <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                    <h5>Acerca de</h5>
                    <p>
                        En Latinove queremos que disfrutes al máximo contenido de calidad con todas las comodidades.
                    </p>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <h5>Redes Sociales</h5>
                    <div className={classes.socialFeed}>
                        <div>
                            <i className="fab fa-instagram" />
                            <p>
                                <a href="https://www.instagram.com/netflixlatinove/" target="_blank">@latinove</a>
                            </p>
                        </div>
                    </div>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                    <h5>Servicios Disponibles</h5>
                    <div className={classes.galleryFeed}>
                        <img
                            src="/img/logos/logoDisney.png"
                            className={classNames(
                                classes.img,
                                classes.imgRaised,
                                classes.imgRounded
                            )}
                            alt="..."
                        />
                        <img
                            src="/img/logos/logoNetflix.png"
                            className={classNames(
                                classes.img,
                                classes.imgRaised,
                                classes.imgRounded
                            )}
                            alt="..."
                        />
                        <img
                            src="/img/logos/logoHBO.png"
                            className={classNames(
                                classes.img,
                                classes.imgRaised,
                                classes.imgRounded
                            )}
                            alt="..."
                        />
                        <img
                            src="/img/logos/logoMas.png"
                            className={classNames(
                                classes.img,
                                classes.imgRaised,
                                classes.imgRounded
                            )}
                            alt="..."
                        />
                    </div>
                </GridItem>
            </GridContainer>
        </Footer>

    )
}