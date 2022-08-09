import React from 'react';
import { TextField } from '@components/Inputs/TextField';
import { Button } from '@components/Button';
import { LoginStyles } from './LoginStyles';

const LoginUI = ({ formik }) => {
  return (
    <LoginStyles>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h1 className="form-title">Signup</h1>
        <TextField
          label="Email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          placeholder="example@gmail.com"
          name="email"
        />
        <TextField
          label="Password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          type="password"
          name="password"
        />
        <TextField
          label="Repeat Password"
          value={formik.values.repeatPassword}
          handleChange={formik.handleChange}
          type="password"
          name="repeatPassword"
        />

        <Button type="submit">Signup</Button>
      </form>
    </LoginStyles>
  );
};

export { LoginUI };
