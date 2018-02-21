import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";
import media from "../utils/media";

const ButtonStyled = styled.a`
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  border-radius: 3px;
  text-align: center;
  color: #d93533;
  background-color: transparent;
  border: 2px solid #cd1f27;
  transition: border 0.3s, color 0.3s;

  ${media.xl`
    &:hover {
      color: #ff9d1b;
      border-color: #ff9d1b;
    }
  `};
`;

const Text = styled.span``;

const Button = props => (
  <ButtonStyled href={props.href}>
    <Text>{props.text}</Text>
  </ButtonStyled>
);

Button.propTypes = {
  text: pt.string,
  href: pt.string
};

Button.defaultProps = {
  href: "#"
};

export default Button;
