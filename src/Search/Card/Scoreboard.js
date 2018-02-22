import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";

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
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE4IDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTMuODQ1Ljc1OGwtMy4xOTEgMS40OTNDOC42NjggMS42NjYgNS45MjQuODU3IDMuNDA4LjEwOWwtMS4yMS41NTMgNC41MyAzLjM4NC0yLjgwMSAxLjI4MUMyLjc2IDUuMTA4IDEuNTA3IDQuODczLjU4IDQuNzAxYy0uNTA0LS4wOTMtLjgyMS4zNDMtLjM1LjY5NEMyLjQ1IDcuMDU3IDMuMzQgNy43MjggMy4zNCA3LjcyOGExLjM3IDEuMzcgMCAwIDAgMS4zODguMTQ4bDEyLjQ3NC01LjczOGMuOTEyLS40NjIuODktMS4wODYuNjY4LTEuNTg4LS4zMTUtLjY2Mi0xLjY3NS0uODY3LTQuMDI1LjIwOHoiIGZpbGw9IiNBNEIwQjkiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K");
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
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxNyAxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNi43MTIgMTEuODMzYy4yNDUtLjY5LS41NzEtMS43OTctMi45OTMtMi42OThsLTMuMzEyLTEuMjAyYy0uOTktMS44MTctMi4zNTgtNC4zMy0zLjYxLTYuNjM4TDUuNTUzLjgzMWwuODEgNS41OTctMi44ODctMS4wNzZjLS42Ny0uOTgtMS4zOS0yLjAzMi0xLjkyMy0yLjgwOC0uMjktLjQyMi0uODIzLS4zMzktLjczOS4yNDMuMzk1IDIuNzQ1LjU1IDMuODQ4LjU1IDMuODQ4LjA2OS40NzcuMzkxLjkwNi44NzYgMS4wODZsMTIuODc4IDQuNzYzYy45NzIuMzE5IDEuMzk3LS4xMzkgMS41OTUtLjY1IiBmaWxsPSIjQTRCMEI5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg==");
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
    <TotalTime>Всего:&nbsp;{props.totalTime}</TotalTime>
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
  totalTime: pt.string,
  placeFrom: pt.string,
  abbrFrom: pt.string,
  placeTo: pt.string,
  abbrTo: pt.string
};

export default Scoreboard;
