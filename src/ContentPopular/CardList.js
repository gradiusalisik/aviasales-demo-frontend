import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { List } from './styled';
import Card from './Card';

const CardList = props => (
  <List>
    {props.list.map(card => (
      <Card
        key={card.id}
        placeImg={card.placeImg}
        city={card.city}
        price={card.price}
        country={card.country}
        date={card.date}
        flag={card.flag}
      />
    ))}
  </List>
);

CardList.propTypes = {
  list: pt.arrayOf(pt.shape({})),
};

CardList.defaultProps = {
  list: [],
};

export default CardList;
