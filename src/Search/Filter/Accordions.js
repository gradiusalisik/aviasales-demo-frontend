import React, { Component } from 'react';
import Accordion from '../../UI/Accordion';
import Checkboxes from './Checkboxes';
import TimeFly from './TimeFly';
import TimePath from './TimePath';
import Checkbox from '../../UI/Checkbox';
import AccordionCheckboxes from './AccordionCheckboxes';
import list from './index.mock';
import {
  AccordionsStyled,
  AccordionCheckboxesGroup,
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
    checkboxFilterAlians: list.airCompany.alians.list,
    checkboxFilterCompany: list.airCompany.company.list,
    checkedIdsTransfer: [],
    checkedIdsAlians: [],
    checkedIdsCompany: [],
  };

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

  render() {
    const isAllCheckedAlias =
      this.state.checkboxFilterAlians.length === this.state.checkedIdsAlians.length;
    const isAllCheckedCompany =
      this.state.checkboxFilterCompany.length === this.state.checkedIdsCompany.length;

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
        <Accordion text="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" open>
          <TimeFly
            from={list.departure.from}
            outLeftDate={list.departure.outLeftDate}
            outRightDate={list.departure.outRightDate}
            outRange={list.departure.outRange}
            to={list.departure.to}
            inLeftDate={list.departure.inLeftDate}
            inRightDate={list.departure.inRightDate}
            inRange={list.departure.inRange}
          />
          <TimeFly
            from={list.arrival.from}
            outLeftDate={list.arrival.outLeftDate}
            outRightDate={list.arrival.outRightDate}
            outRange={list.arrival.outRange}
            to={list.arrival.to}
            inLeftDate={list.arrival.inLeftDate}
            inRightDate={list.arrival.inRightDate}
            inRange={list.arrival.inRange}
          />
        </Accordion>
        <Accordion text="Багаж">in Future</Accordion>
        <Accordion text="Длительность пересадки">in Future</Accordion>
        <Accordion text="Время в пути" open>
          <TimePath
            from={list.timeOut.from}
            to={list.timeOut.to}
            leftTime={list.timeOut.leftTime}
            rightTime={list.timeOut.rightTime}
            range={list.timeOut.range}
          />
          <TimePath
            from={list.timeIn.from}
            to={list.timeIn.to}
            leftTime={list.timeIn.leftTime}
            rightTime={list.timeIn.rightTime}
            range={list.timeIn.range}
          />
        </Accordion>
        <AccordionCheckboxesGroup>
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
        </AccordionCheckboxesGroup>
        <Accordion text="аэропорты">in Future</Accordion>
        <Accordion text="аэропорт пересадки" quantity={71}>
          in Future
        </Accordion>
        <Accordion text="агенства" quantity={26}>
          in Future
        </Accordion>
        <Clear>
          <TextClear>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</TextClear>
          <IconClear icon="clear" />
        </Clear>
      </AccordionsStyled>
    );
  }
}
