import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";

const foundIcon = icon =>
  icon ? require(`./icons/${icon}.svg`) : "No icon defined"; // eslint-disable-line global-require

const ImgInside = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Icon = props => (
  <ImgInside src={foundIcon(props.icon)} alt={props.icon} />
);

Icon.propTypes = {
  icon: pt.string.isRequired
};

export default Icon;
