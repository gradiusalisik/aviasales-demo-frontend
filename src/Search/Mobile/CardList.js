import React from "react";
import Card from "./Card";
import Status from "./Status";
import styled from "styled-components";
import media from "../../utils/media";
import { list } from "./index.mock";

const CardList = styled.div`
  ${media.md`
    display: none;
  `};
`;

const Wrap = styled.div``;

export default () => (
  <CardList>
    {list.map((card, key) => (
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
    ))}
  </CardList>
);
