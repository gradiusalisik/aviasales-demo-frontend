export const list = {
  transfer: [
    {
      id: "all",
      label: "Все"
    },
    {
      id: "no-transfer",
      label: "Без пересадок",
      price: 7712,
      checked: true
    },
    {
      id: "1-transfer",
      label: "1 пересадка",
      price: 11150
    },
    {
      id: "2-transfer",
      label: "2 пересадки",
      price: 16821
    },
    {
      id: "3-transfer",
      label: "3 пересадки",
      price: 23986
    }
  ],
  departure: {
    fromPlace: "Москва",
    toPlace: "Барселона",
    from: "Москвы",
    outLeftDate: "00:05, 24 фев",
    outRightDate: "23:45, 24 фев",
    to: "Барселону",
    inLeftDate: "03:05, 24 фев",
    inRightDate: "13:50, 26 фев"
  },
  arrival: {
    fromPlace: "Барселона",
    toPlace: "Москва",
    from: "Барселоны",
    outLeftDate: "06:00, 3 мар",
    outRightDate: "23:45, 3 мар",
    to: "Москву",
    inLeftDate: "15:00, 3 мар",
    inRightDate: "09:55, 5 мар"
  },
  timeOut: {
    fromPlace: "Москва",
    toPlace: "Барселона",
    leftHours: 4,
    leftMinutes: 20,
    rightHours: 48,
    rightMinutes: 50
  },
  timeIn: {
    fromPlace: "Барселона",
    toPlace: "Москва",
    leftHours: 4,
    leftMinutes: 10,
    rightHours: 41,
    rightMinutes: 20
  },
  airCompany: [
    {
      title: "Альянсы",
      list: [
        {
          id: "all-alians",
          label: "Все",
          checked: true
        },
        {
          id: "Star Alliance",
          label: "Star Alliance",
          price: 11150,
          checked: true
        },
        {
          id: "OneWorld",
          label: "OneWorld",
          price: 12370,
          checked: true
        },
        {
          id: "SkyTeam",
          label: "SkyTeam",
          price: 16290,
          checked: true
        }
      ]
    },
    {
      title: "Авиакомпании",
      list: [
        {
          id: "all-aircompany",
          label: "Все",
          checked: true
        },
        {
          id: "Aegean Airlines",
          label: "Aegean Airlines",
          price: 20357,
          checked: true
        },
        {
          id: "Air Algerie",
          label: "Air Algerie",
          price: 29105,
          checked: true
        },
        {
          id: "Air Europa",
          label: "Air Europa",
          price: 22202,
          checked: true
        },
        {
          id: "Air France",
          label: "Air France",
          price: 17050,
          checked: true
        },
        {
          id: "Air Moldova",
          label: "Air Moldova",
          price: 22613,
          checked: true
        },
        {
          id: "Alitalia",
          label: "Alitalia",
          price: 22717,
          checked: true
        },
        {
          id: "Alitalia CityLiner",
          label: "Alitalia CityLiner",
          price: 20271,
          checked: true
        },
        {
          id: "Belle Air",
          label: "Belle Air",
          price: 18371,
          checked: true
        },
        {
          id: "British Airways",
          label: "British Airways",
          price: 23839,
          checked: true
        },
        {
          id: "Brussels Airlines",
          label: "Brussels Airlines",
          price: 11150,
          checked: true
        },
        {
          id: "Bulgaria Air",
          label: "Bulgaria Air",
          price: 20114,
          checked: true
        }
      ]
    }
  ]
};
