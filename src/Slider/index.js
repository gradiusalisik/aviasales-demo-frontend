import React from "react";
import Slide from "./Slide";
import { list } from "./index.mock";
import {
  Slider,
  Title,
  Content,
  Prev,
  Icons as Icon,
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
    <Content>
      <Prev>
        <Icon icon="arrowSlider" />
      </Prev>
      <Slides>
        {list.map((slide, key) => <Slide key={key} list={slide.list} />)}
      </Slides>
      <Next>
        <Icon icon="arrowSlider" />
      </Next>
      <Bullets>
        <Bullet active />
        <Bullet />
        <Bullet />
      </Bullets>
    </Content>
  </Slider>
);
