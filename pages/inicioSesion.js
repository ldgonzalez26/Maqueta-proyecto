/*eslint-disable*/
import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Timeline from "@mui/icons-material/Timeline";
import Email from "@mui/icons-material/Email";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
//firebase
import signIn from "../firebaseConexion/singin";

import signupPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

export default function InicioSesion({ ...rest }) {
  const router = useRouter();
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const iniciar = () => {
    signIn(inputEmail, inputPassword)
      .then((res) => {
        if (res.result) {
          router.push("/catalogo");
        } else {
          console.log("error mostrar algo lindo");
          setInputEmail("");
          setInputPassword("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const goToRegister = () => {
    router.push("registro");
  };
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url('/img/bg7.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justifyContent='center'>
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Iniciar Sesión</h2>
                <CardBody>
                  <GridContainer justifyContent='center'>
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title='A cerca de nosotros'
                        description='En Latinove queremos hacer más facil tu proceso de contratación de cuentas de Streaming'
                        icon={Timeline}
                        iconColor='rose'
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                      <form className={classes.form}>
                        <CustomInput
                          value={inputEmail}
                          setText={setInputEmail}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position='start'
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Email",
                          }}
                        />
                        <CustomInput
                          value={inputPassword}
                          setText={setInputPassword}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position='start'
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Contraseña",
                            type: "password",
                          }}
                        />
                        <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={<></>}
                          label={
                            <span>
                              ¿No posees una cuenta?{" "}
                              <a
                                onClick={() => {
                                  goToRegister();
                                }}
                              >
                                Registrarse
                              </a>
                              .
                            </span>
                          }
                        />
                        <br />
                        <br />
                        <div className={classes.textCenter}>
                          <Button onClick={iniciar} round color='primary'>
                            Iniciar Sesión
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
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
    </div>
  );
}
