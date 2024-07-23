import React, { useContext, useEffect, useState, useQuery} from "react";
import { Button, Typography, Grid, Container } from "@mui/material";
import { multiStepContext } from "../StepContext";
import { Formik, Form } from "formik";
import TextfieldWrapper from "./FormUI/TextfieldWrapper";
import DateTimePicker from "./FormUI/DateTimePicker";
import * as Yup from "yup";
import Select from "./FormUI/Select";
import axios from "axios";

const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://api.countrystatecity.in/v1/countries";
    const API_KEY = "bGNUQ3lHalZQZ1B0MkhoMll5M0d3ZHlRYTN5b2JFSWxhMnoyc0htUQ==";

    const fetchCountries = async () => {
      try {
        var config = {
          headers: {
            "X-CSCAPI-KEY": API_KEY,
          },
        };
        const { data } = await axios.get(url, config);

        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  const onSubmit = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(values);
      console.log(response.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  

  return (
    <Formik
      initialValues={{
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
      }}
      validationSchema={Yup.object().shape({
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
      })}

        onSubmit={onSubmit}
    >
      <Form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>Personal Details</Typography>
          </Grid>

          <Grid item xs={6}>
            <TextfieldWrapper
              name="firstName"
              label="First Name"
              value={userData["firstName"]}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
              variant="filled"             
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
             
              color="secondary"
            />
          </Grid>

          <Grid item xs={6}>
            <TextfieldWrapper
              name="email"
              label="Email Address"
              value={userData["email"]}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              variant="filled"
             
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
             
              color="secondary"
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              name="country"
              label="Country"
              options={countries?.map((country) => {
                return { label: country.name, value: country.name };
              })}
            />
          </Grid>
         
          <Grid item xs={1} style={{display: "flex"}}>
          <Button type="submit" variant="contained" color="primary" onClick={() => onSubmit({userData})}>SAVE</Button>

          <Button
            style={{ mt: 2}}
            fullWidth
            variant="contained"
            onClick={() => setStep(2)}
            color="success"
          >
            Next
          </Button>
          </Grid>

        
        </Grid>
      </Form>
    </Formik>
  );
};

export default FirstStep;
