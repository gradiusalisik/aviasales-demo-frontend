import React, { Component } from 'react';
import Accordion from '../../UI/Accordion';
import Checkboxes from './Checkboxes';
import TimeFly from './TimeFly';
import TimePath from './TimePath';
import Checkbox from '../../UI/Checkbox';
import AccordionCheckboxes from './AccordionCheckboxes';
import list from './index.mock';
import { getStatusCheckboxes, getStatusDateRange, getStatusTimeRange } from './helpers/accordions';

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

const defaultChecked = arr => arr.map(checkbox => checkbox.id);

export default class Accordions extends Component {
  state = {
    transfer: {
      filters: list.transfer,
      checkedIds: defaultChecked(list.transfer) || [],
    },
    partners: {
      filters: list.partners,
      checkedIds: defaultChecked(list.partners) || [],
    },
    baggage: {
      filters: list.baggage,
      checkedIds: defaultChecked(list.baggage) || [],
    },
    alliance: {
      filters: list.airCompany.alliance.list,
      checkedIds: defaultChecked(list.airCompany.alliance.list) || [],
    },
    company: {
      filters: list.airCompany.company.list,
      checkedIds: defaultChecked(list.airCompany.company.list) || [],
    },
    duration: {
      begin: list.duration.beginTime,
      end: list.duration.endTime,
    },
    outTime: {
      begin: list.outTime.beginTime,
      end: list.outTime.endTime,
    },
    inTime: {
      begin: list.inTime.beginTime,
      end: list.inTime.endTime,
    },
    outDeparture: {
      begin: list.departure.outDate.begin,
      end: list.departure.outDate.end,
    },
    inDeparture: {
      begin: list.departure.inDate.begin,
      end: list.departure.inDate.end,
    },
    outArrival: {
      begin: list.arrival.outDate.begin,
      end: list.arrival.outDate.end,
    },
    inArrival: {
      begin: list.arrival.inDate.begin,
      end: list.arrival.inDate.end,
    },
    checkedOneCheckbox: false,
  };

  initialState = this.state;

  handleChangeFilterCheckboxes = name => id => ({ target }) => {
    const { checked } = target;

    if (checked) {
      this.setState(state => ({
        [name]: {
          ...state[name],
          checkedIds: state[name].checkedIds.concat(id),
        },
      }));
    } else {
      this.setState(state => ({
        [name]: {
          ...state[name],
          checkedIds: state[name].checkedIds.filter(checkbox => checkbox !== id),
        },
      }));
    }
  };

  handleChangeAllCheckbox = name => ({ target }) => {
    const newCheckboxIds = target.checked
      ? this.state[name].filters.map(checkbox => checkbox.id)
      : [];

    this.setState(state => ({
      [name]: {
        ...state[name],
        checkedIds: newCheckboxIds,
      },
    }));
  };

  handleResetFilter = (defaultState, ...args) => () => {
    this.setState(() => args.reduce((acc, name) => ({ ...acc, [name]: defaultState[name] }), {}));
  };

  handleChangeRange = name => (value) => {
    this.setState({
      [name]: {
        begin: value[0],
        end: value[1],
      },
    });
  };

  handleResetAllFitler = () => {
    this.setState(this.initialState);
  };

