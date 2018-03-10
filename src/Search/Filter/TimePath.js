import React from 'react';
import { PropTypes as pt } from 'prop-types';
import styled from 'styled-components';
import Range from '../../UI/Range';
import Icon from '../../Icon';
import { cities } from '../../utils/library.mock';

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

const formatTime = minutes => `${Math.floor(minutes / 60)}ч ${minutes % 60}м`;

const TimePath = props => (
  <Path>
    {cities[props.from] && (
      <Places>
        <Title>{cities[props.from].name}</Title>
        <IconFly icon="aero" />
        <Title>{cities[props.to].name}</Title>
      </Places>
    )}
    <Info>
      <Dates>
        <Text>от {formatTime(props.beginTime)}</Text>
        <TextRight>до {formatTime(props.endTime)}</TextRight>
      </Dates>
      <Range
        min={props.min}
        max={props.max}
        defaultValue={[props.min, props.max]}
        value={[props.beginTime, props.endTime]}
        onChange={props.handleChangeRange}
      />
    </Info>
  </Path>
);

TimePath.propTypes = {
  from: pt.string,
  to: pt.string,
  beginTime: pt.number,
  endTime: pt.number,
  min: pt.number,
  max: pt.number,
  handleChangeRange: pt.func,
};

TimePath.defaultProps = {
  from: '',
  to: '',
  beginTime: null,
  endTime: null,
  min: null,
  max: null,
  handleChangeRange: () => {},
};

export default TimePath;
