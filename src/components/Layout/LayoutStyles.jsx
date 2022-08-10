import styled from 'styled-components';

const LayoutStyles = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--black-bg);
  color: white;

  .layout {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .sidebar {
    width: 250px;
    height: 100%;
  }

  .content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
  }

`;

export { LayoutStyles };
