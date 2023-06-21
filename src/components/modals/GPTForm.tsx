import React, { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Button, Typography, TextField, Modal } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import CloseIcon from '@mui/icons-material/Close';

interface GptFormModal {
}

const GptForm: React.FC<GptFormModal> = () => {
  const [username, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword: any = () => setShowPassword(show => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const router = useRouter();

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        throw new Error('Please enter your email and password.');
      }

      const userData = await signIn('credentials', {
        redirect: false,
        username,
        password,
        callbackUrl: '/',
      });

      if (userData?.error) {
        setError(userData?.error);
      } else {
        setError(null);
        router.push('/');
        // use callback instead here
      }
    } catch (err: any) {}
  };

  return (
    <>
      <div className="flex-1 h-full relative lg-max lg-max:hidden">
        <Image fill sizes="100%, 100%" src="/icons/gpt-logo.png" alt="gpt-image" />
      </div>
      <form className="flex flex-col justify-start items-center box-border w-full max-w-[350px] lg:m-11">
        <p className="text-2xl font-semibold lg-max:font-medium" >Login</p>
        <p className="text-[#737373] p-4 lg-max:text-sm">Login to stay connected.</p>
        <div className="w-full py-1">
          <p className="text-[#737373] lg-max:text-sm">Email</p>
          <TextField
            className="w-full"
            variant="standard"
            name="Email"
            onChange={e => {
              setEmail(e.target.value);
            }}
            value={username}
          />
        </div>

        <div className="w-full py-1">
          <p className='text-[#737373] lg-max:text-sm'>Password</p>
          <Input
            className="w-full"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />

          {error && <p className="text-primary">{error}</p>}
        </div>
        <div className="flex w-full mt-3 justify-between">
          <div className="flex">
            <input type="checkbox" />
            <p className='ml-[6px] text-[#737373] lg-max:text-sm'>Remember me?</p>
          </div>
          <Link className="text-primary lg-max:text-sm" href="/forgotpassword">
            Forgot password
          </Link>
        </div>
        <button
          onClick={handleLogin}
          className="bg-[#141414] h-[36px] rounded-[5px] w-full mt-3 text-base font-light text-[#ffffff] hover:bg-[#141414] lg-max:text-sm"
        >
          Sign in
        </button>
        <p className="mt-3 lg-max:text-sm"> or sign in with other accounts?</p>
        <div className="flex mt-3">
          <Image
            alt="google-login"
            src="/icons/gmail.png"
            width="40"
            height="40"
            priority
            className="cursor-pointer"
            onClick={() => {
              signIn('google');
            }}
          />
          <Image
            alt="facebook-login"
            src="/icons/facebook.png"
            width="40"
            height="36"
            priority
            className="cursor-pointer"
            onClick={() => {
              signIn('facebook');
            }}
          />
        </div>
        <div className="alt-switch lg-max:text-sm">
          Don&#39;t have an account?{' '}
          <Link href="/signup" className="text-primary">
            Click here to sign up.
          </Link>
        </div>
      </form>
    </>
  );
};

export default GptForm;
