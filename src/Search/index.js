import React from "react";
import FirstScreen from "./FirstScreen";
import CardListMobile from "./Mobile/CardList";
import Card from "./Card";
import Icon from "../Icon";
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
  ShowMore
} from "./styled";

export default () => (
  <Search>
    <FirstScreen />
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
      <CardListMobile />
      <Card />
      <BtnFilter>
        <ButtonFilter>Фильтровать</ButtonFilter>
      </BtnFilter>
      <ShowMore>
        <ButtonShowMore>ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!</ButtonShowMore>
      </ShowMore>
    </Content>
  </Search>
);
