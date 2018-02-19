import React from "react";
import Menu from "./Menu";
import Socials from "./Socials";
import Attachment from "./Attachment";
import { linkList } from "./index.mock";
import {
  Wrapper,
  LinkInfo,
  WrapLinks,
  LinkSearch,
  Copyright,
  WrapAttach,
  Wrap,
  Bottom,
  Line,
  Container
} from "./styled";

export default () => (
  <Wrapper>
    <Container>
      <Menu />
    </Container>
    <Line />
    <Container>
      <Bottom>
        <Wrap>
          <WrapLinks>
            {linkList.map((link, key) => (
              <LinkInfo key={key} href={link.href || "#"}>
                {link.text}
              </LinkInfo>
            ))}
          </WrapLinks>
          <Socials />
          <LinkSearch href="#">Поиск и бронирование отелей</LinkSearch>
        </Wrap>
        <Wrap>
          <WrapAttach>
            <Attachment icon="apple" download attach="App Store" />
            <Attachment icon="google" download attach="Google Play" />
            <Attachment icon="windows" attach="Windows Phone" />
          </WrapAttach>
          <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
        </Wrap>
      </Bottom>
    </Container>
  </Wrapper>
);
