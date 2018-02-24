import React from "react";
import Card from "./Card";
import { list } from "./index.mock";
import styled from "styled-components";

const CardList = styled.div``;

export default () => (
  <CardList>{list.map((card, key) => <Card key={key} data={card} />)}</CardList>
);
