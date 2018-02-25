import React, { Component } from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";

const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  width: 72px;
  height: 32px;
  user-select: none;
`;

const Increment = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #dbdbdb;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border: 1px solid #dbdbdb;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #00b8e9;
    color: #00b8e9;
  }

  ${props =>
    props.disabled &&
    css`
      cursor: default;
      pointer-events: none;
      color: #e1e1e1;
      border-color: #e1e1e1;
    `};
`;

const Decrement = Increment.extend`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

const IconIncrement = styled(Icon)`
  width: 10px;
  height: 10px;
`;
const IconDecrement = styled(Icon)`
  width: 10px;
  height: 2px;
`;

const Count = styled.div`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  width: 24px;
  height: 100%;
  color: #4a4a4a;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`;

export default class Counter extends Component {
  state = {
    value: 0
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  handleDecrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  render() {
    const disabledIncrement = this.state.value >= this.props.max;
    const disabledDecrement = this.state.value < 1;
    return (
      <CounterStyled>
        <Decrement disabled={disabledDecrement} onClick={this.handleDecrement}>
          <IconDecrement icon="decrement" />
        </Decrement>
        <Count>{this.state.value}</Count>
        <Increment disabled={disabledIncrement} onClick={this.handleIncrement}>
          <IconIncrement icon="increment" />
        </Increment>
      </CounterStyled>
    );
  }
}
