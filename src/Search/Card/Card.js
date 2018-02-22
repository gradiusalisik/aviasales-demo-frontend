import React from "react";
import { PropTypes as pt } from "prop-types";
import Baggage from "./Baggage";
import Tabs from "./Tabs";
import Proposal from "./Proposal";
import InfoFly from "./InfoFly";
import Logos from "../Mobile/Logos";
import Icon from "../../Icon";
import { ButtonBuy, ButtonCharters } from "../../UI/Button";
import {
  Card as CardStyled,
  LeftContent,
  WrapInfoCard as WrapInfo,
  BtnBuy,
  TextBuy,
  TextPrice,
  TextNameShop,
  TextHotTicket,
  RightContent,
  Head,
  Body,
  Share,
  WrapButtons,
  IconShare,
  ButtonDown,
  TabsWrap,
  BaggageWrap,
  Arrow
} from "./styled";

const Card = props => (
  <CardStyled>
    <LeftContent>
      {props.listBaggage && (
        <BaggageWrap>
          <Baggage
            list={props.listBaggage}
            noBaggage={props.noBaggage}
            price={props.priceBaggage}
          />
        </BaggageWrap>
      )}
      {props.listTabs && (
        <TabsWrap>
          <Tabs list={props.listTabs} />
        </TabsWrap>
      )}
      {props.hotTicket && <TextHotTicket>{props.hotTicket}</TextHotTicket>}
      <WrapInfo>
        <BtnBuy>
          <ButtonBuy>
            <TextBuy>Купить</TextBuy>
            <TextPrice>за&nbsp;{props.price}&nbsp;₽</TextPrice>
          </ButtonBuy>
        </BtnBuy>
        <TextNameShop>на&nbsp;{props.nameShop}</TextNameShop>
        {props.listProposal && <Proposal list={props.listProposal} />}
      </WrapInfo>
    </LeftContent>
    <RightContent>
      <Head>
        <Logos list={props.listLogo} />
        <WrapButtons>
          {props.charter && <ButtonCharters>Чартер</ButtonCharters>}
          <Share>
            <IconShare>
              <Icon icon="share" />
            </IconShare>
          </Share>
        </WrapButtons>
      </Head>
      <Body>
        <InfoFly list={props.listInfoFly} />
      </Body>
      <ButtonDown>
        <Arrow>
          <Icon icon="arrowSelect" />
        </Arrow>
      </ButtonDown>
    </RightContent>
  </CardStyled>
);

Card.propTypes = {
  listBaggage: pt.array,
  listTabs: pt.array,
  listProposal: pt.array,
  listInfoFly: pt.array,
  listLogo: pt.array,
  noBaggage: pt.bool,
  priceBaggage: pt.bool,
  hotTicket: pt.string,
  price: pt.number,
  nameShop: pt.string,
  charter: pt.bool
};

export default Card;
