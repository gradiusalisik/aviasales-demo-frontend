import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { List } from './styled';
import Card from './Card';

const CardList = props => (
  <List>
    {props.list.map(card => (
      <Card
        key={card.id}
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
  list: pt.arrayOf(pt.shape({})),
};

CardList.defaultProps = {
  list: [],
};

export default CardList;
