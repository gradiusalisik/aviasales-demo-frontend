import React from "react";
import { PropTypes as pt } from "prop-types";
import { FormattedNumber } from "react-intl";
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

const Card = props => (
  <Container>
    <Picture>
      <PlaceImg image={props.placeImg} alt={props.altPlaceImg} />
    </Picture>
    <Info>
      <ContentPlace>
        <Flag src={props.flag} alt={props.altFlag} />
        <Data>
          <CityName>{props.cityName}</CityName>
          <CountryName>{props.countryName}</CountryName>
        </Data>
      </ContentPlace>
      <Data>
        <PriceInfo>
          Найти от <FormattedNumber value={props.price} />&nbsp;₽
        </PriceInfo>
        <Date>{props.date}</Date>
      </Data>
    </Info>
  </Container>
);

Card.propTypes = {
  placeImg: pt.string,
  altPlaceImage: pt.string,
  altFlag: pt.string,
  cityName: pt.string,
  price: pt.string,
  countryName: pt.string,
  date: pt.string,
  flag: pt.string
};

export default Card;
