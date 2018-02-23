import React from "react";
import { PropTypes as pt } from "prop-types";
import {
  Content,
  Info,
  CardIcon as Icon,
  Time,
  TimeBetween,
  Type
} from "./styled";

const InfoFly = props => (
  <Content>
    <Info>
      <Icon reverse={props.reverse} icon="aero" />
      <TimeBetween>
        {props.timeFrom}&nbsp;&mdash;&nbsp;{props.timeTo}&nbsp;
      </TimeBetween>
      <Time>
        <Icon icon="clock" />
        {props.hours && props.hours + " ч"}&nbsp;
        {props.minutes && props.minutes + " м"}
      </Time>
    </Info>
    <Type>{props.type}</Type>
  </Content>
);

InfoFly.propTypes = {
  reverse: pt.bool,
  timeFrom: pt.string,
  timeTo: pt.string,
  hours: pt.number,
  minutes: pt.number,
  type: pt.string
};

InfoFly.defaultProps = {};

export default InfoFly;
