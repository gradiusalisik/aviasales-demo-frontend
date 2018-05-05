import React from 'react';
import { PropTypes as pt } from 'prop-types';
import format from 'date-fns/format';
import ruLocale from 'date-fns/locale/ru';
import styled from 'styled-components';
import Scoreboard from './Scoreboard';
import Icon from '../../Icon';
import { airports } from '../../utils/library.mock';
import { formatTimePath, formatTime } from '../../utils/format';

const List = styled.div``;

const Info = styled.div`
  display: flex;
  cursor: pointer;
  &:not(:last-child) {
    padding-bottom: 7px;
    margin-bottom: 19px;
    border-bottom: 1px dashed #dddddd;
  }
`;

const Left = styled.div`
  width: 25%;
`;

const Times = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const IconPick = styled.div`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  color: #a0b0b9;
`;

const Time = styled.div`
  font-size: 28px;
  color: #323333;
`;

const TimeTo = Time.extend`
  margin-bottom: 10px;
  text-align: right;
`;

const Place = styled.div`
  margin-bottom: 7px;
  font-size: 12px;
  font-weight: 500;
  color: #9ca5a8;
`;

const Date = Place.extend`
  font-weight: 400;
`;

const Center = styled.div`
  margin-left: 26px;
  margin-right: 1px;
  width: 50%;
`;

const Right = Left.extend`
  text-align: right;
`;

const formatDate = date => format(date, 'D MMM YYYY, dd', { locale: ruLocale });

const InfoFly = props => (
  <List>
    {props.list.map(info => (
      <Info key={info.id}>
        <Left>
          <Times>
            <IconPick>
              <Icon icon="pick" />
            </IconPick>
            <Time>{formatTime(info.dateFrom)}</Time>
          </Times>
          <Place>{airports[info.abbrFrom].city}</Place>
          <Date>{formatDate(info.dateFrom)}</Date>
        </Left>
        <Center>
          <Scoreboard
            time={formatTimePath(info.minutes)}
            abbrFrom={info.abbrFrom}
            abbrTo={info.abbrTo}
          />
        </Center>
        <Right>
          <TimeTo>{formatTime(info.dateTo)}</TimeTo>
          <Place>{airports[info.abbrTo].city}</Place>
          <Date>{formatDate(info.dateTo)}</Date>
        </Right>
      </Info>
    ))}
  </List>
);

InfoFly.propTypes = {
  list: pt.arrayOf(pt.shape({})),
};

InfoFly.defaultProps = {
  list: [],
};

export default InfoFly;
