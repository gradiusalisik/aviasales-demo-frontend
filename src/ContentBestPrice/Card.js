import React from "react";
import { PropTypes as pt } from "prop-types";
import { delimiter } from "../utils/numberDelimiter";
import {
  Wrapper,
  Head,
  Flag,
  Wrap,
  CityName,
  CountryName,
  Body,
  Info,
  FromPlace,
  Price
} from "./styled";

const Card = props => (
  <Wrapper>
    <Head>
      <Flag src={props.flag} alt={props.altFlag} />
      <Wrap>
        <CityName>{props.cityName}</CityName>
        <CountryName>{props.countryName}</CountryName>
      </Wrap>
    </Head>
    <Body>
      {props.list.map((info, key) => (
        <Info key={key}>
          <FromPlace href={info.fromHref || "#"}>Из {info.from}</FromPlace>
          <Price href={info.toHref || "#"}>
            от {delimiter(info.price)}&nbsp;₽
          </Price>
        </Info>
      ))}
    </Body>
  </Wrapper>
);

Card.propTypes = {
  flag: pt.string,
  altFlag: pt.string,
  cityName: pt.string,
  countryName: pt.string,
  list: pt.array
};

export default Card;
