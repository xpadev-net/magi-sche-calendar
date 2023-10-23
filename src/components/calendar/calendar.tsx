import {FC} from "react";
import {DailyCalendar} from "./daily";
import {WeeklyCalendar} from "./weekly";
import {MonthlyCalendar} from "./monthly";
import {CalendarProps} from "./clendar";

type Props = {
  type: "daily"|"weekly"|"monthly"
} & CalendarProps

const Calendar:FC<Props> = ({type,...props}) => {
  if (type === "daily"){
    return <DailyCalendar {...props}/>
  }
  if (type === "weekly"){
    return <WeeklyCalendar {...props}/>
  }
  return <MonthlyCalendar {...props}/>
}

export {Calendar}