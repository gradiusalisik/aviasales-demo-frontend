import React from 'react';
import { listTabs, cardList } from './index.mock';
import Tabs from '../Tabs';
import CardList from './CardList';
import Container from '../Container';
import { Content, LogoCompas, ContentText, Text, TextCity, EditImage, TabsContent } from './styled';

export default () => (
  <Content>
    <Container>
      <LogoCompas icon="logoCompas" />
      <ContentText>
        <Text>
          Популярные направления перелетов из города
          <ContentText>
            <TextCity>Москва</TextCity>
            <EditImage icon="edit" />
          </ContentText>
        </Text>
      </ContentText>
      <TabsContent>
        <Tabs list={listTabs} />
      </TabsContent>
      <CardList list={cardList} />
    </Container>
  </Content>
);
