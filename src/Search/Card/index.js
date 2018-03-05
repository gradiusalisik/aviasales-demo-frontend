import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import list from './index.mock';

const CardList = styled.div``;

export default () => <CardList>{list.map(card => <Card key={card.id} data={card} />)}</CardList>;
