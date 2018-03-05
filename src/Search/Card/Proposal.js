import React from 'react';
import { PropTypes as pt } from 'prop-types';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';
import { partners } from '../../utils/library.mock';

const ProposalStyled = styled.div`
  padding-top: 24px;
  width: 100%;
`;

const Link = styled.a`
  padding-top: 4px;
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  text-decoration: none;
  color: #59bce5;
  transition: color 0.3s;

  &:hover {
    color: #ff8b0f;
  }
`;
const Span = Link.withComponent('span');

const ShowMore = Span.extend`
  margin-top: 8px;
  display: block;
  text-align: center;
  cursor: pointer;
`;

const Text = styled.span``;

const TextMedium = styled.span`
  font-weight: 500;
`;

const Proposal = props => (
  <ProposalStyled>
    {props.list.map(link => (
      <div key={link.id}>
        {link.showMore ? (
          <ShowMore>+ Еще {link.showMore}</ShowMore>
        ) : (
          <Link href={link.href || '#'}>
            <Text>{partners[link.partnerId]}</Text>
            <TextMedium>
              <FormattedNumber
                value={link.price}
                style={['currency']}
                currency="RUB"
                minimumFractionDigits={0}
                maximumFractionDigits={0}
              />
            </TextMedium>
          </Link>
        )}
      </div>
    ))}
  </ProposalStyled>
);

Proposal.propTypes = {
  list: pt.arrayOf(pt.shape({})),
};

Proposal.defaultProps = {
  list: [],
};

export default Proposal;
