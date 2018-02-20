import React from "react";
import { list } from "./index.mock";
import CardList from "./CardList";
import {
  Content,
  Container,
  ContentWrap,
  Title,
  Link,
  SubText
} from "./styled";

export default () => (
  <Content>
    <Container>
      <Title>Спецпредложения на&nbsp;авиабилеты</Title>
      <CardList list={list} />
      <ContentWrap>
        <Link>Смотреть все спецпредложения</Link>
        <SubText>* средняя цена по направлению</SubText>
      </ContentWrap>
    </Container>
  </Content>
);
