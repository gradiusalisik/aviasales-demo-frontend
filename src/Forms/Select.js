import React from "react";
import Icon from "../Icon";
import styled from "styled-components";
import media from "../utils/media";

const Select = styled.div`
  position: relative;
  padding: 19px 16px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;

  ${media.xl`
    cursor: pointer;
  `};
`;

const Text = styled.span`
  font-size: 16px;
  white-space: nowrap;
  color: #4a4a4a;
`;

const TextLight = Text.extend`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #a0b0b9;
`;

const ArrowSelect = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 10px;
  height: 6px;
  transform: translateY(-50%);
`;

export default () => (
  <Select>
    <Text>1 пассажир,&nbsp;</Text>
    <TextLight>эконом</TextLight>
    <ArrowSelect>
      <Icon icon="arrowSelect" />
    </ArrowSelect>
  </Select>
);
