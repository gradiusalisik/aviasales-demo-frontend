import list from './index.mock';

export const defaultDates = {
  outDeparture: {
    left: list.departure.outLeftDate,
    right: list.departure.outRightDate,
  },
  inDeparture: {
    left: list.departure.inLeftDate,
    right: list.departure.inRightDate,
  },
  outArrival: {
    left: list.arrival.outLeftDate,
    right: list.arrival.outRightDate,
  },
  inArrival: {
    left: list.arrival.inLeftDate,
    right: list.arrival.inRightDate,
  },
};

export const defaultTimes = {
  outTime: {
    left: list.timeOut.leftTime,
    right: list.timeOut.rightTime,
  },
  inTime: {
    left: list.timeIn.leftTime,
    right: list.timeIn.rightTime,
  },
};
