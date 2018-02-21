import React from "react";
import FirstScreen from "./FirstScreen";
import CardListMobile from "./Mobile/CardList";
import Icon from "../Icon";
import { ButtonUp, ButtonFilter, ButtonFilterSmall } from "../UI/Button";
import {
  Search,
  Content,
  Button,
  ButtonFilter as BtnFilter,
  ButtonFilterSmall as BtnFilterSmall,
  IconFilter
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
      <BtnFilter>
        <ButtonFilter>Фильтровать</ButtonFilter>
      </BtnFilter>
    </Content>
  </Search>
);
