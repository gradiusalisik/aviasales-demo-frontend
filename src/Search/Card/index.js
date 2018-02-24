import React from "react";
import Card from "./Card";
import { list } from "./index.mock";
import styled from "styled-components";

const CardList = styled.div``;

export default () => (
  <CardList>
    {list.map((card, key) => (
      <Card
        key={key}
        data={card}
        // baggages={card.leftContent.baggages}
        // tabs={card.leftContent.tabs}
        // proposals={card.leftContent.proposals}
        // noBaggage={card.leftContent.noBaggage}
        // priceBaggage={card.leftContent.priceBaggage}
        // hotTicket={card.leftContent.hotTicket}
        // price={card.leftContent.price}
        // nameShop={card.leftContent.nameShop}
        // infoFly={card.rightContent.infoFly}
        // logos={card.rightContent.logos}
        // charter={card.rightContent.charter}
      />
    ))}
  </CardList>
);
