import React from 'react';
import styled from 'styled-components';
import airportsRu from '../utils/airportsRu.mock';

const ChoiceAirports = styled.div`
  padding: 16px;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`;

const Content = styled.div`
  padding: 15px 16px;
  display: flex;
  align-items: center;
  background-color: #fff;

  &:nth-child(odd) {
    background-color: #f4f4f4;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const City = styled.span`
  font-size: 14px;
  color: #4a4a4a;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Country = City.extend`
  color: #a0b0b9;
`;

const Text = styled.span`
  font-size: 12px;
  text-align: right;
  color: #a0b0b9;
`;

export default () => (
  <ChoiceAirports>
    {airportsRu.map(content => (
      <Content>
        <Info>
          <City>{content.city}</City>
          <Country>{content.country}</Country>
        </Info>
        <Text>{content.code}</Text>
      </Content>
    ))}
  </ChoiceAirports>
);
