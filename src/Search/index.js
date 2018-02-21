import React from "react";
import FirstScreen from "./FirstScreen";
import CardList from "./CardList";
import { ButtonUp, ButtonFilter } from "../UI/Button";
import { Search, Content, Button, ButtonFilter as BtnFilter } from "./styled";

export default () => (
  <Search>
    <FirstScreen />
    <Content>
      <Button>
        <ButtonUp>Наверх</ButtonUp>
      </Button>
      <CardList />
      <BtnFilter>
        <ButtonFilter>Фильтровать</ButtonFilter>
      </BtnFilter>
    </Content>
  </Search>
);
