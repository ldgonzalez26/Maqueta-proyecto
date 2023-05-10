/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from '@mui/styles/makeStyles';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
import CardHeader from "@mui/material/CardHeader";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import InputAdornment from "@mui/material/InputAdornment";
import Close from "@mui/icons-material/Close";
import Icon from "@mui/material/Icon";
import Assignment from "@mui/icons-material/Assignment";
import Mail from "@mui/icons-material/Mail";
import Face from "@mui/icons-material/Face";

import AccountCircle from "@mui/icons-material/AccountCircle";
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
import CustomInput from "/components/CustomInput/CustomInput.js";

import shoppingCartStyle from "/styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js";
import ModalStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";


import { useAuthContext } from "../context/authContext.js"
import { getProductosEnCarrito as getProductos } from "../firebaseConexion/carrito"

const useStyles = makeStyles(shoppingCartStyle);
const useStylesDialog = makeStyles(ModalStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Carrito() {

  const { user } = useAuthContext()
  const [productosEnCarrito, setProductosEnCarrito] = useState([])
  const [tableData, setTableData] = useState([])
  const [total, setTotal] = useState(0)
  const [loginModal, setLoginModal] = useState(false)

  React.useEffect(() => {
    /*     window.scrollTo(0, 0);
        document.body.scrollTop = 0; */
    getProductos(user.uid).then(res => {
      setProductosEnCarrito(res)

      let array = []
      let total = 0
      res.map((producto, index) => {

        total = total + producto.precioTotal

        let arrayAux = [

          <div className={classes.imgContainer} key={1}>
            <img
              src="/img/product1.jpg"
              alt="..."
              className={classes.img}
            />
          </div>,
          <span key={1}>
            <a href="#jacket" className={classes.tdNameAnchor}>
              {producto.nombre}
            </a>
            <br />
          </span>,
          <span key={1}>
            <small className={classes.tdNumberSmall}>$</small>{producto.precio}</span>,
          <span key={1}>
            {producto.cantidad + " "}
          </span>,
          <span key={1}>
            <small className={classes.tdNumberSmall}>$</small>{producto.precioTotal}
          </span>,
          <Tooltip
            key={1}
            id="close1"
            title="Remove item"
            placement="left"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button link className={classes.actionButton}>
              <Close />
            </Button>
          </Tooltip>

        ]

        array.push(arrayAux)

      })
      array.push(
        {
          purchase: true,
          colspan: "3",
          amount: (
            <span>
              <small>$</small>{total}
            </span>
          ),
          col: {
            colspan: 3,
            text: (
              <Button onClick={() => completarCompra()} color="info" round>
                Completar Compra <KeyboardArrowRight />
              </Button>
            )
          }
        }
      )
      console.log(array)
      setTotal(total)
      setTableData(array)

    })
  }, []);

  const classes = useStyles();
  const classesDialog = useStylesDialog();

  const completarCompra = () => {

    //Crear Orden Compra
    //Limpiar carrito
    setLoginModal(true)
    console.log("se completo la compra viejo coño e la madre")
  }

  return (
    <div>

      <Button block round onClick={() => setLoginModal(true)}>
        <AccountCircle /> Login
                </Button>
      {/* LOGIN MODAL START */}

      <Dialog
        classes={{
          root: classesDialog.modalRoot,
          paper: classesDialog.modal + " " + classesDialog.modalLogin
        }}
        open={loginModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLoginModal(false)}
        aria-labelledby="login-modal-slide-title"
        aria-describedby="login-modal-slide-description"
      >
        <Card plain className={classesDialog.modalLoginCard}>
          <DialogTitle id="login-modal-slide-title" className={classesDialog.modalHeader}>
            <CardHeader
              plain
              color="primary"
              className={
                classesDialog.textCenter + " " + classesDialog.cardLoginHeader
              }
            >
              <Button
                simple
                className={classesDialog.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setLoginModal(false)}
              >
                {" "}
                <Close className={classesDialog.modalClose} />
              </Button>
              <h5 className={classesDialog.cardTitleWhite}>Log in</h5>
              <div className={classesDialog.socialLine}>
                <Button
                  justIcon
                  link
                  className={classesDialog.socialLineButton}
                >
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button
                  justIcon
                  link
                  className={classesDialog.socialLineButton}
                >
                  <i className="fab fa-twitter" />
                </Button>
                <Button
                  justIcon
                  link
                  className={classesDialog.socialLineButton}
                >
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
            </CardHeader>
          </DialogTitle>
          <DialogContent
            id="login-modal-slide-description"
            className={classesDialog.modalBody}
          >
            <form>
              <p
                className={
                  classesDialog.description + " " + classesDialog.textCenter
                }
              >
                Or Be Classical
                        </p>
              <CardBody className={classesDialog.cardLoginBody}>
                <CustomInput
                  id="login-modal-first"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Face className={classesDialog.icon} />
                      </InputAdornment>
                    ),
                    placeholder: "First Name..."
                  }}
                />
                <CustomInput
                  id="login-modal-email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail className={classesDialog.icon} />
                      </InputAdornment>
                    ),
                    placeholder: "Email..."
                  }}
                />
                <CustomInput
                  id="login-modal-pass"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon className={classesDialog.icon}>
                          lock_outline
                                  </Icon>
                      </InputAdornment>
                    ),
                    placeholder: "Password..."
                  }}
                />
              </CardBody>
            </form>
          </DialogContent>
          <DialogActions
            className={
              classesDialog.modalFooter + " " + classesDialog.justifyContentCenter
            }
          >
            <Button color="primary" simple size="lg">
              Get started
                      </Button>
          </DialogActions>
        </Card>
      </Dialog>

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
              <h2 className={classes.title}>Carrito</h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Card plain>
            <CardBody plain>
              <h3 className={classes.cardTitle}>Productos</h3>
              <Table
                tableHead={[
                  "",
                  "PRODUCTO",
                  "PRECIO",
                  "CANTIDAD",
                  "MONTO ACUMULADO",
                  ""
                ]}
                tableData={
                  tableData
                }
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
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://blog.creative-tim.com/?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=njsmkp-shopping-cart"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=njsmkp-shopping-cart"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
