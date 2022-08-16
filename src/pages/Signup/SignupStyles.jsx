import styled from 'styled-components';

const SignupStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  background-color: var(--light-gray-bg);

  .signup-form {
    width: 730px;
    height: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--black-bg);
    border-radius: 15px;
  }

  .form-title {
    font-size: 4.5rem;
  }

  .error {
    font-size: 1.4rem;
    font-weight: bold;
    color: red;
  }
`;

export { SignupStyles };
