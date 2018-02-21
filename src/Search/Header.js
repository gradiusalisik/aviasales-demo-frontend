import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../Icon";
import {
  HeaderStyled,
  Back,
  IconWrap,
  InfoFly,
  Place,
  SubInfo,
  Date,
  Passenger,
  Currency,
  WrapInfo
} from "./styled";

const Header = props => (
  <HeaderStyled>
    <WrapInfo>
      <Back to="/">
        <IconWrap>
          <Icon icon="back" />
        </IconWrap>
      </Back>
      <InfoFly>
        <Place>
          {props.from}&nbsp;&mdash;&nbsp;{props.to}
        </Place>
        <SubInfo>
          <Date>
            {props.dateTo}&nbsp;&mdash;&nbsp;{props.dateFrom},&nbsp;
          </Date>
          <Passenger>{props.passenger}</Passenger>
        </SubInfo>
      </InfoFly>
    </WrapInfo>
    <Currency>{props.currency}</Currency>
  </HeaderStyled>
);

Header.propTypes = {
  from: pt.string,
  to: pt.string,
  dateTo: pt.string,
  dateFrom: pt.string,
  passenger: pt.string,
  currency: pt.string
};

Header.defaultProps = {
  from: "Москва",
  to: "Барселона",
  dateTo: "24 фев",
  dateFrom: "3 март",
  passenger: "1 пассажир",
  currency: "rub"
};

export default Header;
