import React from 'react';

import { TextField } from '@components/Inputs/TextField';
import { Label } from '@components/Label';
import { Button } from '@components/Button';
import { SignupStyles } from './SignupStyles';
import { Link } from 'react-router-dom';

const SignupUI = ({ formik, errors }) => {
  return (
    <SignupStyles>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h1 className="form-title">Signup</h1>
        {errors ? <div className="error">{errors.message}</div> : null}
        <div className="input-container">
          <Label>Email</Label>
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
        </div>

        <div className="input-container">
          <Label>Password</Label>
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
        </div>
        <Button type="submit">Signup</Button>

        <div className="footer-form">
          <div className="footer-form__content">
            <Link 
            to={'/login'}
            className="footer-form__link"
            >Already have an account? Log in!</Link>
          </div>
        </div>
      </form>
    </SignupStyles>
  );
};

export { SignupUI };
