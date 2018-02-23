import React from "react";
import { PropTypes as pt } from "prop-types";
import { FormattedNumber } from "react-intl";
import Button from "./Button";
import {
  Wrapper,
  Head,
  Body,
  BodyWrap,
  Text,
  Logo,
  Wrap,
  LogoBrend,
  WrapInfo,
  Price,
  DateEnd,
  DescriptionPrice,
  Description
} from "./styled";

const Card = props => (
  <Wrapper>
    <Head>
      <Text title={props.text}>{props.text}</Text>
      {props.logo && <Logo src={props.logo} alt="logo" />}
    </Head>
    <Body>
      <BodyWrap>
        <Wrap>
          <LogoBrend src={props.logoBrend} alt={props.altLogoBrend} />
          <WrapInfo>
            <Price>
              <DescriptionPrice>от</DescriptionPrice>
              <FormattedNumber value={props.price} />&nbsp;₽
            </Price>
            <DateEnd>{props.dateEnd}</DateEnd>
          </WrapInfo>
        </Wrap>
        <Description>{props.description}</Description>
      </BodyWrap>
      <Button text="Узнать подробности" />
    </Body>
  </Wrapper>
);

Card.propTypes = {
  text: pt.string,
  logo: pt.string,
  logoBrend: pt.string,
  altLogoBrend: pt.string,
  price: pt.string,
  dateEnd: pt.string,
  description: pt.node
};

export default Card;
