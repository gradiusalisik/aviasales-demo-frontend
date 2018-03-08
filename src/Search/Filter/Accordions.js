import React, { Component } from 'react';
import Accordion from '../../UI/Accordion';
import Checkboxes from './Checkboxes';
import TimeFly from './TimeFly';
import TimePath from './TimePath';
import Checkbox from '../../UI/Checkbox';
import AccordionCheckboxes from './AccordionCheckboxes';
import list from './index.mock';
import { defaultDates, defaultTimes } from './reset';

import {
  AccordionsStyled,
  AccordionGroup,
  Clear,
  TextClear,
  IconClear,
  IconReset,
  Info,
  Description,
  Reset,
} from './styled';

export default class Accordions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxFilterTransfer: list.transfer,
      checkboxFilterAlians: list.airCompany.alians.list,
      checkboxFilterCompany: list.airCompany.company.list,
      checkedIdsTransfer: [],
      checkedIdsAlians: [],
      checkedIdsCompany: [],
      outDeparture: {
        left: list.departure.outLeftDate,
        right: list.departure.outRightDate,
      },
      inDeparture: {
        left: list.departure.inLeftDate,
        right: list.departure.inRightDate,
      },
      outArrival: {
        left: list.arrival.outLeftDate,
        right: list.arrival.outRightDate,
      },
      inArrival: {
        left: list.arrival.inLeftDate,
        right: list.arrival.inRightDate,
      },
      outTime: {
        left: list.timeOut.leftTime,
        right: list.timeOut.rightTime,
      },
      inTime: {
        left: list.timeIn.leftTime,
        right: list.timeIn.rightTime,
      },
    };

    this.baseState = this.state;
  }

  handleChangeFilter = checkedIds => id => ({ target }) => {
    const { checked } = target;

    if (checked) {
      this.state[checkedIds].push(id);
      this.setState(state => ({ [checkedIds]: state[checkedIds] }));
    } else {
      this.setState(state => ({
        [checkedIds]: state[checkedIds].filter(checkbox => checkbox !== id),
      }));
    }
  };

  handleChangeAllCheckbox = (checkboxFilter, checkedIds) => ({ target }) => {
    const newCheckboxIds = target.checked
      ? this.state[checkboxFilter].map(checkbox => checkbox.id)
      : [];

    this.setState({
      [checkedIds]: newCheckboxIds,
    });
  };

  handleResetFilter = (checkBoxFilter, checkedIds) => () => {
    const that = this;
    checkBoxFilter.map((filter, key) =>
      that.setState({
        [checkedIds[key]]: this.state[filter].map(checkbox => checkbox.id),
      }));
  };

  handleChangeRange = name => (value) => {
    this.setState({
      [name]: {
        left: value[0],
        right: value[1],
      },
    });
  };

  handleResetRange = data => () => {
    this.setState(data);
  }

  handleResetAllFitler = () => {
    this.setState(this.baseState);
  };

  render() {
    const isAllCheckedAlias =
      this.state.checkboxFilterAlians.length === this.state.checkedIdsAlians.length;
    const isAllCheckedCompany =
      this.state.checkboxFilterCompany.length === this.state.checkedIdsCompany.length;

    const isOutTimeRange =
      list.timeOut.leftTime === this.state.outTime.left &&
      list.timeOut.rightTime === this.state.outTime.right;
    const isInTimeRange =
      list.timeIn.leftTime === this.state.inTime.left &&
      list.timeIn.rightTime === this.state.inTime.right;

    const isDepartureRange =
      list.departure.outLeftDate === this.state.outDeparture.left &&
      list.departure.outRightDate === this.state.outDeparture.right &&
      list.departure.inLeftDate === this.state.inDeparture.left &&
      list.departure.inRightDate === this.state.inDeparture.right;

    const isArrivalRange =
      list.arrival.outLeftDate === this.state.outArrival.left &&
      list.arrival.outRightDate === this.state.outArrival.right &&
      list.arrival.inLeftDate === this.state.inArrival.left &&
      list.arrival.inRightDate === this.state.inArrival.right;

    return (
      <AccordionsStyled>
        <AccordionCheckboxes
          list={this.state.checkboxFilterTransfer}
          handleChangeAllCheckbox={this.handleChangeAllCheckbox(
            'checkboxFilterTransfer',
            'checkedIdsTransfer',
          )}
          handleResetFilter={this.handleResetFilter(
            ['checkboxFilterTransfer'],
            ['checkedIdsTransfer'],
          )}
          handleChangeFilter={this.handleChangeFilter('checkedIdsTransfer')}
          checkedIds={this.state.checkedIdsTransfer}
          text="ПЕРЕСАДКИ"
          open
        />
        <AccordionGroup>
          <Accordion text="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" open>
            <TimeFly
              from={list.departure.from}
              outLeftDate={this.state.outDeparture.left}
              outRightDate={this.state.outDeparture.right}
              minOut={list.departure.outLeftDate}
              maxOut={list.departure.outRightDate}
              to={list.departure.to}
              minIn={list.departure.inLeftDate}
              maxIn={list.departure.inRightDate}
              inLeftDate={this.state.inDeparture.left}
              inRightDate={this.state.inDeparture.right}
              handleChangeRangeOut={this.handleChangeRange('outDeparture')}
              handleChangeRangeIn={this.handleChangeRange('inDeparture')}
            />
            <TimeFly
              from={list.arrival.from}
              outLeftDate={this.state.outArrival.left}
              outRightDate={this.state.outArrival.right}
              minOut={list.arrival.outLeftDate}
              maxOut={list.arrival.outRightDate}
              to={list.arrival.to}
              minIn={list.arrival.inLeftDate}
              maxIn={list.arrival.inRightDate}
              inLeftDate={this.state.inArrival.left}
              inRightDate={this.state.inArrival.right}
              handleChangeRangeOut={this.handleChangeRange('outArrival')}
              handleChangeRangeIn={this.handleChangeRange('inArrival')}
            />
          </Accordion>
          {(!isDepartureRange || !isArrivalRange) && (
            <Reset onClick={this.handleResetRange(defaultDates)}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>
        <Accordion text="Багаж">in Future</Accordion>
        <Accordion text="Длительность пересадки">in Future</Accordion>
        <AccordionGroup>
          <Accordion text="Время в пути" open>
            <TimePath
              from={list.timeOut.from}
              to={list.timeOut.to}
              leftTime={this.state.outTime.left}
              rightTime={this.state.outTime.right}
              min={list.timeOut.leftTime}
              max={list.timeOut.rightTime}
              handleChangeRange={this.handleChangeRange('outTime')}
            />
            <TimePath
              from={list.timeIn.from}
              to={list.timeIn.to}
              leftTime={this.state.inTime.left}
              rightTime={this.state.inTime.right}
              min={list.timeIn.leftTime}
              max={list.timeIn.rightTime}
              handleChangeRange={this.handleChangeRange('inTime')}
            />
          </Accordion>
          {(!isOutTimeRange || !isInTimeRange) && (
            <Reset onClick={this.handleResetRange(defaultTimes)}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>
        <AccordionGroup>
          <Accordion text="Авиакомпании" open quantity={43}>
            <Info>
              <Checkbox id="several-company" label="Несколько авиакомпаний" />
              <Description>
                Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая
                выбранную
              </Description>
            </Info>
            <Checkboxes
              list={this.state.checkboxFilterAlians}
              id="aliansAll"
              handleChangeAllCheckbox={this.handleChangeAllCheckbox(
                'checkboxFilterAlians',
                'checkedIdsAlians',
              )}
              handleChangeFilter={this.handleChangeFilter('checkedIdsAlians')}
              checkedIds={this.state.checkedIdsAlians}
              title={list.airCompany.alians.title}
              isAllChecked={isAllCheckedAlias}
            />
            <Checkboxes
              list={this.state.checkboxFilterCompany}
              id="companyAll"
              handleChangeAllCheckbox={this.handleChangeAllCheckbox(
                'checkboxFilterCompany',
                'checkedIdsCompany',
              )}
              handleChangeFilter={this.handleChangeFilter('checkedIdsCompany')}
              checkedIds={this.state.checkedIdsCompany}
              title={list.airCompany.company.title}
              isAllChecked={isAllCheckedCompany}
            />
          </Accordion>
          {(!isAllCheckedAlias || !isAllCheckedCompany) && (
            <Reset
              onClick={this.handleResetFilter(
                ['checkboxFilterAlians', 'checkboxFilterCompany'],
                ['checkedIdsAlians', 'checkedIdsCompany'],
              )}
            >
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>
        <Accordion text="аэропорты">in Future</Accordion>
        <Accordion text="аэропорт пересадки" quantity={71}>
          in Future
        </Accordion>
        <Accordion text="агенства" quantity={26}>
          in Future
        </Accordion>
        <Clear onClick={this.handleResetAllFitler}>
          <TextClear>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</TextClear>
          <IconClear icon="clear" />
        </Clear>
      </AccordionsStyled>
    );
  }
}
