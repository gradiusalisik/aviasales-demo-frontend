import { Link } from "react-router-dom";
import Icon from "../Icon";
import styled, { css } from "styled-components";
import media from "../utils/media";

// ** index.js **
export const SearchStyled = styled.div``;

export const Section = styled.section`
  padding-top: 8px;
  padding-bottom: 16px;
  background-color: #eaeaea;

  ${media.md`
    padding-left: 8px;
    padding-right: 8px;
  `};
`;

export const Container = styled.div`
  ${media.xl`
    margin-right: auto;
    margin-left: auto;
    display: flex;
    max-width: 1240px;
  `};
`;

export const RightColumn = styled.div`
  display: none;
  ${media.xl`
    display: block;
    width: 23%;
    margin-left: 16px;
  `};
`;

export const Filters = styled.div`
  margin-right: 16px;
  display: none;

  ${media.xl`
    display: block;
    max-width: 300px;
    width: 100%;
  `};
`;

export const Content = styled.div`
  width: 100%;
`;

export const Button = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;

  ${media.md`
    display: none;
  `};
`;

export const ButtonsUp = Button.extend`
  position: fixed;
  left: 50%;
  top: 0;
  display: flex;
  transform: translate(-50%, -100%);
  transition: transform 0.4s;

  ${props =>
    props.active &&
    css`
      display: flex;
      transform: translate(-50%, 5px);
    `};
`;

export const ButtonFilter = Button.extend`
  margin-bottom: 0;
`;

export const IconFilter = styled.div`
  width: 18px;
  height: 14px;
  color: #fff;
`;

export const ButtonFilterSmall = Button.extend`
  display: none;
  ${media.md`
    display: flex;
  `};

  ${media.xl`
    display: none;
  `};
`;

export const ShowMore = styled.div`
  display: none;

  ${media.md`
    display: block;
  `};
`;

export const Scroll = styled.button`
  position: fixed;
  bottom: 210px;
  right: 98px;
  display: none;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  color: #a0b0b9;
  box-shadow: 0px 2px 4px rgba(74, 74, 74, 0.5);
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #00acde;
    color: #fff;
  }

  ${media.xl`
    ${props =>
      props.active &&
      css`
        display: flex;
      `}
  `};
`;

export const IconScroll = styled(Icon)`
  width: 20px;
  height: 20px;
`;

// ** Header.js **
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Logos = styled(Link)`
  display: none;
  text-decoration: none;
  ${media.md`
    display: flex;
    align-items: center;
  `};
`;

export const Logo = styled(Icon)`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const Text = styled.span`
  margin-left: 12px;
  font-size: 20px;
  color: #fff;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  ${media.md`
    display: none;
  `};
`;

export const BackLink = styled(Link)`
  margin-right: 25px;
`;

export const Back = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #fff;
`;

export const InfoFly = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Place = styled.span`
  margin-bottom: 2px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;

export const SubInfo = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: #fff;
`;

export const Date = styled.span``;

export const Passenger = styled.span``;

export const CardsMobile = styled.div`
  ${media.md`
    display: none;
  `};
`;

export const Cards = styled.div`
  display: none;
  ${media.md`
    display: block;
  `};
`;
