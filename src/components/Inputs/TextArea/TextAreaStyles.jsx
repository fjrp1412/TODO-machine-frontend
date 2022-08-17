import styled from 'styled-components';

const TextAreaStyles = styled.textarea(props => {
  return props;
});

TextAreaStyles.defaultProps = {
  color: 'white',
  background: 'transparent',
  border: 'none',
  width: '80%',
  minHeight: '50px',
  fontSize: '3rem',
  overflow: 'auto',
  outline: 'none',
  webkitBoxShadow: 'none',
  mozBoxShadow: 'none',
  boxShadow: 'none',
  resize: 'none',
};

export { TextAreaStyles };
