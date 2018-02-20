import React from "react";
import Icon from "../Icon";
import CardList from "./CardList";
import { list } from "./index.mock";
import Container from "../Container";
import {
  Content,
  LogoCalen,
  WrapText,
  Text,
  Description,
  SubText
} from "./styled";

export default () => (
  <Content>
    <Container>
      <LogoCalen>
        <Icon icon="calen" />
      </LogoCalen>
      <WrapText>
        <Text>Лучшие цены на&nbsp;авиабилеты за&nbsp;последний месяц</Text>
      </WrapText>
      <CardList list={list} />
      <Description>
        Мы&nbsp;знаем, где купить авиабилеты дешево. Билеты на&nbsp;самолет
        в&nbsp;220 стран мира. Поиск и&nbsp;сравнение цен на&nbsp;авиабилеты
        среди 100 агентств и&nbsp;728&nbsp;авиакомпаний.
      </Description>
      <SubText>
        Цены, найденные пользователями за&nbsp;последние 48&nbsp;часов,
        не&nbsp;являются офертой.
      </SubText>
    </Container>
  </Content>
);
