import React from "react";
import Icon from "../Icon";
import styled from "styled-components";
import media from "../utils/media";

const Header = styled.header`
  display: flex;
  align-items: center;

  @media screen and (min-width: 1200px) {
    padding-left: 86px;
  }
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
`;

const Text = styled.span`
  margin-left: 12px;
  display: none;
  font-size: 20px;
  color: #fff;

  ${media.tablet`
    display: block;
  `};
`;

export default () => (
  <Header>
    <Logo>
      <Icon icon="logo" />
    </Logo>
    <Text>aviasales</Text>
  </Header>
);
