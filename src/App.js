import React from "react";
import Helmet from "react-helmet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Search from "./Search";
import styled from "styled-components";

const App = styled.div`
  background-color: #f8fcff;
`;

export default () => (
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
);
