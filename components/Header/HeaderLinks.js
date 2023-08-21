/* eslint-disable */
import React, { useEffect, useState } from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// react components for routing our app without refresh
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// @mui/icons-material
import LogOut from '@mui/icons-material/Logout.js';
import Login from '@mui/icons-material/Login.js';
import Face from '@mui/icons-material/Face.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputAdornment from '@mui/material/InputAdornment';
import CustomInput from '/components/CustomInput/CustomInput.js';
// core components
import Button from '/components/CustomButtons/Button.js';

//firebase auth
import { useAuthContext } from '../../context/authContext.js';

import styles from '/styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js';
import { useRouter } from 'next/router';
import { signOutFirebase } from '../../firebaseConexion/signout.js';
import { Tooltip } from '@mui/material';
import { carritoExist, crearCarrito } from '../../firebaseConexion/carrito.js';
import { comprasExist, crearTickets } from '../../firebaseConexion/tickets.js';
const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const router = useRouter();
  const { user, cart } = useAuthContext();
  const [search, setSearch] = useState([]);

  const navegar = (ruta) => {
    router.push(ruta);
  };
  const classes = useStyles();

  const signOut = () => {
    signOutFirebase();
  };
  useEffect(() => {
    if (user) {
      console.log(user, 'Identificacion');
      //crear carrito si no existe
      carritoExist(user.uid)
        .then((exist) => {
          if (!exist) {
            crearCarrito(user.uid);
          }
        })
        .catch((err) => {
          console.log('something went wrong', err);
        });
      //crear orden de compra si no existe
      comprasExist(user.uid)
        .then((exist) => {
          if (!exist) {
            crearTickets(user.uid);
            console.log('LLEGASTE');
          }
        })
        .catch((err) => {
          console.log('something went wrong', err);
        });
    }
  }, []);
  return (
    <div className={classes.collapse}>
      <List className={classes.list + ' ' + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            onClick={() => navegar('catalogo')}
            color='transparent'
          >
            Catalogo
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            onClick={() => navegar('tickets')}
            color='transparent'
          >
            Soporte
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            className={classes.navLink}
            onClick={() => navegar('ticketsCompra')}
            color='transparent'
          >
            Tus Compras
          </Button>
        </ListItem>
      </List>
      <List className={classes.list + ' ' + classes.mlAuto}>
        <CustomInput
          value={search}
          setText={setSearch}
          id='regular'
          inputProps={{
            placeholder: 'Regular',
            endAdornment: (
              <InputAdornment position='end'>
                <Face />
              </InputAdornment>
            ),
          }}
          formControlProps={{
            fullWidth: true,
          }}
        />

        {user && (
          <ListItem className={classes.listItem}>
            <Tooltip
              id='tooltip-perfil'
              title='Perfil'
              placement='top'
              classes={{ tooltip: classes.tooltip }}
              onClick={() => navegar('perfil')}
            >
              <Button
                color='transparent'
                className={classes.navLink + ' ' + classes.navLinkJustIcon}
              >
                <AccountCircleIcon />
              </Button>
            </Tooltip>
          </ListItem>
        )}

        {user && (
          <ListItem className={classes.listItem}>
            <Tooltip
              id='tooltip-carrito'
              title='Carrito'
              placement='top'
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color='transparent'
                justIcon
                className={classes.navLink + ' ' + classes.navLinkJustIcon}
                onClick={() => navegar('carrito')}
              >
                <ShoppingCartIcon />
                <div
                  style={{
                    fontSize: '12px',
                    color: '#fff',
                    background: '#820000',
                    borderRadius: '50%',
                    padding: '0 5px',
                    position: 'relative',
                    left: '-8px',
                    top: '-10px',
                    opacity: '0.9',
                  }}
                >
                  {cart && cart.totalProductos > 0 ? cart.totalProductos : ''}
                </div>
              </Button>
            </Tooltip>
          </ListItem>
        )}
        <ListItem className={classes.listItem}>
          <Tooltip
            id='tooltip-loginOut'
            title={user ? 'Cerrar Sesion' : 'iniciar Sesion'}
            placement='top'
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color='transparent'
              justIcon
              onClick={() => (user ? signOut() : navegar('inicioSesion'))}
              className={classes.navLink + ' ' + classes.navLinkJustIcon}
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
  hoverColor: 'primary',
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    'dark',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'rose',
  ]),
};
