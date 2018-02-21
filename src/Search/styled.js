import { Link } from "react-router-dom";
import styled from "styled-components";

// ** index.js **
export const Search = styled.div``;

export const Content = styled.div`
  padding-top: 8px;
  padding-bottom: 16px;
  background-color: #eaeaea;
`;

export const Button = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

// ** Header.js **
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const WrapInfo = styled.div`
  display: flex;
  align-items: center;
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

export const Currency = styled.button`
  padding: 6px 14px;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 100px;
`;

// ** Card.js **

export const Card = styled.div`
  padding: 12px 6px;
  margin-bottom: 8px;
  background-color: #fff;
`;

export const Head = styled.div`
  margin-bottom: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceCard = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #ff9241;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
`;

export const Body = styled.div`
  padding-left: 7px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const CardIconWrap = styled.div`
  margin-right: 8px;
  width: 12px;
  height: 12px;
  color: #00ace2;
  transform: ${props => (props.reverse ? "rotate(180deg)" : "none")};
`;
export const Time = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #4a4a4a;
`;

export const TimeBetween = Time.extend`
  margin-right: 16px;
`;
export const Type = Time.extend``;