  quantityAviaCompany = (isAllCheckedAlias, isAllCheckedCompany) => {
    const allCompanies = this.state.alliance.filters.length + this.state.company.filters.length;
    const checkedCompanies =
      this.state.alliance.checkedIds.length + this.state.company.checkedIds.length;

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
    const isAllTransfers = getStatusCheckboxes(this.state.transfer);

    const isAllPartners = getStatusCheckboxes(this.state.partners);

    const isAllCheckedAlias = getStatusCheckboxes(this.state.alliance);

    const isAllCheckedCompany = getStatusCheckboxes(this.state.company);

    const isOutTimeRange = getStatusTimeRange(list.outTime, this.state.outTime);

    const isInTimeRange = getStatusTimeRange(list.inTime, this.state.inTime);

    const isDepartureRange = getStatusDateRange(list.departure, {
      out: this.state.outDeparture,
      in: this.state.inDeparture,
    });

    const isArrivalRange = getStatusDateRange(list.arrival, {
      out: this.state.outArrival,
      in: this.state.inArrival,
    });

    const isDuration = getStatusTimeRange(list.duration, this.state.duration);

    const quantityAviaCompany = this.quantityAviaCompany(isAllCheckedAlias, isAllCheckedCompany);

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
          list={this.state.transfer.filters}
          handleChangeAllCheckbox={this.handleChangeAllCheckbox('transfer')}
          handleResetFilter={this.handleResetFilter(this.initialState, 'transfer')}
          handleChangeFilterCheckboxes={this.handleChangeFilterCheckboxes('transfer')}
          checkedIds={this.state.transfer.checkedIds}
          text="ПЕРЕСАДКИ"
          open
        />

        <AccordionGroup>
          <Accordion text="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" open>
            <TimeFly
              from={list.departure.from}
              outLeftDate={this.state.outDeparture.begin}
              outRightDate={this.state.outDeparture.end}
              minOut={list.departure.outDate.begin}
              maxOut={list.departure.outDate.end}
              to={list.departure.to}
              minIn={list.departure.inDate.begin}
              maxIn={list.departure.inDate.end}
              inLeftDate={this.state.inDeparture.begin}
              inRightDate={this.state.inDeparture.end}
              handleChangeRangeOut={this.handleChangeRange('outDeparture')}
              handleChangeRangeIn={this.handleChangeRange('inDeparture')}
            />
            <TimeFly
              from={list.arrival.from}
              outLeftDate={this.state.outArrival.begin}
              outRightDate={this.state.outArrival.end}
              minOut={list.arrival.outDate.begin}
              maxOut={list.arrival.outDate.end}
              to={list.arrival.to}
              minIn={list.arrival.inDate.begin}
              maxIn={list.arrival.inDate.end}
              inLeftDate={this.state.inArrival.begin}
              inRightDate={this.state.inArrival.end}
              handleChangeRangeOut={this.handleChangeRange('outArrival')}
              handleChangeRangeIn={this.handleChangeRange('inArrival')}
            />
          </Accordion>
          {(!isDepartureRange || !isArrivalRange) && (
            <Reset
              onClick={this.handleResetFilter(
                this.initialState,
                'outDeparture',
                'inDeparture',
                'outArrival',
                'inArrival',
              )}
            >
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>

        <AccordionCheckboxes
          list={this.state.baggage.filters}
          id="baggage-id"
          handleChangeAllCheckbox={this.handleChangeAllCheckbox('baggage')}
          handleResetFilter={this.handleResetFilter(this.initialState, 'baggage')}
          handleChangeFilterCheckboxes={this.handleChangeFilterCheckboxes('baggage')}
          checkedIds={this.state.baggage.checkedIds}
          text="Багаж"
        />

        <AccordionGroup>
          <Accordion text="Длительность пересадки">
            <TimePath
              beginTime={this.state.duration.begin}
              endTime={this.state.duration.end}
              min={list.duration.beginTime}
              max={list.duration.endTime}
              handleChangeRange={this.handleChangeRange('duration')}
            />
          </Accordion>
          {!isDuration && (
            <Reset onClick={this.handleResetFilter(this.initialState, 'duration')}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>

        <AccordionGroup>
          <Accordion text="Время в пути" open>
            <TimePath
              from={list.outTime.from}
              to={list.outTime.to}
              beginTime={this.state.outTime.begin}
              endTime={this.state.outTime.end}
              min={list.outTime.beginTime}
              max={list.outTime.endTime}
              handleChangeRange={this.handleChangeRange('outTime')}
            />
            <TimePath
              from={list.inTime.from}
              to={list.inTime.to}
              beginTime={this.state.inTime.begin}
              endTime={this.state.inTime.end}
              min={list.inTime.beginTime}
              max={list.inTime.endTime}
              handleChangeRange={this.handleChangeRange('inTime')}
            />
          </Accordion>
          {(!isOutTimeRange || !isInTimeRange) && (
            <Reset onClick={this.handleResetFilter(this.initialState, 'outTime', 'inTime')}>
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
              list={this.state.alliance.filters}
              id="allianceAll"
              handleChangeAllCheckbox={this.handleChangeAllCheckbox('alliance')}
              handleChangeFilterCheckboxes={this.handleChangeFilterCheckboxes('alliance')}
              checkedIds={this.state.alliance.checkedIds}
              title={list.airCompany.alliance.title}
              isAllChecked={isAllCheckedAlias}
            />
            <Checkboxes
              list={this.state.company.filters}
              id="companyAll"
              handleChangeAllCheckbox={this.handleChangeAllCheckbox('company')}
              handleChangeFilterCheckboxes={this.handleChangeFilterCheckboxes('company')}
              checkedIds={this.state.company.checkedIds}
              title={list.airCompany.company.title}
              isAllChecked={isAllCheckedCompany}
            />
          </Accordion>
          {(!isAllCheckedAlias || !isAllCheckedCompany) && (
            <Reset onClick={this.handleResetFilter(this.initialState, 'alliance', 'company')}>
              <IconReset icon="clear" />
            </Reset>
          )}
        </AccordionGroup>

        <Accordion text="аэропорты">in Future</Accordion>

        <Accordion text="аэропорт пересадки" quantity={71}>
          in Future
        </Accordion>

        <AccordionCheckboxes
          list={this.state.partners.filters}
          id="all-partners"
          handleChangeAllCheckbox={this.handleChangeAllCheckbox('partners')}
          handleResetFilter={this.handleResetFilter(this.initialState, 'partners')}
          handleChangeFilterCheckboxes={this.handleChangeFilterCheckboxes('partners')}
          checkedIds={this.state.partners.checkedIds}
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
