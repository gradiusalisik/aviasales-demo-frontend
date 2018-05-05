import styled from "styled-components";
import media from "../utils/media";
export const Button = styled.button`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  font-size: 24px;
  font-weight: 900;
  border-radius: 4px;
  color: #fff;
  background-color: #ff9241;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffa353;
  }
`;

export const ButtonSearch = Button.extend`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 20px;
  line-height: 23px;
  white-space: nowrap;
  border-radius: 0;

  ${media.xl`
    border-radius: 4px;
  `};
`;

export const ButtonUp = styled.button`
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  color: #fff;
  background-color: rgba(0, 172, 226, 0.5);
  border: none;
  border-radius: 100px;
`;

export const ButtonFilter = ButtonUp.extend`
  padding: 10px 24px;
  font-size: 16px;
  text-transform: none;
  background-color: #00ace2;
`;

export const ButtonFilterSmall = ButtonFilter.extend`
  padding: 17px 24px;
  border-radius: 10px;
`;

export const ButtonShowMore = ButtonFilter.extend`
  padding-top: 18px;
  padding-bottom: 18px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 4px;
`;

export const ButtonWhiteTransparent = styled.button`
  padding: 6px 14px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100px;
`;

export const ButtonCharters = ButtonWhiteTransparent.extend`
  font-size: 10px;
  border: 1px solid #2196f3;
  color: #2196f3;
`;

export const ButtonBuy = Button.extend`
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 100%;
  font-weight: normal;
`;
