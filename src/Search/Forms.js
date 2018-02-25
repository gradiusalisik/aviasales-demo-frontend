import React from "react";
import Field from "../Forms/Field";
import DataPicker from "../Forms/DataPicker";
import Select from "../Forms/Select";
import { ButtonSearch } from "../UI/Button";
import styled from "styled-components";
import media from "../utils/media";

const Forms = styled.form`
  width: 100%;
  border-radius: 4px;

  ${media.xl`
    display: flex;
    justify-content: center;
  `};
`;

const Fields = styled.div`
  display: flex;

  ${media.xl`
    width: 100%;
  `};
`;

const SearchButton = ButtonSearch.extend`
  overflow: hidden;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 0;
`;

const FormField = styled.div`
  margin-bottom: 2px;
  width: calc((100% - 2px) / 2);
  border-top-right-radius: 4px;
  overflow: hidden;

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
    border-top-right-radius: 0;

    &:first-child {
      border-bottom-left-radius: 4px;
    }
    `};
`;

const From = FormField.extend`
  border-top-left-radius: 4px;
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
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
  `};
`;

export default () => (
  <Forms action="#" method="GET">
    <Fields>
      <From>
        <Field defaultValue="Москва" reverse destination="Mow" />
      </From>
      <FormField>
        <Field placeholder="Город прибытия" />
      </FormField>
    </Fields>
    <Fields>
      <DatePicker>
        <DataPicker />
      </DatePicker>
      <FormFieldLast>
        <ContentSelect>
          <Select />
        </ContentSelect>
        <SearchButton type="submit">Найти билеты</SearchButton>
      </FormFieldLast>
    </Fields>
  </Forms>
);
