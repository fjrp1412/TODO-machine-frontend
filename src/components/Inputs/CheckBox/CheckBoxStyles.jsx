import styled from 'styled-components';

const CheckBoxStyles = styled.input(props => {
  return { ...props };
});

CheckBoxStyles.defaultProps = {
  width: '20px',
  height: '20px',
};

export { CheckBoxStyles };
