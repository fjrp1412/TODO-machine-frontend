import styled from 'styled-components';

const TextFieldStyles = styled.input(props => {
  return { ...props };
});

TextFieldStyles.defaultProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  height: '2.8rem',
  padding: '10px',
  borderRadius: '25px',
  border: '1px black solid',
};

export { TextFieldStyles };
