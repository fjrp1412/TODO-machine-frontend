import styled from 'styled-components';

const ContainerStyles = styled.div`
  .TODOs-container {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 607px;
    margin: 20px;
    border-radius: 25px;

    @media only screen and (max-width: 1600px) {
      width: 320px;
    }

    @media only screen and (max-width: 970px) {
      width: 100%;
    }
  }

  .TODOs-container__head {
    width: 100%;
    font-size: 2.2rem;
    font-weight: bolder;
    text-align: center;
    padding: 5px;
    border-radius: 25px 25px 0px 0px;
  }

  .finished {
    border: solid 2px #6ffd00;
  }

  .finished .TODOs-container__head {
    background-color: var(--TODO-green);
  }

  .doing {
    border: solid 2px #faff00;
  }

  .doing .TODOs-container__head {
    background-color: var(--TODO-yellow);
  }

  .pending {
    border: solid 2px #ff0000;
  }

  .pending .TODOs-container__head {
    background-color: var(--TODO-red);
  }

  .TODOs-container__list {
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 2px;
  }

  .TODOs-container__list .link {
    color: white;
    text-decoration: none;
  }
`;

export { ContainerStyles };
