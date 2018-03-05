import React from 'react';

import flagRu from './images/flagRu.png';
import flagEsp from './images/flagEsp.png';
import krasnodar from './images/krasnodar.jpg';
import adler from './images/adler.jpg';
import piter from './images/piter.jpg';
import mineral from './images/mineral.jpg';
import simferopol from './images/simferopol.jpg';
import barsa from './images/barsa.jpg';

export const listTabs = [
  {
    text: (
      <span>
        Куда<br />угодно
      </span>
    ),
    icon: 'world',
    active: true,
  },
  {
    text: (
      <span>
        Солнце<br />и море
      </span>
    ),
    icon: 'relax',
  },
  {
    text: (
      <span>
        Шопинг,<br />город
      </span>
    ),
    icon: 'shoping',
  },
  {
    text: (
      <span>
        Культура<br />и история
      </span>
    ),
    icon: 'cultura',
  },
  {
    text: (
      <span>
        Ночная<br />жизнь
      </span>
    ),
    icon: 'clubs',
  },
  {
    text: (
      <span>
        Отдых<br />с детьми
      </span>
    ),
    icon: 'family',
  },
];

export const cardList = [
  {
    placeImg: krasnodar,
    altPlaceImge: 'krasnodar',
    flag: flagRu,
    altFlag: 'flagRu',
    city: 'KRR',
    price: 1212,
    country: 'RU',
    date: 1521324000000,
  },
  {
    placeImg: adler,
    altPlaceImge: 'adler',
    flag: flagRu,
    altFlag: 'flagRu',
    city: 'AER',
    price: 1334,
    country: 'RU',
    date: 1522098000000,
  },
  {
    placeImg: piter,
    altPlaceImge: 'piter',
    flag: flagRu,
    altFlag: 'flagRu',
    city: 'LED',
    price: 1508,
    country: 'RU',
    date: 1518991200000,
  },
  {
    placeImg: mineral,
    altPlaceImge: 'mineral',
    flag: flagRu,
    altFlag: 'flagRu',
    city: 'MRV',
    price: 2074,
    country: 'RU',
    date: 1520892000000,
  },
  {
    placeImg: simferopol,
    altPlaceImge: 'simferopol',
    flag: flagRu,
    altFlag: 'flagRu',
    city: 'SIP',
    price: 2407,
    country: 'CM',
    date: 1520892000000,
  },
  {
    placeImg: barsa,
    altPlaceImge: 'barsa',
    flag: flagEsp,
    altFlag: 'flagEsp',
    city: 'BCN',
    price: 4247,
    country: 'ES',
    date: 1521842400000,
  },
];
