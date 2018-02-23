import React from "react";
import styled, { css } from "styled-components";
import { PropTypes as pt } from "prop-types";
import Icon from "../../Icon";

const BaggageStyled = styled.div`
  margin-bottom: 15px;
`;

const Types = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Bag = styled.div`
  position: relative;
  width: 19px;
  height: 20px;
  color: ${props => props.color || "#9AB0B9"};

  &:not(:last-child) {
    margin-right: 4px;
  }

  ${props =>
    props.type === "suitcase" &&
    css`
      width: 17px;
      height: 23px;

      ${Text} {
        bottom: 5px;
      }
    `};

  ${props =>
    props.disabled &&
    css`
      color: #dadada;
    `};
`;

const Text = styled.span`
  position: absolute;
  bottom: 3px;
  left: 50%;
  font-size: 10px;
  font-weight: 700;
  color: currentColor;
  transform: translateX(-50%);
`;

const NoBaggage = styled.p`
  font-size: 10px;
  text-align: center;
  color: #9ab0b9;
`;

const Price = styled(NoBaggage)`
  font-weight: 500;
  color: #66d295;
`;

const Baggage = props => (
  <BaggageStyled>
    <Types>
      {props.list.map((bag, key) => (
        <Bag
          key={key}
          type={bag.type}
          color={bag.color}
          disabled={bag.disabled}
        >
          <Icon icon={bag.icon} />
          {bag.kg && <Text>{bag.kg}</Text>}
        </Bag>
      ))}
    </Types>
    {props.noBaggage && <NoBaggage>Нет багажа</NoBaggage>}
    {props.price && <Price>+&nbsp;{props.price}&nbsp;₽</Price>}
  </BaggageStyled>
);

Baggage.propTypes = {
  noBaggage: pt.bool,
  price: pt.node,
  list: pt.array
};

export default Baggage;
