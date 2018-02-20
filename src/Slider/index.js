import React from "react";
import Icon from "../Icon";
import Slide from "./Slide";
import { list } from "./index.mock";
import {
  Slider,
  Title,
  Wrapper,
  Prev,
  WrapIcon,
  Slides,
  Next,
  Bullets,
  Bullet
} from "./styled";

export default () => (
  <Slider>
    <Title>
      Дешевые авиабилеты от&nbsp;крупнейших авиакомпаний и&nbsp;агентств
    </Title>
    <Wrapper>
      <Prev>
        <WrapIcon>
          <Icon icon="arrowSlider" />
        </WrapIcon>
      </Prev>
      <Slides>
        {list.map((slide, key) => <Slide key={key} list={slide.list} />)}
      </Slides>
      <Next>
        <WrapIcon>
          <Icon icon="arrowSlider" />
        </WrapIcon>
      </Next>
      <Bullets>
        <Bullet active />
        <Bullet />
        <Bullet />
      </Bullets>
    </Wrapper>
  </Slider>
);
