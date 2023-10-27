import {FC, useState} from "react";
import {CalendarTimelineIndicator} from "./indicator.tsx";
import Styles from "./wrapper.module.scss"
import {CalendarTimelineWrapper} from "./container.tsx";
import {TSchedule} from "../../@types/schedule";
import {Dayjs} from "dayjs";
import {TSelectionRange} from "../../@types/selection";
import {SelectingDateContext} from "./context.tsx";

type Props = {
  count: number;
  startDate: Dayjs,
  schedules?: TSchedule[];
  dispatchOnChange: (pos1:Dayjs,pos2:Dayjs)=>void;
}

const CalendarWrapper:FC<Props> = ({count, startDate, schedules,dispatchOnChange}) => {
  const [selectingDate,setSelectingDate] = useState<Partial<TSelectionRange>|undefined>(undefined);

  return <SelectingDateContext.Provider value={{selectingDate,setSelectingDate,dispatchOnChange}}>
      <div className={Styles.wrapper}>
      <div className={Styles.container}>
        <CalendarTimelineIndicator/>
        {[...Array(count)].map((_,index)=>{
          return <CalendarTimelineWrapper key={index} date={startDate.add(index,"day")} schedules={schedules}/>
        })}
      </div>
    </div>
  </SelectingDateContext.Provider>
}

export {CalendarWrapper};