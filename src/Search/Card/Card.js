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
  InfoCard as Info,
  BtnBuy,
  TextBuy,
  TextPrice,
  TextNameShop,
  TextHotTicket,
  RightContent,
  Head,
  Body,
  Share,
  Buttons,
  IconShare,
  ButtonDown,
  TabsContent,
  Baggages,
  Arrow
} from "./styled";

const Card = props => (
  <CardStyled>
    <LeftContent>
      {props.baggages && (
        <Baggages>
          <Baggage
            list={props.baggages}
            noBaggage={props.noBaggage}
            price={props.priceBaggage}
          />
        </Baggages>
      )}
      {props.tabs && (
        <TabsContent>
          <Tabs list={props.tabs} />
        </TabsContent>
      )}
      {props.hotTicket && <TextHotTicket>{props.hotTicket}</TextHotTicket>}
      <Info>
        <BtnBuy>
          <ButtonBuy>
            <TextBuy>Купить</TextBuy>
            <TextPrice>за&nbsp;{props.price}&nbsp;₽</TextPrice>
          </ButtonBuy>
        </BtnBuy>
        <TextNameShop>на&nbsp;{props.nameShop}</TextNameShop>
        {props.proposals && <Proposal list={props.proposals} />}
      </Info>
    </LeftContent>
    <RightContent>
      <Head>
        <Logos list={props.logos} />
        <Buttons>
          {props.charter && <ButtonCharters>Чартер</ButtonCharters>}
          <Share>
            <IconShare>
              <Icon icon="share" />
            </IconShare>
          </Share>
        </Buttons>
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
