import React from "react";
import "./App.css";
import FirstScreen from "./FirstScreen";
import ContentPopular from "./ContentPopular";
import ContentBestPrice from "./ContentBestPrice";
import SpecialOffers from "./SpecialOffers";
import About from "./About";
import MobileAttachments from "./MobileAttachments";
import Footer from "./Footer";
import Slider from "./Slider";
import Subscribe from "./Subscribe";
import styled from "styled-components";
import media from "./utils/media";

const App = styled.div`
  background-color: #f8fcff;
`;

const SliderWrap = styled.div`
  margin-bottom: 32px;
`;

const Wrapper = styled.div`
  display: none;
  ${media.tablet`
    display: block;
  `};
`;

export default () => (
  <App>
    <FirstScreen />
    <ContentPopular />
    <ContentBestPrice />
    <Wrapper>
      <SliderWrap>
        <Slider />
      </SliderWrap>
      <Subscribe />
    </Wrapper>
    <SpecialOffers />
    <About />
    <MobileAttachments />
    <Footer />
  </App>
);
