import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/system';
import {Container,Grid,Typography,} from '@mui/material';
import TextfieldWrapper from './Components/FormsUI/TextfieldWrapper';
import Select from './Components/FormsUI/Select';
import countries from  './data/countries.json';
import DateTimePicker from './Components/FormsUI/DateTimePicker';
import Checkbox from './Components/FormsUI/Checkbox';
import Button from './Components/FormsUI/Button';


const useStyles = styled((theme) => ({
  formWrapper: {
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(8),
  },
}));


const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('required'),
  lastName: Yup.string().required('required'),
  email: Yup.string().email('Invalid email').required('required'),
  phone: Yup.number().integer().typeError('Enter a valid phone number').required('required'),
  addressLine1: Yup.string().required('required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('required'),
  state: Yup.string().required('required'),
  country: Yup.string().required('required'),
  arrivalDate: Yup.date().required('required'),
  departureDate: Yup.date().required('required'),
  message: Yup.string(),
  termsOfService: Yup.boolean().oneOf([true], 'Ts & Cs must be accepted').required('Ts & Cs must be accepted'),

});

const App = () => {
  const classes = useStyles();



  return (
    <Grid container>
      <Grid item xs={12}>
        <Header/>

      </Grid>
      <Grid item xs={12}>
        <Container >
          <div className={classes.formWrapper}>
            <Formik 
            initialValues = {{
                ...INITIAL_FORM_STATE
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={values => {
              console.log(values);

            }}
            >

            <Form>
              <Grid container spacing={2}>

                <Grid item xs={12}><br></br>
                  <Typography>
                    Your Details
                  </Typography>
                </Grid>

              <Grid item xs={6}>
                <TextfieldWrapper name="firstName" label="First Name"/>
              </Grid>

              <Grid item xs={6}>
                <TextfieldWrapper name="lastName" label="Last Name"/>
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="email" label="Email"/>
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="phone" label="Phone"/>
              </Grid>

              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}><br></br>
                  <Typography>
                    Address
                  </Typography>
                </Grid>
              

              <Grid item xs={12}>
                <TextfieldWrapper name="addressLine1" label="Address Line 1"/>
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="addressLine2" label="Address Line 2"/>
              </Grid>

              <Grid item xs={6}>
                <TextfieldWrapper name="city" label="City"/>
              </Grid>

              <Grid item xs={6}>
                <TextfieldWrapper name="state" label="State"/>
              </Grid>

              <Grid item xs={12}>
                <Select name="country" label="Country" options={countries}/>
              </Grid>

              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}><br></br>
                  <Typography>
                    Booking Information
                  </Typography>
                </Grid>
              
              <Grid item xs={6}>
                <DateTimePicker name="arrivalDate" label="Arrival Date" />
              </Grid>

              <Grid item xs={6}>
                <DateTimePicker name="departureDate" label="Departure Date" />
              </Grid>

              <Grid item xs={12}>
                <TextfieldWrapper name="message" label="Message" multiline={true} rows={4}/>
              </Grid>

              <Grid item xs={12}>
                <Checkbox name="termsOfService" legend="Terms Of Service" label="I Agree"/>
              </Grid>

              <Grid item xs={12}>
                <Button>
                      
                </Button>
              </Grid>

              </Grid>

            </Form>
          </Formik>
        </div>
      </Container>
    </Grid>
  </Grid>
);
}
export default App;










