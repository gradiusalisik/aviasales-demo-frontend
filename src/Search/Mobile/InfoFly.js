import React from "react";
import { PropTypes as pt } from "prop-types";
import Icon from "../../Icon";
import {
  Wrap,
  Info,
  CardIconWrap as IconWrap,
  Time,
  TimeBetween,
  Type
} from "./styled";

const InfoFly = props => (
  <Wrap>
    <Info>
      <IconWrap reverse={props.reverse}>
        <Icon icon="aero" />
      </IconWrap>
      <TimeBetween>
        {props.timeFrom}&nbsp;&mdash;&nbsp;{props.timeTo}&nbsp;
      </TimeBetween>
      <Time>
        <IconWrap>
          <Icon icon="clock" />
        </IconWrap>
        {props.hours && props.hours + " ч"}&nbsp;
        {props.minutes && props.minutes + " м"}
      </Time>
    </Info>
    <Type>{props.type}</Type>
  </Wrap>
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
