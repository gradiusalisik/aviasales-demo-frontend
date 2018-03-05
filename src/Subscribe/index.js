import React from 'react';
import Socials from './Socials';
import Form from './Form';
import Container from '../Container';

import { Subscribe, Title, Text, Content, Description, Forms } from './styled';

export default () => (
  <Subscribe>
    <Container>
      <Content>
        <Description>
          <Title>Хотите знать всё о скидках на авиабилеты?</Title>
          <Text>
            Вы можете подписаться на нашу рассылку через соцсети или по электронной почте.
          </Text>
        </Description>
        <Forms>
          <Socials />
          <Form />
        </Forms>
      </Content>
    </Container>
  </Subscribe>
);
