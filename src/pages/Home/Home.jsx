import React, { useState, useEffect } from 'react';

import { Layout } from '@components/Layout';
import { Button } from '@components/Button';
import { HomeStyles } from './HomeStyles';

const Home = () => {
  const [query, setQuery] = useState({});
  const handleChangeQuery = field => {
    setQuery({ ...query, [field]: !query[field] });
  };
  return (
    <Layout>
      <HomeStyles>
        <div className="main">
          <div className="content-info">
            <div className="content-info__container">
              <div className="content-info__title">
                <h1>Workspace</h1>
              </div>
              <div className="content-info__description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas officia repudiandae molestiae nulla amet quaerat,
                pariatur architecto? Dicta cum numquam vitae placeat error eum
                quod enim dolore. Eius, doloribus accusantium?
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
                <div className="TODOs-list__item"></div>
                <div className="TODOs-list__item"></div>
                <div className="TODOs-list__item"></div>
              </div>
            </div>
            <div className="TODOs-container doing">
              <div className="TODOs-container__head">Doing</div>

              <div className="TODOs-container__list">
                <div className="TODOs-list__item"></div>
                <div className="TODOs-list__item"></div>
                <div className="TODOs-list__item"></div>
              </div>
            </div>
            <div className="TODOs-container finish">
              <div className="TODOs-container__head">Finished</div>

              <div className="TODOs-container__list">
                <div className="TODOs-list__item"></div>
                <div className="TODOs-list__item"></div>
                <div className="TODOs-list__item"></div>
              </div>
            </div>
          </div>
        </div>
      </HomeStyles>
    </Layout>
  );
};

export { Home };
