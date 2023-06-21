import React from 'react';
import Image from 'next/image';
import { TextField } from '@mui/material';

import { registerValidator } from '@lib/utilities/formValidator';
import { Field, FieldProps } from 'formik';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface TextInputProps {
  name: string;
  label?: string;
}

const EachTextInput: React.FC<TextInputProps> = ({ name, label }: any) => {
  return (
    <>
      <div className="user-info-container">
        {label && <p>{label}</p>}
        <Field name={name} validate={(e: any) => registerValidator(e, name)}>
          {({ field, meta }: FieldProps<string>) => (
            <>
              <TextField className="field-input" variant="standard" {...field} />
              {meta.touched && meta.error && (
                <div className="error-container">
                  <ErrorOutlineIcon sx={{ fontSize: '17px', color: 'red' }} />
                  <p className="general-input-error-text">{meta.error}</p>
                </div>
              )}
            </>
          )}
        </Field>
      </div>
    </>
  );
};

export default EachTextInput;
