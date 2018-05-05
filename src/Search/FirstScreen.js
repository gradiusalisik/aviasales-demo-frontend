import React from "react";
import Header from "./Header";
import Forms from "./Forms";
import styled from "styled-components";
import media from "../utils/media";

const FirstScreen = styled.section`
  position: relative;
  z-index: 2;
  padding-left: 6px;
  padding-right: 6px;
  background: linear-gradient(
    100deg,
    #00b0de -46.32%,
    #01aedc -42.65%,
    #02abdb -38.93%,
    #02abdb -35.24%,
    #02abdb -35.02%,
    #196ebd 52.98%
  );

  ${media.md`
    background: linear-gradient(
      106.51deg,
      #00B0DE -41.34%,
      #01AEDC -37.67%,
      #02ABDB -33.95%,
      #02ABDB -30.26%,
      #02ABDB -30.04%,
      #196EBD 57.99%
    );
  `};
`;

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${media.md`
    padding-bottom: 32px;
    min-height: 226px;
  `};

  ${media.xl`
    margin-right: auto;
    margin-left: auto;
    max-width: 1240px;
    min-height: 168px;
  `};
`;

const Content = styled.div`
  display: none;
  ${media.md`
    display: block;
  `};
`;

export default () => (
  <FirstScreen>
    <Container>
      <Header />
      <Content>
        <Forms />
      </Content>
    </Container>
  </FirstScreen>
);
