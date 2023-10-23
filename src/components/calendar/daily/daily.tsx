import {FC} from "react";
import {CalendarProps} from "../@types/clendar";
import {CalendarTimelineWrapper} from "../shared/timeline-wrapper";

const DailyCalendar:FC<CalendarProps> = ({date}) => {
  return <div>
    <CalendarTimelineWrapper count={1}/>
  </div>
}
export {DailyCalendar};