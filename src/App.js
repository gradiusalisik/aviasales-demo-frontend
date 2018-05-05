import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Main from './Main';
import Search from './Search';

addLocaleData(ru);

const App = styled.div`
  background-color: #f8fcff;
`;

export default () => (
  <IntlProvider locale="ru">
    <App>
      <Router>
        <div>
          <Helmet>
            <title>Aviasales Demo App</title>
          </Helmet>
          <Route path="/" exact component={Main} />
          <Route path="/search" component={Search} />
          <Footer />
        </div>
      </Router>
    </App>
  </IntlProvider>
);
