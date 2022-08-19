import styled from 'styled-components';
import CheckWhite from '@assets/check-white.png';
import CheckGreen from '@assets/check-green.png';
import Delete from '@assets/delete.png';
import OpenArrow from '@assets/open-diagonal-arrow.png';

const ItemStyles = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  margin: 10px 0;
  flex-direction: column;
  justify-content: space-around;
  padding: 0px 10px;
  background-color: #202020;

  .TODO-container__head {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .TODO-title {
    font-size: 1.6rem;
  }

  .TODO-arrow {
    background-image: url(${OpenArrow});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    cursor: pointer;
  }


  .TODO-priority {
    font-size: 1.4rem;
  }

  .TODO-options {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .TODO-options__option {
    width: 25px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 25px;
    cursor: pointer;
  }


  .check {
    background-image: url(${CheckWhite});
  }

  .green-check {
    background-image: url(${CheckGreen});
  }

  .remove {
    background-image: url(${Delete});
  }
`;

export { ItemStyles };
