import styled from 'styled-components';

const TextFieldStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .input-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
    padding: 0px 5px;
  }

  .input-container .input {
    width: 100%;
    height: 2.5rem;
    padding: 10px;
    border-radius: 25px;
    border: 1px black solid;
  }

  .input-container .input::placeholder {
    color: var(--white); 
  }

  .input-container .input-label {
    font-size: 1.6rem;
    margin: 0px 0px 4px 0px;
    align-self: flex-start;
    padding-left: 5px;
  }
`;

export { TextFieldStyles };
