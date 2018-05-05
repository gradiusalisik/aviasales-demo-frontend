import React from "react";
import { PropTypes as pt } from "prop-types";
import styled, { css } from "styled-components";

const List = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 8px;
  }

  ${props =>
    props.smallImage &&
    css`
      padding: 4px;
      border: 1px solid #ddd;

      ${Logo} {
        width: 28px;
        height: 28px;
      }
    `};
`;

const Logo = styled.img`
  width: 99px;
  height: 36px;
`;

const Logos = props => (
  <List>
    {props.list.map((logo, key) => (
      <Content smallImage={logo.smallImage} key={key}>
        <Logo src={logo.image} alt={logo.alt} />
      </Content>
    ))}
  </List>
);

Logos.propTypes = {
  list: pt.array
};

Logos.defaultProps = {
  list: []
};

export default Logos;
