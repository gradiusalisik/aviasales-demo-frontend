import styled from "styled-components";
import media from "../utils/media";
import Icon from "../Icon";

export const Slider = styled.div`
  ${media.xl`
    margin-right: auto;
    margin-left: auto;
    max-width: 1030px;
  `};
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  color: #5c5c5c;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 190px;
`;

export const Prev = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  background-color: transparent;
  border: none;
`;

export const Slides = styled.div`
  max-width: 600px;

  ${media.xl`
    max-width: 100%;
  `};
`;

export const Next = Prev.extend`
  transform: rotate(180deg);
`;

export const Icons = styled(Icon)`
  width: 18px;
  height: 32px;
  color: rgba(91, 91, 92, 0.2);
`;

export const Bullets = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
`;

export const Bullet = styled.button`
  width: 10px;
  height: 10px;
  background-color: ${props => (props.active ? "#818181" : "transparent")};
  border: 1px solid #818181;
  border-radius: 50%;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

// ** Slide.js

export const SlideStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 50px;
  margin-left: 32px;

  &:not(:nth-last-child(-n + 2)) {
    margin-bottom: 32px;

    ${media.xl`
      margin-bottom: 0;
    `};
  }

  ${media.xl`
    margin-left: 20px;
  `};
`;
