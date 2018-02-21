import { Link } from "react-router-dom";
import styled from "styled-components";

// ** Header.js **
export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
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
