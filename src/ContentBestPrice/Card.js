import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { FormattedNumber } from 'react-intl';
import { cities, countries } from '../utils/library.mock';
import {
  Container,
  Head,
  Flag,
  Names,
  CityName,
  CountryName,
  Body,
  Info,
  FromPlace,
  Price,
} from './styled';

const Card = props => (
  <Container>
    <Head>
      <Flag src={props.flag} alt={props.altFlag} />
      <Names>
        <CityName>{cities[props.city].name}</CityName>
        <CountryName>{countries[props.country].name}</CountryName>
      </Names>
    </Head>
    <Body>
      {props.list.map(info => (
        <Info key={info.id}>
          <FromPlace href={info.fromHref || '#'}>Из {cities[info.from].cases.ro}</FromPlace>
          <Price href={info.toHref || '#'}>
            от{' '}
            <FormattedNumber
              value={info.price}
              style={String('currency')}
              currency="RUB"
              minimumFractionDigits={0}
              maximumFractionDigits={0}
            />
          </Price>
        </Info>
      ))}
    </Body>
  </Container>
);

Card.propTypes = {
  flag: pt.string,
  altFlag: pt.string,
  city: pt.string,
  country: pt.string,
  list: pt.arrayOf(pt.shape({})),
};

Card.defaultProps = {
  list: [],
  flag: '',
  altFlag: '',
  city: '',
  country: '',
};

export default Card;
