import React from "react";
import Field from "./Field";
import DataPicker from "./DataPicker";
import Select from "./Select";
import Button from "./Button";
import {
  Forms,
  Title,
  SubTitle,
  WrapForm,
  Wrapper,
  WrapField,
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
        <WrapField noLeftIndentTablet noBottomIndentTablet>
          <DataPicker />
        </WrapField>
        <WrapField noBottomIndent noBottomIndentTablet>
          <Select />
        </WrapField>
      </Wrapper>
    </WrapForm>
    <ButtonWrap>
      <Button text="Найти билеты" type="submit" icon="aero" />
    </ButtonWrap>
  </Forms>
);
