import styled from 'styled-components';

const HomeStyles = styled.div`
  width: 100%;
  height: 100%;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .content-info {
    width: 100%;
    display: flex;
    height: 200px;
    margin-top: 50px;
  }

  .content-info__container {
    width: 90%;
    padding-left: 25px;
  }

  .content-info__title {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }

  .content-info__description {
    width: 50%;
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.8);
  }
  .content-filter {
    display: flex;
    width: 95%;
    height: 70px;
    border-radius: 15px;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    margin: 0px 0px 10px 0px;
    background-color: var(--hard-gray);
  }

  .content-filter .filter-options {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
  .content-filter .filter-options .selected {
    background-color: var(--cyan-select-bg);
  }

  .content-filter .filter-options .filter-options__option {
    margin: 0px 3px;
    padding: 10px 0px;
    border-radius: 25px;
    width: 75px;
    text-align: center;
    cursor: pointer;
  }

  .content-TODOs {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

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

  .content-TODOs .finish {
    border: solid 2px #6ffd00;
  }

  .finish .TODOs-container__head {
    background-color: var(--TODO-green);
  }

  .content-TODOs .doing {
    border: solid 2px #faff00;
  }

  .doing .TODOs-container__head {
    background-color: var(--TODO-yellow);
  }

  .content-TODOs .pending {
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

  .TODOs-list__item {
    width: 100%;
    height: 100px;
    margin: 10px 0;
    border: solid 1px blue;
  }
`;

const FormStyle = styled.form`
  height: 100%;
  width: 100%;

  .form-title {
    color: white;
    text-align: center;
    font-size: 2.4rem;
  }

  .form-container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form-container .field {
    width: 80%;
  }

  .form-container__buttons {
    margin-top: 20px;
  }

`;

export { HomeStyles, FormStyle };
