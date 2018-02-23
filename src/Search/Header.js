import React from "react";
import { PropTypes as pt } from "prop-types";
import { ButtonWhiteTransparent } from "../UI/Button";
import {
  HeaderStyled,
  Back,
  BackLink,
  InfoFly,
  Place,
  SubInfo,
  Date,
  Passenger,
  Info,
  Logos,
  Logo,
  Text
} from "./styled";

const Header = props => (
  <HeaderStyled>
    <Logos>
      <Logo icon="logo" />
      <Text>aviasales</Text>
    </Logos>
    <Info>
      <BackLink to="/">
        <Back icon="back" />
      </BackLink>
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
    </Info>
    <ButtonWhiteTransparent>{props.currency}</ButtonWhiteTransparent>
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
