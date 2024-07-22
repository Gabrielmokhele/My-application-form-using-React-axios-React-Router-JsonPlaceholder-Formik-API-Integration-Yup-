import React, { useState } from 'react';
import App from './App';

export const multiStepContext = React.createContext();
const StepContext = () => {
    const [currentStep,setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [FinalData, setFinalData] = useState();
    
    const submitData = () => {
      setFinalData(userData);
    }

  return (
    <div>
        <multiStepContext.Provider value= {{currentStep, setStep,userData, setUserData,FinalData, setFinalData, submitData }}>
            <App/>
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext;









