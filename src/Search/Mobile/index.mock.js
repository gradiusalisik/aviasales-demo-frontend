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
    status: "Самый дешевый",
    statusColor: "#83D40B",
    iconStatus: "🤑",
    price: 7712,
    logos: [
      {
        image: russia
      }
    ],
    fromFly: {
      timeFrom: "00:05",
      timeTo: "03:05",
      hours: 5,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      timeFrom: "10:35",
      timeTo: "17:10",
      hours: 4,
      minutes: 35,
      type: "Прямой"
    }
  },
  {
    status: "Самый быстрый",
    statusColor: "#AF7542",
    iconStatus: "⚡️",
    price: 9269,
    logos: [
      {
        image: fly
      }
    ],
    fromFly: {
      timeFrom: "07:30",
      timeTo: "09:50",
      hours: 4,
      minutes: 20,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      timeFrom: "11:20",
      timeTo: "17:35",
      hours: 4,
      minutes: 15,
      type: "CDG"
    }
  },
  {
    status: "Лучший билет",
    statusColor: "#C279D1",
    iconStatus: "😍️",
    price: 8029,
    logos: [
      {
        image: nordwind
      }
    ],
    fromFly: {
      timeFrom: "00:15",
      timeTo: "03:10",
      hours: 4,
      minutes: 55,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      timeFrom: "10:45",
      timeTo: "17:15",
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
      timeFrom: "00:15",
      timeTo: "03:10",
      hours: 4,
      minutes: 55,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      timeFrom: "10:45",
      timeTo: "17:15",
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
      timeFrom: "07:00",
      timeTo: "09:30",
      hours: 4,
      minutes: 30,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      timeFrom: "11:00",
      timeTo: "17:10",
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
      timeFrom: "00:05",
      timeTo: "03:05",
      hours: 5,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      timeFrom: "11:00",
      timeTo: "17:10",
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
      timeFrom: "00:05",
      timeTo: "03:05",
      hours: 5,
      type: "Прямой"
    },
    backFly: {
      reverse: true,
      timeFrom: "11:20",
      timeTo: "17:35",
      hours: 4,
      minutes: 15,
      type: "Прямой"
    }
  }
];
