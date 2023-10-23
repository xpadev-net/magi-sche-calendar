import {FC} from "react";
import Styles from "./container.module.scss";
import {timelineRange} from "./const.ts";
import {TSchedule} from "../../@types/schedule";
import {Dayjs} from "dayjs";
import {calcStyle, filterSchedules} from "../../utils/schedule.ts";

type Props = {
  schedules?: TSchedule[];
  date: Dayjs;
}

const CalendarTimelineContainer:FC<Props> = ({date,schedules}) => {
  const timeSchedules = schedules &&filterSchedules(date,schedules).timeSchedule;
  return <>
    <div className={Styles.wrapper}>
      <div className={Styles.container}>
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
  </>
}
export {CalendarTimelineContainer}