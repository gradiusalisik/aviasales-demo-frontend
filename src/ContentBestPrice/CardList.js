import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { List } from './styled';
import Card from './Card';

const CardList = props => (
  <List>
    {props.list.map(card => (
      <Card
        key={card.id}
        flag={card.flag}
        city={card.city}
        country={card.country}
        list={card.list}
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
