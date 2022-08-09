import React from 'react';
import { TextField } from '@components/Inputs/TextField';
import { Button } from '@components/Button';
import { LoginStyles } from './LoginStyles';

const LoginUI = ({
  email,
  password,
  repeatPassword,
  handleChangeEmail,
  handleChangePassword,
  handleChangeRepeatPassword,
  handleSubmit,
}) => {
  return (
    <LoginStyles>
      <form className="login-form">
        <h1 className="form-title">Signup</h1>
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

        <Button handleClick={handleSubmit}>Signup</Button>
      </form>
    </LoginStyles>
  );
};

export { LoginUI };
