import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../Icon";
import { ButtonSearchMain } from "../UI/Button";
import styled from "styled-components";

const Content = styled.div`
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
  <ButtonSearchMain type={props.type || "button"}>
    <Content>
      <Text>{props.text}</Text>
      {props.icon && (
        <PlaneImg>
          <Icon icon={props.icon} />
        </PlaneImg>
      )}
    </Content>
  </ButtonSearchMain>
);

Button.propTypes = {
  type: pt.string,
  text: pt.string,
  icon: pt.string
};

export default Button;
