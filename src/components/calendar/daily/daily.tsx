import {FC} from "react";
import {CalendarProps} from "../@types/clendar";
import {CalendarWrapper} from "../shared/timeline-wrapper";

const DailyCalendar:FC<CalendarProps> = ({date,schedules}) => {
  return <div>
    <CalendarWrapper count={1} startDate={date} schedules={schedules}/>
  </div>
}
export {DailyCalendar};