import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { SlideStyled, Logo } from './styled';

const Slide = props => (
  <SlideStyled>
    {props.list.map(slide => <Logo key={slide.id} src={slide.image} alt={slide.altImage} />)}
  </SlideStyled>
);

Slide.propTypes = {
  list: pt.arrayOf(pt.shape({})),
};

Slide.defaultProps = {
  list: [],
};

export default Slide;
