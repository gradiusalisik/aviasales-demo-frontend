import React from 'react';
import styled from 'styled-components';
import Accordion from '../../UI/Accordion';
import Checkboxes from './Checkboxes';
import TimeFly from './TimeFly';
import TimePath from './TimePath';
import Checkbox from '../../UI/Checkbox';
import Icon from '../../Icon';
import AccordionCheckboxes from './AccordionCheckboxes';
import list from './index.mock';

const Accordions = styled.div``;

const Clear = styled.button`
  position: relative;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: #00bde4;
  border: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #ff9d1b;
    background-color: #f1fcff;
  }
`;

const TextClear = styled.span`
  font-size: 12px;
`;

const IconClear = styled(Icon)`
  width: 16px;
  height: 16px;
  color: #dadada;
  transition: color 0.3s;

  ${Clear}:hover & {
    color: #ff6663;
  }
`;

const Info = styled.div`
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 16px;
  color: #323333;
`;

export default () => (
  <Accordions>
    <AccordionCheckboxes list={list.transfer} text="ПЕРЕСАДКИ" open />
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
    <Accordion text="Авиакомпании" open quantity={43}>
      <Info>
        <Checkbox id="several-company" label="Несколько авиакомпаний" />
        <Description>
          Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
        </Description>
      </Info>
      {list.airCompany.map(data => (
        <Checkboxes key={data.id} list={data.list} title={data.title} id={data.id} />
      ))}
    </Accordion>
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
  </Accordions>
);
