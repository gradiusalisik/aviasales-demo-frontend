import styled from "styled-components";
import media from "../utils/media";

// index.js

export const Content = styled.div`
  padding-top: 40px;
  padding-right: 6px;
  padding-left: 6px;
  text-align: center;
`;

export const LogoCompas = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 64px;
  height: 64px;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #4a4a4a;

  ${media.tablet`
    margin-right: auto;
    margin-left: auto;
    font-size: 24px;
    line-height: 36px;
    max-width: 500px;
  `};
`;

export const TextCity = Text.extend`
  padding-left: 5px;
  color: #00ace2;
  transition: color 0.3s;

  ${media.desktop`
    &:hover {
      color: #ff8b00;
    }
  `};
`;

export const WrapText = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const EditImage = styled.div`
  margin-left: 5px;
  width: 16px;
  height: 16px;
`;

export const TabsWrap = styled.div`
  margin-top: 32px;
  margin-bottom: 12px;

  ${media.desktop`
    margin-top: 56px;
    margin-bottom: 58px;
  `};
`;

// Card.js
export const Wrapper = styled.a`
  margin-bottom: 12px;
  display: block;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgba(0, 75, 93, 0.12);
  transition: box-shadow 0.3s;

  ${media.desktop`
    margin-bottom: 30px;
    margin-left: 14px;
    width: calc((100% - 28px) / 2);
    cursor: pointer;

    &:hover {
      box-shadow: 0 10px 20px 0 rgba(91, 137, 163, 0.2);
    }
  `};
`;

export const WrapImage = styled.div`
  position: relative;
  padding-bottom: 41%;
  height: 0;
`;

export const PlaceImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 126px;
  width: 100%;
  height: 100%;
  background-image: url("${props => props.image}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 6s ease;

  ${media.desktop`
    ${Wrapper}:hover & {
      transform: scale(1.1);
    }
  `};
`;

export const Info = styled.div`
  padding-top: 18px;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const Wrap = styled.div`
  max-width: 155px;

  ${media.tablet`
    max-width: 300px;
  `};

  ${media.desktop`
    max-width: 240px;
  `};
`;

export const ContentPlace = styled.div`
  ${media.tablet`
    display: flex;
    align-items: center;
  `};
`;

export const Flag = styled.img`
  margin-right: 16px;
  overflow: hidden;
  display: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;

  ${media.tablet`
    display: block;
  `};
`;

export const CityName = styled.span`
  margin-bottom: 10px;
  display: block;
  font-size: 16px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  color: #5b5b5c;

  ${media.tablet`
    font-size: 22px;
  `};
`;

export const PriceInfo = styled.span`
  margin-bottom: 10px;
  display: block;
  padding-top: 2px;
  font-size: 14px;
  color: #00bae8;
  transition: color 0.3s;

  ${media.tablet`
    font-size: 22px;
  `};

  ${media.desktop`
    ${Wrapper}:hover & {
      color: #FF8C00;
    }
  `};
`;

export const CountryName = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: left;
  color: #a0b0b9;
`;

export const Date = styled(CountryName)`
  text-transform: none;
`;

// CardList.js

export const List = styled.div`
  ${media.desktop`
    display: flex;
    flex-wrap: wrap;
    margin-left: -14px;
  `};
`;
