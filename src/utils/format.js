import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

export const formatTimePath = minutes => {
  const hours = ((minutes / 60) ^ 0) + "ч ";
  const min = minutes % 60 !== 0 ? minutes % 60 + "м" : "";
  return `${hours} ${min}`;
};

export const formatTime = date => format(date, "HH:mm", { locale: ruLocale });
