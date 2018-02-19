import styled from "styled-components";
import media from "../utils/media";
// index.js

export const Content = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-right: 6px;
  padding-left: 6px;
  text-align: center;
  background: linear-gradient(180deg, #f8fcff 0%, #ffffff 100%);

  ${media.desktop`
    padding-bottom: 95px;
  `};
`;

export const LogoCalen = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
  width: 64px;
  height: 64px;
`;

export const WrapText = styled.div`
  margin-bottom: 40px;

  ${media.desktop`
    margin-bottom: 60px;
  `};
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: #4a4a4a;

  ${media.desktop`
    font-size: 24px;
  `};
`;

export const Description = styled(Text)`
  margin-bottom: 24px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 400;

  ${media.tablet`
    margin-bottom: 18px;
    padding-left: 0;
    padding-right: 0;
  `};

  ${media.desktop`
    margin-left: auto;
    margin-right: auto;
    max-width: 650px;
    line-height: 26px;
  `};
`;

export const SubText = styled.p`
  padding-right: 10px;
  padding-left: 10px;
  font-size: 14px;
  line-height: 20px;
  color: #a0b0b9;
`;

// Card.js

export const Wrapper = styled.div`
  padding-bottom: 17px;
  margin-bottom: 30px;
  &:not(:last-child) {
    border-bottom: 2px dashed rgba(175, 190, 198, 0.2);

    ${media.desktop`
      padding-bottom: 0;
      margin-bottom: 0;
      padding-right: 34px;
      margin-right: 34px;
      border-right: 2px dashed rgba(175, 190, 198, 0.2);
      border-bottom: 0;
    `};
  }

  ${media.desktop`
    padding-bottom: 0;
    width: 33%;
  `};

  &:last-child {
    margin-bottom: 15px;

    ${media.desktop`
      margin-bottom: 0;
    `};
  }
`;

export const Head = styled.div`
  margin-bottom: 21px;
  display: flex;
  align-items: center;
`;

export const Flag = styled.img`
  margin-right: 12px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CityName = styled.span`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 700;
  color: #5b5b5c;
`;

export const CountryName = styled.span`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #a0b0b9;
`;

export const Body = styled.div``;

export const Info = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  transition: background-color 0.3s;

  ${media.desktop`
    &:hover {
      background-color: #F1FCFF;
    }
  `};
`;

export const FromPlace = styled.a`
  font-size: 16px;
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.3s;

  ${media.desktop`
    &:hover {
      color: #FF8B00;
    }
  `};
`;

export const Price = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #00bae8;
  transition: color 0.3s;

  ${media.desktop`
    &:hover {
      color: #FF8B00;
    }
  `};
`;

// CardList.js
export const List = styled.div`
  ${media.desktop`
    margin-bottom: 77px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `};
`;