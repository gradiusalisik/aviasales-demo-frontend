import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";
import Range from "../../UI/Range";
import Icon from "../../Icon";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

const TimeFlyStyled = styled.div`
  margin-top: -4px;
  padding-left: 16px;
  padding-right: 16px;

  &:not(:last-child) {
    margin-bottom: 33px;
  }
`;

const Places = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #4a4a4a;
`;
const Title = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: #323333;
`;

const IconFly = styled(Icon)`
  margin-right: 5px;
  margin-left: 5px;
  width: 14px;
  height: 14px;
`;

const Info = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Text = styled.span`
  font-size: 12px;
  color: #323333;
`;

const TextFly = Text.extend`
  margin-bottom: 6px;
  display: block;
`;

const TextRight = Text.extend`
  text-align: right;
`;

const Dates = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const formatDate = date =>
  format(date, "HH:mm, D MMM", { locale: ruLocale });

const TimeFly = props => (
  <TimeFlyStyled>
    <Places>
      <Title>{props.fromPlace}</Title>
      <IconFly icon="aero" />
      <Title>{props.toPlace}</Title>
    </Places>
    <Info>
      <TextFly>Вылет из {props.from}</TextFly>
      <Dates>
        <Text>c {formatDate(props.outLeftDate)}</Text>
        <TextRight>до {formatDate(props.outRightDate)}</TextRight>
      </Dates>
      <Range
        min={props.outRange.min}
        max={props.outRange.max}
        defaultValue={props.outRange.defaultValue}
      />
    </Info>
    <Info>
      <TextFly>Прибытие в {props.to}</TextFly>
      <Dates>
        <Text>c {formatDate(props.inLeftDate)}</Text>
        <TextRight>до {formatDate(props.inRightDate)}</TextRight>
      </Dates>
      <Range
        min={props.inRange.min}
        max={props.inRange.max}
        defaultValue={props.inRange.defaultValue}
      />
    </Info>
  </TimeFlyStyled>
);

TimeFly.propTypes = {
  fromPlace: pt.string,
  toPlace: pt.string,
  from: pt.string,
  outLeftDate: pt.number,
  outRightDate: pt.number,
  outRange: pt.object,
  to: pt.string,
  inLeftDate: pt.number,
  inRightDate: pt.number,
  inRange: pt.object
};

TimeFly.defaultProps = {
  outRange: {
    min: 0,
    max: 20,
    defaultValue: [0, 20]
  },
  inRange: {
    min: 0,
    max: 20,
    defaultValue: [0, 20]
  }
};

export default TimeFly;
