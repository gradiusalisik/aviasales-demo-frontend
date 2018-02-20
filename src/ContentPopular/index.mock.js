import React from "react";

import flagRu from "./images/flagRu.png";
import flagEsp from "./images/flagEsp.png";
import krasnodar from "./images/krasnodar.jpg";
import adler from "./images/adler.jpg";
import piter from "./images/piter.jpg";
import mineral from "./images/mineral.jpg";
import simferopol from "./images/simferopol.jpg";
import barsa from "./images/barsa.jpg";

export const listTabs = [
  {
    text: (
      <span>
        Куда<br />угодно
      </span>
    ),
    icon: "world",
    active: true
  },
  {
    text: (
      <span>
        Солнце<br />и море
      </span>
    ),
    icon: "relax"
  },
  {
    text: (
      <span>
        Шопинг,<br />город
      </span>
    ),
    icon: "shoping"
  },
  {
    text: (
      <span>
        Культура<br />и история
      </span>
    ),
    icon: "cultura"
  },
  {
    text: (
      <span>
        Ночная<br />жизнь
      </span>
    ),
    icon: "clubs"
  },
  {
    text: (
      <span>
        Отдых<br />с детьми
      </span>
    ),
    icon: "family"
  }
];

export const cardList = [
  {
    placeImg: krasnodar,
    altPlaceImge: "krasnodar",
    flag: flagRu,
    altFlag: "flagRu",
    cityName: "Краснодар",
    price: "1212",
    countryName: "Россия",
    date: "18 марта"
  },
  {
    placeImg: adler,
    altPlaceImge: "adler",
    flag: flagRu,
    altFlag: "flagRu",
    cityName: "Сочи(Адлер)",
    price: "1334",
    countryName: "Россия",
    date: "27 марта"
  },
  {
    placeImg: piter,
    altPlaceImge: "piter",
    flag: flagRu,
    altFlag: "flagRu",
    cityName: "Санкт-Петербург",
    price: "1508",
    countryName: "Россия",
    date: "19 февраля"
  },
  {
    placeImg: mineral,
    altPlaceImge: "mineral",
    flag: flagRu,
    altFlag: "flagRu",
    cityName: "Минеральные Воды",
    price: "2074",
    countryName: "Россия",
    date: "13 марта"
  },
  {
    placeImg: simferopol,
    altPlaceImge: "simferopol",
    flag: flagRu,
    altFlag: "flagRu",
    cityName: "Симферополь(Крым)",
    price: "2407",
    countryName: "Крым",
    date: "13 марта"
  },
  {
    placeImg: barsa,
    altPlaceImge: "barsa",
    flag: flagEsp,
    altFlag: "flagEsp",
    cityName: "Барселона",
    price: "4247",
    countryName: "Испания",
    date: "24 марта"
  }
];
