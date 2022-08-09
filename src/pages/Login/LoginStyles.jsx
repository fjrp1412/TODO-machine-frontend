import styled from 'styled-components';

const LoginStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
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

  .form-title {
    font-size: 4.5rem;
  }
`;

export { LoginStyles };
