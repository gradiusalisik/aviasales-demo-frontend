import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";
import Range from "../../UI/Range";
import Icon from "../../Icon";

const Path = styled.div`
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

const TextRight = Text.extend`
  text-align: right;
`;

const Dates = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const formatTime = minutes => ((minutes / 60) ^ 0) + "ч " + minutes % 60 + "м";

const TimePath = props => (
  <Path>
    <Places>
      <Title>{props.fromPlace}</Title>
      <IconFly icon="aero" />
      <Title>{props.toPlace}</Title>
    </Places>
    <Info>
      <Dates>
        <Text>от {formatTime(props.leftTime)}</Text>
        <TextRight>до {formatTime(props.rightTime)}</TextRight>
      </Dates>
      <Range
        min={props.range.min}
        max={props.range.max}
        defaultValue={props.range.defaultValue}
      />
    </Info>
  </Path>
);

TimePath.propTypes = {
  fromPlace: pt.string,
  toPlace: pt.string,
  leftTime: pt.number,
  rightTime: pt.number,
  range: pt.object
};

TimePath.defaultProps = {
  range: {
    min: 0,
    max: 20,
    defaultValue: [0, 20]
  }
};

export default TimePath;
