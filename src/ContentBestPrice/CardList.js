import React from "react";
import { PropTypes as pt } from "prop-types";
import { List } from "./styled";
import Card from "./Card";

const CardList = props => (
  <List>
    {props.list.map((card, key) => (
      <Card
        key={key}
        flag={card.flag}
        cityName={card.cityName}
        countryName={card.countryName}
        list={card.list}
      />
    ))}
  </List>
);
CardList.propTypes = {
  list: pt.array
};

export default CardList;
