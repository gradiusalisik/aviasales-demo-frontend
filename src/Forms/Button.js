import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../Icon";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  font-size: 24px;
  font-weight: 900;
  border-radius: 4px;
  color: #fff;
  background-color: #ff9241;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffa353;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span``;

const PlaneImg = styled.div`
  margin-left: 16px;
  width: 26px;
  height: 24px;
`;

const Button = props => (
  <ButtonStyled type={props.type || "button"}>
    <ButtonWrap>
      <Text>{props.text}</Text>
      <PlaneImg>
        <Icon icon={props.icon} />
      </PlaneImg>
    </ButtonWrap>
  </ButtonStyled>
);

Button.propTypes = {
  type: pt.string,
  text: pt.string,
  icon: pt.string
};

export default Button;
