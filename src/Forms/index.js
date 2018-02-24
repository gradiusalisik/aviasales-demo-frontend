import React from "react";
import Field from "./Field";
import DataPicker from "./DataPicker";
import Select from "./Select";
import Button from "./Button";
import { Link } from "react-router-dom";
import {
  Forms,
  Title,
  SubTitle,
  Content,
  FormFields as Fields,
  Selects,
  DatePicker,
  From,
  To,
  ButtonSearch,
  Container
} from "./styled";

export default () => (
  <Forms action="#" method="GET">
    <Title>Поиск дешевых авиабилетов</Title>
    <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
    <Container id="formsForPortal">
      <Content>
        <Fields>
          <From>
            <Field defaultValue="Москва" firstField text="Mow" />
          </From>
          <To>
            <Field placeholder="Город прибытия" />
          </To>
        </Fields>
        <Fields>
          <DatePicker>
            <DataPicker />
          </DatePicker>
          <Selects>
            <Select />
          </Selects>
        </Fields>
      </Content>
    </Container>
    <ButtonSearch>
      <Link to="/search">
        <Button text="Найти билеты" icon="aero" />
      </Link>
    </ButtonSearch>
  </Forms>
);
