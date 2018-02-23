import React from "react";
import styled from "styled-components";
import Accordions from "./Accordions";
import Icon from "../../Icon";

const Filter = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
`;

const Reset = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px 16px;
  background-color: transparent;
  border: none;
`;

const IconReset = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #dadada;
`;

export default () => (
  <Filter>
    <Accordions />
    <Reset>
      <IconReset icon="clear" />
    </Reset>
  </Filter>
);
