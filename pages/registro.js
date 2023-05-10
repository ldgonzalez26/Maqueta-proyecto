/*eslint-disable*/
import React, { useRef, useState} from "react";
import makeStyles from "@mui/styles/makeStyles";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Timeline from "@mui/icons-material/Timeline";
import Code from "@mui/icons-material/Code";
import Group from "@mui/icons-material/Group";
import Face from "@mui/icons-material/Face";
import Email from "@mui/icons-material/Email";
import Check from "@mui/icons-material/Check";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import InfoArea from "/components/InfoArea/InfoArea.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
//firebase
import signUp from "../firebaseConexion/signup"
import signIn from "../firebaseConexion/singin"

import signupPageStyle from "/styles/jss/nextjs-material-kit-pro/pages/signupPageStyle.js";

const useStyles = makeStyles(signupPageStyle);

export default function Registro({ ...rest }) {
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

  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const registrar = () => {
    console.log(inputEmail)
    console.log(inputPassword)
    signUp(inputEmail, inputPassword).then(res => {
      console.log(res)
    })
  }

  const iniciar = () => {
    signIn(inputEmail, inputPassword).then(res => {
      console.log(res)
    })
  }

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
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Registro</h2>
                <CardBody>
                  <GridContainer justifyContent="center">
                    <GridItem xs={12} sm={5} md={5}>
{/*                       <InfoArea
                        className={classes.infoArea}
                        title="Marketing"
                        description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Fully Coded in HTML5"
                        description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                        icon={Code}
                        iconColor="primary"
                      /> */}
                      <InfoArea
                        className={classes.infoArea}
                        title="¿Por qué registrarse?"
                        description="Al registrarte en Latinove adquieres la posibilidad de contratar servicios de Streaming y podrás contactarte a nuestra árae de soporte en caso de que tengas algún problema."
                        icon={Group}
                        iconColor="info"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                      {/* <div className={classes.textCenter}>
                        <Button justIcon round color="twitter">
                          <i className={classes.socials + " fab fa-twitter"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="dribbble">
                          <i className={classes.socials + " fab fa-dribbble"} />
                        </Button>
                        {` `}
                        <Button justIcon round color="facebook">
                          <i
                            className={classes.socials + " fab fa-facebook-f"}
                          />
                        </Button>
                        {` `}
                        <h4 className={classes.socialTitle}>or be classical</h4>
                      </div> */}
                      <form className={classes.form}>
                        <CustomInput
                          setText={setInputEmail}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: "Email",
                          }}
                        />
                        <CustomInput
                          setText={setInputPassword}
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Icon className={classes.inputAdornmentIcon}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            ),
                            placeholder: "Contraseña",
                          }}
                        />
{/*                         <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => handleToggle(1)}
                              checkedIcon={
                                <Check className={classes.checkedIcon} />
                              }
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot,
                              }}
                              checked={checked.indexOf(1) !== -1 ? true : false}
                            />
                          }
                          label={
                            <span>
                              I agree to the{" "}
                              <a href="#pablo">terms and conditions</a>.
                            </span>
                          }
                        /> */}
                        <br />
                        <div className={classes.textCenter}>
                          <Button
                            onClick={registrar}
                            round color="primary">
                            Registrarse
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
              <div className={classes.left}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      Creative Tim
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/presentation?ref=njsmkp-signup"
                      target="_blank"
                      className={classes.block}
                    >
                      About us
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="http://blog.creative-tim.com/?ref=njsmkp-signup"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href="https://www.creative-tim.com/license?ref=njsmkp-signup"
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
                  href="https://www.creative-tim.com?ref=njsmkp-signup"
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
    </div>
  );
}
