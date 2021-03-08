// Imports
// React Imports
import React from "react";
// Material UI Imports
import { IconButton, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerBackground: {
    backgroundColor: "#1d2521",
  },
  iconShoe: {
    maxWidth: "25pt",
  },
  headerTitle: {
    color: "whitesmoke",
    marginLeft: "20px",
  },
}));

// Header Component
const Header = () => {
  const classes = useStyles();
  //  Header Function Return
  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        elevation={0}
        className={classes.headerBackground}
      >
        <Toolbar>
          <IconButton
            edge='start'
            aria-label='Virtual Lolly'
            onClick={() => {
              navigate("/");
            }}
          >
            <StaticImage
              className={classes.iconShoe}
              src='../../asserts/logo.png'
              alt='logo'
              placeholder='none'
            />
          </IconButton>
          <Typography variant='h4' className={classes.headerTitle}>
            Virtual Lolly
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
