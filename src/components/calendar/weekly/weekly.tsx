import {FC} from "react";
import {CalendarProps} from "../@types/clendar";
import {CalendarTimelineWrapper} from "../shared/timeline-wrapper";

const WeeklyCalendar:FC<CalendarProps> = () => {
  return <div>
    <CalendarTimelineWrapper count={7}/>
  </div>
}

export {WeeklyCalendar};