import React from "react";
import { PropTypes as pt } from "prop-types";
import { delimiter } from "../utils/numberDelimiter";
import {
  Wrapper,
  PlaceImg,
  Info,
  Wrap,
  CityName,
  PriceInfo,
  CountryName,
  Date,
  WrapImage,
  ContentPlace,
  Flag
} from "./styled";

const Card = props => (
  <Wrapper>
    <WrapImage>
      <PlaceImg image={props.placeImg} alt={props.altPlaceImg} />
    </WrapImage>
    <Info>
      <ContentPlace>
        <Flag src={props.flag} alt={props.altFlag} />
        <Wrap>
          <CityName>{props.cityName}</CityName>
          <CountryName>{props.countryName}</CountryName>
        </Wrap>
      </ContentPlace>
      <Wrap>
        <PriceInfo>Найти от {delimiter(props.price)}&nbsp;₽</PriceInfo>
        <Date>{props.date}</Date>
      </Wrap>
    </Info>
  </Wrapper>
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
