import styled from 'styled-components';

const ButtonStyles = styled.button(props => {
  return { ...props };
});

ButtonStyles.defaultProps = {
  width: '150px',
  height: '30px',
  margin: '10px 0px',
  border: 'none',
  borderRadius: '25px',
  backgroundColor: 'var(--light-blue)',
  color: 'white',
  fontSize: '1.6rem',
  cursor: 'pointer',
};

export { ButtonStyles };
