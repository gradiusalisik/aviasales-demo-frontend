import React from "react";
import { PropTypes as pt } from "prop-types";
import { SlideStyled, Logo } from "./styled";

const Slide = props => (
  <SlideStyled>
    {props.list.map((slide, key) => (
      <Logo key={key} src={slide.image} alt={slide.altImage} />
    ))}
  </SlideStyled>
);

Slide.propTypes = {
  list: pt.array
};

export default Slide;
