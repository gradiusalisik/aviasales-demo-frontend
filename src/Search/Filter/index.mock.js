const list = {
  transfer: [
    {
      id: 'all',
      label: 'Все',
    },
    {
      id: 'no-transfer',
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
    inRightDate: 519645800000,
  },
  arrival: {
    from: 'BCN',
    outLeftDate: 1520049600000,
    outRightDate: 1520113500000,
    to: 'MOW',
    inLeftDate: 1520082000000,
    inRightDate: 1520063700000,
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
  airCompany: [
    {
      id: 'air-company-1',
      title: 'Альянсы',
      list: [
        {
          id: 'all-alians',
          label: 'Все',
          checked: true,
        },
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
    {
      id: 'air-company-2',
      title: 'Авиакомпании',
      list: [
        {
          id: 'all-aircompany',
          label: 'Все',
          checked: true,
        },
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
  ],
};

export default list;
