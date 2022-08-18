import styled from 'styled-components';
import ArrowIcon from '@assets/open-diagonal-arrow.png';

const SidebarStyles = styled.div`
  background-color: var(--black-variant);
  height: 100%;
  width: 100%;

  .sidebar {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }

  .sidebar-header {
    width: 90%;
    height: 90px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #7b7b7b;
  }

  .sidebar-header__img {
    height: 100%;
    padding: 10px;
  }

  .sidebar-header__img img {
    object-fit: cover;
  }

  .sidebar-header__description {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px 0px;
  }

  .sidebar-header__description .sidebar-header__username {
    font-size: 1.6rem;
    font-weight: bolder;
    margin-bottom: 5px;
  }

  .sidebar-header__description .sidebar-header__workspace {
    font-size: 1.4rem;
    font-weight: lighter;
  }

  .sidebar-content {
    margin: 10px 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .sidebar-content__container {
    display: flex;
    width: calc(100% - 20px);
    flex-direction: column;
    align-items: center;
  }

  .sidebar-content__container .sidebar-content__item {
    display: flex;
    width: 100%;
    height: 2.5rem;
    margin: 5px 0px;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
  }

  .sidebar-content__container .sidebar-content__item:hover {
    background-color: rgba(43, 36, 121, 0.5);
    cursor: pointer;
  }

  .selected {
    background-color: var(--purple-select-bg);
  }
`;

export { SidebarStyles };
