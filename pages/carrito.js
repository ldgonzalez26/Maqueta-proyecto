/*eslint-disable*/
import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import Tooltip from "@mui/material/Tooltip";

import Datetime from "react-datetime";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import Close from "@mui/icons-material/Close";
import Add from "@mui/icons-material/Add.js";
import Remove from "@mui/icons-material/Remove.js";
import Danger from "/components/Typography/Danger.js";

// core components
import Parallax from "/components/Parallax/Parallax.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Footer from "/components/Footer/Footer.js";
import Table from "/components/Table/Table.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import FormControl from "@mui/material/FormControl";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

//context
import { useAuthContext } from "../context/authContext.js";

//firebase
import { agregarCompra } from "../firebaseConexion/tickets.js";
import { limpiarCarrito } from "../firebaseConexion/carrito.js";
import { agregarAlCarrito as addProducto, quitarDelCarrito as removeProducto } from "../firebaseConexion/carrito";

//styles
import shoppingCartStyle from "/styles/jss/nextjs-material-kit-pro/pages/shoppingCartStyle.js";
import ModalStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js";
import selectStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(shoppingCartStyle);
const useStylesDialog = makeStyles(ModalStyle);
const useStylesSelect = makeStyles(selectStyle);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export default function Carrito() {
  const { user, cart } = useAuthContext();
  const [tableData, setTableData] = useState([]);
  const [loginModal, setLoginModal] = useState(false);
  const [desabilitar, setDesabilitar] = useState(false);

  //text for modal
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState("");
  const [metodo, setMetodo] = useState("metodo");
  const [descripcion, setDescripcion] = useState("");

  React.useEffect(() => {
    if (cart) {
      const productosEnCarrito = cart.productos;
      let tableData = [];
      let precioTotal = 0;
      productosEnCarrito.map((producto, index) => {
        precioTotal = precioTotal + producto.precioTotal;

        let arrayAux = [
          <div className={classes.imgContainer} key={1}>
            <img src='/img/product1.jpg' alt='...' className={classes.img} />
          </div>,
          <span key={index}>
            <a href='#jacket' className={classes.tdNameAnchor}>
              {producto.nombre}
            </a>
            <br />
          </span>,
          <span key={index}>
            <small className={classes.tdNumberSmall}>$</small>
            {producto.precio}
          </span>,
          <span key={index}>{producto.cantidad + " "}</span>,
          <span key={index}>
            <small className={classes.tdNumberSmall}>$</small>
            {producto.precioTotal}
          </span>,
          <Tooltip
            key={index}
            id={`agregar-${index}`}
            title='agregar'
            placement='top'
            classes={{ tooltip: classes.tooltip }}
          >
            <Button onClick={() => agregarAlCarrito(producto)} link className={classes.actionButton}>
              <Add />
            </Button>
          </Tooltip>,
          <Tooltip
            key={index}
            id={`eliminar-${index}`}
            title='eliminar'
            placement='top'
            classes={{ tooltip: classes.tooltip }}
          >
            <Button onClick={() => quitarDelCarrito(producto)} link className={classes.actionButton}>
              <Remove />
            </Button>
          </Tooltip>,
          <Tooltip
            key={index}
            id={`remover-${index}`}
            title='remover'
            placement='top'
            classes={{ tooltip: classes.tooltip }}
          >
            <Button link className={classes.actionButton}>
              <Close />
            </Button>
          </Tooltip>,
        ];

        tableData.push(arrayAux);
      });
      tableData.push({
        purchase: true,
        colspan: "3",
        amount: (
          <span>
            <small>$</small>
            {precioTotal}
          </span>
        ),
        col: {
          colspan: 3,
          text: (
            <Button onClick={() => openModal()} color='info' round>
              Completar Compra <KeyboardArrowRight />
            </Button>
          ),
        },
      });
      setMonto(precioTotal);
      setTableData(tableData);
    }
  }, [cart]);
  const classes = useStyles();
  const classesDialog = useStylesDialog();
  const classesSelect = useStylesSelect();

  const openModal = () => {
    setLoginModal(true);
  };
  const limpiarCampos = () => {
    setNombre("");
    setCodigo("");
    setMonto("");
    setFecha("");
    setMetodo("metodo");
    setDescripcion("");
  };
  const generarOrden = () => {
    setLoginModal(false);
    limpiarCampos();

    const compra = {
      nombre,
      codigo,
      monto,
      fecha,
      fechaActualizacion: fecha,
      metodo,
      descripcion,
    };
    agregarCompra(user.uid, compra)
      .then(() => {
        limpiarCarrito(user.uid);
      })
      .catch((err) => {
        console.log("something went wrong", err);
      });
  };

  const agregarAlCarrito = (producto) =>{
    addProducto(user.uid, producto).then(res =>{
      console.log("añadiendo al carrito: ", res)
    }).catch(error =>{
      console.log("Error añadiendo al carrito ", error)
    })
  }

  const quitarDelCarrito = (producto) =>{
    removeProducto(user.uid, producto).then(res =>{
      console.log("Quitando al carrito: ", res)
    }).catch(error =>{
      console.log("Quitando añadiendo al carrito ", error)
    })
  }

  return (
    <div>
      <Dialog
        classes={{
          root: classesDialog.modalRoot,
          paper: classesDialog.modal + " " + classesDialog.modalLogin,
        }}
        open={loginModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLoginModal(false)}
        aria-labelledby='login-modal-slide-title'
        aria-describedby='login-modal-slide-description'
      >
        <Card className={classesDialog.modalLoginCard}>
          <DialogTitle
            id='login-modal-slide-title'
            className={classesDialog.modalHeader}
          >
            <CardHeader
              color='primary'
              className={
                classesDialog.textCenter + " " + classesDialog.cardLoginHeader
              }
            >
              <Button
                simple
                className={classesDialog.modalCloseButton}
                key='close'
                aria-label='Close'
                onClick={() => setLoginModal(false)}
              >
                {" "}
                <Close className={classesDialog.modalClose} />
              </Button>
              <h5 className={classesDialog.cardTitleWhite}>Orden de compra</h5>
            </CardHeader>
          </DialogTitle>
          <DialogContent
            id='login-modal-slide-description'
            className={classesDialog.modalBody}
          >
            <form>
              <CardBody className={classesDialog.cardLoginBody}>
                <CustomInput
                  value={nombre}
                  setText={setNombre}
                  id='login-modal-name'
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    placeholder: "nombre",
                  }}
                />
                <CustomInput
                  value={codigo}
                  setText={setCodigo}
                  id='login-modal-ref'
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    placeholder: "referencia",
                  }}
                />
                <CustomInput
                  value={monto}
                  setText={setMonto}
                  id='login-modal-amount'
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    disabled: true,
                    type: "number",
                    placeholder: "monto",
                  }}
                />
                <FormControl fullWidth>
                  <Datetime
                    value={fecha}
                    locale='es'
                    id='login-modal-date'
                    onChange={(e) =>
                      e.format ? setFecha(e.format("MM/DD/YYYY")) : setFecha("")
                    }
                    timeFormat={false}
                    inputProps={{ placeholder: "fecha del pago" }}
                  />
                </FormControl>
                <br />
                <br />

                <FormControl fullWidth>
                  <Select
                    MenuProps={{
                      className: classesSelect.selectMenu,
                    }}
                    classes={{
                      select: classesSelect.select,
                    }}
                    value={metodo}
                    onChange={(e) => setMetodo(e.target.value.toLowerCase())}
                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select",
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classesSelect.selectMenuItem,
                      }}
                      value='metodo'
                    >
                      metodo de pago
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classesSelect.selectMenuItem,
                        selected: classesSelect.selectMenuItemSelected,
                      }}
                      value='pago-movil'
                    >
                      pago movil
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classesSelect.selectMenuItem,
                        selected: classesSelect.selectMenuItemSelected,
                      }}
                      value='zelle'
                    >
                      zelle
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classesSelect.selectMenuItem,
                        selected: classesSelect.selectMenuItemSelected,
                      }}
                      value='transferencia'
                    >
                      transferencia bancaria
                    </MenuItem>
                  </Select>
                </FormControl>
                <br />
                <CustomInput
                  value={descripcion}
                  setText={setDescripcion}
                  id='login-modal-descripcion'
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    placeholder: "notas adicionales",
                    multiline: true,
                    rows: 5,
                  }}
                />
              </CardBody>
            </form>
          </DialogContent>
          <DialogActions
            className={
              classesDialog.modalFooter +
              " " +
              classesDialog.justifyContentCenter
            }
          >
            <Button onClick={() => generarOrden()} color='primary' size='lg' disabled={desabilitar}>
              Generar orden
            </Button>
          </DialogActions>
        </Card>
      </Dialog>

      <Parallax image='/img/examples/bg2.jpg' filter='dark' small>
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
              {cart && cart.productos.length > 0 ? (
                <h3 className={classes.cardTitle}>
                  Productos <span>({cart.productos.length})</span>
                </h3>
              ) : (
                <div></div>
              )}
              {cart && cart.productos.length > 0 ? (
                <Table
                  tableHead={[
                    "",
                    "PRODUCTO",
                    "PRECIO",
                    "CANTIDAD",
                    "MONTO ACUMULADO",
                    "",
                  ]}
                  tableData={tableData}
                  tableShopping
                  customHeadCellClasses={[
                    classes.textCenter,
                    classes.textCenter,
                    classes.textCenter,
                    classes.textCenter,
                    classes.textCenter,
                    classes.textRight,
                  ]}
                  customHeadClassesForCells={[0, 1, 2, 3, 4, 5]}
                  customCellClasses={[
                    classes.tdName,
                    classes.customFont + " " + classes.textCenter,
                    classes.customFont + " " + classes.textCenter,
                    classes.tdNumber + " " + classes.textCenter,
                    classes.tdNumber + " " + classes.textCenter,
                    classes.tdNumber + " " + classes.textRight,
                  ]}
                  customClassesForCells={[0, 1, 2, 3, 4, 5]}
                />
              ) : (
                <div className={classes.container}>
                  <br />
                  <GridContainer>
                    <GridItem
                      md={6}
                      sm={6}
                      className={classNames(
                        classes.mlAuto,
                        classes.mrAuto,
                        classes.textCenter
                      )}
                    >
                      <Danger>
                        <h2>No hay productos en el carrito</h2>
                      </Danger>
                    </GridItem>
                  </GridContainer>
                  <br />
                  <br />
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()}
              <a href='' target='_blank'>
                , Hivek
              </a>{" "}
            </div>
          </div>
        }
      />
    </div>
  );
}
