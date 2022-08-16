import { Button } from '@components/Button';
import { TODO } from '@components/TODO';
import { Modal } from '@components/Modal';
import { HomeStyles } from './HomeStyles';

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
          <div className="TODOs-container pending">
            <div className="TODOs-container__head">Pending</div>
            <div className="TODOs-container__list">
              {pendings &&
                pendings?.map(item => (
                  <TODO
                    key={item.id}
                    title={item.title}
                    priority={item.priority}
                    handleRemove={() => handleRemoveItem(item.id)}
                    handleToggleCompleted={() => handleToggleCompleted(item.id)}
                  ></TODO>
                ))}
            </div>
          </div>

          <div className="TODOs-container doing">
            <div className="TODOs-container__head">Doing</div>

            <div className="TODOs-container__list">
              {doings &&
                doings?.map(item => (
                  <TODO
                    key={item.id}
                    title={item.title}
                    priority={item.priority}
                    handleRemove={() => handleRemoveItem(item.id)}
                    handleToggleCompleted={() => handleToggleCompleted(item.id)}
                  ></TODO>
                ))}
            </div>
          </div>

          <div className="TODOs-container finish">
            <div className="TODOs-container__head">Finished</div>

            <div className="TODOs-container__list">
              {finisheds &&
                finisheds?.map(item => (
                  <TODO
                    key={item.id}
                    title={item.title}
                    priority={item.priority}
                    handleRemove={() => handleRemoveItem(item.id)}
                    handleToggleCompleted={() => handleToggleCompleted(item.id)}
                    finished
                  ></TODO>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal}>
      </Modal>
    </HomeStyles>
  );
};

export { HomeUI };
