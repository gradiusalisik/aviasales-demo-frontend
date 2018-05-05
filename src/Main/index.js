import React from "react";
import FirstScreen from "./FirstScreen";
import ContentPopular from "../ContentPopular";
import ContentBestPrice from "../ContentBestPrice";
import SpecialOffers from "../SpecialOffers";
import About from "../About";
import MobileAttachments from "../MobileAttachments";
import Slider from "../Slider";
import Subscribe from "../Subscribe";
import styled from "styled-components";
import media from "../utils/media";

const Main = styled.div``;

const Sliders = styled.div`
  margin-bottom: 32px;
`;

const Content = styled.div`
  display: none;
  ${media.md`
    display: block;
  `};
`;

export default () => (
  <Main>
    <FirstScreen />
    <ContentPopular />
    <ContentBestPrice />
    <Content>
      <Sliders>
        <Slider />
      </Sliders>
      <Subscribe />
    </Content>
    <SpecialOffers />
    <About />
    <MobileAttachments />
  </Main>
);
