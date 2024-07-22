import React from "react";
import {Button} from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = (
    children,
    ...otherProps
) => {

    const {submitForm} = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        colour: 'primary',
        variant: 'contained',
        fullWidth: true,
        onClick: handleSubmit
    }

    return (
        <Button 
        {...configButton}
        >
           Submit
        </Button>
    )
}
export default ButtonWrapper;





