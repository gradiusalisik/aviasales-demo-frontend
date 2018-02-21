import fly from "./images/fly.png";
import nordwindAir from "./images/nordwind-air.png";
import nordwind from "./images/nordwind.png";
import otherSmall from "./images/other-small.png";
import redWingsSmall from "./images/red-wings-small.png";
import redWings from "./images/red-wings.png";
import russiaSmall from "./images/russia-small.png";
import russia from "./images/russia.png";

export const list = [
  {
    status: "Самый дешевый",
    colorStatus: "#83D40B",
    iconStatus: "🤑",
    price: "7712",
    listLogo: [
      {
        image: russia
      }
    ],
    listInfo: [
      {
        timeFrom: "00:05",
        timeTo: "03:05",
        time: "5 ч",
        type: "Прямой"
      },
      {
        reverse: true,
        timeFrom: "10:35",
        timeTo: "17:10",
        time: "4 ч 35 м",
        type: "Прямой"
      }
    ]
  },
  {
    status: "Самый быстрый",
    colorStatus: "#AF7542",
    iconStatus: "⚡️",
    price: "9269",
    listLogo: [
      {
        image: fly
      }
    ],
    listInfo: [
      {
        timeFrom: "07:30",
        timeTo: "09:50",
        time: "4 ч 20м",
        type: "Прямой"
      },
      {
        reverse: true,
        timeFrom: "11:20",
        timeTo: "17:35",
        time: "4 ч 15 м",
        type: "CDG"
      }
    ]
  },
  {
    status: "Лучший билет",
    colorStatus: "#C279D1",
    iconStatus: "😍️",
    price: "8029",
    listLogo: [
      {
        image: nordwind
      }
    ],
    listInfo: [
      {
        timeFrom: "00:15",
        timeTo: "03:10",
        time: "4 ч 55м",
        type: "Прямой"
      },
      {
        reverse: true,
        timeFrom: "10:45",
        timeTo: "17:15",
        time: "4 ч 30 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: "8164",
    listLogo: [
      {
        image: nordwindAir
      }
    ],
    listInfo: [
      {
        timeFrom: "00:15",
        timeTo: "03:10",
        time: "4 ч 55м",
        type: "Прямой"
      },
      {
        reverse: true,
        timeFrom: "10:45",
        timeTo: "17:15",
        time: "4 ч 30 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: "8240",
    listLogo: [
      {
        image: redWings
      }
    ],
    listInfo: [
      {
        timeFrom: "07:00",
        timeTo: "9:30",
        time: "4 ч 30м",
        type: "Прямой"
      },
      {
        reverse: true,
        timeFrom: "11:00",
        timeTo: "17:10",
        time: "4 ч 10 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: "9108",
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
    listInfo: [
      {
        timeFrom: "00:05",
        timeTo: "03:05",
        time: "5 ч",
        type: "Прямой"
      },
      {
        reverse: true,
        timeFrom: "11:00",
        timeTo: "17:10",
        time: "4 ч 10 м",
        type: "Прямой"
      }
    ]
  },
  {
    price: "9485",
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
    listInfo: [
      {
        timeFrom: "00:05",
        timeTo: "03:05",
        time: "5 ч",
        type: "Прямой"
      },
      {
        reverse: true,
        timeFrom: "11:20",
        timeTo: "17:35",
        time: "4 ч 15 м",
        type: "Прямой"
      }
    ]
  }
];
