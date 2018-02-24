import React from "react";
import DayPicker from "react-day-picker/DayPicker";
import "react-day-picker/lib/style.css";
import { Picker } from "./styled.dataPicker";
import { MONTHS, WEEKDAYS_SHORT } from "./index.mock";

export default props => (
  <Picker>
    <DayPicker
      locale={"ru"}
      months={MONTHS}
      weekdaysShort={WEEKDAYS_SHORT}
      className="dataPicker"
      modifiers={props.modifiers}
      firstDayOfWeek={1}
      onDayClick={(day, prop) => props.onDayClick(day, prop)}
      selectedDays={props.selectedDays}
      disabledDays={props.disabledDays}
      renderDay={props.renderDay}
    />
  </Picker>
);
