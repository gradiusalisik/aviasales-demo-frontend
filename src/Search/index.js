import React from "react";
import FirstScreen from "./FirstScreen";
import CardList from "./CardList";
import { ButtonUp, ButtonFilter } from "../UI/Button";
import { Search, Content, Button } from "./styled";

export default () => (
  <Search>
    <FirstScreen />
    <Content>
      <Button>
        <ButtonUp>Наверх</ButtonUp>
      </Button>
      <CardList />
      <Button>
        <ButtonFilter>Фильтровать</ButtonFilter>
      </Button>
    </Content>
  </Search>
);
