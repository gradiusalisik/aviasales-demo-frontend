import styled from "styled-components";
// import media from "../utils/media";

// ** Card.js **

export const Card = styled.div`
  margin-bottom: 20px;
  display: flex;
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;
`;

export const LeftContent = styled.div`
  width: 28%;
  min-width: 209px;
  border-right: 1px solid #ddd;
`;

export const RightContent = styled.div`
  position: relative;
  padding: 16px;
  padding-right: 36px;
  width: 72%;
`;

export const InfoCard = styled.div`
  padding-right: 23px;
  padding-left: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BtnBuy = styled.div`
  margin-bottom: 8px;
  width: 100%;
`;

export const TextPrice = styled.span`
  font-size: 16px;
  line-height: 18px;
  color: #fff;
`;

export const TextBuy = TextPrice.extend`
  font-weight: 500;
  display: block;
`;

export const TextNameShop = styled.span`
  font-size: 12px;
  color: #a0b0b9;
`;

export const TextHotTicket = TextNameShop.extend`
  margin-top: -6px;
  padding-bottom: 6px;
  display: block;
  text-align: center;
  color: #ff654e;
`;

export const Head = styled.div`
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div``;

export const Buttons = Head.extend`
  margin-bottom: 0;
`;

export const Share = styled.button`
  margin-left: 10px;
  padding-left: 9px;
  padding-bottom: 12px;
  background-color: transparent;
  border: none;
`;

export const IconShare = styled.div`
  width: 17px;
  height: 14px;
  color: #a0b0b9;
`;

export const ButtonDown = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf5f7;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ecf9fb;
  }
`;

export const Arrow = styled.div`
  width: 10px;
  height: 5px;
  color: #a0b0b9;
  transition: color 0.3s;

  ${ButtonDown}:hover & {
    color: #00aedb;
  }
`;

export const TabsContent = styled.div`
  margin-bottom: 16px;
`;

export const Baggages = styled.div`
  padding-top: 12px;
`;
