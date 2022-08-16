import React from 'react';
import { TextField } from '@components/Inputs/TextField';
import { Button } from '@components/Button';
import { Label } from '@components/Label'
import { LoginStyles } from './LoginStyles';

const LoginUI = ({ formik }) => {
  return (
    <LoginStyles>
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <h1 className="form-title">Login</h1>
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
      </form>
    </LoginStyles>
  );
};

export { LoginUI };
