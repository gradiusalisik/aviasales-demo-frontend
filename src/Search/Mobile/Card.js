import React from 'react';
import { PropTypes as pt } from 'prop-types';
import Logos from '../../UI/Logos';
import InfoFly from './InfoFly';
import { FormattedNumber } from 'react-intl';
import { Card as CardStyled, Head, PriceCard as Price, Body } from './styled';

export const Card = props => (
  <CardStyled>
    <Head>
      <Price>
        <FormattedNumber
          value={props.price}
          style={['currency']}
          currency="RUB"
          minimumFractionDigits={0}
          maximumFractionDigits={0}
        />
      </Price>
      <Logos list={props.logos} />
    </Head>
    <Body>
      <InfoFly
        reverse={props.fromFly.reverse}
        dateFrom={props.fromFly.dateFrom}
        dateTo={props.fromFly.dateTo}
        minutes={props.fromFly.minutes}
        type={props.fromFly.type}
      />
      <InfoFly
        reverse={props.backFly.reverse}
        dateFrom={props.backFly.dateFrom}
        dateTo={props.backFly.dateTo}
        minutes={props.backFly.minutes}
        type={props.backFly.type}
      />
    </Body>
  </CardStyled>
);

Card.propTypes = {
  price: pt.number,
  logos: pt.array,
  fromFly: pt.object,
  backFly: pt.object
};

Card.defaultProps = {
  price: 0,
  logos: [],
  fromFly: {},
  backFly: {}
};

export default Card;
