import React from "react";
import FirstScreen from "./FirstScreen";
import CardListMobile from "./Mobile/CardList";
import CardList from "./Card";
import Icon from "../Icon";
import Filter from "./Filter";
import {
  ButtonUp,
  ButtonFilter,
  ButtonFilterSmall,
  ButtonShowMore
} from "../UI/Button";
import {
  Search,
  Content,
  Button,
  ButtonFilter as BtnFilter,
  ButtonFilterSmall as BtnFilterSmall,
  IconFilter,
  ShowMore,
  CardsMobile,
  Cards,
  Filters,
  Section,
  Container,
  RightColumn
} from "./styled";

export default () => (
  <Search>
    <FirstScreen />
    <Section>
      <Container>
        <Filters>
          <Filter />
        </Filters>
        <Content>
          <Button>
            <ButtonUp>Наверх</ButtonUp>
          </Button>
          <BtnFilterSmall>
            <ButtonFilterSmall>
              <IconFilter>
                <Icon icon="filter" />
              </IconFilter>
            </ButtonFilterSmall>
          </BtnFilterSmall>
          <CardsMobile>
            <CardListMobile />
          </CardsMobile>
          <Cards>
            <CardList />
          </Cards>
          <BtnFilter>
            <ButtonFilter>Фильтровать</ButtonFilter>
          </BtnFilter>
          <ShowMore>
            <ButtonShowMore>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</ButtonShowMore>
          </ShowMore>
        </Content>
        <RightColumn />
      </Container>
    </Section>
  </Search>
);
