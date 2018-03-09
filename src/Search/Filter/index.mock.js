import { partners } from '../../utils/library.mock';

const list = {
  transfer: [
    {
      id: 'not-transfer',
      label: 'Без пересадок',
      price: 7712,
      checked: true,
    },
    {
      id: '1-transfer',
      label: '1 пересадка',
      price: 11150,
    },
    {
      id: '2-transfer',
      label: '2 пересадки',
      price: 16821,
    },
    {
      id: '3-transfer',
      label: '3 пересадки',
      price: 23986,
    },
  ],
  departure: {
    from: 'MOW',
    outLeftDate: 1519423500000,
    outRightDate: 1519508700000,
    to: 'BCN',
    inLeftDate: 1519434300000,
    inRightDate: 1519643100000,
  },
  arrival: {
    from: 'BCN',
    outLeftDate: 1520049600000,
    outRightDate: 1520113500000,
    to: 'MOW',
    inLeftDate: 1520082000000,
    inRightDate: 1520236500000,
  },
  baggage: [
    {
      id: 'baggage-1',
      label: 'Багаж и ручная кладь',
      price: 23755,
      checked: true,
    },
    {
      id: 'no-baggage',
      label: 'Без багажа',
      price: 17762,
    },
  ],
  partners: [
    {
      id: partners[1],
      label: partners[1],
      price: 7712,
    },
    {
      id: partners[2],
      label: partners[2],
      price: 7712,
    },
    {
      id: partners[3],
      label: partners[3],
      price: 7712,
    },
    {
      id: partners[4],
      label: partners[4],
      price: 7712,
    },
    {
      id: partners[5],
      label: partners[5],
      price: 7712,
    },
    {
      id: partners[6],
      label: partners[6],
      price: 7712,
    },
    {
      id: partners[7],
      label: partners[7],
      price: 7712,
    },
    {
      id: partners[8],
      label: partners[8],
      price: 7712,
    },
    {
      id: partners[9],
      label: partners[9],
      price: 7712,
    },
    {
      id: partners[10],
      label: partners[10],
      price: 7712,
    },
    {
      id: partners[11],
      label: partners[11],
      price: 7712,
    },
    {
      id: partners[12],
      label: partners[12],
      price: 7712,
    },
    {
      id: partners[13],
      label: partners[13],
      price: 7712,
    },
    {
      id: partners[14],
      label: partners[14],
      price: 7712,
    },
    {
      id: partners[15],
      label: partners[15],
      price: 7712,
    },
    {
      id: partners[16],
      label: partners[16],
      price: 7712,
    },
    {
      id: partners[17],
      label: partners[17],
      price: 7712,
    },
    {
      id: partners[18],
      label: partners[18],
      price: 7712,
    },
    {
      id: partners[19],
      label: partners[19],
      price: 7712,
    },
    {
      id: partners[20],
      label: partners[20],
      price: 7712,
    },
    {
      id: partners[21],
      label: partners[22],
      price: 7712,
    },
    {
      id: partners[23],
      label: partners[23],
      price: 7712,
    },
    {
      id: partners[24],
      label: partners[24],
      price: 7712,
    },
    {
      id: partners[25],
      label: partners[25],
      price: 7712,
    },
  ],
  duration: {
    leftTime: 45,
    rightTime: 1440,
  },
  timeOut: {
    from: 'MOW',
    to: 'BCN',
    leftTime: 260,
    rightTime: 2930,
  },
  timeIn: {
    from: 'BCN',
    to: 'MOW',
    leftTime: 250,
    rightTime: 2480,
  },
  airCompany: {
    alians: {
      id: 'air-company-1',
      title: 'Альянсы',
      list: [
        {
          id: 'Star Alliance',
          label: 'Star Alliance',
          price: 11150,
          checked: true,
        },
        {
          id: 'OneWorld',
          label: 'OneWorld',
          price: 12370,
          checked: true,
        },
        {
          id: 'SkyTeam',
          label: 'SkyTeam',
          price: 16290,
          checked: true,
        },
      ],
    },
    company: {
      id: 'air-company-2',
      title: 'Авиакомпании',
      list: [
        {
          id: 'Aegean Airlines',
          label: 'Aegean Airlines',
          price: 20357,
          checked: true,
        },
        {
          id: 'Air Algerie',
          label: 'Air Algerie',
          price: 29105,
          checked: true,
        },
        {
          id: 'Air Europa',
          label: 'Air Europa',
          price: 22202,
          checked: true,
        },
        {
          id: 'Air France',
          label: 'Air France',
          price: 17050,
          checked: true,
        },
        {
          id: 'Air Moldova',
          label: 'Air Moldova',
          price: 22613,
          checked: true,
        },
        {
          id: 'Alitalia',
          label: 'Alitalia',
          price: 22717,
          checked: true,
        },
        {
          id: 'Alitalia CityLiner',
          label: 'Alitalia CityLiner',
          price: 20271,
          checked: true,
        },
        {
          id: 'Belle Air',
          label: 'Belle Air',
          price: 18371,
          checked: true,
        },
        {
          id: 'British Airways',
          label: 'British Airways',
          price: 23839,
          checked: true,
        },
        {
          id: 'Brussels Airlines',
          label: 'Brussels Airlines',
          price: 11150,
          checked: true,
        },
        {
          id: 'Bulgaria Air',
          label: 'Bulgaria Air',
          price: 20114,
          checked: true,
        },
      ],
    },
  },
};

export default list;
