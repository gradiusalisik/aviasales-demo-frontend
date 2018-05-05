import React from "react";
import Menu from "./Menu";
import Socials from "./Socials";
import Attachment from "./Attachment";
import { linkList } from "./index.mock";
import {
  Footer,
  LinkInfo,
  Links,
  LinkSearch,
  Copyright,
  Attachments,
  Content,
  Bottom,
  Line,
  Container
} from "./styled";

export default () => (
  <Footer>
    <Container>
      <Menu />
    </Container>
    <Line />
    <Container>
      <Bottom>
        <Content>
          <Links>
            {linkList.map((link, key) => (
              <LinkInfo key={key} href={link.href || "#"}>
                {link.text}
              </LinkInfo>
            ))}
          </Links>
          <Socials />
          <LinkSearch href="#">Поиск и бронирование отелей</LinkSearch>
        </Content>
        <Content>
          <Attachments>
            <Attachment icon="apple" download attach="App Store" />
            <Attachment icon="google" download attach="Google Play" />
            <Attachment icon="windows" attach="Windows Phone" />
          </Attachments>
          <Copyright>© 2007–2018, Aviasales — дешевые авиабилеты</Copyright>
        </Content>
      </Bottom>
    </Container>
  </Footer>
);
