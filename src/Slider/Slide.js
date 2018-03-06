import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { SlideStyled, Logo } from './styled';

const Slide = props => (
  <SlideStyled>
    {props.list.map(slide => <Logo key={slide.alt} src={slide.image} alt={slide.alt} />)}
  </SlideStyled>
);

Slide.propTypes = {
  list: pt.arrayOf(pt.shape({})),
};

Slide.defaultProps = {
  list: [],
};

export default Slide;
