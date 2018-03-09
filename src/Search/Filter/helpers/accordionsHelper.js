export const getStatusDuration = (list, state) =>
  list.duration.leftTime === state.duration.left &&
  list.duration.rightTime === state.duration.right;

export const getStatusTransfers = state =>
  state.checkboxFilterTransfer.length === state.checkedIdsTransfer.length;

export const getStatusPartners = state =>
  state.checkboxFilterPartners.length === state.checkedIdsPartners.length;

export const getStatusArrivalRange = (list, state) =>
  list.arrival.outLeftDate === state.outArrival.left &&
  list.arrival.outRightDate === state.outArrival.right &&
  list.arrival.inLeftDate === state.inArrival.left &&
  list.arrival.inRightDate === state.inArrival.right;

export const getStatusDepartureRange = (list, state) =>
  list.departure.outLeftDate === state.outDeparture.left &&
  list.departure.outRightDate === state.outDeparture.right &&
  list.departure.inLeftDate === state.inDeparture.left &&
  list.departure.inRightDate === state.inDeparture.right;

export const getStatusInTimeRange = (list, state) =>
  list.timeIn.leftTime === state.inTime.left && list.timeIn.rightTime === state.inTime.right;

export const getStatusOutTimeRange = (list, state) =>
  list.timeOut.leftTime === state.outTime.left && list.timeOut.rightTime === state.outTime.right;

export const getStatusCheckedAlias = state =>
  state.checkboxFilterAlians.length === state.checkedIdsAlians.length;

export const getStatusCheckedCompany = state =>
  state.checkboxFilterCompany.length === state.checkedIdsCompany.length;
