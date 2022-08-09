import React from 'react';

import { TextField } from '@components/Inputs/TextField';
import { Button } from '@components/Button';
import { SignupStyles } from './SignupStyles';

const SignupUI = ({ formik }) => {
  return (
    <SignupStyles>
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <h1 className="form-title">Sign up</h1>
        <TextField
          label="Email"
          value={formik.values.email}
          handleChange={formik.handleChange}
          placeholder="example@gmail.com"
          name="email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}

        <TextField
          label="Password"
          value={formik.values.password}
          handleChange={formik.handleChange}
          type="password"
          name="password"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}

        <TextField
          label="Repeat Password"
          value={formik.values.repeatPassword}
          handleChange={formik.handleChange}
          type="password"
          name="repeatPassword"
        />
        {formik.touched.repeatPassword && formik.errors.repeatPassword ? (
          <div className="error">{formik.errors.repeatPassword}</div>
        ) : null}
        <Button type="submit">Signup</Button>
      </form>
    </SignupStyles>
  );
};

export { SignupUI };
