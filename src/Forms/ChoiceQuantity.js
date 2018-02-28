import React from "react";
import styled from "styled-components";
import Counter from "../UI/Counter";
import Checkbox from "../UI/Checkbox";

const ChoiceQuantity = styled.div`
  padding: 16px;
  box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 24px;
  }
`;

const Text = styled.span`
  display: block;
  font-size: 14px;
  color: #4a4a4a;
`;

const SubText = styled.span`
  margin-top: 3px;
  font-size: 12px;
  color: #a0b0b9;
`;
const Checkboxes = styled.div`
  padding-top: 14px;
  border-top: 1px solid #dbdbdb;
`;

const Info = styled.div``;

export default props => (
  <ChoiceQuantity>
    <Content>
      <Text>Взрослые</Text>
      <Counter
        disabled={props.disabled}
        max={9}
        value={1}
        onChangeCounter={props.onChangeCounter}
      />
    </Content>
    <Content>
      <Text>Дети до 12 лет</Text>
      <Counter
        disabled={props.disabled}
        max={9}
        onChangeCounter={props.onChangeCounter}
      />
    </Content>
    <Content>
      <Info>
        <Text>Дети до 2 лет</Text>
        <SubText>Без места</SubText>
      </Info>
      <Counter
        disabled={props.disabled}
        max={1}
        onChangeCounter={props.onChangeCounter}
      />
    </Content>
    <Checkboxes>
      <Checkbox
        label="Бизнес-класс"
        id="business"
        onChange={props.onChangeCheckbox}
      />
    </Checkboxes>
  </ChoiceQuantity>
);
