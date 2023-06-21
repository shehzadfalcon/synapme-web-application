import React, { ReactNode, useState, useRef, MutableRefObject } from 'react';
import Image from 'next/image';
import { Button, Typography, TextField } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { RegisterValues } from '@lib/types/user';
import { initialValues, initialValidateValues } from '@lib/reducers/RegisterFormReducer';
import { registerValidator } from '@lib/utilities/formValidator';
import { Formik, Field, FormikProps, FormikConfig, FieldProps } from 'formik';
import EachTextInput from '@/components/inputs/SnTextFormInput';
import SnPasswordFormInput from '@/components/inputs/SnPasswordFormInput';

const LoginForm: React.FC = () => {
  const [dateValue, setDateValue] = useState<Dayjs | null>(null);
  const [dateError, setDateError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const formRef = useRef<FormikProps<RegisterValues>>(null);

  const handleDateValue = (newValue: any) => {
    setDateValue(newValue);
    newValue && setDateError(false);
  };
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  // move to lib const folder
  const gender = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
  ];

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!dateValue) {
      setDateError(true);
      setRegisterError('');
    } else {
      setDateError(false);
    }

    if (formRef && !isLoading) {
      formRef?.current?.handleSubmit();
      formRef?.current?.setTouched(initialValidateValues);
    }
  };

  const formikParams: FormikConfig<RegisterValues> = {
    innerRef: formRef as MutableRefObject<FormikProps<RegisterValues>>,
    initialValues: initialValues,
    onSubmit: (values: RegisterValues) => {
      (async () => {
        try {
          setIsLoading(true);

          const userData = {
            ...values,
            dateOfBirth: dateValue?.format('YYYY-MM-DD'),
          };

          const response: any = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
          const data = await response.json();

          console.log(data);
          if (data?.errorMessage) {
            setRegisterError(data.errorMessage);
          }
          // code here
        } catch (ex) {
        } finally {
          setIsLoading(false);
        }
      })();
    },
  };

  return (
    <Formik {...formikParams}>
      {props => (
        <form className="register-form">
          <p className="form-header-text">Sign Up</p>
          <p className="text-[#737373] mt-5 mb-3">Create your Synapme account.</p>
          <div className="row-form mb-3">
            <EachTextInput label="First name" name="firstName" />
            <EachTextInput label="Last name" name="lastName" />
          </div>

          <div className="row-form mb-3">
            <EachTextInput label="Email address" name="email" />
            <EachTextInput label="Username" name="username" />
          </div>

          <div className="row-form mb-3">
            <SnPasswordFormInput
              name="password"
              label="Password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              valueReference={props.values.confirmPassword}
              valueTouchedReference={props.touched.confirmPassword}
            />
            <SnPasswordFormInput
              name="confirmPassword"
              label="Confirm password"
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
              valueReference={props.values.password}
              valueTouchedReference={props.touched.password}
            />
          </div>
          <div className="row-form-2 mb-3">
            <div className="user-info-container">
              <p>Date of birth</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  className={!dateError ? 'date-picker' : 'date-picker date-error'}
                  value={dateValue}
                  onChange={handleDateValue}
                />
              </LocalizationProvider>
            </div>

            <div className="user-info-container">
              <p>Gender</p>

              {/* refactor this to a reusable component for input selection later */}
              <Field name="gender" validate={(e: any) => registerValidator(e, 'gender')}>
                {({ field, meta }: FieldProps<string>) => (
                  <>
                    <TextField
                      id="standard-select-currency"
                      select
                      defaultValue="Male"
                      variant="standard"
                      className="select-input"
                      {...field}
                    >
                      {gender.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    {meta.touched && meta.error && (
                      <p className="general-input-error-text">{meta.error}</p>
                    )}
                  </>
                )}
              </Field>
            </div>
          </div>
          <>
            {registerError && Object.values(props.errors).length === 0 && (
              <p className="general-error">{registerError}</p>
            )}
          </>
          <div className="remember-me register mt-3">
            <input type="checkbox" />
            <p>Receive weekly email notifications through google or microsoft</p>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#de0b0b] h-[36px] rounded-[5px] w-full mt-3 text-base font-normal text-[#ffffff] hover:bg-[#de0b0b] lg-max:max-w-xs"
          >
            Sign up
          </button>
          {/* <p className="auth-option"> or sign up with other accounts?</p>
          <div className="identity-provider-icons">
            <Image
              alt="google-login"
              src="/icons/gmail.png"
              width="40"
              height="40"
              priority
              className="google-icon"
            />
            <Image
              alt="facebook-login"
              src="/icons/facebook.png"
              width="36"
              height="36"
              priority
              className="facebook-icon"
            />
          </div> */}
          <div className="alt-switch">
            Already have an account?{' '}
            <Link href="/signup" className="click-here-signup">
              Sign in.
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
