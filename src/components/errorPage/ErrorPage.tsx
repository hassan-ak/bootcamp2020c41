import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import "./errorPage.css";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d2521",
  },
  componentGrid: {
    backgroundColor: "#1d2521",
    padding: "20px",
    border: "0",
  },
  homeButton: {
    backgroundColor: "rgba(255, 60, 0, 0.753)",
    color: "white",
    textDecoration: "none",
    width: "50%",
    alignSelf: "center",
  },
}));

export const ErrorPage = () => {
  const classes = useStyles();
  return (
    <div className='errorContainer'>
      <Grid container className={classes.mainGrid}>
        <Grid
          item
          xs={10}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent>
            <StaticImage
              className='errorImage'
              src='../../asserts/404.jpg'
              alt='errorImage'
              placeholder='tracedSVG'
            />
          </CardContent>
        </Grid>
        <Grid
          item
          xs={10}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent className='errorContent'>
            <Typography
              variant='h4'
              align='center'
              gutterBottom
              className='errorTitle'
            >
              Virtual Lolly
            </Typography>
            <Typography variant='h6' gutterBottom className='errorDetail'>
              Maybe this page got eaten. Moved. Got deleted. Is hiding out in
              quarantine. Never existed in the first place.
            </Typography>
            <Typography variant='h6' gutterBottom className='errorDetail'>
              Kindly navigate to home page and start again.
            </Typography>
            <Button
              variant='contained'
              className={classes.homeButton}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
