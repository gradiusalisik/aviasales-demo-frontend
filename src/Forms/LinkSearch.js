import React from "react";
import { PropTypes as pt } from "prop-types";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import styled from "styled-components";

const LinkSearchStyled = styled(Link)`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  font-size: 24px;
  font-weight: 900;
  border-radius: 4px;
  text-decoration: none;
  display: block;
  color: #fff;
  background-color: #ff9241;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffa353;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span``;

const PlaneImg = styled.div`
  margin-left: 16px;
  width: 26px;
  height: 24px;
`;

const LinkSearch = props => (
  <LinkSearchStyled to={props.to}>
    <Content>
      <Text>{props.text}</Text>
      {props.icon && (
        <PlaneImg>
          <Icon icon={props.icon} />
        </PlaneImg>
      )}
    </Content>
  </LinkSearchStyled>
);

LinkSearch.propTypes = {
  type: pt.string,
  text: pt.string,
  icon: pt.string
};

export default LinkSearch;
