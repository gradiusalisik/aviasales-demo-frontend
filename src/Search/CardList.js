import React from "react";
import Card from "./Card";
import Status from "./Status";
import styled from "styled-components";
import { list } from "./index.mock";

const CardList = styled.div``;

const Wrap = styled.div``;

export default () => (
  <CardList>
    {list.map(
      (card, key) =>
        console.log(card) || (
          <Wrap key={key}>
            {card.status && (
              <Status
                text={card.status}
                color={card.colorStatus}
                icon={card.iconStatus}
              />
            )}
            <Card
              listLogo={card.listLogo}
              listInfo={card.listInfo}
              price={card.price}
            />
          </Wrap>
        )
    )}
  </CardList>
);
