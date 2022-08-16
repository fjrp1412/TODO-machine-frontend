import styled from 'styled-components';

const LabelStyles = styled.label(props => {
  return { ...props };
});
LabelStyles.defaultProps = {
  fontSize: '1.6rem',
  margin: '0px 0px 4px 0px',
  alignSelf: 'flex-start',
  paddingLeft: '5px',
  color: 'white',
};

export { LabelStyles };
