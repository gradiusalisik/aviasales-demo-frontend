import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../utils/media";

// ** index.js **
export const Search = styled.div``;

export const Content = styled.div`
  padding-top: 8px;
  padding-bottom: 16px;
  background-color: #eaeaea;

  ${media.md`
    padding-left: 8px;
    padding-right: 8px;
  `};
`;

export const Button = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;

  ${media.md`
    display: none;
  `};
`;

export const ButtonFilter = Button.extend`
  margin-bottom: 0;

  ${media.md`
    display: none;
  `};
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
`;

export const ShowMore = styled.div`
  display: none;

  ${media.md`
    display: block;
  `};
`;

// ** Header.js **
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const LogoWrap = styled.div`
  display: none;
  ${media.md`
    display: flex;
    align-items: center;
  `};
`;

export const Logo = styled.div`
  width: 30px;
  height: 30px;
  color: #fff;
`;

export const Text = styled.span`
  margin-left: 12px;
  font-size: 20px;
  color: #fff;
`;

export const WrapInfo = styled.div`
  display: flex;
  align-items: center;

  ${media.md`
    display: none;
  `};
`;

export const Back = styled(Link)`
  margin-right: 25px;
`;

export const IconWrap = styled.div`
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
