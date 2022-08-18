import styled from 'styled-components';

const MultiSelectStyles = styled.div`
  width: 80%;
  .select-container {
    font-size: 1.6rem;
    color: white;
    background-color: var(--light-gray-bg);
  }

  .select-container .react-select__control {
    background-color: var(--light-gray-bg);
    border: none;
    border-radius: 15px;
    color: white;
    cursor: pointer;
  }
  .select-container .react-select__menu {
    background-color: var(--light-gray-bg);
    border: none;
    color: white;
  }
  .select-container .react-select__option {
    background-color: var(--light-gray-bg);
    cursor: pointer;
  }

  .select-container .react-select__option--is-focused {
    background-color: rgba(255, 255, 255, 0.4);
  }

  .select-container .react-select__placeholder,
  .select-container .react-select__single-value {
    color: white;
  }
`;

export { MultiSelectStyles };
