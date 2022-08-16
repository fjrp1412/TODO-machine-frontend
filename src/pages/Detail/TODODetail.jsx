import React from 'react';
import { DetailStyles } from './DetailStyles';

const TODODetail = ({ TODO = null }) => {
  return (
    <DetailStyles>
      <div className="detail-head">
        <div className="title">
          <input type="text" placeholder="Title" />
        </div>
        <div className='completed'>
            <label htmlFor="completed">Completed </label>
            <input type="checkbox" name='completed' />
        </div>

        <div className='priority'>
            
        </div>
      </div>
      <div></div>
    </DetailStyles>
  );
};
