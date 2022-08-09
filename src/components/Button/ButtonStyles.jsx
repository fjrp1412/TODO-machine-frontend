import styled from 'styled-components';

const ButtonStyles = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

ButtonStyles.defaultProps = {
  width: '150px',
  height: '30px',
  margin: '10px 0px',
  border: 'none',
  borderRadius: '25px',
  backgroundColor: 'var(--light-blue)',
  color: 'white',
  fontSize: '1.6rem',
};

export { ButtonStyles };
