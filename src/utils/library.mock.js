export const airports = {
  LED: {
    name: 'Пулково',
    time_zone: 'Europe/Moscow',
    country: 'Россия',
    rates: 259,
    city: 'Санкт-Петербург',
    cases: {
      vi: 'в Санкт-Петербург',
      ro: 'Санкт-Петербурга',
      pr: 'Санкт-Петербурге',
    },
  },
  DME: {
    name: 'Домодедово',
    time_zone: 'Europe/Moscow',
    country: 'Россия',
    rates: 392,
    city: 'Москва',
    cases: { vi: 'в Москву', ro: 'Москвы', pr: 'Москве' },
  },
  SVO: {
    rates: 307,
    country: 'Россия',
    name: 'Шереметьево',
    average_rate: '3.63',
    city: 'Москва',
    time_zone: 'Europe/Moscow',
    cases: { vi: 'в Москву', ro: 'Москвы', pr: 'Москве' },
  },
  VKO: {
    name: 'Внуково',
    time_zone: 'Europe/Moscow',
    country: 'Россия',
    rates: 211,
    city: 'Москва',
    cases: { vi: 'в Москву', ro: 'Москвы', pr: 'Москве' },
  },
  BCN: {
    name: 'Эль-Прат',
    time_zone: 'Europe/Madrid',
    country: 'Испания',
    rates: 98,
    city: 'Барселона',
    cases: { vi: 'в Барселону', ro: 'Барселоны', pr: 'Барселоне' },
  },
};

export const typeFly = {
  straight: 'Прямой',
  CDG: 'CDG',
};

export const countries = {
  CM: {
    name: 'Крым',
    cases: { vi: 'в Крым', ro: 'Крыма', pr: 'Крыму' },
  },
  AM: {
    name: 'Армения',
    cases: { vi: 'в Армению', ro: 'Армении', pr: 'Армении' },
  },
  MD: {
    name: 'Молдавия',
    cases: { vi: 'в Молдавию', ro: 'Молдавии', pr: 'Молдавии' },
  },
  RU: {
    name: 'Россия',
    cases: { vi: 'в Россию', ro: 'России', pr: 'России' },
  },
  ES: {
    name: 'Испания',
    cases: { vi: 'в Испанию', ro: 'Испании', pr: 'Испании' },
  },
};

export const cities = {
  SIP: {
    name: 'Симферополь (Крым)',
    cases: { vi: 'в Симферополь', ro: 'Симферополя', pr: 'Симферополе' },
  },
  MRV: {
    name: 'Минеральные Воды',
    cases: {
      vi: 'в Минеральных Водах',
      ro: 'Минеральных Вод',
      pr: 'Минеральных Водах',
    },
  },
  BCN: {
    name: 'Барселона',
    cases: { vi: 'в Барселону', ro: 'Барселоны', pr: 'Барселоне' },
  },
  MOW: {
    name: 'Москва',
    cases: { vi: 'в Москву', ro: 'Москвы', pr: 'Москве' },
  },
  LED: {
    name: 'Санкт-Петербург',
    cases: {
      vi: 'в Санкт-Петербург',
      ro: 'Санкт-Петербурга',
      pr: 'Санкт-Петербурге',
    },
  },
  OVB: {
    name: 'Новосибирск',
    cases: { vi: 'в Новосибирск', ro: 'Новосибирска', pr: 'Новосибирске' },
  },
  SVX: {
    name: 'Екатеринбург',
    cases: { vi: 'в Екатеринбург', ro: 'Екатеринбурга', pr: 'Екатеринбурге' },
  },
  CEK: {
    name: 'Челябинск',
    cases: { vi: 'в Челябинск', ro: 'Челябинска', pr: 'Челябинске' },
  },
  EVN: {
    name: 'Ереван',
    cases: { vi: 'в Ереван', ro: 'Еревана', pr: 'Ереване' },
  },
  AER: {
    name: 'Сочи',
    cases: { vi: 'в Сочи', ro: 'Сочи', pr: 'Сочи' },
  },
  KRR: {
    name: 'Краснодар',
    cases: { vi: 'в Краснодар', ro: 'Краснодара', pr: 'Краснодаре' },
  },
  ROV: {
    name: 'Ростов-на-Дону',
    cases: {
      vi: 'в Ростов-на-Дону',
      ro: 'Ростова-на-Дону',
      pr: 'Ростове-на-Дону',
    },
  },
  KIV: {
    name: 'Кишинёв',
    cases: { vi: 'в Кишинёв', ro: 'Кишинёва', pr: 'Кишинёве' },
  },
  SGC: {
    name: 'Сургут',
    cases: { vi: 'в Сургут', ro: 'Сургута', pr: 'Сургуте' },
  },
  NUX: {
    name: 'Новый Уренгой',
    cases: { vi: 'в Новый Уренгой', ro: 'Нового Уренгоя', pr: 'Новом Уренгое' },
  },
};

export const partners = {
  1: 'Clickavia',
  2: 'Билетик Аэро',
  3: 'Aviakassa',
  4: 'Biletix',
  5: 'Svyaznoy Travel',
  6: 'Aerobilet',
  7: 'Aeroflot',
  8: 'Aerotur.aero',
  9: 'Air Europa',
  10: 'airBaltic',
  11: 'Euroset.travel',
  12: 'Go2See',
  13: 'Kiwi.com',
  14: 'KLM/AirFrance',
  15: 'KupiBilet.ru',
  16: 'OneTwoTrip',
  17: 'OZON.travel',
  18: 'Sindbad.ru',
  19: 'SuperKassa.ru',
  20: 'TAP Portugal',
  21: 'Tickets.ru',
  22: 'Tinkoff',
  23: 'Trip.ru',
  24: 'Utair',
  25: 'ЧаБука',
};
