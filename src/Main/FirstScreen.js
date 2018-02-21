import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Forms from "../Forms";
import Container from "../Container";
import media from "../utils/media";

const FirstScreen = styled.div`
  padding-top: 12px;
  padding-right: 6px;
  padding-left: 6px;
  height: 100vh;
  min-height: 480px;
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );

  ${media.md`
    padding-left: 8px;
    padding-right: 8px;
    background-color: black;
  `};
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 30px);
`;

export default () => (
  <FirstScreen>
    <Header />
    <Container>
      <Wrap>
        <Forms />
      </Wrap>
    </Container>
  </FirstScreen>
);
