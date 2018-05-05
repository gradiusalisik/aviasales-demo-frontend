import React from 'react';
import list from './index.mock';
import CardList from './CardList';
import { Content, Container, DescriptionOffers, Title, Link, SubText } from './styled';

export default () => (
  <Content>
    <Container>
      <Title>Спецпредложения на&nbsp;авиабилеты</Title>
      <CardList list={list} />
      <DescriptionOffers>
        <Link href="/">Смотреть все спецпредложения</Link>
        <SubText>* средняя цена по направлению</SubText>
      </DescriptionOffers>
    </Container>
  </Content>
);
