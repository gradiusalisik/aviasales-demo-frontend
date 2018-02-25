import React, { Component } from "react";
import enhanceWithClickOutside from "react-click-outside";
import Icon from "../Icon";
import styled, { css } from "styled-components";
import media from "../utils/media";

const SelectStyled = styled.div`
  position: relative;

  ${props =>
    props.active &&
    css`
      ${Head} {
        box-shadow: 0 0 0 2px #ff8e41;
      }

      ${Body} {
        opacity: 1;
        transform: scaleY(1);
      }
    `};
`;

const Head = styled.button`
  padding: 16px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: none;
  overflow: hidden;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  transition: box-shadow 0.3s;

  ${media.md`
    border-bottom-left-radius: 0;
  `};

  ${media.xl`
    border-top-right-radius: 6px;
    cursor: pointer;
  `};
`;

const Body = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  opacity: 0;
  transform: scaleY(0);
  background-color: #fff;
  transform-origin: top;
  transition: opacity 0.2s, transform 0.2s;
`;

const Text = styled.span`
  font-size: 16px;
  white-space: nowrap;
  color: #4a4a4a;
`;

const TextLight = Text.extend`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #a0b0b9;
`;

const ArrowSelect = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 10px;
  height: 6px;
  transform: translateY(-50%);
`;

class Select extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState({
      active: !this.state.active
    });
  };

  handleClickOutside = () => {
    this.setState({
      active: false
    });
  };

  render() {
    return (
      <SelectStyled active={this.state.active}>
        <Head onClick={this.handleClick} type="button">
          <Text>1 пассажир,&nbsp;</Text>
          <TextLight>эконом</TextLight>
          <ArrowSelect>
            <Icon icon="arrowSelect" />
          </ArrowSelect>
        </Head>
        <Body>{this.props.children}</Body>
      </SelectStyled>
    );
  }
}

export default enhanceWithClickOutside(Select);
