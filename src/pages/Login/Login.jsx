import React, { useState } from 'react';
import { TextField } from '@components/Inputs/TextField';
import { LoginStyles } from './LoginStyles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChangeEmail = e => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleChangeRepeatPassword = e => {
    setRepeatPassword(e.target.value);
    console.log(repeatPassword);
  };

  return (
    <LoginStyles>
      <form className='login-form'>
        <h1 className='form-title'>Signup</h1>
        <TextField
          label="Email"
          value={email}
          handleChange={handleChangeEmail}
          placeholder="example@gmail.com"
        />
        <TextField
          label="Password"
          value={password}
          handleChange={handleChangePassword}
          type="password"
        />
        <TextField
          label="Repeat Password"
          value={repeatPassword}
          handleChange={handleChangeRepeatPassword}
          type="password"
        />
      </form>
    </LoginStyles>
  );
};

export { Login };
