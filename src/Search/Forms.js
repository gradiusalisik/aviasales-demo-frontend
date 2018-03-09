import React, { Component } from 'react';
import styled from 'styled-components';
import Field from '../Forms/Field';
import DataPicker from '../Forms/DataPicker';
import Select from '../Forms/Select';
import ChoiceQuantity from '../Forms/ChoiceQuantity';
import { ButtonSearch } from '../UI/Button';
import media from '../utils/media';

const FormsStyled = styled.form`
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
    border-top-right-radius: 0;
  `};
`;

const From = FormField.extend`
  border-top-left-radius: 6px;
  overflow: hidden;

  ${media.xl`
    max-width: 226px;
    border-bottom-left-radius: 6px;
  `};
`;

const To = FormField.extend`
  overflow: hidden;

  ${media.md`
    border-top-right-radius: 6px;
  `};

  ${media.xl`
    border-top-right-radius: 0;
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

export default class Forms extends Component {
  state = {
    quantitySelect: 1,
    isChecked: false,
  };

  handleChangeClass = () => {
    this.setState(state => ({
      isChecked: !state.isChecked,
    }));
  };

  handleChangeCounter = (delta) => {
    this.setState(state => ({
      quantitySelect: state.quantitySelect + delta,
    }));
  };

  render() {
    const { isChecked, quantitySelect } = this.state;
    const classFly = isChecked ? 'бизнес' : 'эконом';

    return (
      <FormsStyled action="#" method="GET">
        <Fields>
          <From>
            <Field placeholder="Город отправления" reverse />
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
              <Select quantity={quantitySelect} classFly={classFly} kind="simple">
                <ChoiceQuantity
                  onChangeCheckbox={this.handleChangeClass}
                  onChangeCounter={this.handleChangeCounter}
                  disabled={quantitySelect === 9}
                />
              </Select>
            </ContentSelect>
            <SearchButton type="submit">Найти билеты</SearchButton>
          </FormFieldLast>
        </Fields>
      </FormsStyled>
    );
  }
}
