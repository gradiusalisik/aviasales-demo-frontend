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
        placeFrom: "Москва",
        dateFrom: 1519423500000,
        hours: 5,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        placeTo: "Барселона",
        dateTo: 1519434300000
      },
      {
        placeFrom: "Барселона",
        dateFrom: 1520066100000,
        hours: 4,
        minutes: 35,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        placeTo: "Москва",
        dateTo: 1520089800000
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
        placeFrom: "Москва",
        dateFrom: 1519424100000,
        hours: 4,
        minutes: 55,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        placeTo: "Барселона",
        dateTo: 1519434600000
      },
      {
        placeFrom: "Барселона",
        dateFrom: 1520066700000,
        hours: 4,
        minutes: 30,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        placeTo: "Москва",
        dateTo: 1520090100000
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
        placeFrom: "Москва",
        dateFrom: 1519424100000,
        hours: 4,
        minutes: 55,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        placeTo: "Барселона",
        dateTo: 1519434600000
      },
      {
        placeFrom: "Барселона",
        dateFrom: 1520066700000,
        hours: 4,
        minutes: 30,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        placeTo: "Москва",
        dateTo: 1520090100000
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
        placeFrom: "Москва",
        dateFrom: 1519448400000,
        hours: 4,
        minutes: 30,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        placeTo: "Барселона",
        dateTo: 1519457400000
      },
      {
        placeFrom: "Барселона",
        dateFrom: 1520067600000,
        hours: 4,
        minutes: 10,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        placeTo: "Москва",
        dateTo: 1520089800000
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
        placeFrom: "Москва",
        dateFrom: 1519423500000,
        hours: 5,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        placeTo: "Барселона",
        dateTo: 1519434300000
      },
      {
        placeFrom: "Барселона",
        dateFrom: 1520067600000,
        hours: 4,
        minutes: 35,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        placeTo: "Москва",
        dateTo: 1520089800000
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
        placeFrom: "Москва",
        dateFrom: 1519450200000,
        hours: 4,
        minutes: 20,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        placeTo: "Барселона",
        dateTo: 1519458600000
      },
      {
        placeFrom: "Барселона",
        dateFrom: 1520068800000,
        hours: 4,
        minutes: 15,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        placeTo: "Москва",
        dateTo: 1520091300000
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
        placeFrom: "Москва",
        dateFrom: 1519423500000,
        hours: 5,
        abbrFrom: "VKO",
        abbrTo: "BCN",
        placeTo: "Барселона",
        dateTo: 1519434300000
      },
      {
        placeFrom: "Барселона",
        dateFrom: 1520068800000,
        hours: 4,
        minutes: 15,
        abbrFrom: "BCN",
        abbrTo: "SVO",
        placeTo: "Москва",
        dateTo: 1520091300000
      }
    ]
  }
];
