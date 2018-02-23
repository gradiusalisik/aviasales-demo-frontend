import styled from "styled-components";
import Icon from "../../Icon";

// ** Card.js **

export const Card = styled.div`
  padding: 12px 6px;
  margin-bottom: 12px;
  background-color: #fff;
`;

export const Head = styled.div`
  margin-bottom: 12px;
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

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const CardIcon = styled(Icon)`
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
  width: 92px;
`;

export const Type = Time.extend``;
