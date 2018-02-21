import React from "react";
import { PropTypes as pt } from "prop-types";
import Logos from "./Logos";
import Icon from "../Icon";
import { delimiter } from "../utils/numberDelimiter";
import {
  Card as CardStyled,
  Head,
  PriceCard as Price,
  Body,
  Wrap,
  Info,
  CardIconWrap as IconWrap,
  Time,
  TimeBetween,
  Type
} from "./styled";

export const Card = props => (
  <CardStyled>
    <Head>
      <Price>{delimiter(props.price)}&nbsp;₽</Price>
      <Logos list={props.listLogo} />
    </Head>
    <Body>
      {props.listInfo.map((info, key) => (
        <Wrap key={key}>
          <Info>
            <IconWrap reverse={info.reverse}>
              <Icon icon="aero" />
            </IconWrap>
            <TimeBetween>
              {info.timeFrom}&nbsp;&mdash;&nbsp;{info.timeTo}&nbsp;
            </TimeBetween>
            <Time>
              <IconWrap>
                <Icon icon="clock" />
              </IconWrap>
              {info.time}
            </Time>
          </Info>
          <Type>{info.type}</Type>
        </Wrap>
      ))}
    </Body>
  </CardStyled>
);

Card.propTypes = {
  price: pt.string,
  listLogo: pt.array,
  listInfo: pt.array
};

Card.defaultProps = {
  price: "0",
  listLogo: [],
  listInfo: []
};

export default Card;
