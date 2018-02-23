import React from "react";
import { PropTypes as pt } from "prop-types";
import Baggage from "./Baggage";
import Tabs from "./Tabs";
import Proposal from "./Proposal";
import InfoFly from "./InfoFly";
import Logos from "../../UI/Logos";
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
      {props.baggages && (
        <BaggageWrap>
          <Baggage
            list={props.baggages}
            noBaggage={props.noBaggage}
            price={props.priceBaggage}
          />
        </BaggageWrap>
      )}
      {props.tabs && (
        <TabsWrap>
          <Tabs list={props.tabs} />
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
        {props.proposals && <Proposal list={props.proposals} />}
      </WrapInfo>
    </LeftContent>
    <RightContent>
      <Head>
        <Logos list={props.logos} />
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
        <InfoFly list={props.infoFly} />
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
  baggages: pt.array,
  tabs: pt.array,
  proposals: pt.array,
  infoFly: pt.array,
  logos: pt.array,
  noBaggage: pt.bool,
  priceBaggage: pt.bool,
  hotTicket: pt.string,
  price: pt.number,
  nameShop: pt.string,
  charter: pt.bool
};

export default Card;
