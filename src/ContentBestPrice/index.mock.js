import flagRu from './images/flagRu.png';
import flagAm from './images/flagAm.png';
import flagMd from './images/flagMd.png';

const list = [
  {
    id: 'contentPrice-1',
    flag: flagRu,
    altFlag: 'flagRu',
    city: 'SIP',
    country: 'CM',
    list: [
      {
        from: 'MOW',
        price: 4813,
        id: 'card-1',
      },
      {
        from: 'LED',
        price: 7857,
        id: 'card-2',
      },
      {
        from: 'OVB',
        price: 15127,
        id: 'card-3',
      },
      {
        from: 'SVX',
        price: 9275,
        id: 'card-4',
      },
      {
        from: 'CEK',
        price: 9148,
        id: 'card-5',
      },
    ],
  },
  {
    id: 'contentPrice-2',
    flag: flagAm,
    altFlag: 'flagAm',
    city: 'EVN',
    country: 'AM',
    list: [
      {
        from: 'MOW',
        price: 6758,
        id: 'card-1',
      },
      {
        from: 'LED',
        price: 9932,
        id: 'card-2',
      },
      {
        from: 'AER',
        price: 11951,
        id: 'card-3',
      },
      {
        from: 'KRR',
        price: 11741,
        id: 'card-4',
      },
      {
        from: 'ROV',
        price: 11956,
        id: 'card-5',
      },
    ],
  },
  {
    id: 'contentPrice-3',
    flag: flagMd,
    altFlag: 'flagMd',
    city: 'KIV',
    country: 'MD',
    list: [
      {
        from: 'MOW',
        price: 8319,
        id: 'card-1',
      },
      {
        from: 'LED',
        price: 10800,
        id: 'card-2',
      },
      {
        from: 'KRR',
        price: 12098,
        id: 'card-3',
      },
      {
        from: 'SGC',
        price: 16277,
        id: 'card-4',
      },
      {
        from: 'NUX',
        price: 15987,
        id: 'card-5',
      },
    ],
  },
];

export default list;
