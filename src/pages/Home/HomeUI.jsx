import { Button } from '@components/Button';
import { TODO } from '@components/TODO';
import { Modal } from '@components/Modal';
import { TextField } from '@components/Inputs/TextField';
import { TextArea } from '@components/Inputs/TextArea';
import { CheckBox } from '@components/Inputs/CheckBox/CheckBox';
import { SimpleSelect } from '@components/Inputs/Selects';
import { Label } from '@components/Label';
import { HomeStyles, FormStyle } from './HomeStyles';

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
        <FormStyle>
          <div className="form-container">
            <div className="form-container__head">
              <div className="form-todo-title field">
                <TextArea
                  value="Un titulo con mucho texto"
                  handleChange={e => console.log(e.target.value)}
                ></TextArea>
              </div>

              <div className="form-todo__completed field">
                <Label
                  sx={{
                    margin: '0px 10px 0px 0px',
                    color: 'rgba(255, 255, 255, .7)',
                    fontSize: '1.8rem',
                  }}
                >
                  Completed
                </Label>
                <CheckBox
                  value={true}
                  handleChange={e => console.log(e.target.value)}
                  name="completed"
                  checked={true}
                />
              </div>

              <div className="form-todo__priority field">
                <SimpleSelect />
              </div>
            </div>

            <div className="form-todo__description field">
              <TextArea
                name="description"
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis vel nisi a felis aliquet suscipit.
                Suspendisse tincidunt, erat at tempus elementum,
                nulla magna posuere tellus, eget maximus quam urna facilisis tellus. Donec consequat quis nisl eget aliquet. Nulla aliquam, justo a tincidunt vulputate, nisi neque varius urna, ut venenatis mi ante ut sapien. Cras placerat lorem vel nunc mollis luctus vel vitae lacus. Aenean elementum porttitor erat. Sed a quam vitae felis gravida posuere at at libero. Morbi sit amet massa velit. Donec imperdiet sed magna vel tincidunt. Pellentesque bibendum fermentum convallis."
                handleChange={e => console.log(e.target.value)}
                sx={{
                  height: '100%',
                  fontSize: '1.6rem',
                }}
              />
            </div>
          </div>
        </FormStyle>
      </Modal>
    </HomeStyles>
  );
};

export { HomeUI };
