import React from 'react';
import pobeda from './images/pobeda.png';
import lufthansa from './images/lufthansa.png';
import logo from './images/logo.png';

const list = [
  {
    id: 'special-offers-1',
    text: 'Билеты от 499 рублей!',
    logoBrend: pobeda,
    altLogoBrend: 'pobeda',
    price: 499,
    dateEnd: 45,
    description: (
      <span>
        Билеты от&nbsp;499&nbsp;рублей!<br />Специальное предложение от&nbsp;авиакомпании Победа
      </span>
    ),
  },
  {
    id: 'special-offers-2',
    text: 'В Нью-Йорк от 20 680 ₽',
    logo,
    logoBrend: lufthansa,
    altLogoBrend: 'lufthansa',
    price: 20680,
    dateEnd: 19,
    description:
      'Из\u00a0Москвы в\u00a0США от\u00a020680\u00a0рублей! Специальное предложение от\u00a0авиакомпании Lufthansa',
  },
  {
    id: 'special-offers-3',
    text: 'В Лос-Анджелес от 20 360 ₽',
    logo,
    logoBrend: lufthansa,
    altLogoBrend: 'lufthansa',
    price: 20360,
    dateEnd: 19,
    description:
      'Из\u00a0Москвы в\u00a0США от\u00a022360\u00a0рублей! Специальное предложение от\u00a0авиакомпании Lufthansa',
  },
];

export default list;
