/*eslint-disable*/
import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Footer from '/components/Footer/Footer.js';
// sections for this page

import styles from '/styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';

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
