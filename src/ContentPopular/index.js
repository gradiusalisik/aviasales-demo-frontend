import React from "react";
import Icon from "../Icon";
import { listTabs, cardList } from "./index.mock";
import Tabs from "../Tabs";
import CardList from "./CardList";
import Container from "../Container";
import {
  Content,
  LogoCompas,
  WrapText,
  Text,
  TextCity,
  EditImage,
  TabsWrap
} from "./styled";

export default () => (
  <Content>
    <Container>
      <LogoCompas>
        <Icon icon="logoCompas" />
      </LogoCompas>
      <WrapText>
        <Text>
          Популярные направления перелетов из города
          <WrapText>
            <TextCity>Москва</TextCity>
            <EditImage>
              <Icon icon="edit" />
            </EditImage>
          </WrapText>
        </Text>
      </WrapText>
      <TabsWrap>
        <Tabs list={listTabs} />
      </TabsWrap>
      <CardList list={cardList} />
    </Container>
  </Content>
);
