import React from 'react';
import { PropTypes as pt } from 'prop-types';
import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';
import styled from 'styled-components';
import Range from '../../UI/Range';
import Icon from '../../Icon';
import { cities } from '../../utils/library.mock';

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

const formatDate = date => format(date, 'HH:mm, D MMM', { locale: ruLocale });

const TimeFly = props => (
  <TimeFlyStyled>
    <Places>
      <Title>{cities[props.from].name}</Title>
      <IconFly icon="aero" />
      <Title>{cities[props.to].name}</Title>
    </Places>
    <Info>
      <TextFly>Вылет из {cities[props.from].cases.ro}</TextFly>
      <Dates>
        <Text>c {formatDate(props.outLeftDate)}</Text>
        <TextRight>до {formatDate(props.outRightDate)}</TextRight>
      </Dates>
      <Range
        min={props.minOut}
        max={props.maxOut}
        defaultValue={[props.minOut, props.maxOut]}
        onChange={props.handleChangeRangeOut}
      />
    </Info>
    <Info>
      <TextFly>Прибытие {cities[props.to].cases.vi}</TextFly>
      <Dates>
        <Text>c {formatDate(props.inLeftDate)}</Text>
        <TextRight>до {formatDate(props.inRightDate)}</TextRight>
      </Dates>
      <Range
        min={props.minIn}
        max={props.maxIn}
        defaultValue={[props.minIn, props.maxIn]}
        onChange={props.handleChangeRangeIn}
      />
    </Info>
  </TimeFlyStyled>
);

TimeFly.propTypes = {
  from: pt.string,
  outLeftDate: pt.number,
  outRightDate: pt.number,
  minOut: pt.number,
  maxOut: pt.number,
  to: pt.string,
  inLeftDate: pt.number,
  inRightDate: pt.number,
  minIn: pt.number,
  maxIn: pt.number,
};

TimeFly.defaultProps = {
  from: '',
  outLeftDate: null,
  outRightDate: null,
  minOut: null,
  maxOut: null,
  to: '',
  inLeftDate: null,
  inRightDate: null,
  minIn: null,
  maxIn: null,
};

export default TimeFly;
