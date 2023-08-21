/*eslint-disable*/
import React, { useState } from 'react';
import { useRouter } from 'next/router';
// nodejs library that concatenates classes
import classNames from 'classnames';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
// @mui/icons-material
import Favorite from '@mui/icons-material/Favorite';
import Close from '@mui/icons-material/Close';
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// core components
import Header from '/components/Header/Header.js';
import HeaderLinks from '/components/Header/HeaderLinks.js';
import Parallax from '/components/Parallax/Parallax.js';
import GridContainer from '/components/Grid/GridContainer.js';
import GridItem from '/components/Grid/GridItem.js';
import Footer from '/components/Footer/Footer.js';
import Table from '/components/Table/Table.js';
import Button from '/components/CustomButtons/Button.js';
import Card from '/components/Card/Card.js';
import CardBody from '/components/Card/CardBody.js';
import shoppingCartStyle from '/styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js';
// propios
import DialogPersonalizado from '../componentesPropios/DialogPersonalizado.js';
//firebase
import { getTickets } from '../firebaseConexion/tickets';
//context
import { useAuthContext } from '../context/authContext.js';

const useStyles = makeStyles(shoppingCartStyle);

export default function ticketsCompra() {
  const router = useRouter();
  const { user, cart } = useAuthContext();

  //Control de Dialog errores
  const [mostrarDialog, setMostrarDialog] = useState(false);
  const [mensajeDialog, setMensajeDialog] = useState(
    'Inicia sesión para poder agregar productos al carrito'
  );

  const [tableDataSoporte, setTableDataSoporte] = useState([]);
  const [tableDataCompra, setTableDataCompra] = useState([]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  React.useEffect(() => {
    if (user) {
      getTickets(user.uid).then((res) => {
        let arreglo = [];
        if (res != null) {
          res.compras.map((compra, index) => {
            arreglo.push([
              <span key={'compra-nombre-' + index}>{compra.nombre}</span>,
              <span key={'compra-codigo-' + index}>{compra.codigo}</span>,
              <span key={'compra-fecha-' + index}>
                {compra.fechaActualizacion}
              </span>,
              <span key={'compra-metodo-' + index}>{compra.metodo}</span>,
              <span key={'compra-monto-' + index}>{compra.monto}</span>,
              <span key={'compra-estado-' + index}>{compra.status}</span>,
            ]);
          });
        }

        setTableDataCompra(arreglo);
      });
    } else {
      console.log('NO HAY USUARIO');
    }

    //obtener data de los tickets
  }, []);

  const classes = useStyles();

  const goToCatalogo = () => {
    if (comprobarInicioSesion()) {
      router.push('catalogo');
    } else {
      setMostrarDialog(true);
    }
  };

  const goToIniciar = () => {
    router.push('inicioSesion');
  };

  const comprobarInicioSesion = () => {
    if (user != null) return true;
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
                <h1 className={classes.title}>Lista de compras</h1>
                <h4>
                  Visualiza tus compras pendientes por procesar y tu histórico
                  de compras
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <div style={{ display: 'flex', marginBottom: '3rem' }}>
                <h3
                  style={{ display: 'inline-block' }}
                  className={classes.cardTitle}
                >
                  Órdenes de Compra
                </h3>
                <Tooltip
                  id='add-ticket'
                  title='Explorar catalogo de productos'
                  placement='top'
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    onClick={goToCatalogo}
                    style={{ marginLeft: 'auto' }}
                    justIcon
                    round
                    color='primary'
                  >
                    <Add style={{ color: '#FFFFFF' }} />
                  </Button>
                </Tooltip>
              </div>
              <Table
                tableHead={[
                  'Nombre',
                  'Codigo Ref.',
                  'Ultima Actualizacion',
                  'Método',
                  'Monto',
                  'Estado',
                ]}
                tableData={tableDataCompra}
                tableShopping
                customHeadCellClasses={[
                  classes.textCenter,
                  classes.description,
                  classes.description,
                  classes.textRight,
                  classes.textRight,
                  classes.textRight,
                ]}
                customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                customCellClasses={[
                  classes.tdName,
                  classes.customFont,
                  classes.tdNumber,
                  classes.tdNumber + ' ' + classes.tdNumberAndButtonGroup,
                  classes.tdNumber + ' ' + classes.textCenter,
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
