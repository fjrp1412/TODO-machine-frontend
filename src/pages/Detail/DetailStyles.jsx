import styled from 'styled-components';

const DetailStyles = styled.div`
  width: 100%;
  padding: 50px;
  height: 100%;

  .form-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .form-container__head {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    height: 200px;
    border-bottom: solid 1px #7b7b7b;
    padding-bottom: 20px;
  }

  .form-container .field {
    width: 100%;
  }

  .form-container .form-todo__completed {
    margin-bottom: 15px;
  }

  .form-container .form-todo__description {
    height: 100%;
  }

  .form-container .form-todo__priority {
    width: 50%;
  }
`;

export { DetailStyles };
