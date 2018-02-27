import React, { Component } from "react";
import Field from "./Field";
import DataPicker from "./DataPicker";
import Select from "./Select";
import ChoiceQuantity from "./ChoiceQuantity";
import Button from "./Button";
import { Link } from "react-router-dom";
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
  ButtonSearch,
  Container
} from "./styled";

export default class Forms extends Component {
  state = {
    quantitySelect: 1,
    isChecked: false
  };

  handleChangeClass = () => {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
  };

  handleChangeCounter = delta => {
    this.setState(state => ({
      quantitySelect: state.quantitySelect + delta
    }));
  };

  render() {
    const { isChecked, quantitySelect } = this.state;
    const classFly = isChecked ? "бизнес" : "эконом";
    return (
      <FormsStyled action="#" method="GET">
        <Title>Поиск дешевых авиабилетов</Title>
        <SubTitle>Лучший способ купить авиабилеты дешево</SubTitle>
        <Container id="formsForPortal">
          <Content>
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
              <Selects>
                <Select quantity={quantitySelect} classFly={classFly}>
                  <ChoiceQuantity
                    onChangeCheckbox={this.handleChangeClass}
                    onChangeCounter={this.handleChangeCounter}
                  />
                </Select>
              </Selects>
            </Fields>
          </Content>
        </Container>
        <ButtonSearch>
          <Link to="/search">
            <Button text="Найти билеты" icon="aero" />
          </Link>
        </ButtonSearch>
      </FormsStyled>
    );
  }
}
