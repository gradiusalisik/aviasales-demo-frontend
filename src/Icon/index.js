import React from 'react';
import { PropTypes as pt } from 'prop-types';
import styled from 'styled-components';

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

// https://github.com/facebook/create-react-app/pull/3718
// говнокод пока не выйдет react-scripts@2.0.0, где можно будет инлайн-импорт делать

const Icon = ({ icon, ...props }) => {
  const svg = require(`!svg-inline-loader!./icons/${icon}.svg`); // eslint-disable-line
  return <IconInside {...props} dangerouslySetInnerHTML={{ __html: svg }} />;
};

Icon.propTypes = {
  icon: pt.string.isRequired,
};

export default Icon;
