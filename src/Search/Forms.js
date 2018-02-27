import React from "react";
import Field from "../Forms/Field";
import DataPicker from "../Forms/DataPicker";
import Select from "../Forms/Select";
import ChoiceQuantity from "../Forms/ChoiceQuantity";
import { ButtonSearch } from "../UI/Button";
import styled from "styled-components";
import media from "../utils/media";

const Forms = styled.form`
  width: 100%;
  border-radius: 6px;

  ${media.xl`
    display: flex;
    justify-content: center;
  `};
`;

const Fields = styled.div`
  display: flex;

  ${media.xl`
    width: 100%;

    &:first-child {
      width: 58%;
    }
  `};
`;

const SearchButton = ButtonSearch.extend`
  overflow: hidden;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 0;
`;

const FormField = styled.div`
  margin-bottom: 2px;
  width: calc((100% - 2px) / 2);
  border-top-right-radius: 6px;

  &:not(:last-child) {
    margin-right: 2px;
  }

  &:first-child {
    border-top-right-radius: 0;
  }

  ${media.xl`
    margin-bottom: 0;
    margin-right: 2px;
    width: 100%;
    overflow: visible;
    border-top-right-radius: 0;
  `};
`;

const From = FormField.extend`
  border-top-left-radius: 6px;

  ${media.xl`
    max-width: 226px;
  `};
`;

const To = FormField.extend`
  ${media.xl`
    max-width: 226px;
  `};
`;

const DatePicker = styled(FormField)`
  margin-bottom: 0;
  overflow: visible;

  ${media.xl`
    min-width: 370px;
    border-bottom-left-radius: 0;
  `};
`;

const FormFieldLast = styled(FormField)`
  margin-bottom: 0;
  display: flex;
  border-top-right-radius: 0;
`;

const ContentSelect = styled.div`
  margin-right: 2px;
  width: 100%;

  ${media.xl`
    margin-right: 16px;
    min-width: 207px;
  `};
`;

export default () => (
  <Forms action="#" method="GET">
    <Fields>
      <From>
        <Field defaultValue="Москва" reverse destination="Mow" />
      </From>
      <To>
        <Field placeholder="Город прибытия" />
      </To>
    </Fields>
    <Fields>
      <DatePicker>
        <DataPicker />
      </DatePicker>
      <FormFieldLast>
        <ContentSelect>
          <Select>
            <ChoiceQuantity />
          </Select>
        </ContentSelect>
        <SearchButton type="submit">Найти билеты</SearchButton>
      </FormFieldLast>
    </Fields>
  </Forms>
);
