import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@components/Inputs/TextField';
import { Button } from '@components/Button';
import { Label } from '@components/Label';
import { LoginStyles } from './LoginStyles';

const LoginUI = ({ formik, errors }) => {
  return (
    <LoginStyles>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h1 className="form-title">Login</h1>
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

        <Button type="submit">Login</Button>

        <div className="footer-form">
          <div className="footer-form__content">
            <Link to={'/signup'} className="footer-form__link">
              Don't have an account yet? Sign up!
            </Link>
          </div>
        </div>
      </form>
    </LoginStyles>
  );
};

export { LoginUI };
