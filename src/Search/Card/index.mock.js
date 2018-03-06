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
    id: 'card-1',
    isCharter: true,
    baggages: [
      {
        id: 'baggage-1',
        icon: 'bag',
        kg: 5,
      },
      {
        id: 'baggage-2',
        icon: 'suitcase',
        type: 'suitcase',
        kg: 12,
      },
    ],
    proposals: [
      {
        id: 'proposal-1',
        partnerId: 1,
        price: 7712,
      },
    ],
    logos: [
      {
        id: 'logo-1',
        image: russia,
      },
    ],
    infoFly: [
      {
        id: 'infoFly-1',
        dateFrom: 1519423500000,
        minutes: 300,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434300000,
      },
      {
        id: 'infoFly-2',
        dateFrom: 1520066100000,
        minutes: 275,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520089800000,
      },
    ],
  },
  {
    id: 'card-2',
    baggages: [
      {
        id: 'baggage-1',
        icon: 'bag',
        kg: 5,
      },
      {
        id: 'baggage-2',
        icon: 'noSuitcase',
        type: 'suitcase',
        color: '#FF4C3E',
      },
    ],
    logos: [
      {
        id: 'logo-1',
        image: nordwind,
      },
    ],
    infoFly: [
      {
        id: 'infoFly-1',
        dateFrom: 1519424100000,
        minutes: 295,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434600000,
      },
      {
        id: 'infoFly-2',
        dateFrom: 1520066700000,
        minutes: 270,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520090100000,
      },
    ],
    proposals: [
      {
        id: 'proposal-1',
        partnerId: 2,
        price: 8029,
      },
    ],
  },
  {
    id: 'card-3',
    isCharter: true,
    tabs: [
      {
        id: 'tabs-1',
        noBaggage: true,
        list: [
          {
            id: 'baggage-1',
            icon: 'bag',
            kg: 5,
          },
          {
            id: 'baggage-2',
            icon: 'noSuitcase',
            type: 'suitcase',
          },
        ],
      },
      {
        id: 'tabs-2',
        active: true,
        price: 136,
        list: [
          {
            id: 'baggage-1',
            icon: 'bag',
            kg: 5,
          },
          {
            id: 'baggage-2',
            icon: 'suitcase',
            type: 'suitcase',
            kg: 12,
          },
        ],
      },
    ],
    logos: [
      {
        id: 'logo-1',
        image: nordwindAir,
      },
    ],
    infoFly: [
      {
        id: 'infoFly-1',
        dateFrom: 1519424100000,
        minutes: 295,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434600000,
      },
      {
        id: 'infoFly-2',
        dateFrom: 1520066700000,
        minutes: 270,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520090100000,
      },
    ],
    proposals: [
      {
        id: 'proposal-1',
        partnerId: 3,
        price: 8164,
      },
    ],
  },
  {
    id: 'card-4',
    isCharter: true,
    tabs: [
      {
        id: 'tabs-1',
        noBaggage: true,
        list: [
          {
            id: 'baggage-1',
            icon: 'bag',
            kg: 10,
          },
          {
            id: 'baggage-2',
            icon: 'noSuitcase',
            type: 'suitcase',
          },
        ],
      },
      {
        id: 'tabs-2',
        active: true,
        price: 267,
        list: [
          {
            id: 'baggage-1',
            icon: 'bag',
            kg: 10,
          },
          {
            id: 'baggage-2',
            icon: 'suitcase',
            type: 'suitcase',
            kg: 20,
          },
        ],
      },
    ],
    proposals: [
      {
        id: 'proposal-1',
        partnerId: 2,
        price: 8240,
      },
      {
        id: 'proposal-2',
        partnerId: 1,
        price: 8302,
      },
      {
        id: 'proposal-3',
        partnerId: 3,
        price: 8376,
      },
      {
        id: 'showMore',
        showMore: '3 предложения',
      },
    ],
    logos: [
      {
        id: 'logo-1',
        image: redWings,
      },
    ],
    infoFly: [
      {
        id: 'infoFly-1',
        dateFrom: 1519448400000,
        minutes: 270,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519457400000,
      },
      {
        id: 'infoFly-2',
        dateFrom: 1520067600000,
        minutes: 250,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520089800000,
      },
    ],
  },
  {
    id: 'card-5',
    isCharter: true,
    baggages: [
      {
        id: 'baggage-1',
        icon: 'bag',
        kg: 10,
      },
      {
        id: 'baggage-2',
        icon: 'suitcase',
        type: 'suitcase',
        kg: 15,
      },
    ],
    logos: [
      {
        id: 'logo-1',
        image: redWingsSmall,
        smallImage: true,
      },
      {
        id: 'logo-2',
        image: russiaSmall,
        smallImage: true,
      },
    ],
    infoFly: [
      {
        id: 'infoFly-1',
        dateFrom: 1519423500000,
        minutes: 300,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434300000,
      },
      {
        id: 'infoFly-2',
        dateFrom: 1520067600000,
        minutes: 250,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520089800000,
      },
    ],
    proposals: [
      {
        id: 'proposal-1',
        partnerId: 1,
        price: 9108,
      },
    ],
  },
  {
    id: 'card-6',
    hotTicket: 'Осталось 4 билета',
    isCharter: true,
    baggages: [
      {
        id: 'baggage-1',
        icon: 'bag',
        kg: '?',
        disabled: true,
      },
      {
        id: 'baggage-2',
        icon: 'suitcase',
        type: 'suitcase',
        kg: 20,
      },
    ],
    proposals: [
      {
        id: 'proposal-1',
        partnerId: 4,
        price: 9269,
      },
      {
        id: 'proposal-2',
        partnerId: 5,
        price: 9275,
      },
      {
        id: 'proposal-3',
        partnerId: 2,
        price: 9587,
      },
      {
        id: 'showMore',
        showMore: '4 предложения',
      },
    ],
    logos: [
      {
        id: 'logo-1',
        image: fly,
      },
    ],
    infoFly: [
      {
        id: 'infoFly-1',
        dateFrom: 1519450200000,
        minutes: 260,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519458600000,
      },
      {
        id: 'infoFly-2',
        dateFrom: 1520068800000,
        minutes: 255,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520091300000,
      },
    ],
  },
  {
    id: 'card-7',
    isCharter: true,
    baggages: [
      {
        id: 'baggage-1',
        icon: 'bag',
        kg: '?',
        disabled: true,
      },
      {
        id: 'baggage-2',
        icon: 'suitcase',
        type: 'suitcase',
        kg: 15,
      },
    ],
    logos: [
      {
        id: 'logo-1',
        image: russiaSmall,
        smallImage: true,
      },
      {
        id: 'logo-2',
        image: otherSmall,
        smallImage: true,
      },
    ],
    infoFly: [
      {
        id: 'infoFly-1',
        dateFrom: 1519423500000,
        minutes: 300,
        abbrFrom: 'VKO',
        abbrTo: 'BCN',
        dateTo: 1519434300000,
      },
      {
        id: 'infoFly-2',
        dateFrom: 1520068800000,
        minutes: 255,
        abbrFrom: 'BCN',
        abbrTo: 'SVO',
        dateTo: 1520091300000,
      },
    ],
    proposals: [
      {
        id: 'proposal-1',
        partnerId: 1,
        price: 9485,
      },
    ],
  },
];

export default list;
