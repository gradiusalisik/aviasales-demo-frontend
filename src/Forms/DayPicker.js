import React from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';
import './dayPicker.css';
import { MONTHS, WEEKDAYS_SHORT } from './index.mock';

export default props => (
  <DayPicker
    locale="ru"
    months={MONTHS}
    weekdaysShort={WEEKDAYS_SHORT}
    className="dataPicker"
    fromMonth={props.fromMonth}
    modifiers={props.modifiers}
    firstDayOfWeek={1}
    onDayClick={props.onDayClick}
    selectedDays={props.selectedDays}
    disabledDays={props.disabledDays}
    renderDay={props.renderDay}
    onDayMouseEnter={props.handleDayMouseEnter}
  />
);
