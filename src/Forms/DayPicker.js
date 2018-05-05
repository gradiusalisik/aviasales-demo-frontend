import React from 'react';
import { PropTypes as pt } from 'prop-types';
import DayPickers from 'react-day-picker/DayPicker';
import styled from 'styled-components';
import 'react-day-picker/lib/style.css';
import './dayPicker.css';
import { MONTHS, WEEKDAYS_SHORT } from './index.mock';

const DayPickerStyled = styled(DayPickers)``;

const DayPicker = props => (
  <DayPickerStyled
    locale="ru"
    months={MONTHS}
    weekdaysShort={WEEKDAYS_SHORT}
    className="dataPicker"
    modifiers={props.modifiers}
    firstDayOfWeek={1}
    onDayClick={props.onDayClick}
    selectedDays={props.selectedDays}
    disabledDays={props.disabledDays}
    renderDay={props.renderDay}
    onDayMouseEnter={props.handleDayMouseEnter}
  />
);

DayPicker.propTypes = {
  modifiers: pt.shape(),
  disabledDays: pt.shape(),
  onDayClick: pt.func,
  selectedDays: pt.arrayOf(pt.shape()),
  renderDay: pt.func,
  handleDayMouseEnter: pt.func,
};

DayPicker.defaultProps = {
  modifiers: {},
  disabledDays: {},
  onDayClick: () => {},
  selectedDays: [],
  renderDay: () => {},
  handleDayMouseEnter: () => {},
};

export default DayPicker;
