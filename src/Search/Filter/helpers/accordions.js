export const getStatusCheckboxes = state => state.filters.length === state.checkedIds.length;

export const getStatusDateRange = (list, state) =>
  list.outDate.begin === state.out.begin &&
  list.outDate.end === state.out.end &&
  list.inDate.begin === state.in.begin &&
  list.inDate.end === state.in.end;

export const getStatusTimeRange = (list, state) =>
  list.beginTime === state.begin && list.endTime === state.end;
