import React, { Component } from 'react';
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

export default class TimePath extends Component {
  static propTypes = {
    from: pt.string,
    to: pt.string,
    leftTime: pt.number,
    rightTime: pt.number,
    // range: pt.shape(),
  };

  static defaultProps = {
    from: '',
    to: '',
    leftTime: null,
    rightTime: null,
    // range: {
    //   defaultValue: [0, 100],
    // },
  };

  state = {
    leftTime: this.props.leftTime,
    rightTime: this.props.rightTime,
  };

  handleChangeRange = (value) => {
    this.setState({
      leftTime: value[0],
      rightTime: value[1],
    });
  };

  render() {
    return (
      <Path>
        <Places>
          <Title>{cities[this.props.from].name}</Title>
          <IconFly icon="aero" />
          <Title>{cities[this.props.to].name}</Title>
        </Places>
        <Info>
          <Dates>
            <Text>от {formatTime(this.state.leftTime)}</Text>
            <TextRight>до {formatTime(this.state.rightTime)}</TextRight>
          </Dates>
          <Range
            min={this.props.leftTime}
            max={this.props.rightTime}
            defaultValue={[this.props.leftTime, this.props.rightTime]}
            onChange={this.handleChangeRange}
          />
        </Info>
      </Path>
    );
  }
}
