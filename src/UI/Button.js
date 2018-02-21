import React from "react";
import styled from "styled-components";
import media from "../utils/media";

const Button = ({ className, children }) => (
  <button className={className}>{children}</button>
);

export const ButtonSearchMain = styled(Button)`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  font-size: 24px;
  font-weight: 900;
  border-radius: 4px;
  color: #fff;
  background-color: #ff9241;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffa353;
  }
`;

export const ButtonSearch = styled(ButtonSearchMain)`
  padding: 15px 28px;
  font-size: 20px;
  line-height: 23px;
  white-space: nowrap;
  border-radius: 0;

  ${media.xl`
    border-radius: 4px;
  `};
`;
