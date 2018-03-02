import React from "react";
import { PropTypes as pt } from "prop-types";
import { ButtonWhiteTransparent } from "../UI/Button";
import { cities } from "../utils/library.mock";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import pluralize from "pluralize-ru";
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

const formatDate = date => format(date, "D MMM", { locale: ruLocale });

const Header = props => (
  <HeaderStyled>
    <Logos to="/">
      <Logo icon="logo" />
      <Text>aviasales</Text>
    </Logos>
    <Info>
      <BackLink to="/">
        <Back icon="back" />
      </BackLink>
      <InfoFly>
        <Place>
          {cities[props.from].name}&nbsp;&mdash;&nbsp;{cities[props.to].name}
        </Place>
        <SubInfo>
          <Date>
            {formatDate(props.dateTo)}&nbsp;&mdash;&nbsp;{formatDate(
              props.dateFrom
            )},&nbsp;
          </Date>
          <Passenger>{`${pluralize(
            props.passenger,
            "нет пассажиров",
            "%d пассажир",
            "%d пассажира",
            "%d пассажиров"
          )}`}</Passenger>
        </SubInfo>
      </InfoFly>
    </Info>
    <ButtonWhiteTransparent>{props.currency}</ButtonWhiteTransparent>
  </HeaderStyled>
);

Header.propTypes = {
  from: pt.string,
  to: pt.string,
  dateTo: pt.number,
  dateFrom: pt.number,
  passenger: pt.number,
  currency: pt.string
};

Header.defaultProps = {
  from: "MOW",
  to: "BCN",
  dateTo: 1519423200000,
  dateFrom: 1520028000000,
  passenger: 1,
  currency: "rub"
};

export default Header;
