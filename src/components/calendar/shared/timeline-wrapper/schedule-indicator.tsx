import {calcStyle} from "../../utils/schedule.ts";
import {TTimeSchedule} from "../../@types/schedule";
import {FC} from "react";
import Styles from "./schedule-indicator.module.scss";

type Props = {
  schedules: TTimeSchedule[];
  schedule: TTimeSchedule;
}

const CalendarTimelineScheduleIndicator:FC<Props> = ({schedule,schedules}) => {
  return <div key={schedule.url} className={Styles.wrapper} style={calcStyle(schedules,schedule)}>
    {schedule.name}

    <div className={Styles.metadata}>
      <a target={"_blank"} href={schedule.url}>リンク</a>
    </div>
  </div>
}

export {CalendarTimelineScheduleIndicator}