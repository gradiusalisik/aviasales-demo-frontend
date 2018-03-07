import React from 'react';
import styled from 'styled-components';
import Accordions from './Accordions';

const Filter = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
`;

export default () => (
  <Filter>
    <Accordions />
  </Filter>
);
