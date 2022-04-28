import isAfter from "date-fns/isAfter";
import isToday from "date-fns/isToday";
import parseISO from "date-fns/parseISO";
import subDays from "date-fns/subDays";
import { Message } from "api/types";
import { MessageFilterPeriod } from "../../Messages.types";

export const filterMessagesByPeriod = (messages: Message[], period: MessageFilterPeriod): Message[] => {
  switch (period) {
    case "today": return messages.filter(x => isToday(parseISO(x.date)));
    case "week": return messages.filter(x => isAfter(parseISO(x.date), subDays(new Date(), 7)));
    case "three-days": return messages.filter(x => isAfter(parseISO(x.date), subDays(new Date(), 3)));
    case "all": default: return [...messages];
  }
};
