import {FC} from "react";
import Styles from "./container.module.scss";
import {timelineRange} from "./const.ts";
import {TSchedule} from "../../@types/schedule";
import dayjs, {Dayjs} from "dayjs";
import {filterSchedules} from "../../utils/schedule.ts";
import {DayOfWeekName} from "../static/week.ts";
import {CalendarTimelineCurrentTimeIndicator} from "./current-time-indicator.tsx";
import {CalendarTimelineScheduleIndicator} from "./schedule-indicator.tsx";

type Props = {
  schedules?: TSchedule[];
  date: Dayjs;
}

const CalendarTimelineContainer:FC<Props> = ({date,schedules}) => {
  const timeSchedules = schedules &&filterSchedules(date,schedules).timeSchedule;
  const day = date.get("day");
  const isSame = date.isSame(dayjs(),"day");
  return <>
    <div className={`${Styles.wrapper} ${(day === 0||day===6)&&Styles.weekend}`}>
      <div className={Styles.date}>
        {date.get("date")} ({DayOfWeekName[day]})
      </div>
      <div className={Styles.container}>
        <div className={Styles.background}>
          {timelineRange.map((_,i)=>{
            return <div className={Styles.item} key={i}></div>
          })}
        </div>
        {timeSchedules?.map((sche)=>{
          return <CalendarTimelineScheduleIndicator schedules={timeSchedules} schedule={sche}/>
        })}
        {isSame && <CalendarTimelineCurrentTimeIndicator/>}
      </div>
    </div>
  </>
}
export {CalendarTimelineContainer}