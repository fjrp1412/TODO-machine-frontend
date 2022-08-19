import { lazy, Suspense } from 'react';
import { Button } from '@components/Button';
import { Item, ItemContainer } from '@components/TODO';
import { Modal } from '@components/Modal';
import { HomeStyles } from './HomeStyles';

const Detail = lazy(() => import('@pages/Detail'));
const MultiSelect = lazy(() =>
  import('@components/Inputs/Selects/MultiSelect')
);

const HomeUI = ({
  query,
  handleChangeQuery,
  pendings,
  doings,
  finisheds,
  handleRemoveItem,
  handleToggleCompleted,
  open,
  onOpenModal,
  onCloseModal,
  screenSize,
}) => {
  return (
    <HomeStyles>
      <div className="main">
        <div className="content-info">
          <div className="content-info__container">
            <div className="content-info__title">
              <h1>Workspace</h1>
            </div>
            <div className="content-info__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              officia repudiandae molestiae nulla amet quaerat, pariatur
              architecto? Dicta cum numquam vitae placeat error eum quod enim
              dolore. Eius, doloribus accusantium?
            </div>
          </div>
        </div>

        <div className="content-filter">
          {screenSize > 470 ? (
            <div className="filter-options">
              <div
                className={`filter-options__option ${
                  !!query['low'] ? 'selected' : ''
                }`}
                onClick={() => handleChangeQuery('low')}
              >
                Low
              </div>
              <div
                className={`filter-options__option ${
                  !!query['medium'] ? 'selected' : ''
                }`}
                onClick={() => handleChangeQuery('medium')}
              >
                Medium
              </div>
              <div
                className={`filter-options__option ${
                  !!query['high'] ? 'selected' : ''
                }`}
                onClick={() => handleChangeQuery('high')}
              >
                High
              </div>
              <div
                className={`filter-options__option ${
                  !!query['all'] ? 'selected' : ''
                }`}
                onClick={() => handleChangeQuery('all')}
              >
                All
              </div>
            </div>
          ) : (
            <Suspense fallback={null}>
              <MultiSelect></MultiSelect>
            </Suspense>
          )}

          <div className="filter-buttons">
            <Button
              type="button"
              className="filter-buttons__button"
              handleClick={onOpenModal}
              sx={{
                width: '80px',
                margin: '0px 5px',
              }}
            >
              New +
            </Button>
          </div>
        </div>

        <div className="content-TODOs">
          <ItemContainer status="Pending">
            {pendings &&
              pendings?.map(item => (
                <Item
                  key={item.id}
                  title={item.title}
                  priority={item.priority}
                  handleRemove={() => handleRemoveItem(item.id)}
                  handleToggleCompleted={() => handleToggleCompleted(item.id)}
                  id={item.id}
                ></Item>
              ))}
          </ItemContainer>

          <ItemContainer status="Doing">
            {doings &&
              doings?.map(item => (
                <Item
                  key={item.id}
                  title={item.title}
                  priority={item.priority}
                  handleRemove={() => handleRemoveItem(item.id)}
                  handleToggleCompleted={() => handleToggleCompleted(item.id)}
                  id={item.id}
                ></Item>
              ))}
          </ItemContainer>

          <ItemContainer status="Finished">
            {finisheds &&
              finisheds?.map(item => (
                <Item
                  key={item.id}
                  title={item.title}
                  priority={item.priority}
                  handleRemove={() => handleRemoveItem(item.id)}
                  handleToggleCompleted={() => handleToggleCompleted(item.id)}
                  id={item.id}
                  finished
                ></Item>
              ))}
          </ItemContainer>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal}>
        <Suspense fallback={<div>Loading</div>}>
          <Detail></Detail>
        </Suspense>
      </Modal>
    </HomeStyles>
  );
};

export { HomeUI };
