import React from "react";
import mobile from "./images/mobile.png";
import rating from "./images/rating.png";
import phoneTablet from "./images/phone-tablet.png";
import Device from "./Device";
import {
  Attachments,
  Container,
  Title,
  WrapRating,
  Rating,
  Text,
  Body,
  Phone,
  WrapAttach,
  PhoneTablet,
  Wrapper
} from "./styled";

export default () => (
  <Attachments>
    <Container>
      <PhoneTablet src={phoneTablet} alt="phone" />
      <Wrapper>
        <Title>Скачай мобильное приложение Aviasales.ru</Title>
        <WrapRating>
          <Rating src={rating} alt="rating" />
          <Text>Более 103 000 оценок</Text>
        </WrapRating>
        <Body>
          <Phone src={mobile} alt="phone" />
          <WrapAttach>
            <Device icon="apple" text="iPhone или iPad" />
            <Device icon="android" text="Android" />
            <Device icon="windows" text="Windows Phone" />
          </WrapAttach>
        </Body>
      </Wrapper>
    </Container>
  </Attachments>
);
