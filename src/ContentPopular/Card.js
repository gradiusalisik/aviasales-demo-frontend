import React from "react";
import { PropTypes as pt } from "prop-types";
import { FormattedNumber } from "react-intl";
import { cities, countries } from "../utils/library.mock";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import {
  Container,
  PlaceImg,
  Info,
  Data,
  CityName,
  PriceInfo,
  CountryName,
  Date,
  Picture,
  ContentPlace,
  Flag
} from "./styled";

const formatDate = date => format(date, "D MMMM", { locale: ruLocale });

const Card = props => (
  <Container>
    <Picture>
      <PlaceImg image={props.placeImg} alt={props.altPlaceImg} />
    </Picture>
    <Info>
      <ContentPlace>
        <Flag src={props.flag} alt={props.altFlag} />
        <Data>
          <CityName>{cities[props.city].name}</CityName>
          <CountryName>{countries[props.country].name}</CountryName>
        </Data>
      </ContentPlace>
      <Data>
        <PriceInfo>
          Найти от{" "}
          <FormattedNumber
            value={props.price}
            style={`currency`}
            currency="RUB"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </PriceInfo>
        <Date>{formatDate(props.date)}</Date>
      </Data>
    </Info>
  </Container>
);

Card.propTypes = {
  placeImg: pt.string,
  altPlaceImage: pt.string,
  altFlag: pt.string,
  city: pt.string,
  price: pt.number,
  country: pt.string,
  date: pt.number,
  flag: pt.string
};

export default Card;
