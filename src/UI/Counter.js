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
    value: this.props.value || 0
  };

  handleClick = delta => () => {
    const { min, max } = Math;
    this.setState((state, props) => ({
      value: min(max(0, state.value + delta), props.max)
    }));
    this.props.onChangeCounter(delta);
  };

  render() {
    const { value } = this.state;
    return (
      <CounterStyled>
        <Decrement
          disabled={value === 0}
          onClick={this.handleClick(-1)}
          type="button"
        >
          <IconDecrement icon="decrement" />
        </Decrement>
        <Count>{this.state.value}</Count>
        <Increment
          disabled={value === this.props.max}
          onClick={this.handleClick(1)}
          type="button"
        >
          <IconIncrement icon="increment" />
        </Increment>
      </CounterStyled>
    );
  }
}
