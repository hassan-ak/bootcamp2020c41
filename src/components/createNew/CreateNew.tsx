import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Card, CardContent } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import "./createNew.css";
import { Lolly } from "../addOns/Lolly";
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
  return (
    <div className='createLollyDiv'>
      <Grid container>
        <Grid item xs={12} md={7} component={Card} elevation={0}>
          <CardContent className='homeContent homeImg'>
            <div className='createForm'>
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
                  console.log(values);
                  onSubmitProps.resetForm();
                }}
              >
                <Form>
                  <div className='formFields'>
                    <div>
                      <Field
                        as={TextField}
                        required
                        variant='outlined'
                        name='reciever'
                        label='To'
                        helperText={
                          <ErrorMessage name='reciever'>
                            {(msg) => <span>{msg}</span>}
                          </ErrorMessage>
                        }
                      />
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        required
                        variant='outlined'
                        name='message'
                        label='Message'
                        helperText={
                          <ErrorMessage name='message'>
                            {(msg) => <span>{msg}</span>}
                          </ErrorMessage>
                        }
                      />
                    </div>
                    <div>
                      <Field
                        as={TextField}
                        required
                        variant='outlined'
                        name='sender'
                        label='From'
                        helperText={
                          <ErrorMessage name='sender'>
                            {(msg) => <span>{msg}</span>}
                          </ErrorMessage>
                        }
                      />
                    </div>
                    <div>
                      <Button
                        style={{ color: "white" }}
                        variant='contained'
                        type='submit'
                      >
                        <AddCircleOutlineIcon />
                      </Button>
                    </div>
                    <div>
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
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          component={Card}
          elevation={0}
          style={{ backgroundColor: "transparent" }}
        >
          <CardContent className='LollyImg'>
            <Lolly
              fillLollyTop={colorTopTs}
              fillLollyMiddle={colorMiddleTs}
              fillLollyBottom={colorBottomTs}
            />
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
