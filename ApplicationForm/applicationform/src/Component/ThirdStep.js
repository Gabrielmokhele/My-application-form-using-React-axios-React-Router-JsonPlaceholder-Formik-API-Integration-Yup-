import React, { useContext, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { multiStepContext } from "../StepContext";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import {Link, BrowserRouter } from "react-router-dom";



const FORM_VALIDATION = Yup.object().shape({
  file: Yup.mixed()
    .required("File is required")
    .test(
      "fileSize",
      "File size too large",
      (value) => value && value.size <= 1048576 
    )
    .test(
      "fileType",
      "Invalid file format, only PDF allowed",
      (value) => value && value.type === "application/pdf"
    ),
});

const ThirdStep = () => {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
  const [fileName, setFileName] = useState("");
  

  const handleFileUpload = (event) => {
    const myfile = event.target.files[0];
    setFileName(myfile.name);
    setUserData({...userData,myfile})
    
  
  };
  

  const downloadFile = () => {
    if (!userData.file) {
      console.error('No file uploaded');
      return;
    }

    const file = userData.file;
    const url = window.URL.createObjectURL(new Blob([file]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', file.name);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  
  const handleSubmit = (values) => {
      setUserData({ ...userData, ...values });
  }
  console.log(userData);



  return (
    <Formik
      initialValues = {{
        file: userData.file || "",
      }}
      validationSchema={FORM_VALIDATION}
      onSubmit={handleSubmit}
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
                <BrowserRouter><Link onClick={downloadFile} to="/"><h2 style={{ marginTop: "5px", marginLeft: "5px" }}>
          
                  {fileName}
                </h2></Link></BrowserRouter>
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
              <Button type= "submit" variant="contained" onClick={submitData} color="success">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Formik>
  );
};

export default ThirdStep;
