import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./createNew.css";
import { Lolly } from "../addOns/Lolly";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);
interface BookmarkProps {
  reciever: string;
  sender: string;
  message: string;
  colorTop: string;
  colorMiddle: string;
  colorBottom: string;
}

export const CreateNew = () => {
  const [recieverName, setRecieverName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [messageTs, setMessageTs] = useState("");
  const [colorTopTs, setColorTopTs] = useState("#d52358");
  const [colorMiddleTs, setColorMiddleTs] = useState("#e95946");
  const [colorBottomTs, setColorBottomTs] = useState("#deaa43");

  const initialValues: BookmarkProps = {
    reciever: recieverName,
    sender: senderName,
    message: messageTs,
    colorTop: colorTopTs,
    colorMiddle: colorMiddleTs,
    colorBottom: colorBottomTs,
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {/* Form Side */}
        <Grid item xs={12} md={8}>
          <Paper
            className='formPaper'
            style={{ backgroundColor: "transparent" }}
            elevation={0}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={Yup.object({
                reciever: Yup.string().required(
                  "Kindly enter reciever's name."
                ),
                sender: Yup.string().required("Kindly enter sender's name."),
                message: Yup.string().required("Kindly enter message."),
              })}
              onSubmit={(values, onSubmitProps) => {
                setRecieverName(values.reciever);
                setSenderName(values.sender);
                setMessageTs(values.message);
                setColorTopTs(values.colorTop);
                setColorMiddleTs(values.colorMiddle);
                setColorBottomTs(values.colorBottom);
                onSubmitProps.resetForm();
              }}
            >
              <Form autoComplete='off'>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={10}>
                    <Paper
                      className='paper inputPaper'
                      style={{
                        backgroundColor: "#284235",
                        color: "white",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Field
                        as={TextField}
                        required
                        variant='outlined'
                        name='reciever'
                        label='To'
                        className='senderIn'
                      />
                      <Field
                        as={TextField}
                        required
                        variant='outlined'
                        multiline
                        rows='12'
                        name='message'
                        label='Message'
                        className='messageIn'
                      />
                      <Field
                        as={TextField}
                        required
                        variant='outlined'
                        name='sender'
                        label='From'
                        className='recieverIn'
                      />
                      <Button
                        style={{ color: "white", backgroundColor: "#171d1a" }}
                        variant='contained'
                        type='submit'
                      >
                        Freeze Lolly
                      </Button>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Paper
                      className='paper colorPaper'
                      style={{ backgroundColor: "transparent" }}
                      elevation={0}
                    >
                      <input
                        type='color'
                        name='colorTop'
                        value={colorTopTs}
                        className='colorPicker'
                        onChange={(e) => setColorTopTs(e.target.value)}
                      />
                      <input
                        type='color'
                        name='colorMiddle'
                        value={colorMiddleTs}
                        className='colorPicker'
                        onChange={(e) => setColorMiddleTs(e.target.value)}
                      />
                      <input
                        type='color'
                        name='colorBottom'
                        value={colorBottomTs}
                        className='colorPicker'
                        onChange={(e) => setColorBottomTs(e.target.value)}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Paper>
        </Grid>
        {/* Lolly Side */}
        <Grid item xs={12} md={4}>
          <Paper
            className='paper'
            style={{ backgroundColor: "transparent" }}
            elevation={0}
          >
            <Lolly
              fillLollyTop={colorTopTs}
              fillLollyMiddle={colorMiddleTs}
              fillLollyBottom={colorBottomTs}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
