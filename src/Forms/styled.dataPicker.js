import prev from "./images/datapiker-arrow.svg";
import next from "./images/datapiker-arrow.svg";
import active from "./images/datapicker-active.svg";
import styled from "styled-components";

export const Picker = styled.div`
  .dataPicker {
    width: 100%;

    .DayPicker-wrapper {
      padding-top: 16px;
    }

    .DayPicker-Weekday {
      color: #4a4a4a !important;
      font-weight: 700 !important;
      text-transform: uppercase !important;
    }

    .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      z-index: -3;
      background-color: #f4f4f4 !important;
      color: #4a4a4a !important;
    }

    .DayPicker-Day {
      border-radius: 0 !important;
      padding: 0;
      padding-top: 5px;
      width: 46px;
      height: 46px;
      vertical-align: top;
      }
    }

    .DayPicker-Day--start {
      border: 1px solid #00ace2 !important;
      background: #effbff !important;
      color: #4a4a4a !important;
    }

    .DayPicker-Day.DayPicker-Day--start.DayPicker-Day--end.DayPicker-Day--selected:after {
      display: none;
    }

    .DayPicker-Day.DayPicker-Day--start.DayPicker-Day--end.DayPicker-Day--selected {
      background-color: #00ace2 !important;
      color: #fff !important;
    }

    .DayPicker-Day:not(.DayPicker-Day--disabled) {
      color: #4a4a4a !important;
      font-weight: 700 !important;
      border: 1px solid transparent !important;
    }

    .DayPicker-Day--end,
    .DayPicker-Day--start {
      position: relative;
      border: 1px solid #00ace2 !important;
      background: transparent !important;
      color: #4a4a4a !important;
      border-radius: 5px 0 0 5px;
    }

    .DayPicker-Day--start:before,
    .DayPicker-Day--end:before {
      position: absolute;
      z-index: -3;
      top: 0;
      left: 0;
      background-color: #f4f4f4;
      content: '';
      width: 100%;
      height: 100%;
    }
    .DayPicker-Day--end:after {
      position: absolute;
      z-index: -2;
      top: 0;
      left: -3px;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: url("${active}");
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 100% 100%;
      transform: rotate(180deg);
      box-shadow: -5px 0 0 0 white;
    }

    .DayPicker-Day--start:after {
      position: absolute;
      z-index: -2;
      top: 0;
      left: 3px;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: url("${active}");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: left center;
      box-shadow: -5px 0 0 0 white;
    }

    .DayPicker-Caption {
      margin-bottom: 22px;
      & > div {
        text-align: center;
        font-weight: 700;
        line-height: 18px;
        font-size: 14px;
        text-transform: uppercase;
      }
    }

    .DayPicker-NavButton--prev {
      left: 4px;
      top: 18px;
      width: 15px;
      height: 15px;
      background-image: url("${prev}")
    }

    .DayPicker-NavButton--next {
      width: 15px;
      height: 15px;
      right: 4px;
      top: 18px;
      transform: rotate(180deg);
      background-image: url("${next}")
    }

    .DayPicker-Month {
      margin: 0;
      width: 100%;
    }
  }

`;
