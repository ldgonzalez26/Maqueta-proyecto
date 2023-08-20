/*eslint-disable*/
import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import InputAdornment from '@mui/material/InputAdornment';
// @material-ui icons
import Mail from '@mui/icons-material/Mail';
// core components
import Header from '/components/Header/Header.js';
import HeaderLinks from '/components/Header/HeaderLinks.js';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Parallax from '/components/Parallax/Parallax.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import Footer from '/components/Footer/Footer.js';
// sections for this page

import styles from '/styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';

import {
  db,
  query,
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
} from '../firebaseConexion/firebaseConfig.js';
import { Plan } from '../clasesTS/Plan.ts';

const useStyles = makeStyles(styles);

export default function CatalogoPage() {
  const classes = useStyles();

  return (
    <Footer theme='dark'>
      <GridContainer>
        <GridItem xs={12} sm={4} md={4}>
          <h5>Acerca de</h5>
          <p>descripción nuestra</p>
        </GridItem>
        <GridItem xs={12} sm={4} md={4}>
          <h5>Redes Sociales</h5>
          <div className={classes.socialFeed}>
            <div>
              <i className='fab fa-instagram' />
              <p>
                <a href='https://www.instagram.com/' target='_blank'>
                  cuenta ig
                </a>
              </p>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </Footer>
  );
}
