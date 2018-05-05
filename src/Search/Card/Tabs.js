import React from 'react';
import { PropTypes as pt } from 'prop-types';
import styled, { css } from 'styled-components';
import Baggage from './Baggage';

const TabsStyled = styled.div`
  display: flex;
  height: 56px;
`;

const Tab = styled.div`
  padding-top: 5px;
  padding-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  width: 50%;
  background-color: #f8fbfb;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid #ddd;
  }

  ${props =>
    props.active &&
    css`
      background-color: transparent;
      border-bottom: 1px solid transparent;
      cursor: default;
      pointer-events: none;
    `};
`;

const Tabs = props => (
  <TabsStyled>
    {props.list.map(tab => (
      <Tab key={tab.id} active={tab.active}>
        <Baggage list={tab.list} price={tab.price} noBaggage={tab.noBaggage} />
      </Tab>
    ))}
  </TabsStyled>
);

Tabs.propTypes = {
  list: pt.arrayOf(pt.shape({})),
};

Tabs.defaultProps = {
  list: [],
};

export default Tabs;
