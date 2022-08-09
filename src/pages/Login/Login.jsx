import { useState } from 'react';
import { LoginUI } from './LoginUI';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeRepeatPassword = e => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
    console.log(repeatPassword);
  };

  return (
    <LoginUI
      email={email}
      password={password}
      repeatPassword={repeatPassword}
      handleSubmit={handleSubmit}
      handleChangeEmail={handleChangeEmail}
      handleChangePassword={handleChangePassword}
      handleChangeRepeatPassword={handleChangeRepeatPassword}
    />
  );
};

export { Login };
