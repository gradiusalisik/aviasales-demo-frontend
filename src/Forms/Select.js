import React, { Component } from "react";
import enhanceWithClickOutside from "react-click-outside";
import Icon from "../Icon";
import { withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import media from "../utils/media";
import decline from "../utils/decline";

const SelectStyled = styled.div`
  position: relative;
  min-width: 225px;

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

      ${IconSelect} {
        transform: rotate(180deg);
      }
    `};
`;

const Head = withRouter(styled.button`
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

    ${({ location }) =>
      location.pathname.includes("search") &&
      css`
        border-bottom-right-radius: 0;
      `}
  `};

  ${media.xl`
    border-top-right-radius: 6px;
    cursor: pointer;

    ${({ location }) =>
      location.pathname.includes("search") &&
      css`
        border-bottom-right-radius: 6px;
      `}
  `};
`);

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
  min-width: 57px;
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

const IconSelect = styled(Icon)`
  transition: transform 0.3s;
  width: 100%;
  height: 100%;
`;

class Select extends Component {
  state = {
    active: false
  };

  handleClick = () => {
    this.setState(state => ({
      active: !state.active
    }));
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
          <Text>
            {`${this.props.quantity} ${decline(this.props.quantity, [
              "пассажир",
              "пассажира",
              "пассажиров"
            ])}`}
            ,&nbsp;
          </Text>
          <TextLight>{this.props.classFly}</TextLight>
          <ArrowSelect>
            <IconSelect icon="arrowSelect" />
          </ArrowSelect>
        </Head>
        <Body>{this.props.children}</Body>
      </SelectStyled>
    );
  }
}

export default enhanceWithClickOutside(Select);
