import React from "react";
import { PropTypes as pt } from "prop-types";
import { FormattedNumber } from "react-intl";
import {
  Container,
  Head,
  Flag,
  Names,
  CityName,
  CountryName,
  Body,
  Info,
  FromPlace,
  Price
} from "./styled";

const Card = props => (
  <Container>
    <Head>
      <Flag src={props.flag} alt={props.altFlag} />
      <Names>
        <CityName>{props.cityName}</CityName>
        <CountryName>{props.countryName}</CountryName>
      </Names>
    </Head>
    <Body>
      {props.list.map((info, key) => (
        <Info key={key}>
          <FromPlace href={info.fromHref || "#"}>Из {info.from}</FromPlace>
          <Price href={info.toHref || "#"}>
            от <FormattedNumber value={info.price} />&nbsp;₽
          </Price>
        </Info>
      ))}
    </Body>
  </Container>
);

Card.propTypes = {
  flag: pt.string,
  altFlag: pt.string,
  cityName: pt.string,
  countryName: pt.string,
  list: pt.array
};

export default Card;
