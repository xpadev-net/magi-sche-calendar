import {TSchedule} from "./schedule";
import {Dayjs} from "dayjs";

export type CalendarProps = {
  date: Dayjs;
  schedules?: TSchedule[];
}