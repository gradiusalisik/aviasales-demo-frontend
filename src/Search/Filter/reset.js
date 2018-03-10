import list from './index.mock';

const defaultChecked = arr => arr.map(checkbox => checkbox.id);

const initialState = {
  transfer: {
    filters: list.transfer,
    checkedIds: defaultChecked(list.transfer) || [],
  },
  partners: {
    filters: list.partners,
    checkedIds: defaultChecked(list.partners) || [],
  },
  baggage: {
    filters: list.baggage,
    checkedIds: defaultChecked(list.baggage) || [],
  },
  alliance: {
    filters: list.airCompany.alliance.list,
    checkedIds: defaultChecked(list.airCompany.alliance.list) || [],
  },
  company: {
    filters: list.airCompany.company.list,
    checkedIds: defaultChecked(list.airCompany.company.list) || [],
  },
  duration: {
    begin: list.duration.beginTime,
    end: list.duration.endTime,
  },
  outTime: {
    begin: list.outTime.beginTime,
    end: list.outTime.endTime,
  },
  inTime: {
    begin: list.inTime.beginTime,
    end: list.inTime.endTime,
  },
  outDeparture: {
    begin: list.departure.outDate.begin,
    end: list.departure.outDate.end,
  },
  inDeparture: {
    begin: list.departure.inDate.begin,
    end: list.departure.inDate.end,
  },
  outArrival: {
    begin: list.arrival.outDate.begin,
    end: list.arrival.outDate.end,
  },
  inArrival: {
    begin: list.arrival.inDate.begin,
    end: list.arrival.inDate.end,
  },
};

export default initialState;
