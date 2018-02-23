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
  margin-bottom: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #323333;
`;

const Checkboxes = props => (
  <CheckboxesStyled>
    {!!props.title && <Title>{props.title}</Title>}
    {props.list.map((checkbox, key) => (
      <Checkbox
        key={checkbox.id}
        id={checkbox.id}
        label={checkbox.label}
        price={checkbox.price}
        checked={checkbox.checked}
      />
    ))}
  </CheckboxesStyled>
);

Checkboxes.propTypes = {
  list: pt.array
};

export default Checkboxes;
