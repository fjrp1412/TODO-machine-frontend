import styled from 'styled-components';

const ModalStyles = styled.div`
  background-color: var(--black-bg);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 80%;
  height: 80%;
`;

const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export { ModalStyles, OverlayStyles };
