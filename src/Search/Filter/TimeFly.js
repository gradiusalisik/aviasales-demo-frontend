import React, { Component } from 'react';
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

export default class TimeFly extends Component {
  static propTypes = {
    from: pt.string,
    outLeftDate: pt.number,
    outRightDate: pt.number,
    // outRange: pt.shape(),
    // inRange: pt.shape(),
    to: pt.string,
    inLeftDate: pt.number,
    inRightDate: pt.number,
  };

  static defaultProps = {
    from: '',
    outLeftDate: null,
    outRightDate: null,
    to: '',
    inLeftDate: null,
    inRightDate: null,
    // outRange: {
    //   defaultValue: [0, 100],
    // },
    // inRange: {
    //   defaultValue: [0, 100],
    // },
  };

  state = {
    out: {
      leftDate: this.props.outLeftDate,
      rightDate: this.props.outRightDate,
    },
    in: {
      leftDate: this.props.inLeftDate,
      rightDate: this.props.inRightDate,
    },
  };

  handleChangeRange = place => (value) => {
    this.setState({
      [place]: {
        leftDate: value[0],
        rightDate: value[1],
      },
    });
  };

  render() {
    return (
      <TimeFlyStyled>
        <Places>
          <Title>{cities[this.props.from].name}</Title>
          <IconFly icon="aero" />
          <Title>{cities[this.props.to].name}</Title>
        </Places>
        <Info>
          <TextFly>Вылет из {cities[this.props.from].cases.ro}</TextFly>
          <Dates>
            <Text>c {formatDate(this.state.out.leftDate)}</Text>
            <TextRight>до {formatDate(this.state.out.rightDate)}</TextRight>
          </Dates>
          <Range
            min={this.props.outLeftDate}
            max={this.props.outRightDate}
            defaultValue={[this.props.outLeftDate, this.props.outRightDate]}
            onChange={this.handleChangeRange('out')}
          />
        </Info>
        <Info>
          <TextFly>Прибытие {cities[this.props.to].cases.vi}</TextFly>
          <Dates>
            <Text>c {formatDate(this.state.in.leftDate)}</Text>
            <TextRight>до {formatDate(this.state.in.rightDate)}</TextRight>
          </Dates>
          <Range
            min={this.props.inLeftDate}
            max={this.props.inRightDate}
            defaultValue={[this.props.inLeftDate, this.props.inRightDate]}
            onChange={this.handleChangeRange('in')}
          />
        </Info>
      </TimeFlyStyled>
    );
  }
}
