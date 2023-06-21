import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { registerValidator } from '@lib/utilities/formValidator';
import { Formik, Field, FormikProps, FormikConfig, FieldProps } from 'formik';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface PasswordInputProps {
  name: string;
  label: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  valueReference?: string;
  valueTouchedReference?: boolean;
}

const LoginForm: React.FC<PasswordInputProps> = ({
  name,
  label,
  showPassword,
  setShowPassword,
  handleMouseDownPassword,
  valueReference,
  valueTouchedReference,
}) => {
  return (
    <div className="user-info-container">
      <p>{label}</p>
      <Field name={name} validate={(e: any) => registerValidator(e, name)}>
        {({ field, meta }: FieldProps<string>) => (
          <>
            <Input
              className={
                field.value !== valueReference && valueTouchedReference && meta.touched
                  ? 'password-input error-outline'
                  : 'password-input'
              }
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => {
                      setShowPassword(prev => !prev);
                    }}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...field}
            />
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
  );
};

export default LoginForm;
