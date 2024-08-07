import React, { useContext } from "react";
import { Button, Typography, Grid} from "@mui/material";
import { multiStepContext } from "../StepContext";
import { Formik, Form, FieldArray } from "formik";
import TextfieldWrapper from "./FormUI/TextfieldWrapper";
import DateTimePicker from "./FormUI/DateTimePicker";
import * as Yup from "yup";

const SecondStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const handleSubmit = (values) => {
    setUserData({...userData, values});
 
  };
  console.log(userData);

  const INITIAL_FORM_STATE ={
    experiences: [{
      employer: userData.employer || "",
      position:  userData.position || "",
      startDate:  userData.startDate || "",
      endDate:  userData.endDate || "",
      roleDescription:  userData.roleDescription || "",
    }],
    educations: [{
      institution:  userData.institution || "",
      qualification:  userData.qualification || "",
      startDate1:  userData.startDate1 || "",
      endDate1:  userData.endDate1 || "",
      description:  userData.description || "",
    }],
  } 


  return (
    <Formik
     initialValues = {{
      experiences: userData.experiences || [...INITIAL_FORM_STATE.experiences], 
      educations: userData.educations || [...INITIAL_FORM_STATE.educations], 
     }}    
    validationSchema = {Yup.object().shape({
      experiences: Yup.array().of(
        Yup.object().shape({
          employer: Yup.string().required("required"),
          position: Yup.string(),
          startDate: Yup.date(),
          endDate: Yup.date(),
          roleDescription: Yup.string(),
        })
      ),
      educations: Yup.array().of(
        Yup.object().shape({
          institution: Yup.string().required("required"),
          qualification: Yup.string(),
          startDate1: Yup.date(),
          endDate1: Yup.date(),
          description: Yup.string(),
        })
      ),
    })}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form> 
          <FieldArray name="experiences">
            {({ push, remove, form }) => (
              <div>
                {form.values.experiences.map((exp, index) => (
                  <div key={index}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography>Experience {index + 1}</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name={`experiences.${index}.employer`}
                          label="Employer"
                          
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name={`experiences.${index}.position`}
                          label="Position"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <DateTimePicker
                          name={`experiences.${index}.startDate`}
                          label="Start Date"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <DateTimePicker
                          name={`experiences.${index}.endDate`}
                          label="End Date"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name={`experiences.${index}.roleDescription`}
                          label="Role Description"
                          multiline={true}
                          rows={9}
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </Button>
                        <Button
                          style={{marginLeft: "5px"}}
                          variant="contained"
                          color="primary"
                          onClick={() => push({
                            employer: "",
                            position: "",
                            startDate: "",
                            endDate: "",
                            roleDescription: "",
                          })}
                        >
                          Add
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </div>
            )}
          </FieldArray>
          <br></br>
          <FieldArray name="educations">
            {({ push, remove, form }) => (
              <div>
                {form.values.educations.map((exp, index) => (
                  <div key={index}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <br></br>
                        <Typography>Education {index + 1}</Typography>
                      </Grid>
                      <br></br>

                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name={`educations.${index}.institution`}
                          label="Institution"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name={`educations.${index}.qualification`}
                          label="Qualification"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <DateTimePicker
                          name={`educations.${index}.startDate1`}
                          label="Start Date"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <DateTimePicker
                          name={`educations.${index}.endDate1`}
                          label="End Date"
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextfieldWrapper
                          name={`educations.${index}.description`}
                          label="Description"
                          multiline={true}
                          rows={9}
                          variant="filled"
                          color="secondary"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          color="warning"
                          onClick={() => remove(index)}
                        >
                          Remove
                        </Button>
                        <Button
                          style={{marginLeft: "5px"}}
                          variant="contained"
                          color="primary"
                          onClick={() => push({
                            institution: "",
                            qualification: "",
                            startDate1: "",
                            endDate1: "",
                            description: "",
                          })}
                        >
                          Add
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </div>
            )}
          </FieldArray>
          <br></br>
          <Button
            type="submit"
            variant="contained"
            color="primary"
        
          >
            SAVE
          </Button>

          <Button
            sx={{ ml: 2}}
            variant="contained"
            onClick={() => setStep(1)}
            color="secondary"
          >
            Back
          </Button>
          <Button
            sx={{ ml: 2}}
            variant="contained"
            onClick={() => setStep(3)}
            color="success"
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SecondStep;
