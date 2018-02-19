import React from "react";
import { PropTypes as pt } from "prop-types";
import { List } from "./styled";
import Card from "./Card";

const CardList = props => (
  <List>
    {props.list.map((card, key) => (
      <Card
        key={key}
        placeImg={card.placeImg}
        cityName={card.cityName}
        price={card.price}
        countryName={card.countryName}
        date={card.date}
        flag={card.flag}
      />
    ))}
  </List>
);

CardList.propTypes = {
  list: pt.array
};

export default CardList;
