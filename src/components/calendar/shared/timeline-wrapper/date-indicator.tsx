import {Dayjs} from "dayjs";
import {FC} from "react";
import Styles from "./date-indicator.module.scss";
import {DayOfWeekName} from "../static/week.ts";

type Props = {
  count: number;
  startDate: Dayjs,
}

const CalendarDateIndicator:FC<Props> = ({count,startDate}) => {
  return <div className={Styles.wrapper}>
    <div className={Styles.spacer}/>
    {[...Array(count)].map((_,i)=>{
      const day = startDate.add(i,"day");
      return <div className={Styles.item}>
        {day.get("date")} ({DayOfWeekName[day.get("day")]})
      </div>
    })}
  </div>
}

export {CalendarDateIndicator}