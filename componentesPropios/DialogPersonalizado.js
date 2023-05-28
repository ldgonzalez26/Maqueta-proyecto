/*eslint-disable*/
import React from "react";
// react plugin for creating date-time-picker
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import makeStyles from '@mui/styles/makeStyles';
// @mui/icons-material
import Close from "@mui/icons-material/Close";
// core components
import Button from "/components/CustomButtons/Button.js";
import javascriptStyles from "../styles/jss/nextjs-material-kit-pro/pages/componentsSections/javascriptStyles.js"

const useStyles = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function DialogPersonalizado(props) {

    const classes = useStyles();
    const {visibilidad, setVisibilidad, mensaje, tituloBotonAceptar, accionBotonAceptar} = props

    return (
        <Dialog
            classes={{
                root: classes.modalRoot,
                paper: classes.modal + " " + classes.modalSmall
            }}
            open={visibilidad}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setVisibilidad(false)}
            aria-labelledby="small-modal-slide-title"
            aria-describedby="small-modal-slide-description"
        >
            <DialogTitle id="small-modal-slide-title" className={classes.modalHeader}>
                <Button
                    simple
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    onClick={() => setVisibilidad(false)}
                >
                    {" "}
                    <Close className={classes.modalClose} />
                </Button>
            </DialogTitle>
            <DialogContent
                id="small-modal-slide-description"
                className={classes.modalBody + " " + classes.modalSmallBody}
            >
                <h5>{mensaje}</h5>
            </DialogContent>
            <DialogActions
                className={
                    classes.modalFooter + " " + classes.modalFooterCenter
                }
            >
                <Button
                    onClick={() => setVisibilidad(false)}
                    link
                    className={classes.modalSmallFooterFirstButton}
                >
                    Cancelar
                </Button>
                <Button
                    onClick={() => {
                        setVisibilidad(false)
                        if(accionBotonAceptar != null) accionBotonAceptar()
                    }}
                    color="success"
                    simple
                    className={
                        classes.modalSmallFooterFirstButton +
                        " " +
                        classes.modalSmallFooterSecondButton
                    }
                >
                    {tituloBotonAceptar}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
