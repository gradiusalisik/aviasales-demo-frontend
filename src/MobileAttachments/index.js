import React from "react";
import mobile from "./images/mobile.png";
import rating from "./images/rating.png";
import phoneTablet from "./images/phone-tablet.png";
import Device from "./Device";
import {
  Attachments,
  Container,
  Title,
  Ratings,
  Rating,
  Text,
  Body,
  Phone,
  Attach,
  PhoneTablet,
  Content
} from "./styled";

export default () => (
  <Attachments>
    <Container>
      <PhoneTablet src={phoneTablet} alt="phone" />
      <Content>
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <Ratings>
          <Rating src={rating} alt="rating" />
          <Text>Более 103 000 оценок</Text>
        </Ratings>
        <Body>
          <Phone src={mobile} alt="phone" />
          <Attach>
            <Device icon="apple" text="iPhone или iPad" />
            <Device icon="android" text="Android" />
            <Device icon="windows" text="Windows Phone" />
          </Attach>
        </Body>
      </Content>
    </Container>
  </Attachments>
);
