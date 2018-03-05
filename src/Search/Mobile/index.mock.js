import fly from '../images/fly.png';
import nordwindAir from '../images/nordwind-air.png';
import nordwind from '../images/nordwind.png';
import otherSmall from '../images/other-small.png';
import redWingsSmall from '../images/red-wings-small.png';
import redWings from '../images/red-wings.png';
import russiaSmall from '../images/russia-small.png';
import russia from '../images/russia.png';

const list = [
  {
    status: {
      text: 'Самый дешевый',
      color: '#83D40B',
      icon: '🤑',
    },
    price: 7712,
    logos: [
      {
        image: russia,
      },
    ],
    fromFly: {
      dateFrom: 1519423500000,
      dateTo: 1519434300000,
      minutes: 300,
      type: 'straight',
    },
    backFly: {
      reverse: true,
      dateFrom: 1520066100000,
      dateTo: 1520089800000,
      minutes: 275,
      type: 'straight',
    },
  },
  {
    status: {
      text: 'Самый быстрый',
      color: '#AF7542',
      icon: '⚡️',
    },
    price: 9269,
    logos: [
      {
        image: fly,
      },
    ],
    fromFly: {
      dateFrom: 1519424100000,
      dateTo: 1519434600000,
      minutes: 260,
      type: 'straight',
    },
    backFly: {
      reverse: true,
      dateFrom: 1520066700000,
      dateTo: 1520090100000,
      minutes: 255,
      type: 'CDG',
    },
  },
  {
    status: {
      text: 'Лучший билет',
      color: '#C279D1',
      icon: '😍️',
    },
    price: 8029,
    logos: [
      {
        image: nordwind,
      },
    ],
    fromFly: {
      dateFrom: 1519424100000,
      dateTo: 1519434600000,
      minutes: 295,
      type: 'straight',
    },
    backFly: {
      reverse: true,
      dateFrom: 1520066700000,
      dateTo: 1520090100000,
      minutes: 270,
      type: 'straight',
    },
  },
  {
    price: 8164,
    logos: [
      {
        image: nordwindAir,
      },
    ],
    fromFly: {
      dateFrom: 1519448400000,
      dateTo: 1519457400000,
      minutes: 295,
      type: 'straight',
    },
    backFly: {
      reverse: true,
      dateFrom: 1520067600000,
      dateTo: 1520089800000,
      minutes: 270,
      type: 'straight',
    },
  },
  {
    price: 8240,
    logos: [
      {
        image: redWings,
      },
    ],
    fromFly: {
      dateFrom: 1519423500000,
      dateTo: 1519434300000,
      minutes: 270,
      type: 'straight',
    },
    backFly: {
      reverse: true,
      dateFrom: 1520067600000,
      dateTo: 1520089800000,
      minutes: 250,
      type: 'straight',
    },
  },
  {
    price: 9108,
    logos: [
      {
        image: redWingsSmall,
        smallImage: true,
      },
      {
        image: russiaSmall,
        smallImage: true,
      },
    ],
    fromFly: {
      dateFrom: 1519450200000,
      dateTo: 1519458600000,
      minutes: 300,
      type: 'straight',
    },
    backFly: {
      reverse: true,
      dateFrom: 1520068800000,
      dateTo: 1520091300000,
      minutes: 250,
      type: 'straight',
    },
  },
  {
    price: 9485,
    logos: [
      {
        image: russiaSmall,
        smallImage: true,
      },
      {
        image: otherSmall,
        smallImage: true,
      },
    ],
    fromFly: {
      dateFrom: 1519423500000,
      dateTo: 1519434300000,
      minutes: 300,
      type: 'straight',
    },
    backFly: {
      reverse: true,
      dateFrom: 1520068800000,
      dateTo: 1520091300000,
      minutes: 255,
      type: 'straight',
    },
  },
];

export default list;
