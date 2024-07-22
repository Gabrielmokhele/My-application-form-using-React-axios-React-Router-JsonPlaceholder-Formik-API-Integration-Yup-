import React, { useContext} from "react";
import { Button, Typography, Grid, Container } from "@mui/material";
import { multiStepContext } from "../StepContext";
import { Formik, Form, FieldArray } from "formik";
import TextfieldWrapper from "./FormUI/TextfieldWrapper";
import DateTimePicker from "./FormUI/DateTimePicker";
import { styled } from "@mui/system";
import * as Yup from "yup";

const useStyles = styled((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  experiences: {
  employer: "",
  position: "",
  startDate: "",
  endDate: "",
  roleDescription: "",}
};

const FORM_VALIDATION = Yup.object().shape({
  experiences: Yup.array().of(
    Yup.object().shape({
      employer: Yup.string(),
      position: Yup.string(),
      startDate: Yup.date(),
      endDate: Yup.date(),
      roleDescription: Yup.string(),
    })
  ),
});

const SecondStep = () => {
  const classes = useStyles();
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  


  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ experiences: [INITIAL_FORM_STATE]}}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values }) => (
              <Form>
                <FieldArray name="experiences">
                {({ push, remove }) => (
                  <div>
                  {values.experiences.map((exp,index) => (
                    <div key={index}>
                <Grid item xs={12}><br></br>
                  <Typography style={{ position: "absolute" }}>
                    Experience {index + 1}
                  </Typography>
                </Grid>
                <br></br>

                <Grid item xs={12}>
                  <TextfieldWrapper
                    name={`experiences.${index}.employer`}
                    label="Employer"
                    value={values.experiences[index].employer}
                    onChange={(e) =>setUserData({ ...userData, employer: e.target.value })}
                    variant="filled"
                    margin="normal"
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper
                    name={`experiences.${index}.position`}
                    label="Position"
                    value={values.experiences[index].position}
                    onChange={(e) =>setUserData({ ...userData, position: e.target.value })}
                    variant="filled"
                    margin="normal"
                    color="secondary"
                  />
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name={`experiences.${index}.startDate`}
                      label="Start Date"
                      value={values.experiences[index].startDate}
                      onChange={(e) =>setUserData({ ...userData, startDate: e.target.value })}
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name={`experiences.${index}.endDate`}
                      label="End Date"
                      value={values.experiences[index].endDate}
                      onChange={(e) =>setUserData({ ...userData, endDate: e.target.value })}
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextfieldWrapper
                    name={`experiences.${index}.roleDescription`}
                    label="Role Description"
                    value={values.experiences[index].roleDescription}
                    onChange={(e) =>setUserData({...userData,roleDescription: e.target.value,})}
                    multiline={true}
                    rows={9}
                    variant="filled"
                    margin="normal"
                    color="secondary"
                  />
                </Grid>
                <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                  }}
                  onClick={()=> remove(index)}
                >
                  Remove
                </Button>
                <Button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                  }}
                  onClick={()=> push(INITIAL_FORM_STATE)}
                >
                  Add
                </Button>
                </div>
                </div>
                        ))}
                
                </div>)}          
                </FieldArray>
                <br></br>
                <br></br>

                <Button
                  style={{ backgroundColor: "orange", marginRight: "5px" }}
                  variant="contained"
                  onClick={() => setStep(1)}
                  color="secondary"
                >
                  {" "}
                  Back{" "}
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setStep(3)}
                  color="primary"
                >
                  {" "}
                  Next{" "}
                </Button>
              </Form>
              )}
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default SecondStep;

