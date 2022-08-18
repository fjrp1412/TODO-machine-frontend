import React from 'react';
import { DetailStyles } from './DetailStyles';
import { TextArea } from '@components/Inputs/TextArea';
import { CheckBox } from '@components/Inputs/CheckBox/CheckBox';
import { SimpleSelect } from '@components/Inputs/Selects';
import { Label } from '@components/Label';

const TODODetail = ({ TODO = null }) => {
  return (
    <DetailStyles>
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
    </DetailStyles>
  );
};

export default TODODetail;
