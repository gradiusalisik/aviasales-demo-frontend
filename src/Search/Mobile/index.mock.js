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
    id: 'cardMobile-1',
    status: {
      text: 'Самый дешевый',
      color: '#83D40B',
      icon: '🤑',
    },
    price: 7712,
    logos: [
      {
        id: 'logo-1',
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
    id: 'cardMobile-2',
    status: {
      text: 'Самый быстрый',
      color: '#AF7542',
      icon: '⚡️',
    },
    price: 9269,
    logos: [
      {
        id: 'fly-1',
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
    id: 'cardMobile-3',
    status: {
      text: 'Лучший билет',
      color: '#C279D1',
      icon: '😍️',
    },
    price: 8029,
    logos: [
      {
        id: 'nordwind-1',
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
    id: 'cardMobile-4',
    price: 8164,
    logos: [
      {
        id: 'nordwindAir-1',
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
    id: 'cardMobile-5',
    price: 8240,
    logos: [
      {
        id: 'redWings',
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
    id: 'cardMobile-6',
    price: 9108,
    logos: [
      {
        id: 'redWingsSmall',
        image: redWingsSmall,
        smallImage: true,
      },
      {
        id: 'russiaSmall',
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
    id: 'cardMobile-7',
    price: 9485,
    logos: [
      {
        id: 'russiaSmall',
        image: russiaSmall,
        smallImage: true,
      },
      {
        id: 'otherSmall',
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
