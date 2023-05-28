/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";

import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Camera from "@mui/icons-material/Camera";
import Palette from "@mui/icons-material/Palette";
import People from "@mui/icons-material/People";
import Add from "@mui/icons-material/Add";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardHeader from "/components/Card/CardHeader.js";
import Badge from "/components/Badge/Badge.js";
import Muted from "/components/Typography/Muted.js";
import Parallax from "/components/Parallax/Parallax.js";
import Clearfix from "/components/Clearfix/Clearfix.js";
import Button from "/components/CustomButtons/Button.js";
import CustomInput from '/components/CustomInput/CustomInput.js';



import profilePageStyle from "/styles/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
     
      <Parallax
        image="https://i.ytimg.com/vi/R0aMQZ1U5FM/maxresdefault.jpg"
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img
                    src="https://i1.sndcdn.com/artworks-r7qzGXKKMMnEJumt-BHhXhA-t500x500.jpg"
                    alt="..."
                    className={imageClasses}
                  />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Editar perfil</h3>
                </div>
              </div>
              
            </GridItem>
            
          </GridContainer>
          <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
 
    </GridItem>

<GridContainer justifyContent="center">
<GridItem xs={12} sm={12} md={6}>

<NavPills justifyContent="center"
      color="warning"
      tabs={[
        {
          tabButton: "Cambiar contraseña",
          tabContent: (
            <span>
              <p>
                Collaboratively administrate empowered markets via
                plug-and-play networks. Dynamically procrastinate
                B2C users after installed base benefits.
              </p>
              <br />
              <p>
                Dramatically visualize customer directed convergence
                without revolutionary ROI. Collaboratively
                administrate empowered markets via plug-and-play
                networks. Dynamically procrastinate B2C users after
                installed base benefits.
              </p>
              <br />
              <p>This is very nice.</p>
            </span>
          )
        },
        {
          tabButton: "Cambiar Datos",
          tabContent: (
            <span>
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely
                deliverables for real-time schemas.
              </p>
              <br />
              <p>
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </span>
          )
        },
        {
          tabButton: "Suicidarme",
          tabContent: (
            <span>
              <p>
                Completely synergize resource taxing relationships
                via premier niche markets. Professionally cultivate
                one-to-one customer service with robust ideas.{" "}
              </p>
              <br />
              <p>
                Dynamically innovate resource-leveling customer
                service for state of the art customer service.
              </p>
            </span>
          )
        }
      ]}
    />
    </GridItem>
</GridContainer>

</GridContainer>
         
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            
           
          </div>
        }
      />
    </div>
  );
}
