// Imports
// React Imports
import React from "react";
// Material Ui Imports
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// Styles for Footer
const useStyles = makeStyles((theme) => ({
  footer: {
    top: "auto",
    bottom: 0,
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  textContainer: {
    flexGrow: 1,
  },
  footerCopy: {
    textAlign: "center",
    color: "#aec9bb",
    marginTop: "20px",
  },
}));

// Footer Function
export default function Footer() {
  // const for using styles
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar
        position='relative'
        color='transparent'
        className={classes.footer}
      >
        <Toolbar>
          <div className={classes.textContainer} />
          <p className={classes.footerCopy}>
            &#169; 2021 Virtual Lolly. All right reserved
          </p>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
