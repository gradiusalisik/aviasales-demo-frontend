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
  WrapForm,
  Wrapper,
  WrapField,
  WrapDatePicker,
  ButtonWrap
} from "./styled";

export default () => (
  <Forms action="#" method="GET">
    <Title>Поиск дешевых авиабилетов</Title>
    <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
    <WrapForm>
      <Wrapper>
        <WrapField noLeftIndentTablet noLeftIndentDesktop>
          <Field defaultValue="Москва" firstField text="Mow" />
        </WrapField>
        <WrapField>
          <Field placeholder="Город прибытия" />
        </WrapField>
      </Wrapper>
      <Wrapper>
        <WrapDatePicker noLeftIndentTablet noBottomIndentTablet>
          <DataPicker />
        </WrapDatePicker>
        <WrapField noBottomIndent noBottomIndentTablet>
          <Select />
        </WrapField>
      </Wrapper>
    </WrapForm>
    <ButtonWrap>
      <Link to="/search">
        <Button text="Найти билеты" icon="aero" />
      </Link>
    </ButtonWrap>
  </Forms>
);
