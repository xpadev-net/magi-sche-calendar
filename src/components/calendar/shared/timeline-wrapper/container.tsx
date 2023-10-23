import {FC} from "react";
import Styles from "./container.module.scss";
import {timelineRange} from "./const.ts";
import {TSchedule} from "../../@types/schedule";
import {Dayjs} from "dayjs";
import {calcStyle, filterSchedules} from "../../utils/schedule.ts";
import {DayOfWeekName} from "../static/week.ts";

type Props = {
  schedules?: TSchedule[];
  date: Dayjs;
}

const CalendarTimelineContainer:FC<Props> = ({date,schedules}) => {
  const timeSchedules = schedules &&filterSchedules(date,schedules).timeSchedule;
  const day = date.get("day");
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
          return <div key={sche.url} className={Styles.schedule} style={calcStyle(timeSchedules,sche)}>
            {sche.name}
          </div>
        })}
      </div>
    </div>
  </>
}
export {CalendarTimelineContainer}