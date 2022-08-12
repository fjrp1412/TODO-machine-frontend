import React from 'react';

import { Layout } from '@components/Layout';
import { HomeStyles } from './HomeStyles';

const Home = () => {
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

          <div className="content-sorteable"></div>

          <div className="content-TODOs"></div>
        </div>
      </HomeStyles>
    </Layout>
  );
};

export { Home };
