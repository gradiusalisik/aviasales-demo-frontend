import React, { Component } from "react";
import enhanceWithClickOutside from "react-click-outside";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";
import { DateUtils } from "react-day-picker";
import { prices } from "./index.mock";
import Field from "./Field";
import DayPicker from "./DayPicker";
import Icon from "../Icon";
import Toggle from "../UI/Toggle";
import styled from "styled-components";
import media from "../utils/media";

// TODO поправить датапикер

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

const Arrival = Content.extend``;

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
    isOpen: false,
    from: undefined,
    to: undefined
  };

  handleClickDay = () => {
    this.setState({
      isOpen: true
    });
  };

  handleDaySelection = (day, { selected, disabled }) => {
    if (disabled) {
      return;
    }

    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    if (range.to !== undefined) {
      this.setState({
        isOpen: false
      });
    }
  };

  handleClickOutside = () => {
    this.setState({
      isOpen: false
    });
  };

  clearArrivalDate = () => {
    this.setState({ to: undefined });
  };

  formatted = date => {
    if (!date) {
      return "";
    }
    return format(new Date(date), "D MMMM, dd", { locale: ruLocale });
  };

  renderDay(day) {
    const date = day.getDate();
    const dateStyle = {
      fontSize: 18,
      fontWeight: 900,
      textTransform: "uppercase",
      marginBottom: "5px"
    };
    const priceCheapStyle = {
      fontSize: "10px",
      textAlign: "center",
      color: "#00C455",
      fontWeight: 500
    };
    const priceStyle = {
      fontSize: "10px",
      textAlign: "center",
      color: "#A0B0B9",
      fontWeight: 500
    };
    const cellStyle = {};
    return (
      <div style={cellStyle}>
        <div style={dateStyle}>{date}</div>
        {prices[date] &&
          prices[date].map((price, i) => (
            <div key={i} style={price.cheap ? priceCheapStyle : priceStyle}>
              {price.text}
            </div>
          ))}
      </div>
    );
  }

  render() {
    const { from, to, isOpen } = this.state;
    const modifiers = { start: from, end: to };
    const fromFormatted = this.formatted(from);
    const toFormatted = this.formatted(to);
    return (
      <Picker>
        <Container>
          <Departure>
            <DepartureField
              placeholder="Туда"
              onClick={this.handleClickDay}
              value={fromFormatted}
            />
            <IconCalendar icon="calendar" />
          </Departure>
          <Arrival>
            <ArrivalField
              placeholder="Обратно"
              onClick={this.handleClickDay}
              value={toFormatted}
            />
            {to ? (
              <ClearArrivalDate onClick={this.clearArrivalDate}>
                <IconClear icon="close" />
              </ClearArrivalDate>
            ) : (
              <IconCalendar icon="calendar" />
            )}
          </Arrival>
        </Container>
        <Calendar isOpen={isOpen}>
          <DayPickerStyled
            className="dataPickers"
            onDayClick={this.handleDaySelection}
            modifiers={modifiers}
            selectedDays={[from, { from, to }]}
            disabledDays={{ before: new Date() }}
            renderDay={this.renderDay}
          />
          <Toggle text="Показать цены в одну сторону" id="toggle" />
        </Calendar>
      </Picker>
    );
  }
}

export default enhanceWithClickOutside(DataPicker);
