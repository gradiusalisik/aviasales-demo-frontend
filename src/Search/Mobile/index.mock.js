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
    status: {
      text: "Самый дешевый",
      color: "#83D40B",
      icon: "🤑"
    },
    price: 7712,
    logos: [
      {
        image: russia
      }
    ],
    fromFly: {
      dateFrom: 1519423500000,
      dateTo: 1519434300000,
      hours: 5,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      dateFrom: 1520066100000,
      dateTo: 1520089800000,
      hours: 4,
      minutes: 35,
      type: "Прямой"
    }
  },
  {
    status: {
      text: "Самый быстрый",
      color: "#AF7542",
      icon: "⚡️"
    },
    price: 9269,
    logos: [
      {
        image: fly
      }
    ],
    fromFly: {
      dateFrom: 1519424100000,
      dateTo: 1519434600000,
      hours: 4,
      minutes: 20,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      dateFrom: 1520066700000,
      dateTo: 1520090100000,
      hours: 4,
      minutes: 15,
      type: "CDG"
    }
  },
  {
    status: {
      text: "Лучший билет",
      color: "#C279D1",
      icon: "😍️"
    },
    price: 8029,
    logos: [
      {
        image: nordwind
      }
    ],
    fromFly: {
      dateFrom: 1519424100000,
      dateTo: 1519434600000,
      hours: 4,
      minutes: 55,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      dateFrom: 1520066700000,
      dateTo: 1520090100000,
      hours: 4,
      minutes: 30,
      type: "Прямой"
    }
  },
  {
    price: 8164,
    logos: [
      {
        image: nordwindAir
      }
    ],
    fromFly: {
      dateFrom: 1519448400000,
      dateTo: 1519457400000,
      hours: 4,
      minutes: 55,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      dateFrom: 1520067600000,
      dateTo: 1520089800000,
      hours: 4,
      minutes: 30,
      type: "Прямой"
    }
  },
  {
    price: 8240,
    logos: [
      {
        image: redWings
      }
    ],
    fromFly: {
      dateFrom: 1519423500000,
      dateTo: 1519434300000,
      hours: 4,
      minutes: 30,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      dateFrom: 1520067600000,
      dateTo: 1520089800000,
      hours: 4,
      minutes: 10,
      type: "Прямой"
    }
  },
  {
    price: 9108,
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
    fromFly: {
      dateFrom: 1519450200000,
      dateTo: 1519458600000,
      hours: 5,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      dateFrom: 1520068800000,
      dateTo: 1520091300000,
      hours: 4,
      minutes: 10,
      type: "Прямой"
    }
  },
  {
    price: 9485,
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
    fromFly: {
      dateFrom: 1519423500000,
      dateTo: 1519434300000,
      hours: 5,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      dateFrom: 1520068800000,
      dateTo: 1520091300000,
      hours: 4,
      minutes: 15,
      type: "Прямой"
    }
  }
];
