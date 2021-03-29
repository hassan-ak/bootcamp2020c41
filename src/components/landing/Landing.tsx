import React from "react";
import { navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import "./landing.css";
import { Lolly } from "../addOns/Lolly";

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
  createButton: {
    backgroundColor: "rgba(255, 60, 0, 0.753)",
    textDecoration: "none",
    width: "75%",
    alignSelf: "center",
  },
}));

export const Landing = () => {
  const classes = useStyles();
  return (
    <div className='homeContainer'>
      <Grid container className={classes.mainGrid}>
        <Grid
          item
          xs={10}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent className='homeContent'>
            <Typography
              variant='h4'
              align='center'
              gutterBottom
              className='homeTitle'
            >
              Virtual Lolly
            </Typography>
            <Typography variant='body1' gutterBottom className='homeDetail'>
              Are you missing greeting cards?
            </Typography>
            <div>
              <Typography variant='body1' gutterBottom className='homeDetail'>
                Send some one a virtual lolly who is low on sugur.
              </Typography>
              <div className='btnsDiv'>
                <Button
                  variant='contained'
                  className={classes.createButton}
                  onClick={() => {
                    navigate("createNew");
                  }}
                >
                  Create Lolly
                </Button>
              </div>
            </div>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={8}
          md={5}
          component={Card}
          className={classes.componentGrid}
          elevation={0}
        >
          <CardContent className='homeContent homeImg'>
            <Lolly
              fillLollyTop='#d52358'
              fillLollyMiddle='#e95946'
              fillLollyBottom='#deaa43'
            />
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
