import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";
import from from "./images/from.svg";
import to from "./images/to.svg";

const Path = styled.div`
  padding-top: 5px;
`;

const TotalTime = styled.span`
  display: block;
  font-size: 12px;
  text-align: center;
  color: #a0b0b9;
`;

const Stops = styled.div`
  position: relative;
  padding-top: 11px;
  display: flex;
  justify-content: space-between;
`;

const PlaneFrom = styled.div`
  position: relative;
  z-index: 1;
  padding-top: 27px;
  display: flex;
`;

const PlaneTo = PlaneFrom.extend`
  text-align: right;
`;

const PathFrom = styled.div`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  color: #4a4a4a;

  &:before {
    position: absolute;
    top: -22px;
    left: -3px;
    display: block;
    width: 16px;
    height: 8px;
    content: "";
    background-image: url("${from}");
    background-repeat: no-repeat;
  }
`;

const PathTo = PathFrom.extend`
  &:before {
    width: 16px;
    height: 13px;
    top: -24px;
    right: -2px;
    left: auto;
    background-image: url("${to}");
  }
`;

const DotLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1px solid #8c9497;
  box-shadow: 0 0 0 2px #fff;
  background: #fff;
`;

const DotRight = DotLeft.extend`
  left: auto;
  right: 0;
`;

const PathLine = styled.div`
  position: absolute;
  top: 16px;
  left: 10px;
  right: 10px;
  display: block;
  height: 1px;
  background: #A9B4B9;
}
`;

const Scoreboard = props => (
  <Path>
    <TotalTime>
      Всего:&nbsp;{props.hours && props.hours + "ч"}&nbsp;
      {props.minutes && props.minutes + "м"}
    </TotalTime>
    <Stops>
      <PlaneFrom>
        <PathFrom title={props.placeFrom}>{props.abbrFrom}</PathFrom>
        <DotLeft />
      </PlaneFrom>
      <PlaneTo>
        <PathTo title={props.placeTo}>{props.abbrTo}</PathTo>
        <DotRight />
      </PlaneTo>
      <PathLine />
    </Stops>
  </Path>
);

Scoreboard.propTypes = {
  hours: pt.number,
  minutes: pt.number,
  placeFrom: pt.string,
  abbrFrom: pt.string,
  placeTo: pt.string,
  abbrTo: pt.string
};

export default Scoreboard;
