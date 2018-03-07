import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

const CheckboxStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  position: relative;
  padding-left: 24px;
  display: block;
  width: 100%;
  font-size: 12px;
  line-height: 36px;
  user-select: none;
  color: #4a4a4a;
  cursor: pointer;

  &:before {
    position: absolute;
    top: 10px;
    left: 0;
    margin-top: -1px;
    width: 18px;
    height: 18px;
    content: '';
    background-color: transparent;
    box-sizing: border-box;
    border: 1px solid #a0b0b9;
    border-radius: 4px;
    transition: border-color 0.3s, background-color 0.3s;
  }

  &:after {
    position: absolute;
    top: 14px;
    left: 5px;
    z-index: 1;
    content: '';
    width: 9px;
    height: 7px;
    box-sizing: border-box;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOSA3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTEuNSAzLjVsMiAyIDQtNCIgc3Ryb2tlPSIjMENCMkUxIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=');
    background-repeat: no-repeat;
    opacity: 0;
    transform: translateY(-5px);
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out, -o-transform 0.2s ease-in-out;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Label}:after {
    opacity: 1;
    transform: translateY(0);
  }

  &:checked + ${Label}:before {
    border-color: #00ace2;
    background-color: #e1f8ff;
  }
`;

const Checkboxes = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
`;

const Price = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  font-size: 12px;
  color: #a0b0b9;
  line-height: 36px;
  transform: translateY(-50%);
`;

const Checkbox = props => (
  <CheckboxStyled>
    <Checkboxes>
      <Input type="checkbox" id={props.id} checked={props.checked} onChange={props.onChange} />
      <Label htmlFor={props.id}>{props.label}</Label>
    </Checkboxes>
    {!!props.price && (
      <Price>
        {' '}
        <FormattedNumber
          value={props.price}
          style={String('currency')}
          currency="RUB"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
      </Price>
    )}
  </CheckboxStyled>
);

Checkbox.propTypes = {
  id: pt.node,
  label: pt.string,
  price: pt.number,
  checked: pt.bool,
};

Checkbox.defaultProps = {
  id: null,
  label: '',
  price: null,
  checked: false,
};

export default Checkbox;
