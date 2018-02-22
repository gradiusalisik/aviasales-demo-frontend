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
        listBaggage={card.leftContent.listBaggage}
        listTabs={card.leftContent.listTabs}
        listProposal={card.leftContent.listProposal}
        noBaggage={card.leftContent.noBaggage}
        priceBaggage={card.leftContent.priceBaggage}
        hotTicket={card.leftContent.hotTicket}
        price={card.leftContent.price}
        nameShop={card.leftContent.nameShop}
        listInfoFly={card.rightContent.listInfoFly}
        listLogo={card.rightContent.listLogo}
        charter={card.rightContent.charter}
      />
    ))}
  </CardList>
);
