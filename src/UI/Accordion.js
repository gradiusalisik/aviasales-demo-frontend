import React from 'react';
import { PropTypes as pt } from 'prop-types';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import Icon from '../Icon';

const Accordions = styled.div`
  .Collapsible {
    position: relative;
    border-bottom: 1px solid #dddddd;

    &__contentInner {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`;

const Head = styled.button`
  position: relative;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  transiton: background-color 0.3s;

  &:hover {
    background-color: #f1fcff;
  }
`;

const Arrow = styled(Icon)`
  margin-right: 6px;
  width: 10px;
  height: 5px;
  color: #a0b0b9;
  transform: rotate(0deg);
  transition: transform 0.2s;

  .is-closed & {
    transform: rotate(-90deg);
  }
`;

const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #5b5b5c;
`;

const Quantity = Text.extend`
  margin-left: 8px;
  color: #a0b0b9;
`;

const Header = props => (
  <Head>
    <Arrow icon="arrowSelect" />
    <Text>{props.text}</Text>
    {!!props.quantity && <Quantity>{props.quantity}</Quantity>}
  </Head>
);

const Accordion = props => (
  <Accordions>
    <Collapsible
      trigger={<Header text={props.text} quantity={props.quantity} />}
      transitionTime={200}
      open={props.open}
    >
      {props.children}
    </Collapsible>
  </Accordions>
);

Accordion.propTypes = {
  open: pt.bool,
  text: pt.string,
  quantity: pt.number,
  children: pt.node,
};

Accordion.defaultProps = {
  open: false,
  text: '',
  quantity: null,
  children: null,
};

export default Accordion;
