import React from "react";
import { PropTypes as pt } from "prop-types";
import { List } from "./styled";
import Card from "./Card";

const CardList = props => (
  <List>
    {props.list.map((card, key) => (
      <Card
        key={key}
        text={card.text}
        logo={card.logo}
        logoBrend={card.logoBrend}
        price={card.price}
        dateEnd={card.dateEnd}
        description={card.description}
      />
    ))}
  </List>
);

CardList.propTypes = {
  list: pt.array
};

export default CardList;
