import React, { Component } from 'react';
import styled from 'styled-components';
import DownshiftAirports from '../Forms/DownshiftAirports';
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
  ${media.md`
    border-top-left-radius: 6px;
  `};

  ${media.xl`
    border-bottom-left-radius: 6px;
    max-width: 226px;
  `};
`;

const To = FormField.extend`
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

const showDestination = (value, destination) => (value.length > 0 ? destination : '');

export default class Forms extends Component {
  state = {
    quantitySelect: 1,
    isChecked: false,
    from: {
      value: '',
      destination: '',
    },
    to: {
      value: '',
      destination: '',
    },
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

  handleSelection = (id, selection) => {
    this.setState({
      [id]: {
        value: selection.city,
        destination: selection.code,
      },
    });
  };

  handleChangeInput = (id, value) => {
    this.setState({
      [id]: {
        value,
      },
    });
  };

  handleClickReverseInputs = () => {
    const { from, to } = this.state;

    this.setState({
      from: to,
      to: from,
    });
  };

  render() {
    const { isChecked, quantitySelect } = this.state;
    const classFly = isChecked ? 'бизнес' : 'эконом';
    const destinationTo = showDestination(this.state.to.value, this.state.to.destination);
    const destinationFrom = showDestination(this.state.from.value, this.state.from.destination);

    return (
      <FormsStyled action="#" method="GET">
        <Fields>
          <From>
            <DownshiftAirports
              id="from"
              placeholder="Город отправления"
              reverse
              handleChangeInput={this.handleChangeInput}
              handleSelection={this.handleSelection}
              onClickReverse={this.handleClickReverseInputs}
              value={this.state.from.value}
              destination={destinationFrom}
            />
          </From>
          <To>
            <DownshiftAirports
              id="to"
              placeholder="Город прибытия"
              handleChangeInput={this.handleChangeInput}
              handleSelection={this.handleSelection}
              value={this.state.to.value}
              destination={destinationTo}
            />
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
