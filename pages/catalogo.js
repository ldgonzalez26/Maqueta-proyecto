/*eslint-disable*/
import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
// nodejs library that concatenates classes
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from '@mui/material/InputAdornment';
// @material-ui icons
import Mail from '@mui/icons-material/Mail';
// core components
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Parallax from '/components/Parallax/Parallax.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import CustomInput from '/components/CustomInput/CustomInput.js';
import Subject from '@mui/icons-material/Subject';
// propios
import DialogPersonalizado from '../componentesPropios/DialogPersonalizado.js';
import SectionPlans from '../componentesPropios/SectionPlans.js';

import styles from '/styles/jss/nextjs-material-kit-pro/pages/ecommerceStyle.js';

//Propio
import { getPlanes } from '../firebaseConexion/productos.js';

const useStyles = makeStyles(styles);

export default function CatalogoPage() {
  const router = useRouter();
  //Control de Dialog errores

  const [mostrarDialog, setMostrarDialog] = useState(false);
  const [mensajeDialog, setMensajeDialog] = useState(
    'Inicia sesión para poder agregar productos al carrito'
  );
  const [planes, setPlanes] = useState([]);
  const [simpleSelect, setSimpleSelect] = useState('');

  React.useEffect(() => {
    getPlanes()
      .then((result) => {
        setPlanes(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();

  const goToIniciar = () => {
    router.push('inicioSesion');
  };

  return (
    <div>
      <DialogPersonalizado
        visibilidad={mostrarDialog}
        setVisibilidad={setMostrarDialog}
        mensaje={mensajeDialog}
        tituloBotonAceptar='Iniciar Sesión'
        accionBotonAceptar={goToIniciar}
      />
      <Parallax image='/img/ecommerce_img.jpeg' filter='dark' small>
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
              <div className={classes.brand}>
                <h1 className={classes.title}>Catálogo</h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={4} sm={4}>
            <Card
              background
              style={{ backgroundImage: "url('/img/examples/color1.jpg')" }}
            >
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Category 1
                </h6>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>
                    The best trends in fashion {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href='#' round color='white'>
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card
              background
              style={{ backgroundImage: "url('/img/examples/color3.jpg')" }}
            >
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Category 2
                </h6>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>
                    Kanye joins the Yeezy team at Adidas
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href='#' round color='white'>
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={4} sm={4}>
            <Card
              background
              style={{ backgroundImage: "url('/img/examples/color2.jpg')" }}
            >
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Category 3
                </h6>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>
                    Learn how to use the new colors of{' '}
                    {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href='#' round color='white'>
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg3.jpg')" }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Category 4
                </h6>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>
                    Trending colors of {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href='#' round color='white'>
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6}>
            <Card background style={{ backgroundImage: "url('/img/dg1.jpg')" }}>
              <CardBody background>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  Category 5
                </h6>
                <a href='#pablo'>
                  <h3 className={classes.cardTitle}>
                    Fashion & Style {new Date().getFullYear()}
                  </h3>
                </a>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button href='#' round color='white'>
                  <Subject /> Read
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
