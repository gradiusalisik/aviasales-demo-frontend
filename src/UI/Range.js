import React from "react";
import { PropTypes as pt } from "prop-types";
import { Range as RangeSlider } from "rc-slider";
import styled from "styled-components";
import "rc-slider/assets/index.css";

const RangeStyled = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 6px;
  display: block;
  width: 100%;

  .rc-slider-mark {
    .rc-slider-mark-text:last-child {
      padding-right: 27px;
    }
  }

  .rc-slider-handle {
    z-index: 2;
    margin-left: -7px;
    margin-top: -7px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    border: 1px solid #d6d9da;

    &::before {
      position: absolute;
      top: 4px;
      left: 4px;
      width: 9px;
      height: 9px;
      content: "";
      border-radius: 50%;
    }
  }

  .rc-slider-rail,
  .rc-slider-track,
  .rc-slider-step {
    height: 2px;
  }

  .rc-slider-track {
    z-index: 1;
    background-color: #00acde;
  }

  .rc-slider-step {
    background-color: #fafafa;
  }

  .rc-slider-dot {
    display: none;
  }
`;

const Range = props => (
  <RangeStyled>
    <RangeSlider
      min={props.min}
      max={props.max}
      step={props.step}
      defaultValue={props.defaultValue}
    />
  </RangeStyled>
);

Range.propTypes = {
  defaultValue: pt.arrayOf(pt.number),
  min: pt.number,
  max: pt.number,
  step: pt.number
};

Range.defaultProps = {
  defaultValue: []
};

export default Range;
