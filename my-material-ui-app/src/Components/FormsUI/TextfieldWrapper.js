import React from 'react';
import { TextField } from '@mui/material';
import {useField} from 'formik';

const TextfieldWrapper = ({
    name,
    ...otherProps
}) => {

    const [field, meta] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        variant: 'outlined',
    };

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField fullWidth {...configTextfield}></TextField>
    );
};

export default TextfieldWrapper;