import React from 'react';
import pluralize from 'pluralize-ru';
import { PropTypes as pt } from 'prop-types';
import { FormattedNumber } from 'react-intl';
import Button from './Button';
import {
  Cards,
  Head,
  Body,
  BodyContent as Content,
  Text,
  Logo,
  Offer,
  LogoBrend,
  OfferInfo,
  Price,
  DateEnd,
  DescriptionPrice,
  Description,
} from './styled';

const Card = props => (
  <Cards>
    <Head>
      <Text title={props.text}>{props.text}</Text>
      {props.logo && <Logo src={props.logo} alt="logo" />}
    </Head>
    <Body>
      <Content>
        <Offer>
          <LogoBrend src={props.logoBrend} alt={props.altLogoBrend} />
          <OfferInfo>
            <Price>
              <DescriptionPrice>от</DescriptionPrice>
              <FormattedNumber
                value={props.price}
                style={['currency']}
                currency="RUB"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </Price>
            <DateEnd>
              Осталось {pluralize(props.dateEnd, 'закончилось', '%d день', '%d дня', '%d дней')}
            </DateEnd>
          </OfferInfo>
        </Offer>
        <Description>{props.description}</Description>
      </Content>
      <Button text="Узнать подробности" />
    </Body>
  </Cards>
);

Card.propTypes = {
  text: pt.string,
  logo: pt.string,
  logoBrend: pt.string,
  altLogoBrend: pt.string,
  price: pt.number,
  dateEnd: pt.number,
  description: pt.node,
};

Card.defaultProps = {
  text: '',
  logo: '',
  logoBrend: '',
  altLogoBrend: '',
  price: null,
  dateEnd: null,
  description: null,
};

export default Card;
