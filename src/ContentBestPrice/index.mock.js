import flagRu from "./images/flagRu.png";
import flagAm from "./images/flagAm.png";
import flagMd from "./images/flagMd.png";

export const list = [
  {
    flag: flagRu,
    altFlag: "flagRu",
    cityName: "Симферополь (Крым)",
    countryName: "Крым",
    list: [
      {
        from: "Москвы",
        price: "4813"
      },
      {
        from: "Санкт-Петербурга",
        price: "7857"
      },
      {
        from: "Новосибирска",
        price: "15127"
      },
      {
        from: "Екатеринбурга",
        price: "9275"
      },
      {
        from: "Челябинска",
        price: "9148"
      }
    ]
  },
  {
    flag: flagAm,
    altFlag: "flagAm",
    cityName: "Ереван",
    countryName: "Армения",
    list: [
      {
        from: "Москвы",
        price: "6758"
      },
      {
        from: "Санкт-Петербурга",
        price: "9932"
      },
      {
        from: "Сочи",
        price: "11951"
      },
      {
        from: "Краснодара",
        price: "11741"
      },
      {
        from: "Ростова-на-Дону",
        price: "11956"
      }
    ]
  },
  {
    flag: flagMd,
    altFlag: "flagMd",
    cityName: "Кишинёв",
    countryName: "Молдавия",
    list: [
      {
        from: "Москвы",
        price: "8319"
      },
      {
        from: "Санкт-Петербурга",
        price: "10800"
      },
      {
        from: "Краснодара",
        price: "12098"
      },
      {
        from: "Сургута",
        price: "16277"
      },
      {
        from: "Нового Уренгоя",
        price: "15987"
      }
    ]
  }
];
