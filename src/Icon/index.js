import React from "react";
import { PropTypes as pt } from "prop-types";
import styled from "styled-components";

// const foundIcon = icon =>
//   icon ? require(`./icons/${icon}.svg`) : "No icon defined"; // eslint-disable-line global-require

const IconInside = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// const Icon = props => (
//   <ImgInside src={foundIcon(props.icon)} alt={props.icon} />
// );

const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`);
  return <IconInside {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};

Icon.propTypes = {
  icon: pt.string.isRequired
};

export default Icon;
