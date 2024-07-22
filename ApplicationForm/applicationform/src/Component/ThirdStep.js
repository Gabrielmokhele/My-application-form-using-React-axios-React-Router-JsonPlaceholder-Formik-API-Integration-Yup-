import React, { useContext, useState } from "react";
import { Button, Grid, Container, Typography, } from "@mui/material";
import Paper from '@mui/material/Paper';
import { multiStepContext } from "../StepContext";
import { styled } from "@mui/system";
import * as Yup from "yup";

const useStyles = styled((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const initialValues = {
  file: ''
};

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required('File is required').test(
    'fileSize',
    'File size too large',
    value => value && value.size <= 1048576 // 1MB
  ).test(
    'fileType',
    'Invalid file format, only PDF allowed',
    value => value && value.type === 'application/pdf'
  )
});

const ThirdStep = () => {
  const classes = useStyles();
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event) => {
    const myfile = event.target.files[0];
    setFileName(myfile.name)
    // Process the file here, e.g., upload to server or handle locally
    console.log("Selected file:", myfile);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
        <div className={classes.formWrapper}>
          <Grid item xs={12}><br></br>
            <Typography style={{ position: "absolute"}}>
              Upload Documents
            </Typography>
          </Grid><br></br>

          <Grid item xs={4}>
          <Paper >
            <Typography variant="h6">Item 2</Typography>
          </Paper>
          </Grid>

          {<h2> {fileName}</h2>}
          <input
            accept=".pdf"
            style={{ display: "none" }}
            id="file-upload-button"
            multiple={false}
            type="file"
            onChange={handleFileUpload}
          />
          <label htmlFor="file-upload-button">
            <Button variant="contained" component="span">
              Upload PDF File
            </Button>
          </label>
          
        </div>
        <br></br>

        <div>
          <Button
            style={{ backgroundColor: "green", marginRight: "5px" }}
            variant="contained"
            onClick={() => setStep(2)}
            colour="secondary"
          >
            {" "}
            Back{" "}
          </Button>
          <span></span>
          <Button variant="contained" onClick={submitData} colour="primary">
            {" "}
            Submit{" "}
          </Button>
        </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ThirdStep;
