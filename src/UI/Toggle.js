import React from "react";
import styled from "styled-components";

const Toggle = styled.div``;

const Label = styled.label`
  position: relative;
  padding-left: 56px;
  line-height: 18px;
  font-size: 12px;
  cursor: pointer;
  color: #4a4a4a;
  transition: color 0.3s;

  &:hover {
    color: #00b0dd;
  }

  &:before {
    position: absolute;
    top: -4px;
    left: 0;
    display: block;
    width: 40px;
    height: 24px;
    content: "";
    background-color: #bccdd6;
    border-radius: 100px;
    box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.15);
    transition: background 0.15s ease-out;
  }

  &:after {
    position: absolute;
    top: -2px;
    left: 2px;
    display: block;
    width: 20px;
    height: 20px;
    content: "";
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
    transition: transform 0.15s ease-out;
  }
`;
const Input = styled.input`
  display: none;

  &:checked + ${Label}:before {
    background-color: #9ccc66;
  }

  &:checked + ${Label}:after {
    transform: translateX(17px);
  }
`;

export default props => (
  <Toggle>
    <Input type="checkbox" id={props.id} />
    <Label htmlFor={props.id}>{props.text}</Label>
  </Toggle>
);
