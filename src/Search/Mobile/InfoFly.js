import React from "react";
import { PropTypes as pt } from "prop-types";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import differenceInMilliseconds from "date-fns/difference_in_milliseconds";
import {
  Content,
  Info,
  CardIcon as Icon,
  Time,
  TimeBetween,
  Type
} from "./styled";

const formatTime = date => format(date, "HH:mm", { locale: ruLocale });

const formatDifferent = (from, to) => {
  const minutes = differenceInMilliseconds(to, from) / 60000;
  const hours = ((minutes / 60) ^ 0) + "ч ";
  const min = minutes % 60 !== 0 ? minutes % 60 + "м" : "";
  return `${hours} ${min}`;
};

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
        {formatDifferent(props.dateFrom, props.dateTo)}
      </Time>
    </Info>
    <Type>{props.type}</Type>
  </Content>
);

InfoFly.propTypes = {
  reverse: pt.bool,
  dateFrom: pt.number,
  dateTo: pt.number,
  hours: pt.number,
  minutes: pt.number,
  type: pt.string
};

InfoFly.defaultProps = {};

export default InfoFly;
