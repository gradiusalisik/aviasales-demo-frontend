import fly from "../images/fly.png";
import nordwindAir from "../images/nordwind-air.png";
import nordwind from "../images/nordwind.png";
import otherSmall from "../images/other-small.png";
import redWingsSmall from "../images/red-wings-small.png";
import redWings from "../images/red-wings.png";
import russiaSmall from "../images/russia-small.png";
import russia from "../images/russia.png";

export const list = [
  {
    price: 7712,
    nameShop: "Clickavia",
    baggages: [
      {
        icon: "bag",
        kg: 5
      },
      {
        icon: "suitcase",
        type: "suitcase",
        kg: 12
      }
    ],
    charter: true,
    logos: [
      {
        image: russia
      }
    ],
    infoFly: [
      {
        timeFrom: "00:05",
        placeFrom: "Москва",
        dateFrom: "24 фев 2018, Сб",
        hours: 5,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        timeTo: "03:05",
        placeTo: "Барселона",
        dateTo: "24 фев 2018, Сб "
      },
      {
        timeFrom: "10:35",
        placeFrom: "Барселона",
        dateFrom: "3 мар 2018, Сб",
        hours: 4,
        minutes: 35,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        timeTo: "17:10",
        placeTo: "Москва",
        dateTo: "3 мар 2018, Сб"
      }
    ]
  },
  {
    price: 8029,
    nameShop: "Билетик Аэро",
    baggages: [
      {
        icon: "bag",
        kg: 5
      },
      {
        icon: "noSuitcase",
        type: "suitcase",
        color: "#FF4C3E"
      }
    ],
    logos: [
      {
        image: nordwind
      }
    ],
    infoFly: [
      {
        timeFrom: "00:15",
        placeFrom: "Москва",
        dateFrom: "24 фев 2018, Сб",
        hours: 4,
        minutes: 55,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        timeTo: "03:10",
        placeTo: "Барселона",
        dateTo: "24 фев 2018, Сб "
      },
      {
        timeFrom: "10:45",
        placeFrom: "Барселона",
        dateFrom: "3 мар 2018, Сб",
        hours: 4,
        minutes: 30,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        timeTo: "17:15",
        placeTo: "Москва",
        dateTo: "3 мар 2018, Сб"
      }
    ]
  },
  {
    price: 8164,
    nameShop: "Aviakassa",
    tabs: [
      {
        noBaggage: true,
        list: [
          {
            icon: "bag",
            kg: 5
          },
          {
            icon: "noSuitcase",
            type: "suitcase"
          }
        ]
      },
      {
        active: true,
        price: 136,
        list: [
          {
            icon: "bag",
            kg: 5
          },
          {
            icon: "suitcase",
            type: "suitcase",
            kg: 12
          }
        ]
      }
    ],
    charter: true,
    logos: [
      {
        image: nordwindAir
      }
    ],
    infoFly: [
      {
        timeFrom: "00:15",
        placeFrom: "Москва",
        dateFrom: "24 фев 2018, Сб",
        hours: 4,
        minutes: 55,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        timeTo: "03:10",
        placeTo: "Барселона",
        dateTo: "24 фев 2018, Сб "
      },
      {
        timeFrom: "10:45",
        placeFrom: "Барселона",
        dateFrom: "3 мар 2018, Сб",
        hours: 4,
        minutes: 30,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        timeTo: "17:15",
        placeTo: "Москва",
        dateTo: "3 мар 2018, Сб"
      }
    ]
  },
  {
    price: 8240,
    nameShop: "Билетик Аэро",
    tabs: [
      {
        noBaggage: true,
        list: [
          {
            icon: "bag",
            kg: 10
          },
          {
            icon: "noSuitcase",
            type: "suitcase"
          }
        ]
      },
      {
        active: true,
        price: 267,
        list: [
          {
            icon: "bag",
            kg: 10
          },
          {
            icon: "suitcase",
            type: "suitcase",
            kg: 20
          }
        ]
      }
    ],
    proposals: [
      {
        name: "Clickavia",
        price: 8302
      },
      {
        name: "Aviakassa",
        price: 8376
      },
      {
        showMore: "3 предложения"
      }
    ],
    charter: true,
    logos: [
      {
        image: redWings
      }
    ],
    infoFly: [
      {
        timeFrom: "07:00",
        placeFrom: "Москва",
        dateFrom: "24 фев 2018, Сб",
        hours: 4,
        minutes: 30,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        timeTo: "09:30",
        placeTo: "Барселона",
        dateTo: "24 фев 2018, Сб "
      },
      {
        timeFrom: "11:00",
        placeFrom: "Барселона",
        dateFrom: "3 мар 2018, Сб",
        hours: 4,
        minutes: 10,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        timeTo: "17:10",
        placeTo: "Москва",
        dateTo: "3 мар 2018, Сб"
      }
    ]
  },
  {
    price: 9108,
    nameShop: "Clickavia",
    baggages: [
      {
        icon: "bag",
        kg: 10
      },
      {
        icon: "suitcase",
        type: "suitcase",
        kg: 15
      }
    ],
    charter: true,
    logos: [
      {
        image: redWingsSmall,
        smallImage: true
      },
      {
        image: russiaSmall,
        smallImage: true
      }
    ],
    infoFly: [
      {
        timeFrom: "00:05",
        placeFrom: "Москва",
        dateFrom: "24 фев 2018, Сб",
        hours: 5,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        timeTo: "03:05",
        placeTo: "Барселона",
        dateTo: "24 фев 2018, Сб "
      },
      {
        timeFrom: "11:00",
        placeFrom: "Барселона",
        dateFrom: "3 мар 2018, Сб",
        hours: 4,
        minutes: 35,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        timeTo: "17:10",
        placeTo: "Москва",
        dateTo: "3 мар 2018, Сб"
      }
    ]
  },
  {
    price: 9269,
    nameShop: "Biletix",
    hotTicket: "Осталось 4 билета",
    baggages: [
      {
        icon: "bag",
        kg: "?",
        disabled: true
      },
      {
        icon: "suitcase",
        type: "suitcase",
        kg: 20
      }
    ],
    proposals: [
      {
        name: "Svyaznoy Travel",
        price: 9275
      },
      {
        name: "Билетик Аэро",
        price: 9587
      },
      {
        showMore: "4 предложения"
      }
    ],
    charter: true,
    logos: [
      {
        image: fly
      }
    ],
    infoFly: [
      {
        timeFrom: "07:30",
        placeFrom: "Москва",
        dateFrom: "24 фев 2018, Сб",
        hours: 4,
        minutes: 20,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        timeTo: "09:50",
        placeTo: "Барселона",
        dateTo: "24 фев 2018, Сб "
      },
      {
        timeFrom: "11:20",
        placeFrom: "Барселона",
        dateFrom: "3 мар 2018, Сб",
        hours: 4,
        minutes: 15,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        timeTo: "17:35",
        placeTo: "Москва",
        dateTo: "3 мар 2018, Сб"
      }
    ]
  },
  {
    price: 9485,
    nameShop: "Clickavia",
    baggages: [
      {
        icon: "bag",
        kg: "?",
        disabled: true
      },
      {
        icon: "suitcase",
        type: "suitcase",
        kg: 15
      }
    ],
    charter: true,
    logos: [
      {
        image: russiaSmall,
        smallImage: true
      },
      {
        image: otherSmall,
        smallImage: true
      }
    ],
    infoFly: [
      {
        timeFrom: "00:05",
        placeFrom: "Москва",
        dateFrom: "24 фев 2018, Сб",
        hours: 5,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        timeTo: "03:05",
        placeTo: "Барселона",
        dateTo: "24 фев 2018, Сб "
      },
      {
        timeFrom: "11:20",
        placeFrom: "Барселона",
        dateFrom: "3 мар 2018, Сб",
        hours: 4,
        minutes: 15,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        timeTo: "17:35",
        placeTo: "Москва",
        dateTo: "3 мар 2018, Сб"
      }
    ]
  }
];
