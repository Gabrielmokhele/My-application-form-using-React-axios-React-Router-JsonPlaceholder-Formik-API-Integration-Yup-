import React, { useContext } from 'react';
import './App.css';
import Header from './Component/Header/header';
import FirstStep from './Component/FirstStep';
import SecondStep from './Component/SecondStep';
import ThirdStep from './Component/ThirdStep';
import { Stepper, StepLabel, Step} from '@mui/material';
import {multiStepContext} from './StepContext';

function App () {

  const {currentStep, FinalData} = useContext(multiStepContext);
  
  const ShowStep = (step) => {
    console.log(step)
    if (step === 1) {
      return <FirstStep />;
    } else if (step === 2) {
      return <SecondStep />;
    } else if (step === 3) {
      return <ThirdStep />;
    }
  };

  

  return (
    <div className="App">
    <Header/><br></br>
      <Stepper className="centre-stepper" activeStep={currentStep - 1} orientation="horizontal">
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper><br></br><br></br>
        
        {ShowStep(currentStep)}
    </div>
  
  )
}

export default App;















