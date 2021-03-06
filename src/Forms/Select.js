import React, { Component } from 'react';
import { PropTypes as pt } from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import styled, { css } from 'styled-components';
import pluralize from 'pluralize-ru';
import Icon from '../Icon';
import media from '../utils/media';

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

  ${props =>
    props.kind === 'simple' &&
    css`
      ${media.md`
        border-bottom-right-radius: 0;
    `};

      ${media.xl`
        border-bottom-right-radius: 6px;
    `};
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

const IconSelect = styled(Icon)`
  transition: transform 0.3s;
  width: 100%;
  height: 100%;
`;

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

      ${IconSelect} {
        transform: rotate(180deg);
      }
    `};
`;

class Select extends Component {
  static propTypes = {
    quantity: pt.number,
    kind: pt.string,
    classFly: pt.string,
    children: pt.oneOfType([pt.node, pt.arrayOf(pt.node)]),
  };

  static defaultProps = {
    quantity: null,
    kind: '',
    classFly: '',
    children: null,
  };

  state = {
    active: false,
  };

  handleClick = () => {
    this.setState(state => ({
      active: !state.active,
    }));
  };

  handleClickOutside = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    return (
      <SelectStyled active={this.state.active}>
        <Head onClick={this.handleClick} type="button" kind={this.props.kind}>
          <Text>
            {pluralize(
              this.props.quantity,
              'нет пассажиров',
              '%d пассажир',
              '%d пассажира',
              '%d пассажиров',
            )}
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
