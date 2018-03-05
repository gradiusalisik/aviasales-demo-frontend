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
    baggages: [
      {
        icon: 'bag',
        kg: 5,
      },
      {
        icon: 'suitcase',
        type: 'suitcase',
        kg: 12,
      },
    ],
    proposals: [
      {
        partnerId: 1,
        price: 7712,
      },
    ],
    isCharter: true,
    logos: [
      {
        image: russia,
      },
    ],
    infoFly: [
      {
        dateFrom: 1519423500000,
        minutes: 300,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434300000,
      },
      {
        dateFrom: 1520066100000,
        minutes: 275,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520089800000,
      },
    ],
  },
  {
    baggages: [
      {
        icon: 'bag',
        kg: 5,
      },
      {
        icon: 'noSuitcase',
        type: 'suitcase',
        color: '#FF4C3E',
      },
    ],
    logos: [
      {
        image: nordwind,
      },
    ],
    infoFly: [
      {
        dateFrom: 1519424100000,
        minutes: 295,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434600000,
      },
      {
        dateFrom: 1520066700000,
        minutes: 270,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520090100000,
      },
    ],
    proposals: [
      {
        partnerId: 2,
        price: 8029,
      },
    ],
  },
  {
    tabs: [
      {
        noBaggage: true,
        list: [
          {
            icon: 'bag',
            kg: 5,
          },
          {
            icon: 'noSuitcase',
            type: 'suitcase',
          },
        ],
      },
      {
        active: true,
        price: 136,
        list: [
          {
            icon: 'bag',
            kg: 5,
          },
          {
            icon: 'suitcase',
            type: 'suitcase',
            kg: 12,
          },
        ],
      },
    ],
    isCharter: true,
    logos: [
      {
        image: nordwindAir,
      },
    ],
    infoFly: [
      {
        dateFrom: 1519424100000,
        minutes: 295,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434600000,
      },
      {
        dateFrom: 1520066700000,
        minutes: 270,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520090100000,
      },
    ],
    proposals: [
      {
        partnerId: 3,
        price: 8164,
      },
    ],
  },
  {
    tabs: [
      {
        noBaggage: true,
        list: [
          {
            icon: 'bag',
            kg: 10,
          },
          {
            icon: 'noSuitcase',
            type: 'suitcase',
          },
        ],
      },
      {
        active: true,
        price: 267,
        list: [
          {
            icon: 'bag',
            kg: 10,
          },
          {
            icon: 'suitcase',
            type: 'suitcase',
            kg: 20,
          },
        ],
      },
    ],
    proposals: [
      {
        partnerId: 2,
        price: 8240,
      },
      {
        partnerId: 1,
        price: 8302,
      },
      {
        partnerId: 3,
        price: 8376,
      },
      {
        showMore: '3 предложения',
      },
    ],
    isCharter: true,
    logos: [
      {
        image: redWings,
      },
    ],
    infoFly: [
      {
        dateFrom: 1519448400000,
        minutes: 270,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519457400000,
      },
      {
        dateFrom: 1520067600000,
        minutes: 250,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520089800000,
      },
    ],
  },
  {
    baggages: [
      {
        icon: 'bag',
        kg: 10,
      },
      {
        icon: 'suitcase',
        type: 'suitcase',
        kg: 15,
      },
    ],
    isCharter: true,
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
    infoFly: [
      {
        dateFrom: 1519423500000,
        minutes: 300,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434300000,
      },
      {
        dateFrom: 1520067600000,
        minutes: 250,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520089800000,
      },
    ],
    proposals: [
      {
        partnerId: 1,
        price: 9108,
      },
    ],
  },
  {
    hotTicket: 'Осталось 4 билета',
    baggages: [
      {
        icon: 'bag',
        kg: '?',
        disabled: true,
      },
      {
        icon: 'suitcase',
        type: 'suitcase',
        kg: 20,
      },
    ],
    proposals: [
      {
        partnerId: 4,
        price: 9269,
      },
      {
        partnerId: 5,
        price: 9275,
      },
      {
        partnerId: 2,
        price: 9587,
      },
      {
        showMore: '4 предложения',
      },
    ],
    isCharter: true,
    logos: [
      {
        image: fly,
      },
    ],
    infoFly: [
      {
        dateFrom: 1519450200000,
        minutes: 260,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519458600000,
      },
      {
        dateFrom: 1520068800000,
        minutes: 255,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520091300000,
      },
    ],
  },
  {
    baggages: [
      {
        icon: 'bag',
        kg: '?',
        disabled: true,
      },
      {
        icon: 'suitcase',
        type: 'suitcase',
        kg: 15,
      },
    ],
    isCharter: true,
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
    infoFly: [
      {
        dateFrom: 1519423500000,
        minutes: 300,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434300000,
      },
      {
        dateFrom: 1520068800000,
        minutes: 255,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520091300000,
      },
    ],
    proposals: [
      {
        partnerId: 1,
        price: 9485,
      },
    ],
  },
];

export default list;
