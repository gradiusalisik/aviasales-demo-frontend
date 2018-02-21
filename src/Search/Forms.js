import React from "react";
import Field from "../Forms/Field";
import DataPicker from "../Forms/DataPicker";
import Select from "../Forms/Select";
import { ButtonSearch } from "../UI/Button";
import styled from "styled-components";
import media from "../utils/media";

const Forms = styled.form`
  width: 100%;
  overflow: hidden;
  border-radius: 4px;

  ${media.xl`
    display: flex;
    justify-content: center;
  `};
`;

const Wrapper = styled.div`
  display: flex;

  ${media.xl`
    width: 100%;
  `};
`;

const WrapField = styled.div`
  margin-bottom: 2px;
  width: calc((100% - 2px) / 2);

  &:not(:last-child) {
    margin-right: 2px;
  }

  ${media.xl`
    margin-bottom: 0;
    margin-right: 2px;
    width: 100%;
  `};
`;

const WrapDate = styled(WrapField)`
  margin-bottom: 0;
`;

const WrapFieldLast = styled(WrapField)`
  margin-bottom: 0;
  display: flex;
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
    <Wrapper>
      <WrapField>
        <Field defaultValue="Москва" firstField text="Mow" />
      </WrapField>
      <WrapField>
        <Field placeholder="Город прибытия" />
      </WrapField>
    </Wrapper>
    <Wrapper>
      <WrapDate>
        <DataPicker />
      </WrapDate>
      <WrapFieldLast>
        <ContentSelect>
          <Select />
        </ContentSelect>
        <ButtonSearch type="submit">Найти билеты</ButtonSearch>
      </WrapFieldLast>
    </Wrapper>
  </Forms>
);
