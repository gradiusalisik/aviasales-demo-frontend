import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Search from "./Search";
import styled from "styled-components";

const App = styled.div`
  background-color: #f8fcff;
`;

export default () => (
  <App>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Main} />
        <Route path="/search" component={Search} />
        <Footer />
      </div>
    </BrowserRouter>
  </App>
);
