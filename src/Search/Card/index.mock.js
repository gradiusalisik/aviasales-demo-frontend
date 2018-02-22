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
    leftContent: {
      price: 7712,
      nameShop: "Clickavia",
      listBaggage: [
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
    },
    rightContent: {
      charter: true,
      listLogo: [
        {
          image: russia
        }
      ],
      listInfoFly: [
        {
          timeFrom: "00:05",
          placeFrom: "Москва",
          dateFrom: "24 фев 2018, Сб",
          totalTime: "5ч",
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
          totalTime: "4ч 35м",
          abbrFrom: "BCN",
          abbrTo: "SVO",
          timeTo: "17:10",
          placeTo: "Москва",
          dateTo: "3 мар 2018, Сб"
        }
      ]
    }
  },
  {
    leftContent: {
      price: 8029,
      nameShop: "Билетик Аэро",
      listBaggage: [
        {
          icon: "bag",
          kg: 5
        },
        {
          icon: "noSuitcase",
          type: "suitcase",
          color: "#FF4C3E"
        }
      ]
    },
    rightContent: {
      listLogo: [
        {
          image: nordwind
        }
      ],
      listInfoFly: [
        {
          timeFrom: "00:15",
          placeFrom: "Москва",
          dateFrom: "24 фев 2018, Сб",
          totalTime: "4ч 55м",
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
          totalTime: "4ч 30м",
          abbrFrom: "BCN",
          abbrTo: "SVO",
          timeTo: "17:15",
          placeTo: "Москва",
          dateTo: "3 мар 2018, Сб"
        }
      ]
    }
  },
  {
    leftContent: {
      price: 8164,
      nameShop: "Aviakassa",
      listTabs: [
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
      ]
    },
    rightContent: {
      charter: true,
      listLogo: [
        {
          image: nordwindAir
        }
      ],
      listInfoFly: [
        {
          timeFrom: "00:15",
          placeFrom: "Москва",
          dateFrom: "24 фев 2018, Сб",
          totalTime: "4ч 55м",
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
          totalTime: "4ч 30м",
          abbrFrom: "BCN",
          abbrTo: "SVO",
          timeTo: "17:15",
          placeTo: "Москва",
          dateTo: "3 мар 2018, Сб"
        }
      ]
    }
  },
  {
    leftContent: {
      price: 8240,
      nameShop: "Билетик Аэро",
      listTabs: [
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
      listProposal: [
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
      ]
    },
    rightContent: {
      charter: true,
      listLogo: [
        {
          image: redWings
        }
      ],
      listInfoFly: [
        {
          timeFrom: "07:00",
          placeFrom: "Москва",
          dateFrom: "24 фев 2018, Сб",
          totalTime: "4ч 30м",
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
          totalTime: "4ч 10м",
          abbrFrom: "BCN",
          abbrTo: "SVO",
          timeTo: "17:10",
          placeTo: "Москва",
          dateTo: "3 мар 2018, Сб"
        }
      ]
    }
  },
  {
    leftContent: {
      price: 9108,
      nameShop: "Clickavia",
      listBaggage: [
        {
          icon: "bag",
          kg: 10
        },
        {
          icon: "suitcase",
          type: "suitcase",
          kg: 15
        }
      ]
    },
    rightContent: {
      charter: true,
      listLogo: [
        {
          smallImage: redWingsSmall,
          border: true
        },
        {
          smallImage: russiaSmall,
          border: true
        }
      ],
      listInfoFly: [
        {
          timeFrom: "00:05",
          placeFrom: "Москва",
          dateFrom: "24 фев 2018, Сб",
          totalTime: "5ч",
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
          totalTime: "4ч 35м",
          abbrFrom: "BCN",
          abbrTo: "SVO",
          timeTo: "17:10",
          placeTo: "Москва",
          dateTo: "3 мар 2018, Сб"
        }
      ]
    }
  },
  {
    leftContent: {
      price: 9269,
      nameShop: "Biletix",
      hotTicket: "Осталось 4 билета",
      listBaggage: [
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
      listProposal: [
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
      ]
    },
    rightContent: {
      charter: true,
      listLogo: [
        {
          image: fly
        }
      ],
      listInfoFly: [
        {
          timeFrom: "07:30",
          placeFrom: "Москва",
          dateFrom: "24 фев 2018, Сб",
          totalTime: "4ч 20м",
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
          totalTime: "4ч 15м",
          abbrFrom: "BCN",
          abbrTo: "SVO",
          timeTo: "17:35",
          placeTo: "Москва",
          dateTo: "3 мар 2018, Сб"
        }
      ]
    }
  },
  {
    leftContent: {
      price: 9485,
      nameShop: "Clickavia",
      listBaggage: [
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
      ]
    },
    rightContent: {
      charter: true,
      listLogo: [
        {
          smallImage: russiaSmall,
          border: true
        },
        {
          smallImage: otherSmall,
          border: true
        }
      ],
      listInfoFly: [
        {
          timeFrom: "00:05",
          placeFrom: "Москва",
          dateFrom: "24 фев 2018, Сб",
          totalTime: "5ч",
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
          totalTime: "4ч 15м",
          abbrFrom: "BCN",
          abbrTo: "SVO",
          timeTo: "17:35",
          placeTo: "Москва",
          dateTo: "3 мар 2018, Сб"
        }
      ]
    }
  }
];
