import React, { useContext, useState } from "react";
import { Button, Grid, Container, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { multiStepContext } from "../StepContext";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const INITIAL_FORM_STATE = {
  file: "",
};

const FORM_VALIDATION = Yup.object().shape({
  file: Yup.mixed()
    .required("File is required")
    .test(
      "fileSize",
      "File size too large",
      (value) => value && value.size <= 1048576 // 1MB
    )
    .test(
      "fileType",
      "Invalid file format, only PDF allowed",
      (value) => value && value.type === "application/pdf"
    ),
});

const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (event) => {
    const myfile = event.target.files[0];
    setFileName(myfile.name);
    // Process the file here, e.g., upload to server or handle locally
    console.log("Selected file:", myfile);
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Grid item xs={12}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Upload Documents</Typography>
            </Grid>

            <Grid item xs={6}>
              <Paper>
                <Typography variant="h5">Upload CV</Typography>
              </Paper>
            </Grid>

            <Grid style={{ display: "flex" }} item xs={12}>
              <input
                accept=".pdf"
                style={{ display: "none" }}
                id="file-upload-button"
                multiple={false}
                type="file"
                onChange={handleFileUpload}
              />
              <label htmlFor="file-upload-button">
                <Button
                  style={{ marginTop: "5px" }}
                  variant="contained"
                  component="span"
                >
                  Choose PDF File
                </Button>
              </label>
              {
                <h2 style={{ marginTop: "5px", marginLeft: "5px" }}>
                  {" "}
                  {fileName}
                </h2>
              }
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{ marginRight: "5px" }}
                variant="contained"
                onClick={() => setStep(2)}
                color="secondary"
              >
                {" "}
                Back{" "}
              </Button>
              <span></span>
              <Button variant="contained" onClick={submitData} color="success">
                {" "}
                Submit{" "}
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Formik>
  );
};

export default ThirdStep;
