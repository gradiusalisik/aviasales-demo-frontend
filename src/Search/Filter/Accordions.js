import React, { Component } from 'react';
import get from 'lodash/get';
import Accordion from '../../UI/Accordion';
import Checkboxes from './Checkboxes';
import TimeFly from './TimeFly';
import TimePath from './TimePath';
import Checkbox from '../../UI/Checkbox';
import AccordionCheckboxes from './AccordionCheckboxes';
import list from './index.mock';
import {
  defaultDates,
  defaultTimes,
  defaultDuration,
  defaultTransfer,
  defaultBaggage,
  defaultAviacompanies,
  defaultPartners,
} from './reset';
import {
  getStatusDuration,
  getStatusTransfers,
  getStatusPartners,
  getStatusArrivalRange,
  getStatusDepartureRange,
  getStatusInTimeRange,
  getStatusOutTimeRange,
  getStatusCheckedAlias,
  getStatusCheckedCompany,
} from './helpers/accordionsHelper';

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
  state = {
    checkboxFilterTransfer: list.transfer,
    checkedIdsTransfer: get(defaultTransfer, 'checkedIdsTransfer', []),
    checkboxFilterAlians: list.airCompany.alians.list,
    checkboxFilterCompany: list.airCompany.company.list,
    checkboxFilterPartners: list.partners,
    checkboxFilterBaggage: list.baggage,
    checkedIdsBaggage: get(defaultBaggage, 'checkedIdsBaggage', []),
    checkedIdsPartners: get(defaultPartners, 'checkedIdsPartners', []),
    checkedIdsAlians: get(defaultAviacompanies, 'checkedIdsAlians', []),
    checkedIdsCompany: get(defaultAviacompanies, 'checkedIdsCompany', []),
    checkedOneCheckbox: false,
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
    duration: {
      left: list.duration.leftTime,
      right: list.duration.rightTime,
    },
  };

  baseState = this.state;

  handleChangeFilter = checkedIds => id => ({ target }) => {
    const { checked } = target;

    if (checked) {
      this.setState(state => ({ [checkedIds]: state[checkedIds].concat(id) }));
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

  handleResetFilter = data => () => {
    this.setState(data);
  };

  handleChangeRange = name => (value) => {
    this.setState({
      [name]: {
        left: value[0],
        right: value[1],
      },
    });
  };

  handleResetAllFitler = () => {
    this.setState(this.baseState);
  };

  quantityAviaCompany = (isAllCheckedAlias, isAllCheckedCompany) => {
    const allCompanies =
      this.state.checkboxFilterAlians.length + this.state.checkboxFilterCompany.length;
    const checkedCompanies =
      this.state.checkedIdsAlians.length + this.state.checkedIdsCompany.length;

    if (isAllCheckedAlias && isAllCheckedCompany) {
      return allCompanies;
    }

    return `${checkedCompanies} / ${allCompanies}`;
  };

  handleChangeOneCheckbox = () => {
    this.setState(state => ({
      checkedOneCheckbox: !state.checkedOneCheckbox,
    }));
  };

  render() {
    const isAllCheckedAlias = getStatusCheckedAlias(this.state);

    const isAllCheckedCompany = getStatusCheckedCompany(this.state);

    const isOutTimeRange = getStatusOutTimeRange(list, this.state);

    const isInTimeRange = getStatusInTimeRange(list, this.state);

    const isDepartureRange = getStatusDepartureRange(list, this.state);

    const isArrivalRange = getStatusArrivalRange(list, this.state);

    const isDuration = getStatusDuration(list, this.state);

    const quantityAviaCompany = this.quantityAviaCompany(isAllCheckedAlias, isAllCheckedCompany);

    const isAllPartners = getStatusPartners(this.state);

    const isAllTransfers = getStatusTransfers(this.state);

    const isDisabledClearAllFilter =
      isAllCheckedAlias &&
      isAllCheckedCompany &&
      isOutTimeRange &&
      isDepartureRange &&
      isAllPartners &&
      isArrivalRange &&
      isAllTransfers &&
      isDuration;

    return (
      <AccordionsStyled>
        <AccordionCheckboxes
          id="all-transfers"
          list={this.state.checkboxFilterTransfer}
          handleChangeAllCheckbox={this.handleChangeAllCheckbox(
            'checkboxFilterTransfer',
            'checkedIdsTransfer',
          )}
          handleResetFilter={this.handleResetFilter(defaultTransfer)}
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
            <Reset onClick={this.handleResetFilter(defaultDates)}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>
        <AccordionCheckboxes
          list={this.state.checkboxFilterBaggage}
          id="baggage-id"
          handleChangeAllCheckbox={this.handleChangeAllCheckbox(
            'checkboxFilterBaggage',
            'checkedIdsBaggage',
          )}
          handleResetFilter={this.handleResetFilter(defaultBaggage)}
          handleChangeFilter={this.handleChangeFilter('checkedIdsBaggage')}
          checkedIds={this.state.checkedIdsBaggage}
          text="Багаж"
        />
        <AccordionGroup>
          <Accordion text="Длительность пересадки">
            <TimePath
              leftTime={this.state.duration.left}
              rightTime={this.state.duration.right}
              min={list.duration.leftTime}
              max={list.duration.rightTime}
              handleChangeRange={this.handleChangeRange('duration')}
            />
          </Accordion>
          {!isDuration && (
            <Reset onClick={this.handleResetFilter(defaultDuration)}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>
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
            <Reset onClick={this.handleResetFilter(defaultTimes)}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>
        <AccordionGroup>
          <Accordion text="Авиакомпании" open quantity={quantityAviaCompany}>
            <Info>
              <Checkbox
                id="several-companies"
                label="Несколько авиакомпаний"
                checked={this.state.checkedOneCheckbox}
                onChange={this.handleChangeOneCheckbox}
              />
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
            <Reset onClick={this.handleResetFilter(defaultAviacompanies)}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>
        <Accordion text="аэропорты">in Future</Accordion>
        <Accordion text="аэропорт пересадки" quantity={71}>
          in Future
        </Accordion>
        <AccordionCheckboxes
          list={this.state.checkboxFilterPartners}
          id="all-partners"
          handleChangeAllCheckbox={this.handleChangeAllCheckbox(
            'checkboxFilterPartners',
            'checkedIdsPartners',
          )}
          handleResetFilter={this.handleResetFilter(defaultPartners)}
          handleChangeFilter={this.handleChangeFilter('checkedIdsPartners')}
          checkedIds={this.state.checkedIdsPartners}
          text="агенства"
          isQuantity
        />
        <Clear onClick={this.handleResetAllFitler} disabled={isDisabledClearAllFilter}>
          <TextClear>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</TextClear>
          <IconClear icon="clear" />
        </Clear>
      </AccordionsStyled>
    );
  }
}
