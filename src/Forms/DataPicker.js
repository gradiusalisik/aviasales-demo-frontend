import React from "react";
import Icon from "../Icon";
import styled from "styled-components";
import media from "../utils/media";

const Picker = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  position: relative;
  padding: 16px;
  width: calc((100% - 2px) / 2);
  height: 100%;
  text-align: left;
  background-color: #fff;
  border: none;

  &:first-child {
    margin-right: 2px;
  }

  ${media.xl`
    min-width: 180px;
  `};
`;

const Text = styled.span`
  font-size: 16px;
  color: #a0b0b9;
`;

const CalendarIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 17px;
  height: 20px;
  color: #1BA6D2;
  transform: translateY(-50%);
`;

export default () => (
  <Picker>
    <Button type="button">
      <Text>Туда</Text>
      <CalendarIcon>
        <Icon icon="calendar" />
      </CalendarIcon>
    </Button>
    <Button type="button">
      <Text>Обратно</Text>
      <CalendarIcon>
        <Icon icon="calendar" />
      </CalendarIcon>
    </Button>
  </Picker>
);
