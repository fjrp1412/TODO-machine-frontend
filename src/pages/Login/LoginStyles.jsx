import styled from 'styled-components';

const LoginStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--light-gray-bg);

  .login-form {
    width: 730px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--black-bg);
    border-radius: 15px;
  }

  .input-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
    padding: 0px 5px;
  }

  .form-title {
    font-size: 4.5rem;
  }

  .error {
    font-size: 1.4rem;
    font-weight: bold;
    color: red;
  }
  .footer-form {
    margin-top: 10px;
  }

  .footer-form__link {
    color: white;
    border-bottom: 1px solid white;
    padding-bottom: 2px;
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
  }
`;

export { LoginStyles };
