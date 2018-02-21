import React from "react";
import Icon from "../Icon";
import { HeaderStyled, Back, IconWrap } from "./styled";

const Header = props => (
  <HeaderStyled>
    <Back to="/">
      <IconWrap>
        <Icon icon="back" />
      </IconWrap>
    </Back>
  </HeaderStyled>
);

export default Header;
