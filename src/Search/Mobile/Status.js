import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";

const StatusStyled = styled.div`
  padding: 8px 6px;
  font-size: 14px;
  font-weight: 900;
  color: #fff;
  background-color: ${props => props.color};
`;

const Icon = styled.span`
  padding-left: 10px;
`;

const Status = props => (
  <StatusStyled color={props.color}>
    {props.text}
    <Icon>{props.icon}</Icon>
  </StatusStyled>
);

Status.propTypes = {
  color: pt.string,
  text: pt.string,
  icon: pt.string
};

export default Status;
