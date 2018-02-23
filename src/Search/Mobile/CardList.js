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

const Content = styled.div``;

export default () => (
  <CardList>
    {list.map((info, key) => (
      <Content key={key}>
        {!!info.status && (
          <Status
            text={info.status.text}
            color={info.status.color}
            icon={info.status.icon}
          />
        )}
        <Card
          logos={info.logos}
          fromFly={info.fromFly}
          backFly={info.backFly}
          price={info.price}
        />
      </Content>
    ))}
  </CardList>
);
