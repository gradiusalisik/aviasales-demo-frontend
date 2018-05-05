import React from "react";
import { PropTypes as pt } from "prop-types";
import { formatTimePath, formatTime } from "../../utils/format";
import { typeFly } from "../../utils/library.mock";
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
        {formatTime(props.dateFrom)}&nbsp;&mdash;&nbsp;{formatTime(
          props.dateTo
        )}&nbsp;
      </TimeBetween>
      <Time>
        <Icon icon="clock" />
        {formatTimePath(props.minutes)}
      </Time>
    </Info>
    <Type>{typeFly[props.type]}</Type>
  </Content>
);

InfoFly.propTypes = {
  reverse: pt.bool,
  dateFrom: pt.number,
  dateTo: pt.number,
  minutes: pt.number,
  type: pt.string
};

InfoFly.defaultProps = {};

export default InfoFly;
