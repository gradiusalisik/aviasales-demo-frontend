import React from "react";
import pobeda from "./images/pobeda.png";
import lufthansa from "./images/pobeda.png";
import logo from "./images/logo.png";

export const list = [
  {
    text: "Билеты от 499 рублей!",
    logoBrend: pobeda,
    altLogoBrend: "pobeda",
    price: "499",
    dateEnd: "Осталось 45 дней",
    description: (
      <span>
        Билеты от&nbsp;499&nbsp;рублей!<br />Специальное предложение
        от&nbsp;авиакомпании Победа
      </span>
    )
  },
  {
    text: "В Нью-Йорк от 20 680 ₽",
    logo: logo,
    logoBrend: lufthansa,
    altLogoBrend: "lufthansa",
    price: "20680",
    dateEnd: "Осталось 19 дней",
    description:
      "Из\u00a0Москвы в\u00a0США от\u00a020680\u00a0рублей! Специальное предложение от\u00a0авиакомпании Lufthansa"
  },
  {
    text: "В Лос-Анджелес от 20 360 ₽",
    logo: logo,
    logoBrend: lufthansa,
    altLogoBrend: "lufthansa",
    price: "20360",
    dateEnd: "Осталось 19 дней",
    description:
      "Из\u00a0Москвы в\u00a0США от\u00a022360\u00a0рублей! Специальное предложение от\u00a0авиакомпании Lufthansa"
  }
];
