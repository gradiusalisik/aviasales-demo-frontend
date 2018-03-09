import React, { Component } from 'react';
import DataPicker from './DataPicker';
import Select from './Select';
import ChoiceQuantity from './ChoiceQuantity';
import LinkSearch from './LinkSearch';
import DownshiftAirports from './DownshiftAirports';
import {
  FormsStyled,
  Title,
  SubTitle,
  Content,
  FormFields as Fields,
  Selects,
  DatePicker,
  From,
  To,
  LinkContent,
  Container,
} from './styled';

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
        <Title>Поиск дешевых авиабилетов</Title>
        <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
        <Container id="formsForPortal">
          <Content>
            <Fields>
              <From>
                <DownshiftAirports placeholder="Город вылета" reverse />
              </From>
              <To>
                <DownshiftAirports placeholder="Город прибытия" kind="simpleTo" />
              </To>
            </Fields>
            <Fields>
              <DatePicker>
                <DataPicker kind="simpleDate" />
              </DatePicker>
              <Selects>
                <Select quantity={quantitySelect} classFly={classFly}>
                  <ChoiceQuantity
                    onChangeCheckbox={this.handleChangeClass}
                    onChangeCounter={this.handleChangeCounter}
                    disabled={quantitySelect === 9}
                  />
                </Select>
              </Selects>
            </Fields>
          </Content>
        </Container>
        <LinkContent>
          <LinkSearch to="/search" text="Найти билеты" icon="aero" />
        </LinkContent>
      </FormsStyled>
    );
  }
}
