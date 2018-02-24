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
      {props.data.baggages && (
        <Baggages hot={props.data.hotTicket}>
          <Baggage
            list={props.data.baggages}
            noBaggage={props.data.noBaggage}
            price={props.data.priceBaggage}
          />
        </Baggages>
      )}
      {props.data.tabs && (
        <TabsContent>
          <Tabs list={props.data.tabs} />
        </TabsContent>
      )}
      {props.data.hotTicket && (
        <TextHotTicket>{props.data.hotTicket}</TextHotTicket>
      )}
      <Info>
        <BtnBuy>
          <ButtonBuy>
            <TextBuy>Купить</TextBuy>
            <TextPrice>за&nbsp;{props.data.price}&nbsp;₽</TextPrice>
          </ButtonBuy>
        </BtnBuy>
        <TextNameShop>на&nbsp;{props.data.nameShop}</TextNameShop>
        {props.data.proposals && <Proposal list={props.data.proposals} />}
      </Info>
    </LeftContent>
    <RightContent>
      <Head>
        <Logos list={props.data.logos} />
        <Buttons>
          {props.data.charter && <ButtonCharters>Чартер</ButtonCharters>}
          <Share>
            <IconShare>
              <Icon icon="share" />
            </IconShare>
          </Share>
        </Buttons>
      </Head>
      <Body>
        <InfoFly list={props.data.infoFly} />
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
  data: pt.object
};

export default Card;
