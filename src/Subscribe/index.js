import React from "react";
import Socials from "./Socials";
import Form from "./Form";
import Container from "../Container";

import {
  Subscribe,
  Title,
  Text,
  Wrapper,
  WrapDescription,
  WrapForm
} from "./styled";

export default () => (
  <Subscribe>
    <Container>
      <Wrapper>
        <WrapDescription>
          <Title>Хотите знать всё о скидках на авиабилеты?</Title>
          <Text>
            Вы можете подписаться на нашу рассылку через соцсети или по
            электронной почте.
          </Text>
        </WrapDescription>
        <WrapForm>
          <Socials />
          <Form />
        </WrapForm>
      </Wrapper>
    </Container>
  </Subscribe>
);
