import React, { useContext } from "react";
import { Button, Typography, Grid, Container } from "@mui/material";
import { multiStepContext } from "../StepContext";
import { Formik, Form } from "formik";
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
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  province: "",
  country: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  dateOfBirth: Yup.date().required("required"),
  email: Yup.string().email("Invalid email").required("required"),
  phone: Yup.number().integer().typeError("Enter a valid phone number").required("required"),
  addressLine1: Yup.string().required("required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("required"),
  province: Yup.string().required("required"),
  country: Yup.string().required("required"),
});

const FirstStep = () => {
  const classes = useStyles();
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Container>
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid item xs={12}>
                  <Typography style={{ position: "absolute" }}>
                    Personal Details
                  </Typography>
                </Grid>
                <br></br>

                <Grid item xs={6}>
                  <TextfieldWrapper
                    name="firstName"
                    label="First Name"
                    value={userData["firstName"]}
                    onChange={(e) =>
                      setUserData({ ...userData, firstName: e.target.value })
                    }
                    variant="filled"
                    margin="normal"
                    colour="secondary"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextfieldWrapper
                    name="lastName"
                    label="Last Name"
                    value={userData["lastName"]}
                    onChange={(e) =>
                      setUserData({ ...userData, lastName: e.target.value })
                    }
                    variant="filled"
                    margin="normal"
                    color="secondary"
                  />
                </Grid>
                <Grid item xs={6}>
                  <DateTimePicker
                    name="dateOfBirth"
                    label="Date of Birth"
                    value={userData["dateOfBirth"]}
                    onChange={(e) =>
                      setUserData({ ...userData, dateOfBirth: e.target.value })
                    }
                    variant="filled"
                    margin="normal"
                    color="secondary"
                  />
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="email"
                      label="Email Address"
                      value={userData["email"]}
                      onChange={(e) =>
                        setUserData({ ...userData, email: e.target.value })
                      }
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="phone"
                      label="Phone number"
                      value={userData["phone"]}
                      onChange={(e) =>
                        setUserData({ ...userData, phone: e.target.value })
                      }
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="addressLine1"
                      label="Address Line 1"
                      value={userData["addressLine1"]}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          addressLine1: e.target.value,
                        })
                      }
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="addressLine2"
                      label="Address Line 2"
                      value={userData["addressLine2"]}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          addressLine2: e.target.value,
                        })
                      }
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="city"
                      label="City"
                      value={userData["city"]}
                      onChange={(e) =>
                        setUserData({ ...userData, city: e.target.value })
                      }
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper
                      name="province"
                      label="Province"
                      value={userData["province"]}
                      onChange={(e) =>
                        setUserData({ ...userData, province: e.target.value })
                      }
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextfieldWrapper
                      name="country"
                      label="Country"
                      value={userData["country"]}
                      onChange={(e) =>
                        setUserData({ ...userData, country: e.target.value })
                      }
                      variant="filled"
                      margin="normal"
                      color="secondary"
                    />
                  </Grid>
                </Grid>
                <br></br>

                <Button
                  style={{ margin: 0 }}
                  variant="contained"
                  onClick={() => setStep(2)}
                  color="primary"
                >
                  {" "}
                  Next{" "}
                </Button>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default FirstStep;
