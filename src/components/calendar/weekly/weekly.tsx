import {FC} from "react";
import {CalendarProps} from "../@types/clendar";
import {CalendarWrapper} from "../shared/timeline-wrapper";

const WeeklyCalendar:FC<CalendarProps> = ({date,schedules}) => {
  const start = date.subtract(date.day(),"days").set("hour", 0).set("minute",0).set("second", 0);
  return <div>
    <CalendarWrapper count={7} startDate={start} schedules={schedules}/>
  </div>
}

export {WeeklyCalendar};