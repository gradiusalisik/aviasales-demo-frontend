import React from "react";
import styled from "styled-components";
import Accordion from "../../UI/Accordion";
import Checkboxes from "./Checkboxes";
import Checkbox from "../../UI/Checkbox";
import Icon from "../../Icon";
import { list } from "./index.mock";

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

export default () => (
  <Accordions>
    <Accordion text="ПЕРЕСАДКИ" open>
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Accordion text="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" open>
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Accordion text="Багаж">
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Accordion text="Длительность пересадки">
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Accordion text="Время в пути" open>
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Accordion text="Авиакомпании" open quantity={43}>
      {list.airCompany.map(
        (data, key) =>
          console.log(data) || (
            <Checkboxes key={key} list={data.list} title={data.title} />
          )
      )}
    </Accordion>
    <Accordion text="аэропорты">
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Accordion text="аэропорт пересадки" quantity={71}>
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Accordion text="агенства" quantity={26}>
      <Checkboxes list={list.transfer} />
    </Accordion>
    <Clear>
      <TextClear>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</TextClear>
      <IconClear icon="clear" />
    </Clear>
  </Accordions>
);
