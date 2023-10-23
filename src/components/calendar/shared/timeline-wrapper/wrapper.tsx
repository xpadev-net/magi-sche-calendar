import {FC} from "react";
import {CalendarTimelineIndicator} from "./indicator.tsx";
import Styles from "./wrapper.module.scss"
import {CalendarTimelineContainer} from "./container.tsx";
import {TSchedule} from "../../@types/schedule";
import {Dayjs} from "dayjs";

type Props = {
  count: number;
  startDate: Dayjs,
  schedules?: TSchedule[];
}

const CalendarTimelineWrapper:FC<Props> = ({count, startDate, schedules}) => {
  return <div className={Styles.wrapper}>
    <CalendarTimelineIndicator/>
    {[...Array(count)].map((_,index)=>{
      return <CalendarTimelineContainer key={index} date={startDate.add(index,"day")} schedules={schedules}/>
    })}
  </div>
}

export {CalendarTimelineWrapper};