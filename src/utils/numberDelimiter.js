export const delimiter = item =>
  String(item).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
