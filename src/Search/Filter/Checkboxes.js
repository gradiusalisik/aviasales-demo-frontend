import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";
import Checkbox from "../../UI/Checkbox";

const CheckboxesStyled = styled.div`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Title = styled.h3`
  padding-left: 16px;
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #323333;
`;

const Content = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  background-color: transparent;
  transiton: background-color 0.3s;

  &:hover {
    background-color: #f1fcff;
  }
`;

const Checkboxes = props => (
  <CheckboxesStyled>
    {!!props.title && <Title>{props.title}</Title>}
    {props.list.map((checkbox, key) => (
      <Content key={checkbox.id}>
        <Checkbox
          id={checkbox.id}
          label={checkbox.label}
          price={checkbox.price}
          checked={checkbox.checked}
        />
      </Content>
    ))}
  </CheckboxesStyled>
);

Checkboxes.propTypes = {
  list: pt.array
};

export default Checkboxes;
