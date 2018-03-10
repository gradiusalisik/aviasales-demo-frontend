import list from './index.mock';

const defaultChecked = arr => arr.map(checkbox => checkbox.id);

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

export const defaultTransfer = {
  checkedIdsTransfer: defaultChecked(list.transfer),
};

export const defaultPartners = {
  checkedIdsPartners: defaultChecked(list.partners),
};

export const defaultBaggage = {
  checkedIdsBaggage: defaultChecked(list.baggage),
};

export const defaultAviacompanies = {
  checkedIdsAlians: defaultChecked(list.airCompany.alians.list),
  checkedIdsCompany: defaultChecked(list.airCompany.company.list),
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

export const defaultDuration = {
  duration: {
    left: list.duration.leftTime,
    right: list.duration.rightTime,
  },
};
