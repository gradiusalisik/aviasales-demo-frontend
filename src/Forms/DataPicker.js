import React, { Component } from "react";
import enhanceWithClickOutside from "react-click-outside";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import { DateUtils } from "react-day-picker";
import { prices, priceCheapStyle, priceStyle } from "./index.mock";
import Field from "./Field";
import DayPicker from "./DayPicker";
import Icon from "../Icon";
import Toggle from "../UI/Toggle";
import styled, { css } from "styled-components";
import media from "../utils/media";

const Picker = styled.div`
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.md`
    border-bottom-left-radius: 6px;
    overflow: hidden;
  `};

  ${media.xl`
    border-bottom-left-radius: 0;
  `};
`;

const DepartureField = styled(Field)``;

const ArrivalField = styled(Field)``;

const Content = styled.div`
  position: relative;
  width: calc((100% - 2px) / 2);
  height: 100%;
`;

const Departure = Content.extend`
  margin-right: 2px;
`;

const Arrival = Content.extend`
  ${props =>
    props.disabled &&
    css`
      opacity: 0.9;
      pointer-events: none;
      cursor: default;
    `};
`;

const DayPickerStyled = styled(DayPicker)``;

const Calendar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1001;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 16px;
  display: ${props => (props.isOpen ? "block" : "none")};
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
`;

const Icons = styled(Icon)`
  color: #1ba6d2;
`;

const IconCalendar = Icons.extend`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 17px;
  height: 20px;
`;

const IconClear = Icons.extend`
  width: 14px;
  height: 14px;
`;

const ClearArrivalDate = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
`;

class DataPicker extends Component {
  state = {
    isOpen: undefined,
    from: new Date(),
    to: "",
    isChecked: false,
    enteredTo: ""
  };

  handleClickDay = data => () => {
    this.setState({ isOpen: data });
  };

  isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  handleDaySelectionFrom = day => {
    this.setState({
      from: day,
      to: "",
      enteredTo: "",
      isOpen: "to"
    });
  };

  handleDaySelectionTo = day => {
    this.setState({
      to: day,
      enteredTo: day,
      isOpen: undefined
    });
  };

  handleClickOutside = () => {
    this.setState({
      isOpen: undefined
    });
  };

  clearArrivalDate = () => {
    this.setState({ to: "" });
  };

  formatted = date =>
    date && format(new Date(date), "D MMMM, dd", { locale: ruLocale });

  handleDayMouseEnter = day => {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day
      });
    }
  };

  handleToggle = () => {
    this.setState(state => ({
      isChecked: !state.isChecked
    }));
  };

  renderDay(day) {
    const date = day.getDate();

    return (
      <div className="cells">
        <div className="date">{date}</div>
        {prices[date] &&
          prices[date].map((price, key) => (
            <div key={key} style={price.isCheap ? priceCheapStyle : priceStyle}>
              {price.text}
            </div>
          ))}
      </div>
    );
  }

  render() {
    const { from, to, isOpen, enteredTo } = this.state;
    const modifiers = { start: from, end: to };
    const fromFormatted = this.formatted(from);
    const toFormatted = this.formatted(to);
    const disabledDays = { before: new Date() };
    const selectedDays = [from, { from, to: enteredTo }];
    return (
      <Picker>
        <Container>
          <Departure>
            <DepartureField
              placeholder="Туда"
              onClick={this.handleClickDay("from")}
              value={fromFormatted}
            />
            <IconCalendar icon="calendar" />
          </Departure>
          <Arrival disabled={this.state.isChecked}>
            <ArrivalField
              placeholder="Обратно"
              onClick={this.handleClickDay("to")}
              value={toFormatted}
            />
            {to ? (
              <ClearArrivalDate onClick={this.clearArrivalDate} type="button">
                <IconClear icon="close" />
              </ClearArrivalDate>
            ) : (
              <IconCalendar icon="calendar" />
            )}
          </Arrival>
        </Container>
        <Calendar isOpen={isOpen === "from"}>
          <DayPickerStyled
            className="dataPickers"
            onDayClick={this.handleDaySelectionFrom}
            modifiers={modifiers}
            selectedDays={selectedDays}
            disabledDays={disabledDays}
            renderDay={this.renderDay}
            handleDayMouseEnter={this.handleDayMouseEnter}
          />
          <Toggle
            text="Показать цены в одну сторону"
            id="toggle"
            onChange={this.handleToggle}
          />
        </Calendar>
        <Calendar isOpen={isOpen === "to"}>
          <DayPickerStyled
            className="dataPickers"
            onDayClick={this.handleDaySelectionTo}
            modifiers={modifiers}
            selectedDays={selectedDays}
            disabledDays={{ before: from }}
            renderDay={this.renderDay}
            handleDayMouseEnter={this.handleDayMouseEnter}
          />
        </Calendar>
      </Picker>
    );
  }
}

export default enhanceWithClickOutside(DataPicker);
