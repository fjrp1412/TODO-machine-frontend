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
    height: 300px;
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
    border: red 1px solid;
  }
`;

export { HomeStyles };
