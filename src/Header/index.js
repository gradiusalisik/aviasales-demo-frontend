import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import media from '../utils/media';

const Header = styled.header`
  display: flex;
  align-items: center;

  ${media.xl`
    padding-left: 86px;
  `};
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  color: #fff;
`;

const Text = styled.span`
  margin-left: 12px;
  display: none;
  font-size: 20px;
  color: #fff;

  ${media.md`
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
