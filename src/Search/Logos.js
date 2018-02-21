import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";

const List = styled.div`
  display: flex;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => (props.border ? "1px solid #ddd" : "none")};
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const Logo = styled.img`
  width: 99px;
  height: 36px;
`;

const LogoSmall = styled.img`
  width: 28px;
  height: 28px;
`;

const Logos = props => (
  <List>
    {props.list.map((logo, key) => (
      <Wrap border={logo.border} key={key}>
        {logo.image && <Logo src={logo.image} alt={logo.alt} />}
        {logo.smallImage && <LogoSmall src={logo.smallImage} alt={logo.alt} />}
      </Wrap>
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
