import React from "react";
import { list } from "./index.mock";
import {
  Info,
  Content,
  ContentTitle,
  Logo,
  Title,
  Description,
  Link,
  Container
} from "./styled";

export default () => (
  <Info>
    {list.map((content, key) => (
      <Content key={key}>
        <Container>
          <ContentTitle>
            <Logo src={content.logo} alt="logo" />
            <Title>{content.title}</Title>
          </ContentTitle>
          <Description>
            {content.description}
            <Link href={content.href}>Подробнее</Link>
          </Description>
        </Container>
      </Content>
    ))}
  </Info>
);
