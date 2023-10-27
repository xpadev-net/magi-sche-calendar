import {FC, useRef, MouseEvent, useContext} from "react";
import Styles from "./container.module.scss";
import {timelineRange} from "./const.ts";
import {TSchedule} from "../../@types/schedule";
import dayjs, {Dayjs} from "dayjs";
import {filterSchedules} from "../../utils/schedule.ts";
import {DayOfWeekName} from "../static/week.ts";
import {CalendarTimelineCurrentTimeIndicator} from "./current-time-indicator.tsx";
import {CalendarTimelineScheduleIndicator} from "./schedule-indicator.tsx";
import {SelectingDateContext} from "./context.tsx";

type Props = {
  schedules?: TSchedule[];
  date: Dayjs;
}

const CalendarTimelineWrapper:FC<Props> = ({date,schedules}) => {
  const day = date.get("day");
  return <>
    <div className={`${Styles.wrapper} ${(day === 0||day===6)&&Styles.weekend}`}>
      <div className={Styles.date}>
        {date.get("date")} ({DayOfWeekName[day]})
      </div>
      <CalendarTimelineContainer date={date} schedules={schedules}/>
    </div>
  </>
}

const CalendarTimelineContainer:FC<Props> = ({date,schedules}) => {
  const timeSchedules = schedules &&filterSchedules(date,schedules).timeSchedule;
  const isSame = date.isSame(dayjs(),"day");
  const ref = useRef<HTMLDivElement>(null);
  const context = useContext(SelectingDateContext);

  const getDate = (e:MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if(!rect) return;
    const x = (e.clientY - rect.top) / rect.height;
    const hour = Math.floor(x * 24);
    const minute = Math.floor((x * 24 - hour) * 60);
    return date.set("hour",hour).set("minute",minute).set("second", 0).set("millisecond", 0);
  }

  const onMouseDown = (e:MouseEvent<HTMLDivElement>) => {
    const pos1 = getDate(e);
    context?.setSelectingDate((pv)=>({...pv,pos1}));
  }

  const onMouseMove = (e:MouseEvent<HTMLDivElement>) => {
    if (!context?.selectingDate?.pos1) return;
    const pos2 = getDate(e);
    context?.setSelectingDate((pv)=>({...pv,pos2}));
  }

  const onMouseUp = (e:MouseEvent<HTMLDivElement>) => {
    if (!context?.selectingDate?.pos1) return;
    const pos2 = getDate(e);
    if (!pos2) return;
    context?.setSelectingDate({});
    context?.dispatchOnChange(context.selectingDate.pos1,pos2);
  }

  return <div className={Styles.container} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove} ref={ref}>
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
}

export {CalendarTimelineWrapper}